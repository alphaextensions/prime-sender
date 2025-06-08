export const countryCodesPresent = ["IN", "ID", "AE", "EG", "GB", "SA", "KW", "SG", "IL","BR"]
export const countryPresent = ["india", "indonesia", "uae", "egypt", "uk", "saudi_arabia", "kuwait", "singapore", "israel","brazil", "international" ];
export const countryCodeToName = {
	"IN": 'india',
	"ID": 'indonesia',
	"AE": 'uae',
	"EG": 'egypt',
	"GB": 'uk',
	"SA": 'saudi_arabia',
	"KW": 'kuwait',
	"SG": 'singapore',
	"IL": 'israel',
	"BR"  : 'brazil',
}

export const countryNameToCode = {
    'india': "IN",
    'indonesia': "ID",
    'uae': "AE",
    'egypt': "EG",
    'uk': "GB",
    'saudi_arabia': "SA",
    'kuwait': "KW",
    'singapore': "SG",
    'israel': "IL",
	'brazil': "BR"
}

export const countryCodeToCurrency = {
	"IN": "INR",
	"ID": "IDR",
	"AED": "AED",
	"EG": "EGP",
	"GB": "GBP",
	"SA": "SAR",
	"KW": "USD",
	"SG": "SGD",
	"IL": "ILS",
	"BR": "BRL",
}

export const countryCodeToDialCode = {
    "IN": "+91",
	"ID": "+62",
	"AED": "+971",
	"EG": "+20",
	"GB": "+44",
	"SA": "+966",
	"KW": "+965",
	"SG": "+65",
	"IL": "+972",
	"BR": "+55"
}

