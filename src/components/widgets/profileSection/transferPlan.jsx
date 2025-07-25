import React, { useState, useMemo, useEffect } from 'react';
import {
    Typography,
    Input,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { primeSenderController, replaceDataObject } from "../../context";
import { toast } from 'react-toastify';
import { PhoneNumberSelect } from "./countrySelector";
import ReactGA from "react-ga4";
import { useCountries } from "use-react-countries";

function TransferPlan() {
    const { countries } = useCountries();
    const [controller, dispatch] = primeSenderController();
    const [selectedCountry, setSelectedCountry] = useState(controller.location?.country_name || "India");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedUser, setSelectedUser] = useState({})
    const [selectedOldNumber, setSelectedOldNumber] = useState("")
    const [info, setInfo] = useState("");
    const [data, setData] = useState(controller.credentials.data[controller.profile]);
    const [formattedPhoneNumbers, setFormattedPhoneNumbers] = useState(null);
    const userLocation = controller.location;

    const sortedCountries = useMemo(
        () => countries.slice().sort((a, b) => a.name.localeCompare(b.name)).filter(a => a.countryCallingCode),
        [countries]
    );

    const currentCountry = sortedCountries.find(
        (country) => country.name === selectedCountry
    );

    const isPremiumUser = () => {
        return (data.plan_type === "Advance" || data.plan_type === "Basic")
    }

    const isMultipleAccountAdmin = () => {
        return (data.parent_email && data.email === data.parent_email)
    }

    const removeCountryCode = (phone, countryCode) => {
        const normalizedCountryCode = countryCode.replace("+", "");
        if (phone.startsWith(normalizedCountryCode)) {
            return phone.slice(normalizedCountryCode.length);
        }
        return phone;
    }

    const addTransferLogInSheet = async (old_phone, new_phone, user) => {
        try {
            // Log the transfer details in Google Sheet / SheetDB
            let sheet_db_api = import.meta.env.VITE_PROD_TRANSFER_LOGS_SHEET_DB_API;
            let today_str = convert_date_str(new Date());
            let transfer_log = {
                old_phone: old_phone,
                new_phone: new_phone,
                plan_type: user.plan_type,
                name: user?.name || "",
                email: user?.email || "NULL",
                parent_email: user?.parent_email || "NULL",
                subscribed_date: user.subscribed_date,
                transfer_date: today_str,
                is_stripe_updated: "NO",
            }

            const response = await fetch(sheet_db_api, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify([{
                    source: 'website',
                    ...transfer_log
                },
                ]),
            });

            await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    const sendReq = (newNumber, countryCode) => {
        let transferUrl = import.meta.env.VITE_PROD_TRANSFER_API;
        let oldNumber = controller.credentials.data[0].phone;
        const headers = {
            "Content-Type": "application/json",
        };
        const body = JSON.stringify({
            authToken: controller.credentials.cred,
            oldNumber: oldNumber,
            newNumber: newNumber
        });
        fetch(transferUrl, {
            method: "POST",
            headers: headers,
            body: body,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                let res = JSON.parse(data.body);
                if (data.statusCode === 200) {

                    ReactGA.event({
                        category: "Transfer Successfully",
                        action: "Transfer number successfully",
                        label: "transfer_successfully",
                    });

                    const localNumber = newNumber.startsWith(countryCode) ? newNumber.slice(countryCode.length) : newNumber;
                    replaceDataObject(dispatch, res.data.userData)
                    toast(
                        <div>
                            <strong>Account Transferred Successfully!</strong>
                            <p>Your old number <strong>+{oldNumber}</strong> is now transferred to <strong>+{newNumber}</strong>.</p>
                        </div>,
                        { theme: 'colored', type: 'success', autoClose: 4000 }
                    );
                    infoShowCase()
                    setPhoneNumber(localNumber)
                    addTransferLogInSheet(oldNumber, newNumber, res.data.userData);
                }
                else {
                    throw new Error(`Unexpected status code: ${data.statusCode}`);
                }
            })
            .catch((error) => {
                console.error(error);

                ReactGA.event({
                    category: "Transfer Unsuccessful",
                    action: "Transfer number unsuccessful",
                    label: error.error || "transfer_unsuccessful",
                });

                toast(
                    <div>
                        <strong>Transfer Failed</strong>
                        <p>There was an issue transferring your number. Please try again or contact support.</p>
                    </div>,
                    { theme: 'colored', type: 'error', autoClose: 5000 }
                );
            });
    };

    const handleTransfer = () => {

        ReactGA.event({
            category: "Button Click",
            action: "Transfer Button Clicked",
            label: "transfer_btn_clicked",
        });

        const countryCode = currentCountry.countryCallingCode.replace('+', '');
        const fullNumber = `${countryCode}${phoneNumber}`;
        if (confirm(`Are you sure you want to transfer your current plan from +${data.phone} to +${fullNumber}`)) {
            if (is_transfer_allowed() && phoneNumber !== "" && fullNumber !== data.phone) {
                setPhoneNumber("")
                sendReq(fullNumber, countryCode);
            }
            else {
                alert("Please re-check the mobile number you enter in the input box.")
            }
        }
    };

    const infoShowCase = () => {
        let { subscribed_date, is_account_transferred } = isMultipleAccountAdmin() ? selectedUser : data;
        let today = new Date();
        let days_since_purchased = get_days_diff(today, subscribed_date);
        if (is_account_transferred) {
            setInfo("You are no longer eligible for an account transfer, as transfers can only available for once and you have already used your one-time transfer.")
        }
        else if (days_since_purchased > import.meta.env.VITE_TRANSFER_ALLOWED_DAYS) {
            setInfo("You are no longer eligible for an account transfer as transfers can only be made within seven days of subscription.")
        }
        else {
            setInfo("Please enter the WhatsApp number to which you would like to transfer your current plan. Before proceeding, kindly double-check the number for accuracy. Please be aware that we are not responsible for any errors you may make during this process.")
        }
    }

    const is_transfer_allowed = () => {
        try {
            let { subscribed_date, is_account_transferred } = isMultipleAccountAdmin() ? selectedUser : data;
            let today = new Date();
            let days_since_purchased = get_days_diff(today, subscribed_date);

            if (!is_account_transferred && days_since_purchased <= import.meta.env.VITE_TRANSFER_ALLOWED_DAYS) {
                return true;
            }
            return false;
        } catch (error) {
            console.error("Error in is_transfer_allowed: ", error);
            return false;
        }
    }

    const convert_date = (date = null) => {
        if (!date)
            return null;
        return new Date(date);
    }
    
    function convert_date_str(date = null) {
        if (!date)
            return null;
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }

    const get_days_diff = (date1, date2) => {
        date1 = convert_date(date1);
        date2 = convert_date(date2);

        if (!date1 || !date2)
            return NaN;

        let days_diff = Math.floor((date1.getTime() - date2.getTime()) / (1000 * 3600 * 24))
        return days_diff;
    }

    /////// Multiple Accounts Function ///////

    const formatPhoneNumbers = () => {
        const data = controller.credentials.data;
    
        const rawNumbers = data
            .filter(user => !user.phone || (user.parent_email && user.parent_email !== "" && user.parent_email !== "NULL"))
            .map(item => item.phone)
            .filter(Boolean);
    
        const cleanedSet = new Set();
    
        const formatted = [];
    
        for (const phoneNumber of rawNumbers) {
            if (!phoneNumber) continue;
    
            const cc = currentCountry.countryCallingCode.replace("+", "");
            const normalized = phoneNumber.startsWith(cc) ? phoneNumber.slice(cc.length) : phoneNumber;
    
            if (!cleanedSet.has(normalized)) {
                cleanedSet.add(normalized);
                formatted.push({ countryCode: `+${cc}`, number: normalized });
            }
        }
    
        setFormattedPhoneNumbers(formatted);
    
        if (formatted.length > 0) {
            fetchUserInfo(formatted[0].number);
        }
    
        console.log("Unique formatted numbers:", formatted);
    };
    

    const sendReqForMultipleAcc = (newNumber) => {
        let transferUrl = import.meta.env.VITE_PROD_TRANSFER_API;
        const headers = {
            "Content-Type": "application/json",
        };
        const body = JSON.stringify({
            authToken: controller.credentials.cred,
            oldNumber: selectedOldNumber,
            newNumber: newNumber,
        });
        fetch(transferUrl, {
            method: "POST",
            headers: headers,
            body: body,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                let res = JSON.parse(data.body);
                if (data.statusCode === 200) {

                    ReactGA.event({
                        category: "Transfer Successfully",
                        action: "Transfer multiple account number successfully",
                        label: "transfer_multiple_acc_successfully",
                    });

                    setSelectedUser(res.data.userData)
                    formatPhoneNumbers()
                    toast(
                        <div>
                            <strong>Account Transferred Successfully!</strong>
                            <p>Your multiple account old number <strong>+{selectedOldNumber}</strong> is now transferred to <strong>+{newNumber}</strong>.</p>
                        </div>,
                        { theme: 'colored', type: 'success', autoClose: 4000 }
                    );
                }
                else {
                    throw new Error(`Unexpected status code: ${data.statusCode}`);
                }
            })
            .catch((error) => {
                console.error(error);

                ReactGA.event({
                    category: "Transfer Unsuccessful",
                    action: "Transfer multiple account number unsuccessful",
                    label: error.error || "transfer_multiple_acc_unsuccessful",
                });

                toast(
                    <div>
                        <strong>Transfer Failed</strong>
                        <p>There was an issue transferring your number. Please try again or contact support.</p>
                    </div>,
                    { theme: 'colored', type: 'error', autoClose: 5000 }
                );
            });
    };

    const fetchUserInfo = (number) => {
        if (number !== undefined) {
            const data = controller.credentials.data;
            const user = data.filter(user => user.phone === number)
            if (user[0] !== undefined) {
                setSelectedUser(user[0])
            }
        }
    }

    const handleSelectNumber = (phoneNumber) => {
        const countryCode = phoneNumber.countryCode.replace('+', '');
        const fullNumber = `${countryCode}${phoneNumber.number}`;
        setSelectedOldNumber(fullNumber)
        fetchUserInfo(fullNumber)
    };

    const handleMultipleAccTransfer = () => {

        ReactGA.event({
            category: "Button Click",
            action: "Transfer Button Clicked",
            label: "transfer_multiple_acc_btn_clicked",
        });

        const countryCode = currentCountry.countryCallingCode.replace('+', '');
        const fullNumber = `${countryCode}${phoneNumber}`;
        if (confirm(`Are you sure you want to transfer your current plan from +${selectedOldNumber} to +${fullNumber}`)) {
            if (is_transfer_allowed() && phoneNumber !== "" && selectedOldNumber !== "") {
                setPhoneNumber("")
                sendReqForMultipleAcc(fullNumber);
            }
            else {
                alert("Please re-check the mobile number you enter in the input box.")
            }
        }
    };

    useEffect(() => {
        isMultipleAccountAdmin() ? formatPhoneNumbers() : ""
    }, []);

    useEffect(() => {
        infoShowCase()
    }, [selectedUser])

    return (
        <div className="mt-4 mb-4 px-4 flex-col flex justify-start ">
            <Typography variant="h5" color="blue-gray" className='max-xs:text-3xl'>
                Transfer your Premium plan to another number
            </Typography>

            {isMultipleAccountAdmin() ? (
                <>
                    <p className="mt-2 mb-2 font-light text-xs px-1 max-xs:text-base">
                        {info}
                    </p>
                    <div className="mb-4 mt-2 px-1 flex items-center w-max max-xs:flex-col max-xs:items-start">
                        <span className="ml-3 mr-3 text-lg font-semibold max-xs:mx-0 max-xs:my-3 max-xs:font-bold">From</span>
                        <div className="flex justify-center">
                            {formattedPhoneNumbers && formattedPhoneNumbers.length > 0 ? (
                                <PhoneNumberSelect
                                    phoneNumbers={formattedPhoneNumbers}
                                    onSelectNumber={handleSelectNumber}
                                />
                            ) : (
                                <p>Loading phone numbers...</p>
                            )}
                        </div>

                        <span className="ml-3 mr-3 text-lg font-semibold max-xs:mx-0 max-xs:my-3 max-xs:font-bold">To</span>


                        <div className="relative flex w-full max-w-[17rem] mr-3 max-xs:mr-0">
                            <Menu placement="bottom-start">
                                <MenuHandler>
                                    <Button
                                        ripple={false}
                                        disabled={true}
                                        variant="text"
                                        color="blue-gray"
                                        className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3 max-xs:h-[50px] max-xs:py-3 max-xs:px-[10px] max-xs:w-[82px]"
                                    >
                                        <img
                                            src={currentCountry.flags.svg}
                                            alt={currentCountry.name}
                                            className="h-4 w-4 rounded-full object-cover"
                                        />
                                        {currentCountry.countryCallingCode}
                                    </Button>
                                </MenuHandler>
                                <MenuList className="max-h-[20rem] max-w-[18rem]">
                                    {sortedCountries.map(({ name, flags, countryCallingCode }) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            className="flex items-center gap-2 border-none"
                                            onClick={() => setSelectedCountry(name)}
                                        >
                                            <img
                                                src={flags.svg}
                                                alt={name}
                                                className="h-5 w-5 rounded-full object-cover"
                                            />
                                            {name} <span className="ml-auto">{countryCallingCode}</span>
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </Menu>
                            <Input
                                type="tel"
                                placeholder="Mobile Number"
                                inputMode="numeric"
                                value={phoneNumber}
                                 onChange={(e) => {
                                    const onlyNum = e.target.value.replace(/\D/g, "");
                                    setPhoneNumber(onlyNum);
                                }}
                                className="rounded-l-none border border-solid border-blue-gray-200 focus:border-gray-900 focus:!border-t-gray-900 max-xs:h-max max-xs:px-[10px] max-xs:py-3 max-xs:text-base"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                            />
                        </div>

                        <Button
                            variant="filled"
                            disabled={!is_transfer_allowed() ? true : false}
                            className="bg-[#009a88] !overflow-visible max-xs:my-4 max-xs:self-end"
                            onClick={handleMultipleAccTransfer}
                        >
                            {selectedUser?.plan_type ? "Transfer" : "Loading..."}
                        </Button>

                    </div>
                </>
            ) : isPremiumUser() && !isMultipleAccountAdmin() ? (
                <>
                    <p className="mt-2 mb-2 font-light text-xs px-1">
                        {info}
                    </p>

                    <div className="mb-4 mt-2 px-1 flex items-center w-max">
                        <div className="relative flex w-full mr-3 items-center">
                            <span className="ml-3 mr-3 text-lg font-semibold">From</span>
                            <Menu placement="bottom-start">
                                <MenuHandler>
                                    <Button
                                        ripple={false}
                                        variant="text"
                                        color="blue-gray"
                                        disabled
                                        className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3 cursor-not-allowed"
                                    >
                                        <img
                                            src={currentCountry.flags.svg}
                                            alt={currentCountry.name}
                                            className="h-4 w-4 rounded-full object-cover"
                                        />
                                        {currentCountry.countryCallingCode}
                                    </Button>
                                </MenuHandler>
                                <MenuList className="max-h-[20rem] max-w-[18rem] pointer-events-none">
                                    {sortedCountries.map(({ name, flags, countryCallingCode }) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            className="flex items-center gap-2 border-none cursor-not-allowed"
                                        >
                                            <img
                                                src={flags.svg}
                                                alt={name}
                                                className="h-5 w-5 rounded-full object-cover"
                                            />
                                            {name} <span className="ml-auto">{countryCallingCode}</span>
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </Menu>
                            <Input
                                type="tel"
                                placeholder="Mobile Number"
                                value={removeCountryCode(data.phone, currentCountry.countryCallingCode)}
                                readOnly
                                className="rounded-l-none border border-solid border-blue-gray-200 bg-gray-100 !border-t-blue-gray-200 cursor-not-allowed focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                            />
                            <span className="ml-3 mr-3 text-lg font-semibold">To</span>
                            <Menu placement="bottom-start">
                                <MenuHandler>
                                    <Button
                                        ripple={false}
                                        variant="text"
                                        color="blue-gray"
                                        disabled
                                        className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                                    >
                                        <img
                                            src={currentCountry.flags.svg}
                                            alt={currentCountry.name}
                                            className="h-4 w-4 rounded-full object-cover"
                                        />
                                        {currentCountry.countryCallingCode}
                                    </Button>
                                </MenuHandler>
                                <MenuList className="max-h-[20rem] max-w-[18rem]">
                                    {sortedCountries.map(({ name, flags, countryCallingCode }) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            className="flex items-center gap-2 border-none"
                                            onClick={() => setSelectedCountry(name)}
                                        >
                                            <img
                                                src={flags.svg}
                                                alt={name}
                                                className="h-5 w-5 rounded-full object-cover"
                                            />
                                            {name} <span className="ml-auto">{countryCallingCode}</span>
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </Menu>
                            <Input
                                type="tel"
                                placeholder="Mobile Number"
                                inputMode="numeric"
                                value={phoneNumber}
                                 onChange={(e) => {
                                    const onlyNum = e.target.value.replace(/\D/g, "");
                                    setPhoneNumber(onlyNum);
                                }}
                                className="rounded-l-none border border-solid border-blue-gray-200 focus:border-gray-900 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                            />
                        </div>
                        <Button
                            variant="filled"
                            disabled={!is_transfer_allowed()}
                            className="bg-[#009a88] !overflow-visible"
                            onClick={handleTransfer}
                        >
                            Transfer
                        </Button>

                    </div>
                </>
            ) : (
                <p className="mt-2 mb-2 font-light text-xs px-1">
                    {!isPremiumUser() ? "You're not on a Premium plan, so the transfer option isn't available for your account." : "Your account is part of a multi-account plan managed by an admin. If you wish to transfer your current plan to a different WhatsApp number, please contact your admin for assistance."}
                </p>
            )}
        </div>
    );
}

export default TransferPlan;
