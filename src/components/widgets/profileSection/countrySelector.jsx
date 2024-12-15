import React, { useEffect } from "react";
import { useCountries } from "use-react-countries";
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";

export function PhoneNumberSelect({ phoneNumbers, onSelectNumber }) {
  const { countries } = useCountries();
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const getCountryInfo = (countryCode) => {
    return countries.find((country) => country.countryCallingCode === countryCode) || {};
  };

  const selectedNumber = phoneNumbers[selectedIndex < 0 ? 0 : selectedIndex];
  const selectedCountryInfo = getCountryInfo(selectedNumber.countryCode);

  useEffect(() => {
    if (phoneNumbers.length > 0 && onSelectNumber && selectedIndex === -1) {
      handleSelectNumber(0)
    }
  }, [phoneNumbers, onSelectNumber, selectedIndex]);

  const handleSelectNumber = (index) => {
    setSelectedIndex(index);
    if (onSelectNumber) {
      onSelectNumber(phoneNumbers[index]);
    }
  };

  return (
    <Menu placement="bottom-start">
      <MenuHandler>
        <Button
          ripple={false}
          variant="outlined"
          color="blue-gray"
          className="flex items-center gap-2 rounded-md border border-blue-gray-200 pl-3 pr-3 w-full justify-start h-[40px]"
        >
          {selectedCountryInfo.flags ? (
            <img
              src={selectedCountryInfo.flags.svg}
              alt={selectedCountryInfo.name}
              className="h-5 w-5 rounded-full object-cover"
            />
          ) : null}
          <span className="flex items-center gap-2 text-sm text-blue-gray-800">
            {selectedNumber.countryCode} {selectedNumber.number}
          </span>
        </Button>
      </MenuHandler>
      <MenuList className="max-h-[20rem] max-w-[18rem] overflow-auto">
        {phoneNumbers.map(({ countryCode, number }, index) => {
          const countryInfo = getCountryInfo(countryCode);
          return (
            <MenuItem
              key={`${countryCode}-${number}`}
              className="flex items-center gap-2 border-none"
              onClick={() => handleSelectNumber(index)}
            >
              {countryInfo.flags ? (
                <img
                  src={countryInfo.flags.svg}
                  alt={countryInfo.name}
                  className="h-5 w-5 rounded-full object-cover"
                />
              ) : null}
              {countryCode} - {number}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