export const pricing_data = {
	"kuwait": {
		"monthly": {
			"basic_plan": {
				"final": "15.99",
				"discounted": "11.19",
				"original": "22.99"
			},
			"advance_plan": {
				"final": "18.99",
				"discounted": "13.29",
				"original": "26.99"
			}
		},
		"currency": "USD",
		"currency_symbol": "$",
		"annually": {
			"basic_plan": {
				"final": "159.99",
				"monthly_final": "13.33",
				"original": "",
				"monthly_original": "22.99"
			},
			"advance_plan": {
				"final": "189.99",
				"monthly_final": "15.83",
				"original": "",
				"monthly_original": "26.99"
			}
		},
		"biannually":{
			"basic_plan": {
				"final": "249.99",
				"monthly_final": "10.41",
				"original": "",
				"monthly_original": "22.99"
			},
			"advance_plan": {
				"final": "289.99",
				"monthly_final": "12.08",
				"original": "",
				"monthly_original": "26.99"
			}
		}
	},
	"singapore": {
		"monthly": {
			"basic_plan": {
				"final": "23.99",
				"discounted": "16.79",
				"original": "33.99"
			},
			"advance_plan": {
				"final": "27.99",
				"discounted": "19.59",
				"original": "39.99"
			}
		},
		"currency": "SGD ",
		"currency_symbol": "SGD ",
		"annually": {
			"basic_plan": {
				"final": "239.99",
				"monthly_final": "19.99",
				"original": "",
				"monthly_original": "33.99"
			},
			"advance_plan": {
				"final": "279.99",
				"monthly_final": "23.33",
				"original": "",
				"monthly_original": "39.99"
			}
		},
		"biannually":{
			"basic_plan": {
				"final": "369.99",
				"monthly_final": "15.41",
				"original": "",
				"monthly_original": "33.99"
			},
			"advance_plan": {
				"final": "429.99",
				"monthly_final": "17.91",
				"original": "",
				"monthly_original": "39.99"
			}
		}
	},
	"egypt": {
		"monthly": {
			"basic_plan": {
				"final": "439.99",
				"discounted": "307.99",
				"original": "628.99"
			},
			"advance_plan": {
				"final": "529.99",
				"discounted": "370.99",
				"original": "756.99"
			}
		},
		"currency": "EGP ",
		"currency_symbol": "EGP ",
		"annually": {
			"basic_plan": {
				"final": "4399.99",
				"monthly_final": "366.66",
				"original": "",
				"monthly_original": "628.99"
			},
			"advance_plan": {
				"final": "5299.99",
				"monthly_final": "441.66",
				"original": "",
				"monthly_original": "756.99"
			}
		},
		"biannually":{
			"basic_plan": {
				"final": "6699.99",
				"monthly_final": "279.16",
				"original": "",
				"monthly_original": "628.99"
			},
			"advance_plan": {
				"final": "7999.99",
				"monthly_final": "333.33",
				"original": "",
				"monthly_original": "756.99"
			}
		}
	},
	"israel": {
		"monthly": {
			"basic_plan": {
				"final": "62.99",
				"discounted": "44.09",
				"original": "89.99"
			},
			"advance_plan": {
				"final": "73.99",
				"discounted": "51.79",
				"original": "105.99"
			}
		},
		"currency": "ILS ",
		"currency_symbol": "ILS ",
		"annually": {
			"basic_plan": {
				"final": "629.99",
				"monthly_final": "52.5",
				"original": "",
				"monthly_original": "89.99"
			},
			"advance_plan": {
				"final": "739.99",
				"monthly_final": "61.6",
				"original": "",
				"monthly_original": "105.99"
			}
		},
		"biannually":{
			"basic_plan": {
				"final": "959.99",
				"monthly_final": "39.99",
				"original": "",
				"monthly_original": "89.99"
			},
			"advance_plan": {
				"final": "1119.99",
				"monthly_final": "46.66",
				"original": "",
				"monthly_original": "105.99"
			}
		}
	},
	"uk": {
		"monthly": {
			"basic_plan": {
				"final": "13.99",
				"discounted": "9.79",
				"original": "19.99"
			},
			"advance_plan": {
				"final": "16.99",
				"discounted": "11.89",
				"original": "23.99"
			}
		},
		"currency": "GBP ",
		"currency_symbol": "GBP ",
		"annually": {
			"basic_plan": {
				"final": "139.99",
				"monthly_final": "11.6",
				"original": "",
				"monthly_original": "19.99"
			},
			"advance_plan": {
				"final": "169.99",
				"monthly_final": "14.2",
				"original": "",
				"monthly_original": "23.99"
			}
		},
		"biannually":{
			"basic_plan": {
				"final": "219.99",
				"monthly_final": "9.16",
				"original": "",
				"monthly_original": "19.99"
			},
			"advance_plan": {
				"final": "259.99",
				"monthly_final": "10.83",
				"original": "",
				"monthly_original": "23.99"
			}
		}
	},
	"uae": {
		"monthly": {
			"basic_plan": {
				"final": "62.99",
				"discounted": "44.09",
				"original": "89.99"
			},
			"advance_plan": {
				"final": "73.99",
				"discounted": "51.79",
				"original": "105.99"
			}
		},
		"currency": "AED ",
		"currency_symbol": "AED ",
		"annually": {
			"basic_plan": {
				"final": "629.99",
				"monthly_final": "52.49",
				"original": "",
				"monthly_original": "89.99"
			},
			"advance_plan": {
				"final": "739.99",
				"monthly_final": "61.66",
				"original": "",
				"monthly_original": "105.99"
			}
		},
		"biannually":{
			"basic_plan": {
				"final": "999.99",
				"monthly_final": "41.66",
				"original": "",
				"monthly_original": "89.99"
			},
			"advance_plan": {
				"final": "1199.99",
				"monthly_final": "49.99",
				"original": "",
				"monthly_original": "105.99"
			}
		}
	},
	"saudi_arabia": {
		"monthly": {
			"basic_plan": {
				"final": "56.99",
				"discounted": "39.89",
				"original": "81.99"
			},
			"advance_plan": {
				"final": "75.99",
				"discounted": "53.19",
				"original": "108.99"
			}
		},
		"currency": "SAR ",
		"currency_symbol": "SAR ",
		"annually": {
			"basic_plan": {
				"final": "569.99",
				"monthly_final": "47.5",
				"original": "",
				"monthly_original": "81.99"
			},
			"advance_plan": {
				"final": "759.99",
				"monthly_final": "63.3",
				"original": "",
				"monthly_original": "108.99"
			}
		},
		"biannually": {
			"basic_plan": {
				"final": "899.99",
				"monthly_final": "37.49",
				"original": "",
				"monthly_original": "81.99"
			},
			"advance_plan": {
				"final": "1199.99",
				"monthly_final": "49.99",
				"original": "",
				"monthly_original": "108.99"
			}
		}
	},
	"international": {
		"monthly": {
			"basic_plan": {
				"final": "12.99",
				"discounted": "9.09",
				"original": "16.99"
			},
			"advance_plan": {
				"final": "15.99",
				"discounted": "11.19",
				"original": "20.99"
			}
		},
		"currency": "USD",
		"currency_symbol": "$",
		"annually": {
			"basic_plan": {
				"final": "129.99",
				"monthly_final": "10.8",
				"original": "169.99",
				"monthly_original": "16.99"
			},
			"advance_plan": {
				"final": "159.99",
				"monthly_final": "13.3",
				"original": "209.99",
				"monthly_original": "20.99"
			}
		},
	"biannually":{
			"basic_plan": {
				"final": "199.99",
				"monthly_final": "8.33",
				"original": "169.99",
				"monthly_original": "16.99"
			},
			"advance_plan": {
				"final": "239.99",
				"monthly_final": "9.99",
				"original": "209.99",
				"monthly_original": "20.99"
			}
		}
	},
	"india": {
		"monthly": {
			"basic_plan": {
				"final": "699",
				"discounted": "489",
				"original": "999"
			},
			"advance_plan": {
				"final": "849",
				"discounted": "594",
				"original": "1199"
			}
		},
		"currency": "INR",
		"currency_symbol": "₹",
		"annually": {
			"basic_plan": {
				"final": "6999",
				"monthly_final": "584",
				"original": "9999",
				"monthly_original": "999"
			},
			"advance_plan": {
				"final": "8499",
				"monthly_final": "709",
				"original": "11999",
				"monthly_original": "1199"
			}
		},
	"biannually":{
			"basic_plan": {
				"final": "9999",
				"monthly_final": "417",
				"original": "9999",
				"monthly_original": "999"
			},
			"advance_plan": {
				"final": "12799",
				"monthly_final": "533",
				"original": "11999",
				"monthly_original": "1199"
			}
		}
	},
	"brazil": {
		"monthly": {
			"basic_plan": {
				"final": "79.90",
				"discounted": "39.1",
				"original": "119"
			},
			"advance_plan": {
				"final": "99.90",
				"discounted": "49.1",
				"original": "149"
			}
		},
		"currency": "BRL",
		"currency_symbol": "R$",
		"annually": {
			"basic_plan": {
				"final": "799",
				"monthly_final": "67",
				"original": "1428",
				"monthly_original": "119"
			},
			"advance_plan": {
				"final": "999",
				"monthly_final": "84",
				"original": "1788",
				"monthly_original": "149"
			}
		},
		"biannually":{
			"basic_plan": {
				"final": "1199",
				"monthly_final": "50",
				"original": "1428",
				"monthly_original": "119"
			},
			"advance_plan": {
				"final": "1499",
				"monthly_final": "63",
				"original": "1788",
				"monthly_original": "149"
			}
		}
	},
	"indonesia": {
		"monthly": {
			"basic_plan": {
				"final": "79000",
				"discounted": "55300",
				"original": "109000"
			},
			"advance_plan": {
				"final": "99000",
				"discounted": "69300",
				"original": "139000"
			}
		},
		"currency": "IDR ",
		"currency_symbol": "IDR ",
		"annually": {
			"basic_plan": {
				"final": "790000",
				"monthly_final": "65850",
				"original": "1090000",
				"monthly_original": "109000"
			},
			"advance_plan": {
				"final": "990000",
				"monthly_final": "82500",
				"original": "1390000",
				"monthly_original": "139000"
			}
		},
		"biannually": {
			"basic_plan": {
				"final": "1185000",
				"monthly_final": "49375",
				"original": "1090000",
				"monthly_original": "109000"
			},
			"advance_plan": {
				"final": "1485000",
				"monthly_final": "61875",
				"original": "1390000",
				"monthly_original": "139000"
			}
		}
	}

};

