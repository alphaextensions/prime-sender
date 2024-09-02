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

function TransferPlan({ isAuthor }) {
    const { countries } = useCountries();
    const [controller, dispatch] = primeSenderController();
    const [selectedCountry, setSelectedCountry] = useState(countries[0].name);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [attempts, setAttempts] = useState(controller.credentials.data[controller.profile].transfer_attempts);
    const [warning, setWarning] = useState(null);

    const sortedCountries = useMemo(
        () => countries.slice().sort((a, b) => a.name.localeCompare(b.name)),
        [countries]
    );

    const currentCountry = sortedCountries.find(
        (country) => country.name === selectedCountry
    );

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
        let transferUrl = 'https://nbxe0yejq7.execute-api.eu-north-1.amazonaws.com/dev';
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
        if (attempts > 0 && fullNumber !== "" && phoneNumber !== "") {
            sendReq(fullNumber);
        }
    };

    useEffect(() => {
        setAttempts(controller.credentials.data[controller.profile].transfer_attempts);
        handleWarning();
    }, [controller.credentials.data, controller.profile]);

    return (
        <div className="mt-4 mb-4 px-4 flex-col flex justify-start ">
            <Typography variant="h5" color="blue-gray">
                Transfer a Plan
            </Typography>

            {isAuthor ? (
                <>
                    <p className="mt-2 mb-2 font-light text-xs px-1">
                        Please enter the WhatsApp number to which you would like to transfer your current plan. Before proceeding, kindly double-check the number for accuracy. Please be aware that we are not responsible for any errors you may make during this process.
                    </p>
                    <p className="mb-4 font-semibold text-xs px-1">
                        Please note: You are limited to three requests per month for transferring your plan.
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
                            disabled={attempts === 0 ? true : false}
                            className="bg-[#009a88] !overflow-visible"
                            onClick={handleTransfer}
                        >
                            Transfer
                        </Button>

                    </div>
                    <p className="mb-4 font-semibold text-red-400 text-xs px-1">
                        {warning}
                    </p>
                </>
            ) : (
                <p className="mt-2 mb-2 font-light text-xs px-1">
                    Your account is part of a multi-account plan managed by an admin. If you wish to transfer your current plan to a different WhatsApp number, please contact your admin for assistance.
                </p>
            )}
        </div>
    );
}

export default TransferPlan;
