import React, { useContext, useEffect, useRef, useState } from 'react'
import '../../styles/PricingPage/multipleAccountPopup.css';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css'
import intlTelInputUtils from 'intl-tel-input/build/js/utils';
if (typeof window !== 'undefined' && intlTelInputUtils) {
  window.intlTelInputUtils = intlTelInputUtils;
}
import { Oval } from 'react-loader-spinner';
import { IoIosInformationCircleOutline, IoIosRemoveCircleOutline, IoMdClose } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import { CheckoutContext } from '../context/CheckoutContext';

const validateUserEmail = (email) => {
	const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return pattern.test(email);
}

const NumberComponent = ({ phoneNumbers, setPhoneNumbers, index, value, valueChangeHandler, numberInputError, inputErrorNumbers,myLocation }) => {
    const telRef = useRef(null);
    const prevScrollRef = useRef(null);
    const itiRef = useRef(null);
    const [removeNumberIndex, setRemoveNumberIndex] = useState(null);

    useEffect(() => {
        const iti = intlTelInput(telRef.current, {
            separateDialCode: true,
            autoHideDialCode: true,
            initialCountry: (myLocation?.country_code || 'auto').toLowerCase(),
            geoIpLookup: (success) => success((myLocation?.country_code || 'us').toLowerCase()),
            autoPlaceholder: 'aggressive',
            placeholderNumberType: 'MOBILE',
            customContainer: 'iti',
            dropdownContainer: document.body,
        });
        itiRef.current = iti;
        if (phoneNumbers[index]) {
            const stored = phoneNumbers[index].replace('-', ''); 
            try {
                iti.setNumber(stored);
            } catch (e) { console.error(e) }
        }

        const setPlaceholder = () => {
            const data = iti.getSelectedCountryData();
            const utils = window.intlTelInputUtils;
            let placeholder = '';

            if (utils && data?.iso2) {
                try {
                    const exampleNumber = utils.getExampleNumber(
                        data.iso2.toUpperCase(),
                        true,
                        utils.numberType.MOBILE
                    );
                    placeholder = utils.formatNumber(
                        exampleNumber,
                        data.iso2.toUpperCase(),
                        utils.numberFormat.NATIONAL
                    );
                } catch (e) { console.error(e) }
            }

            if (!placeholder && typeof iti.getNumberPlaceholder === 'function') {
                try {
                    placeholder = iti.getNumberPlaceholder('MOBILE');
                } catch (e) { console.error(e) }
                if (placeholder) {
                    placeholder = placeholder.replace(/[^0-9]+/g, '');
                    placeholder = placeholder.replace(/^0+/, '');
                }
            }

            if (placeholder) {
                placeholder = placeholder.replace(/[^0-9]+/g, '');
                    placeholder = placeholder.replace(/^0+/, '');
            }
            telRef.current.setAttribute('placeholder', placeholder || '');
        };
        setPlaceholder();

        if (iti.promise) {
            iti.promise.then(setPlaceholder).catch(() => {});
        }

        const updateNumber = () => {
            if (!itiRef.current) return;
            const data = itiRef.current.getSelectedCountryData();
            const dial = data?.dialCode || '';
            const digits = telRef.current.value.replace(/\D/g, '');
            let national = digits.startsWith(dial) ? digits.slice(dial.length) : digits;
            const formatted = national.length ? `+${dial}-${national}` : '';
            setPhoneNumbers(prev => {
                const arr = [...prev];
                arr[index] = formatted;
                return arr;
            });
        };

        const onCountryChange = () => setPlaceholder();

        telRef.current.addEventListener('input', updateNumber);
        telRef.current.addEventListener('countrychange', onCountryChange);

        const onDropdownOpen = () => {
            if (!telRef.current) return;
            const container = telRef.current.closest('.numbers_input_section');
            if (!container) return;
            if (prevScrollRef.current === null || prevScrollRef.current === undefined) {
                prevScrollRef.current = container.scrollTop;
            }
        };
        const onDropdownClose = () => {
            if (!telRef.current) return;
            const container = telRef.current.closest('.numbers_input_section');
            if (container && prevScrollRef.current !== null && prevScrollRef.current !== undefined) {
                container.scrollTop = prevScrollRef.current;
                prevScrollRef.current = null;
            }
        };

        telRef.current.addEventListener('open:countrydropdown', onDropdownOpen);
        telRef.current.addEventListener('close:countrydropdown', onDropdownClose);

        return () => {
            telRef.current?.removeEventListener('input', updateNumber);
            telRef.current?.removeEventListener('countrychange', onCountryChange);
            telRef.current?.removeEventListener('open:countrydropdown', onDropdownOpen);
            telRef.current?.removeEventListener('close:countrydropdown', onDropdownClose);
            iti.destroy();
        };
    }, []);

    return <div className={`number_component_container ${removeNumberIndex==index ?'slide_out':''}`}>
        <div className='number_component_number'>
            <div className='number_component_line'></div>
            <div className='number_component_circle'>{index + 1}</div>
            <div className='numer_component_number_input'>
                <input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    ref={telRef}
                    className={`${(numberInputError && inputErrorNumbers.includes(index))?"input_error_border":""} mult_number_input`}
                    onWheel={e => e.target.blur()}
                    onKeyDown={e => {
                        if (["e", "E", "+", "-", "."].includes(e.key)) {
                            e.preventDefault();
                        }
                    }}
                    onInput={e => {
                        // Remove any non-numeric characters
                        e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    }}
                />
                {
                    value > 2 &&
                    <div 
                        className='number_input_remov_button' 
                        onClick={() => {
                            setRemoveNumberIndex(index);
                            setTimeout(() => {
                                setRemoveNumberIndex(null);
                                valueChangeHandler(value - 1, index)
                            }, 500)
                        }}
                    >
                        <p><IoIosRemoveCircleOutline/></p>
                    </div>
                }
            </div>
        </div>
    </div>
}
const MultipleAccountPopup = ({ value, setValue, phoneNumbers, setPhoneNumbers, setShowMultipleAccountPopup, plan_duration, plan_type, amount, country_currency, multCountry,currentCountry, myLocation }) => {
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("phoneNumbers"));
        if (saved && Array.isArray(saved) && saved.length && (!phoneNumbers || phoneNumbers.length === 0 || phoneNumbers.every(n => !n))) {
            setPhoneNumbers(saved);
            setValue(saved.length);
        }
    }, []);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const scrollY = window.scrollY || window.pageYOffset;
		const originalOverflow = document.body.style.overflow;
		const originalPosition = document.body.style.position;
		const originalTop = document.body.style.top;

		document.body.style.overflow = 'hidden';
		document.body.style.position = 'fixed';
		document.body.style.top = `-${scrollY}px`;
		document.body.style.width = '100%';

		return () => {
			document.body.style.overflow = originalOverflow;
			document.body.style.position = originalPosition;
			document.body.style.top = originalTop;
			window.scrollTo(0, scrollY);
		};
	}, []);

	const { setCheckoutData } = useContext(CheckoutContext);
	const numbersContainerRef = useRef(null);
	const navigate = useNavigate();
	const [isPageGenerating, setIsPageGenerating] = useState(false);
	const [userEmail, setUserEmail] = useState(JSON.parse(localStorage.getItem("userEmail")) || '');
	const [showNumbersList, setShowNumbersList] = useState(false);
	const [numbersAdded, setNumbersAdded] = useState(false);
	const [emailInputError, setEmailInputError] = useState(false);
	const [numberInputError, setNumberInputError] = useState(false);
	const [inputErrorNumbers, setInputErrorNumbers] = useState([]);
	const [autorenewChecked, setAutorenewChecked] = useState(false);
	const [autoRenewHover, setAutoRenewHover] = useState(false);
	const [showLoader, setShowLoader] = useState(false);

	const valueChangeHandler = (val, ind) => {
		if (val < 2) {
			setValue(val);
			setPhoneNumbers(['', '']);
			return;
		}
		if (val < value) {
			if (ind != undefined && ind != null)
				setPhoneNumbers(phoneNumbers.filter((_, index) => index != ind));
			else
				setPhoneNumbers(phoneNumbers.slice(0, val));
			setNumbersAdded(false);
		}
		if (val > phoneNumbers.length) {
			let tempNumbers = phoneNumbers;
			while (tempNumbers.length < val) {
				tempNumbers.push('');
			}
			setPhoneNumbers(tempNumbers);
			setNumbersAdded(true);
		}
		setValue(val);
	}

	const setDataInDatabase = async (name, description, currency, isAutoRenew) => {
		setIsPageGenerating(true);
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		const raw = JSON.stringify({
			"email": userEmail,
			"numbers": phoneNumbers.map((number) => number.split('-')[0] + number.split('-')[1]),
			"plan_type": plan_type,
			"plan_duration": plan_duration,
			"operation": "add-transaction-record",
			"name": name,
			"description": description,
			"country": multCountry,
			"currency": currency.toLowerCase(),
            "autorenew": isAutoRenew,
		});

		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};
		try {
			const response = await fetch("https://3hfe043k3g.execute-api.ap-south-1.amazonaws.com/prod", requestOptions)
			let data = await response.text();
			data = JSON.parse(data);
			const body = JSON.parse(data.body);
			if(body.data == null) {
				setIsPageGenerating(false);
				toast(body.message, { theme: 'colored', type: 'error', autoClose: 5000 });
				return null;
			}
			setIsPageGenerating(false);
            if(isAutoRenew) return body.data.stripe_checkout_url;
            else return body.data.client_secret;
		} catch (error) {
			setIsPageGenerating(false);
			console.log("error from setting data in database ", error);
			toast("Something went wrong. Please try again.", { theme: 'colored', type: 'error', autoClose: 5000 });
		}
	}

	const validateUserData = () => {
		// validate user email
		if (!userEmail || userEmail == '' || !validateUserEmail(userEmail)) {
			setEmailInputError(true);
			setTimeout(() => {
				setEmailInputError(false);	
			}, 3000);
			toast("Please enter a valid email id", { theme: "colored", type: "error", autoClose:3000 });
			return false;
		};

		// check for the number of accounts 
		if(value<2) {
			toast("Number of accounts cannot be less than 2", {theme: 'colored', type:'error', autoClose:3000 });
			return false;
		}

        const phoneRegex = /^\+\d+-\d+$/;
        let isInputErrorPresent = false, errorNumbers = [];
        for (let i = 0; i < value; i++) {
            const entry = phoneNumbers[i];
            if (!entry || !phoneRegex.test(entry)) {
                isInputErrorPresent = true;
                setNumberInputError(true);
                errorNumbers.push(i);
            }
        }
        setInputErrorNumbers(errorNumbers);
		if(isInputErrorPresent) {
			toast("Please enter a valid phone number", {theme: 'colored', type:'error', autoClose:3000 });
			let firstErrorInput = document.querySelectorAll('.mult_number_input')[errorNumbers[0]];
			if(firstErrorInput) {
				firstErrorInput.scrollIntoView({behavior:"smooth", block:"center"});
			}
			setTimeout(() => {
				setNumberInputError(false);
			}, 3000);
		}
		if(isInputErrorPresent) return false;
		return true;
	}

	const handleBuyPlan = async () => {
		const isUserDataValid = validateUserData();
		if(!isUserDataValid) 
			return;

		let productName = "Prime Sender";
		plan_type = plan_type == 'basic' ? "Basic" : "Advance";
		let bodyDuration = plan_duration == 'monthly' ? 'Monthly' : 'Annual';
		productName += ' ' + plan_type + ' ' + bodyDuration;
		let productDescription = `Prime Sender ${plan_type} ${bodyDuration} plan for ${phoneNumbers.length} users.`
        if(autorenewChecked) {
            const stripe_checkout_url = await setDataInDatabase(productName, productDescription, country_currency, true);
            window.open(stripe_checkout_url, '_blank');
            return;
        }
		const client_secret = await setDataInDatabase(productName, productDescription, country_currency, false);
		if(!client_secret){
			return;
		}
		const reqQuery = {
			clientSecret: client_secret,
			email: userEmail,
			numbers: phoneNumbers,
			currency: country_currency,
			totalPrice: amount.totalPrice,
			title: productDescription,
			plan_type: plan_type
		}
		setCheckoutData(reqQuery);
		navigate(`/checkout`);

	}

	const overlayRef = useRef(null);
	useEffect(() => {
		if (overlayRef.current) {
			overlayRef.current.addEventListener('click', () => {
				setShowMultipleAccountPopup(false);
			})
		}

		return () => {
			if (overlayRef.current) {
				overlayRef.current.removeEventListener('click', () => {
					setShowMultipleAccountPopup(false);
				})
			}
		}
	}, [])


	useEffect(() => {
		if (numbersAdded && numbersContainerRef.current) {
			const element = numbersContainerRef.current;
			element.scrollTop = element.scrollHeight;
		}
	}, [value])

	useEffect(() => {
		localStorage.setItem("phoneNumbers", JSON.stringify(phoneNumbers));
	}, [phoneNumbers])

	const NumberListComponent = () => {
		return <>
			<div className='numbers_list_email'>
				<p className='number_list_email_heading'>Email : </p>
				<p className='number_list_email_text'>{userEmail}</p>
			</div>
			<div className='numbers_list_list'>
				<div className='scroll_list'>
					{phoneNumbers.map((number, index) => {
						if(!number) number = '---';
						let currNumber = '---';
						let list = number.split('-');
						if (list.length > 1) {
							currNumber = list[0] + list[1];
						}
						return <div className='number_div' key={index}>
							<p className='number_heading'>Number {index + 1} :</p>
							<p className='number_number'>{currNumber}</p>
						</div>
					})}
				</div>
			</div>
			<div className='mult_popup_button_section number_list_button_section'>
				<button className='mult_popup_buy_button mult_review_button' onClick={() => setShowNumbersList(false)}>
					<a>Go Back</a>
				</button>
			</div>
		</>
	}

	return (
		<>
			<div className="pricing-popup-overlay" ref={overlayRef}></div>
			<div className='multiple_account_popup'>
				{/* popup top section */}
				<ToastContainer />
				{showNumbersList ? <NumberListComponent /> :
					<>
						<div className='mult_accont_top_section'>
							<div className='mult_popup_corss_section' onClick={() => setShowMultipleAccountPopup(false)}>
								<IoMdClose />
							</div>
							<div className='mult_account_heading'>
								<div className='left_line'></div>
								<div className='mult_account_heading_text'>Buy Multiple Accounts</div>
								<div className="right_line"></div>
							</div>
							<div className="mult_account_logo">
								<div className="mult_account_image">
									<img src="images/logo-large.png" alt="" />
								</div>
								<div className="mult_account_logo_text">{plan_type=='basic'?'Basic':'Advance'} {plan_duration=='annually'?'Annual':'Monthly'}</div>
							</div>
						</div>
						{/* popup body */}
						<div className='mult_account_body'>
							<div className='mult_account_num'>
								<p className='mult_account_num_text'>Number of accounts: </p>
								<input type="number" value={value} onChange={(e) => valueChangeHandler(e.target.value)} />
							</div>
							<div className='mult_account_num'>
								<p className='mult_account_num_text'>Email address: </p>
								<input type="email" className={`mult_account_email_input ${emailInputError?'input_error_border':''}`} value={userEmail} onChange={(e) => {
									setUserEmail(e.target.value)
									localStorage.setItem("userEmail", JSON.stringify(e.target.value))
								}} />
							</div>
							<div className='mult_account_body_heading'>
								<p>Add the <span>WhatsApp numbers</span> on which the premium needs to be enabled</p>
							</div>
							{value < 2 ? <div className="mult_error_message">
								Number of accounts cannot be less than 2
							</div> :
								<div className={`numbers_input_section ${value > 2 ? 'overflow_class' : ''}`} ref={numbersContainerRef}>
									{
										Array.from({ length: value }).map((_, index) => {
											return <NumberComponent
												phoneNumbers={phoneNumbers}
												setPhoneNumbers={setPhoneNumbers}
												index={index}
												key={`num-${index}-${value}` }
												value={value}
												valueChangeHandler={valueChangeHandler}
												numberInputError={numberInputError}
												inputErrorNumbers={inputErrorNumbers}
                                                myLocation={myLocation}
											/>
										})
									}
								</div>
							}
							<div className='mult_account_add_more'>
                                <p className='mult_account_show_more' disabled={value<2} onClick={() => setShowNumbersList(true)}>
                                    Show numbers
                                </p>
								<p onClick={() => {
									valueChangeHandler(Number(value) + 1)
                                }}><b>+</b> Add More</p>
                            </div>
                            {
								plan_duration == 'monthly' &&
								<div className='auto_renew_container'>
								    <input
                                        type="checkbox"
                                        id="auto_renew_checkbox"
                                        checked={autorenewChecked}
                                        name="auto_renew_checkbox"
                                        className="cursor-pointer"
                                        onChange={() => {
                                            setAutorenewChecked(!autorenewChecked);
                                            setShowLoader(true);
                                            setTimeout(() => {
                                                setShowLoader(false);
                                            }, 2000);
                                        }}
                                    />
                                    <label className="auto_renew_text cursor-pointer" htmlFor="auto_renew_checkbox">Enable auto-renew</label>
									<span className={`pricing_feature_info_container`} onMouseEnter={() => setAutoRenewHover(true)} onMouseLeave={() => setAutoRenewHover(false)}>
										<IoIosInformationCircleOutline className="feature_info_class" />
										<div className="navigation_outer_box_down navigation_container" hidden={!autoRenewHover} >
											<div className="msg-box-down multiple-card">
												<p>Premium amount will be deducted every month on checking this box.</p>
											</div>
										</div>
									</span>
								</div>
							}
							<div className='mult_popup_button_section'>
                            {
								// <button className='mult_popup_buy_button mult_review_button' disabled={value<2} onClick={() => setShowNumbersList(true)}>
									// <a>Show numbers</a>
								// </button>
                            }
								<button className={`mult_popup_buy_button ${autorenewChecked?'disable_button_class':''}`} onClick={handleBuyPlan} disabled={isPageGenerating}>
                                    {((isPageGenerating || showLoader) && !autorenewChecked) ? <Oval /> : <a>Buy now</a>}
								</button>
                            {
                                plan_duration == "monthly" && 
                                <button className={`mult_popup_buy_button ${!autorenewChecked?'disable_button_class':''}`} onClick={handleBuyPlan} disabled={isPageGenerating}>
                                    {((isPageGenerating || showLoader) && autorenewChecked) ? <Oval /> : <a>Subscribe</a>}
                                </button>
                            }
							</div>
							{isPageGenerating && <div className='please_wait_text'>Please wait...</div>}
						</div>
					</>
				}
			</div>
		</>

	)
}

export default MultipleAccountPopup
