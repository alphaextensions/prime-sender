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
import { useCountries } from "use-react-countries";

function TransferPlan() {
    const { countries } = useCountries();
    const [controller, dispatch] = primeSenderController();
    const [selectedCountry, setSelectedCountry] = useState(countries[0].name);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [data, setData] = useState(controller.credentials.data[controller.profile]);
    const [warning, setWarning] = useState(null);

    const sortedCountries = useMemo(
        () => countries.slice().sort((a, b) => a.name.localeCompare(b.name)),
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

    const handleWarning = () => {
        let war = null;
        if (attempts === 0) {
            war = "You've exhausted your transfer requests";
        } else if (attempts !== 3) {
            war = `You have ${attempts} requests remaining for this month.`;
        }
        setWarning(war);
    }

    const sendReq = (newNumber) => {
        let transferUrl = import.meta.env.VITE_PROD_TRANSFER_API;
        const headers = {
            "Content-Type": "application/json",
        };
        const body = JSON.stringify({
            authToken: controller.credentials.cred,
            oldNumber: controller.credentials.data[0].phone,
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
                    replaceDataObject(dispatch, res.data.userData)
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleTransfer = () => {
        const countryCode = currentCountry.countryCallingCode.replace('+', '');
        const fullNumber = `${countryCode}${phoneNumber}`;
        setPhoneNumber("")
        setSelectedCountry(countries[0].name)
        if (is_transfer_allowed() && fullNumber !== "" && phoneNumber !== "") {
            sendReq(fullNumber);
        }
    };

    const is_transfer_allowed = () => {
        try {
            let { purchased_date, is_account_transferred } = data;
            let today = new Date();
            let days_since_purchased = get_days_diff(today, purchased_date);

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

    // useEffect(() => {
    //     setAttempts(controller.credentials.data[controller.profile]);
    //     handleWarning();
    // }, [controller.credentials.data, controller.profile]);

    return (
        <div className="mt-4 mb-4 px-4 flex-col flex justify-start ">
            <Typography variant="h5" color="blue-gray">
                Transfer a Plan
            </Typography>

            {isPremiumUser() || isMultipleAccountAdmin() ? (
                <>
                    <p className="mt-2 mb-2 font-light text-xs px-1">
                        Please enter the WhatsApp number to which you would like to transfer your current plan. Before proceeding, kindly double-check the number for accuracy. Please be aware that we are not responsible for any errors you may make during this process.
                    </p>
                    <p className={is_transfer_allowed() ? "mb-4 font-semibold text-xs px-1" : "mb-4 font-semibold text-red-400 text-xs px-1"}>
                        {
                            is_transfer_allowed() ? "Please note: You are eligible for a plan transfer within 7 days of purchasing your Premium plan." : "Please note: You are no longer eligible for an account transfer, as transfers can only be made within 7 days of purchase or you have already used your one-time transfer."
                        }

                    </p>
                    <div className="mb-4 mt-2 px-1 flex items-center w-max">
                        <div className="relative flex w-full max-w-[20rem] mr-3">
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
                                className="rounded-l-none border border-solid border-blue-gray-200 focus:border-gray-900"
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
                    {/* <p className="mb-4 font-semibold text-red-400 text-xs px-1">
                        {warning}
                    </p> */}
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
