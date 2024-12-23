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
import { useCountries } from "use-react-countries";

function TransferPlan() {
    const { countries } = useCountries();
    const [controller, dispatch] = primeSenderController();
    const [selectedCountry, setSelectedCountry] = useState(countries[0]?.name || "");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedUser, setSelectedUser] = useState({})
    const [selectedOldNumber, setSelectedOldNumber] = useState("")
    const [info, setInfo] = useState("");
    const [data, setData] = useState(controller.credentials.data[controller.profile]);
    const [userLocation, setUserLocation] = useState({})
    const [formattedPhoneNumbers, setFormattedPhoneNumbers] = useState(null);

    const sortedCountries = useMemo(
        () => countries.slice().sort((a, b) => a.name.localeCompare(b.name)).filter(a => a.countryCallingCode),
        [countries]
    );

    const currentCountry = sortedCountries.find(
        (country) => country.name === selectedCountry
    );

    const getUserLocation = () => {
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then((data) => {
                setUserLocation(data);
                setSelectedCountry(data.country_name);
            })
            .catch(err => {
                console.error(err)
            });
    }

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

                }
                else {
                    throw new Error(`Unexpected status code: ${data.statusCode}`);
                }
            })
            .catch((error) => {
                console.error(error);
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

    const get_days_diff = (date1, date2) => {
        date1 = convert_date(date1);
        date2 = convert_date(date2);

        if (!date1 || !date2)
            return NaN;

        let days_diff = Math.floor((date1.getTime() - date2.getTime()) / (1000 * 3600 * 24))
        return days_diff;
    }

    /////// Multiple Accounts Function ///////

    const formatPhoneNumbers = (phoneNumbers) => {
        const formatted = phoneNumbers.map(phoneNumber => {
            let number;
            number = phoneNumber.startsWith(currentCountry.countryCallingCode.split("+")[1]) ? phoneNumber.slice(currentCountry.countryCallingCode.length - 1) : phoneNumber;
            return { countryCode: `${currentCountry.countryCallingCode}`, number: number };
        });

        setFormattedPhoneNumbers(formatted);
    };

    const getPhoneNumbers = () => {
        const data = controller.credentials.data;
        const phoneNumbers = data.filter(user => !user.phone || (user.parent_email && user.parent_email !== "" && user.parent_email !== "NULL")).map((item) => (item.phone));
        formatPhoneNumbers(phoneNumbers)
        fetchUserInfo(phoneNumbers[0])
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
                    setSelectedUser(res.data.userData)
                    getPhoneNumbers()
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
        if (Object.keys(userLocation).length === 0) {
            getUserLocation();
        }
        isMultipleAccountAdmin() ? getPhoneNumbers() : ""
    }, [userLocation]);

    useEffect(() => {
        infoShowCase()
    }, [selectedUser])

    return (
        <div className="mt-4 mb-4 px-4 flex-col flex justify-start ">
            <Typography variant="h5" color="blue-gray">
                Transfer your Premium plan to another number
            </Typography>

            {isMultipleAccountAdmin() ? (
                <>
                    <p className="mt-2 mb-2 font-light text-xs px-1">
                        {info}
                    </p>
                    <div className="mb-4 mt-2 px-1 flex items-center w-max">
                        <span className="ml-3 mr-3 text-lg font-semibold">From</span>
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

                        <span className="ml-3 mr-3 text-lg font-semibold">To</span>


                        <div className="relative flex w-full max-w-[17rem] mr-3">
                            <Menu placement="bottom-start">
                                <MenuHandler>
                                    <Button
                                        ripple={false}
                                        variant="text"
                                        color="blue-gray"
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
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
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
                            disabled={!is_transfer_allowed() ? true : false}
                            className="bg-[#009a88] !overflow-visible"
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
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
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