export const pricing_links = {
	india: {
		monthly: {
			basic: '00g7sMawi30A3JucN2',
			advance: 'fZe7sMawi30Acg0bIZ'
		},
		annually: {
			basic: '9AQ14o47UdFe6VG7tq',
			advance: '14k9AUgUG9oY3Ju5lj'
		},
		biannually: {
			basic: '5kA7sMeMy0Ss7ZK156',
			advance: '7sIdRadIuat293O3do'
		}
	},
	international: {
		monthly: {
			basic: '4gwbJ25bYgRqa7S9AO',
			advance: 'fZeeVe1ZM30Aeo88wL'
		},
		annually: {
			basic: '7sI4gAcEqeJi3JudQW',
			advance: '6oEcN6cEqat2gwg6or'
		},
		biannually: {
			basic: '5kAfZidIu1Ww6VG6po',
			advance: 'aEU5kEcEq7gQ7ZKeW4'
		}
	},
	indonesia: {
		monthly: {
			basic: 'dR6dRa33Q7gQeo8eV2',
			advance: '28ocN6gUGcBa7ZKdQX'
		},
		annually: {
			basic: 'fZe28s8oaat2a7S8wJ',
			advance: '00g7sM7k6gRq3JufZ9'
		},
		biannually: {
			basic: '5kA00k1ZMgRqcg0bJJ',
			advance: '9AQeVebAm58I7ZKdS1'
		}
	},
	uae: {
		monthly: {
			basic: 'eVa28scEqeJi7ZKeVE',
			advance: '6oEeVe1ZMfNm7ZK8xf'
		},
		annually: {
			basic: '5kAaEY7k6dFe4NycNu',
			advance: '6oE3cwdIucBadk428P'
		},
		biannually: {
			basic: '00g28s5bY30AgwgeW2',
			advance: 'cN2dRa6g2cBa4Ny9BT'
		}
	},
	kuwait: {
		monthly: {
			basic: '7sIbJ27k68kU6VG4gP',
			advance: '6oE8wQ1ZM44Edk4eVw'
		},
		annually: {
			basic: 'aEU3cwawi8kU93O7t2',
			advance: '14k5kE9se30A93O14F'
		},
		biannually: {
			basic: 'fZe5kEawigRq7ZK29c',
			advance: 'cN2bJ2eMygRqbbW15i'
		}
	},
	egypt: {
		monthly: {
			basic: 'cN228s8oa8kUfsc4gW',
			advance: 'bIY00keMyfNm1Bm28N'
		},
		annually: {
			basic: '00g9AU7k6bx62Fq9Be',
			advance: '4gwcN6awi7gQ93O5kX'
		},
		biannually: {
			basic: '28o6oIawiat23Ju9BJ',
			advance: '8wM5kE5bYat293O29q'
		}
	},
	singapore: {
		monthly: {
			basic: 'eVa5kE6g230A4Ny28F',
			advance: '14kbJ233Qat2bbW28E'
		},
		annually: {
			basic: 'dR63cwdIu9oYcg014z',
			advance: 'fZeeVe8oa8kUeo828G'
		},
		biannually: {
			basic: 'aEUdRa47UgRq3Ju3df',
			advance: '7sI8wQ47U9oYa7S8xJ'
		}
	},
	israel: {
		monthly: {
			basic: '8wM7sMeMy6cMeo8eVQ',
			advance: '3cseVe6g27gQ7ZK00V'
		},
		annually: {
			basic: 'aEU9AUdIu0Ssfsc3d6',
			advance: 'aEUcN6cEqcBa3Ju5ld'
		},
		biannually: {
			basic: 'eVa3cw9se6cMbbWdRV',
			advance: '9AQ28sgUGbx63Ju7tH'
		}
	},
	uk: {
		monthly: {
			basic: "aEUcN65bYdFe4Ny4h8",
			advance: "aEUdRa5bY8kUdk47tj"
		},
		annually: {
			basic: "4gw4gA8oa44E5RC6pe",
			advance: "bIY5kEdIu9oY2FqaFt"
		},
		biannually: {
			basic: "cN2bJ2cEq8kUgwg6pu",
			advance: "5kAeVe33Q44E4Ny15k"
		}
	},
	saudi_arabia: {
		monthly: {
			basic: "aEUeVebAm58Ieo8151",
			advance: "14k6oIeMy0Sscg09Bn",
		},
		annually: {
			basic: "4gw5kE7k6dFe4Ny00M",
			advance: "6oEaEY5bY1Wwfsc28T"
		},
		biannually: {
			basic: "28o00kfQC1Wweo83dj",
			advance: "eVaeVe5bYat2eo8cO3"
		}
	},
	brazil: {
		monthly: {
			basic: "9B600l22Q3Wmebk6L01B61l",
			advance: "14A14p7naakK5EOd9o1B61k",
		},
		annually: {
			basic: "dRm7sNazmfF40ku8T81B61m",
			advance: "dRm14pfTGdwW7MW8T81B61n"
		},
		biannually: {
			basic: "8x2cN7bDq1Oe2sCeds1B61o",
			advance: "00w3cx36U50qgjsfhw1B61p"
		}
	}
};

