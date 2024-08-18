export const countryCodesPresent = ["IN", "ID", "AE", "EG", "GB", "SA", "KW", "SG", "IL"]
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
		"currency": "SGD",
		"currency_symbol": "SGD",
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
		"currency": "EGP",
		"currency_symbol": "EGP",
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
		"currency": "ILS",
		"currency_symbol": "ILS",
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
		"currency": "GBP",
		"currency_symbol": "GBP",
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
		"currency": "AED",
		"currency_symbol": "AED",
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
		"currency": "SAR",
		"currency_symbol": "SAR",
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
		"currency": "IDR",
		"currency_symbol": "IDR",
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
		name: "International",
		countryCode: "in",
		currentCountryName: "international"
	},
]


export const pricing_popup_trial_features = ['Export Group Contacts', "Translate Conversation", "Quick Replies", "Customizable Time Gap", "Random Time Gap", 'Chat Support', "Batching", "Caption", "Save Message Template", "Detailed Delivery report"];
export const pricing_popup_premium_features = ["Schedule", 'Business Chat Link', 'Meet/Zoom Support', "Multiple Attachments"];