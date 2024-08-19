import React from 'react'
import {
    Typography,
    Input,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { useState, useMemo } from "react";
import { useCountries } from "use-react-countries";
import { PhoneNumberSelect } from "./countrySelector";

function MultipleTransferHandler({ phoneNumbers }) {
    const { countries } = useCountries();
    const [selectedCountry, setSelectedCountry] = useState(countries[0].name);
    const sortedCountries = useMemo(
        () => countries.slice().sort((a, b) => a.name.localeCompare(b.name)),
        [countries]
    );

    const currentCountry = sortedCountries.find(
        (country) => country.name === selectedCountry
    );

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
                    <PhoneNumberSelect phoneNumbers={phoneNumbers} />
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
                    className="bg-[#009a88] !overflow-visible"
                >
                    Transfer
                </Button>

            </div>
        </div>
    )
}

export default MultipleTransferHandler