export const countrySwitchObject1 = [
	{
		name: "India",
		countryCode: "in",
		currentCountryName: "india"
	},
	{
		name: "Indonesia",
		countryCode: "id",
		currentCountryName: "indonesia"
	},
	{
		name: "UAE",
		countryCode: "ae",
		currentCountryName: "uae"
	}, {
		name: "Egypt",
		countryCode: "eg",
		currentCountryName: "egypt"
	}, {
		name: "UK",
		countryCode: "gb",
		currentCountryName: "uk"
	}, {
		name: "Saudi Arabia",
		countryCode: "sa",
		currentCountryName: "saudi_arabia"
	}
]

export const countrySwitchObject2 = [
	{
		name: "Kuwait",
		countryCode: "kw",
		currentCountryName: "kuwait"
	}, {
		name: "Singapore",
		countryCode: "sg",
		currentCountryName: "singapore"
	}, {
		name: "Israel",
		countryCode: "il",
		currentCountryName: "israel"
	},
	{
		name: "Brazil",
		countryCode: "br",
		currentCountryName: "brazil"
	},
	{
		name: "International",
		countryCode: "in",
		currentCountryName: "international"
	},
]


export const pricing_popup_trial_features = ['Export Group Contacts', "Translate Conversation", "Quick Replies", "Customizable Time Gap", "Random Time Gap", 'Chat Support', "Batching", "Caption", "Save Message Template", "Detailed Delivery report", "Stop Campaign", "Group Message"];
export const pricing_popup_premium_features = ["Schedule", 'Business Chat Link', 'Meet/Zoom Support', "Multiple Attachments", "Pause Campaign", "Export Unsaved Contacts"]

