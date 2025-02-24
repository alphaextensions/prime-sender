import { Typography, Button } from '@material-tailwind/react'
import { useCountries } from "use-react-countries";
import { primeSenderController } from "../../context";
import { PhoneNumberSelect } from "../profileSection/countrySelector";
import React, { useState, useEffect, useMemo } from 'react'

function UnSubscribe() {

    const [controller, dispatch] = primeSenderController();
    const { countries } = useCountries();
    const data = controller.credentials.data[controller.profile]
    const [formattedPhoneNumbers, setFormattedPhoneNumbers] = useState(null);
    const [selectedNumber, setSelectedNumber] = useState("")
    const [selectedCountry, setSelectedCountry] = useState(countries[0]?.name || "");
    const [userLocation, setUserLocation] = useState({})

    const isPremiumUser = () => {
        return (data.plan_type === "Advance" || data.plan_type === "Basic")
    }

    const isMultipleAccountAdmin = () => {
        return (data.parent_email && data.email === data.parent_email)
    }

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

    const handleUnSubscribe = () => {
        if (confirm(`Are you sure you want to unsubscribe the number +${isMultipleAccountAdmin() ? selectedNumber : data.phone} from the premium account?`)) {
            isMultipleAccountAdmin() ? sendReq(selectedNumber, data.parent_email) : sendReq(data.phone, data.email)
        }
    }

    const sendReq = (number, email) => {
        let transferUrl = import.meta.env.VITE_PROD_TRANSFER_API;
        const headers = {
            "Content-Type": "application/json",
        };
        const body = JSON.stringify({
            authToken: controller.credentials.cred,
            phoneNumber: number,
            email: email
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
                // let res = JSON.parse(data.body);
                if (data.statusCode === 200) {
                    toast(
                        <div>
                            <strong>Unsubscribe Successfully!</strong>
                            <p>Your premium account<strong>+{number}</strong> is now unsubscribe from our premium plans.</p>
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
                        <strong>Unsubscribe Failed</strong>
                        <p>There was an issue in unsubscribing you. Please try again or contact support.</p>
                    </div>,
                    { theme: 'colored', type: 'error', autoClose: 5000 }
                );
            });
    };

    //////// Multiple accounts scenario //////

    const formatPhoneNumbers = (phoneNumbers) => {
        const formatted = phoneNumbers
            .map((phoneNumber) => {
                let number = phoneNumber.startsWith(currentCountry.countryCallingCode.split("+")[1])
                    ? phoneNumber.slice(currentCountry.countryCallingCode.length - 1)
                    : phoneNumber;

                return { countryCode: `${currentCountry.countryCallingCode}`, number: number };
            })
            .filter((item, index, self) =>
                self.findIndex(i => i.number === item.number) === index
            );

        setFormattedPhoneNumbers(formatted);
    };

    const getPhoneNumbers = () => {
        const data = controller.credentials.data;
        const phoneNumbers = data.filter(user => !user.phone || (user.parent_email && user.parent_email !== "" && user.parent_email !== "NULL")).map((item) => (item.phone));
        formatPhoneNumbers(phoneNumbers)
    };

    const handleSelectNumber = (phoneNumber) => {
        const countryCode = phoneNumber.countryCode.replace('+', '');
        const number=phoneNumber.number.replace('254','');
        const fullNumber = `${countryCode}${number}`;
        setSelectedNumber(fullNumber)
    };

    useEffect(() => {
        if (Object.keys(userLocation).length === 0) {
            getUserLocation();
        }
        isMultipleAccountAdmin() ? getPhoneNumbers() : ""
    }, [userLocation]);

    return (
        <div className='mt-12 mb-4 px-4'>
            <Typography variant="h5" color="blue-gray">
                Unsubscribe your Premium plan
            </Typography>

            {isMultipleAccountAdmin() ? (
                <>
                    <p className="mt-2 mb-2 font-light text-xs px-1">
                        Please note that unsubscribing will revoke your access to our premium features. We encourage you to carefully consider this decision before proceeding
                    </p>
                    <div className='flex items-center ml-2 mt-4'>
                        <span className='mr-2'>I want to </span>
                        <Button onClick={handleUnSubscribe} className="bg-[#e71818] tracking-widest">
                            Unsubscribe
                        </Button>
                        <span className='mr-2 ml-2'>
                            this account :
                        </span>
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
                    </div>
                </>

            ) : isPremiumUser() && !isMultipleAccountAdmin() ? (
                <>
                    <p className="mt-2 mb-2 font-light text-xs px-1">
                        Please note that unsubscribing will revoke your access to our premium features. We encourage you to carefully consider this decision before proceeding
                    </p>
                    <Button onClick={handleUnSubscribe} className="bg-[#e71818] tracking-widest mt-4">
                        Unsubscribe
                    </Button>
                </>

            ) : (
                <p className="mt-2 mb-2 font-light text-xs px-1">
                    {!isPremiumUser() ? "You're not on a Premium plan, so the unsubscribe option isn't available for your account." : "Your account is part of a multi-account plan managed by an admin. If you wish to unsubscribe your current plan, please contact your admin for assistance."}
                </p>
            )}

        </div>
    )
}

export default UnSubscribe