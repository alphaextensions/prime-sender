import React from "react";
import { useCountries } from "use-react-countries";
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";

export function PhoneNumberSelect({ phoneNumbers }) {
  const { countries } = useCountries();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const getCountryInfo = (countryCode) => {
    return countries.find((country) => country.countryCallingCode === countryCode) || {};
  };

  const selectedNumber = phoneNumbers[selectedIndex];
  const selectedCountryInfo = getCountryInfo(selectedNumber.countryCode);

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
              onClick={() => setSelectedIndex(index)}
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