export const notification_country_data = {
    brazil: {
        data: [
            { city: 'São Paulo', country: 'Brazil', country_code_name: 'brazil' },
            { city: 'Rio de Janeiro', country: 'Brazil', country_code_name: 'brazil' },
            { city: 'Curitiba', country: 'Brazil', country_code_name: 'brazil' },
            { city: 'Salvador', country: 'Brazil', country_code_name: 'brazil' },
            { city: 'Fortaleza', country: 'Brazil', country_code_name: 'brazil' },
            { city: 'Belo Horizonte', country: 'Brazil', country_code_name: 'brazil' },
            { city: 'Manaus', country: 'Brazil', country_code_name: 'brazil' },
            { city: 'Recife', country: 'Brazil', country_code_name: 'brazil' },
            { city: 'Porto Alegre', country: 'Brazil', country_code_name: 'brazil' },
            { city: 'Goiânia', country: 'Brazil', country_code_name: 'brazil' },
            { city: 'Campinas', country: 'Brazil', country_code_name: 'brazil' },
            { city: 'Florianópolis', country: 'Brazil', country_code_name: 'brazil' }
        ],
        size: 12
    },
    mexico: {
        data: [
            { city: 'Mexico City', country: 'Mexico', country_code_name: 'mexico' },
            { city: 'Monterrey', country: 'Mexico', country_code_name: 'mexico' },
            { city: 'Guadalajara', country: 'Mexico', country_code_name: 'mexico' },
            { city: 'Puebla', country: 'Mexico', country_code_name: 'mexico' },
            { city: 'Tijuana', country: 'Mexico', country_code_name: 'mexico' },
            { city: 'León', country: 'Mexico', country_code_name: 'mexico' },
            { city: 'Querétaro', country: 'Mexico', country_code_name: 'mexico' },
            { city: 'Mérida', country: 'Mexico', country_code_name: 'mexico' },
            { city: 'Cancún', country: 'Mexico', country_code_name: 'mexico' },
            { city: 'Toluca', country: 'Mexico', country_code_name: 'mexico' },
            { city: 'Aguascalientes', country: 'Mexico', country_code_name: 'mexico' },
            { city: 'Zapopan', country: 'Mexico', country_code_name: 'mexico' }
        ],
        size: 12
    },
    argentina: {
        data: [
            { city: 'Buenos Aires', country: 'Argentina', country_code_name: 'argentina' }
        ],
        size: 1
    },
    chile: {
        data: [
            { city: 'Santiago', country: 'Chile', country_code_name: 'chile' }
        ],
        size: 1
    },
    colombia: {
        data: [
            { city: 'Bogotá', country: 'Colombia', country_code_name: 'colombia' }
        ],
        size: 1
    },
    peru: {
        data: [
            { city: 'Lima', country: 'Peru', country_code_name: 'peru' }
        ],
        size: 1
    },
    ecuador: {
        data: [
            { city: 'Quito', country: 'Ecuador', country_code_name: 'ecuador' }
        ],
        size: 1
    },
    venezuela: {
        data: [
            { city: 'Caracas', country: 'Venezuela', country_code_name: 'venezuela' }
        ],
        size: 1
    },
    india: {
        data: [
            { city: 'Mumbai', country: 'India', country_code_name: 'india' },
            { city: 'Delhi', country: 'India', country_code_name: 'india' },
            { city: 'Bangalore', country: 'India', country_code_name: 'india' },
            { city: 'Chennai', country: 'India', country_code_name: 'india' },
            { city: 'Pune', country: 'India', country_code_name: 'india' },
            { city: 'Hyderabad', country: 'India', country_code_name: 'india' },
            { city: 'Kolkata', country: 'India', country_code_name: 'india' },
            { city: 'Ahmedabad', country: 'India', country_code_name: 'india' },
            { city: 'Jaipur', country: 'India', country_code_name: 'india' },
            { city: 'Lucknow', country: 'India', country_code_name: 'india' },
            { city: 'Nagpur', country: 'India', country_code_name: 'india' },
            { city: 'Indore', country: 'India', country_code_name: 'india' },
            { city: 'Thane', country: 'India', country_code_name: 'india' },
            { city: 'Gurugram', country: 'India', country_code_name: 'india' }
        ],
        size: 14
    },
    indonesia: {
        data: [
            { city: 'Jakarta', country: 'Indonesia', country_code_name: 'indonesia' },
            { city: 'Surabaya', country: 'Indonesia', country_code_name: 'indonesia' }
        ],
        size: 2
    },
    singapore: {
        data: [
            { city: 'Singapore', country: '', country_code_name: 'singapore' }
        ],
        size: 1
    },
    malaysia: {
        data: [
            { city: 'Kuala Lumpur', country: 'Malaysia', country_code_name: 'malaysia' }
        ],
        size: 1
    },
    thailand: {
        data: [
            { city: 'Bangkok', country: 'Thailand', country_code_name: 'thailand' }
        ],
        size: 1
    },
    china: {
        data: [
            { city: 'Shenzhen', country: 'China', country_code_name: 'china' }
        ],
        size: 1
    },
    uae: {
        data: [
            { city: 'Dubai', country: 'UAE', country_code_name: 'uae' },
            { city: 'Abu Dhabi', country: 'UAE', country_code_name: 'uae' }
        ],
        size: 2
    },
    saudi_arabia: {
        data: [
            { city: 'Riyadh', country: 'Saudi Arabia', country_code_name: 'saudi_arabia' },
            { city: 'Jeddah', country: 'Saudi Arabia', country_code_name: 'saudi_arabia' },
            { city: 'Mecca', country: 'Saudi Arabia', country_code_name: 'saudi_arabia' },
            { city: 'Medina', country: 'Saudi Arabia', country_code_name: 'saudi_arabia' }
        ],
        size: 4
    },
    kuwait: {
        data: [
            { city: 'Kuwait City', country: 'Kuwait', country_code_name: 'kuwait' }
        ],
        size: 1
    },
    oman: {
        data: [
            { city: 'Muscat', country: 'Oman', country_code_name: 'oman' }
        ],
        size: 1
    },
    qatar: {
        data: [
            { city: 'Doha', country: 'Qatar', country_code_name: 'qatar' }
        ],
        size: 1
    },
    uk: {
        data: [
            { city: 'London', country: 'UK', country_code_name: 'uk' }
        ],
        size: 1
    },
    france: {
        data: [
            { city: 'Paris', country: 'France', country_code_name: 'france' }
        ],
        size: 1
    },
    spain: {
        data: [
            { city: 'Madrid', country: 'Spain', country_code_name: 'spain' },
            { city: 'Barcelona', country: 'Spain', country_code_name: 'spain' }
        ],
        size: 2
    },
    italy: {
        data: [
            { city: 'Rome', country: 'Italy', country_code_name: 'italy' }
        ],
        size: 1
    },
    netherlands: {
        data: [
            { city: 'Amsterdam', country: 'Netherlands', country_code_name: 'netherlands' }
        ],
        size: 1
    },
    germany: {
        data: [
            { city: 'Berlin', country: 'Germany', country_code_name: 'germany' }
        ],
        size: 1
    },
    poland: {
        data: [
            { city: 'Warsaw', country: 'Poland', country_code_name: 'poland' }
        ],
        size: 1
    },
    portugal: {
        data: [
            { city: 'Lisbon', country: 'Portugal', country_code_name: 'portugal' }
        ],
        size: 1
    },
    egypt: {
        data: [
            { city: 'Cairo', country: 'Egypt', country_code_name: 'egypt' },
            { city: 'Alexandria', country: 'Egypt', country_code_name: 'egypt' }
        ],
        size: 2
    },
    morocco: {
        data: [
            { city: 'Casablanca', country: 'Morocco', country_code_name: 'morocco' }
        ],
        size: 1
    },
    south_africa: {
        data: [
            { city: 'Johannesburg', country: 'South Africa', country_code_name: 'south africa' },
            { city: 'Cape Town', country: 'South Africa', country_code_name: 'south africa' }
        ],
        size: 2
    },
    kenya: {
        data: [
            { city: 'Nairobi', country: 'Kenya', country_code_name: 'kenya' }
        ],
        size: 1
    },
    nigeria: {
        data: [
            { city: 'Lagos', country: 'Nigeria', country_code_name: 'nigeria' }
        ],
        size: 1
    }
};
;
