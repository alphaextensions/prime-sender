import React, { useEffect, useState, useMemo } from 'react'
import {
    Typography,
    Input,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import { PhoneNumberSelect } from "./countrySelector";
import { primeSenderController, replaceDataObject } from "../../context";

function MultipleTransferHandler() {
    const [controller, dispatch] = primeSenderController();
    const { countries } = useCountries();
    const [selectedCountry, setSelectedCountry] = useState(countries[0].name);
    const [selectedOldNumber, setSelectedOldNumber] = useState("")
    const [attempts, setAttempts] = useState(controller.credentials.data[controller.profile].transfer_attempts);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [formattedPhoneNumbers, setFormattedPhoneNumbers] = useState(null);

    const getCountryByPhoneCode = (phoneCode) => {
        return countries.find(country => country.countryCallingCode === `+${phoneCode}`);
    };

    const formatPhoneNumbers = (phoneNumbers) => {
        const filteredPhoneNumbers = phoneNumbers.filter(phoneNumber => phoneNumber !== controller.credentials.data[controller.profile].phone);

        const formatted = filteredPhoneNumbers.map(phoneNumber => {
            let countryCode, number;
            for (let i = 1; i <= 3; i++) {
                countryCode = phoneNumber.slice(0, i);
                const country = getCountryByPhoneCode(countryCode);
                if (country) {
                    number = phoneNumber.slice(i);
                    return { countryCode: `+${countryCode}`, number: number };
                }
            }
            return { countryCode: null, number: phoneNumber };
        });

        setFormattedPhoneNumbers(formatted);
    };

    const sortedCountries = useMemo(
        () => countries.slice().sort((a, b) => a.name.localeCompare(b.name)),
        [countries]
    );

    const currentCountry = sortedCountries.find(
        (country) => country.name === selectedCountry
    );

    const getPhoneNumbers = () => {
        let url = 'https://410yao624j.execute-api.eu-north-1.amazonaws.com/dev';
        const headers = {
            "Content-Type": "application/json",
        };
        const body = JSON.stringify({
            email: controller.credentials.data[controller.profile].email,
            operation: "get-completed-transaction"
        });

        fetch(url, {
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
                    formatPhoneNumbers(res.data.numbers)
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const sendReq = (newNumber) => {
        let transferUrl = 'https://nbxe0yejq7.execute-api.eu-north-1.amazonaws.com/dev';
        const headers = {
            "Content-Type": "application/json",
        };
        const body = JSON.stringify({
            authToken: controller.credentials.cred,
            oldNumber: selectedOldNumber,
            newNumber: newNumber,
            adminNumber: controller.credentials.data[controller.profile].phone,
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
                    replaceDataObject(dispatch, res.data.adminData)
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleSelectNumber = (phoneNumber) => {
        const countryCode = phoneNumber.countryCode.replace('+', '');
        const fullNumber = `${countryCode}${phoneNumber.number}`;
        setSelectedOldNumber(fullNumber)
    };

    const handleTransfer = () => {
        const countryCode = currentCountry.countryCallingCode.replace('+', '');
        const fullNumber = `${countryCode}${phoneNumber}`;
        setPhoneNumber("")
        setSelectedCountry(countries[0].name)
        if (attempts > 0 && phoneNumber !== "" && selectedOldNumber !== "") {
            sendReq(fullNumber);
        }
    };

    useEffect(() => {
        getPhoneNumbers();
    }, [controller.credentials.data, controller.profile]);

    return (
        <div className="mt-8 mb-4 px-4 flex-col flex justify-start ">
            <Typography variant="h5" color="blue-gray">
                Manage Other Accounts
            </Typography>
            <p className="mt-2 mb-4 font-light text-xs px-1">
                Please select the WhatsApp number from which you wish to transfer the plan, and enter the target number in the input field below. Before proceeding, kindly double-check the number for accuracy, as we are not responsible for any errors made during this process.
            </p>
            <div className="mb-4 mt-2 px-1 flex items-center w-max">
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
        </div>
    )
}

export default MultipleTransferHandler