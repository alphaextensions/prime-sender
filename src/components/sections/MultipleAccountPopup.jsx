import React, { useEffect, useRef, useState } from 'react'
import '../../styles/PricingPage/multipleAccountPopup.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Oval } from 'react-loader-spinner';
import { IoMdClose } from 'react-icons/io';


const NumberComponent = ({ phoneNumbers, setPhoneNumbers, index, value, valueChangeHandler }) => {
	const [countryCode, setCountryCode] = useState('91');

	const handleNumberChange = (e) => {
		let temp = [...phoneNumbers];
		temp[index] = `+${countryCode}-${e.target.value}`;
		setPhoneNumbers(temp);
	}

	const handleCountryCodeChange = ({ code }) => {
		setCountryCode(code);
		let number = phoneNumbers[index]?.split('-')[1] || "";
		let temp = [...phoneNumbers];
		temp[index] = `+${code}-${number}`;
		setPhoneNumbers(temp);
	}

	return <div className='number_component_container'>
		<div className='number_component_number'>
			<div className='number_component_line'></div>
			<div className='number_component_circle'>{index + 1}</div>
			<div className='numer_component_number_input'>
				<PhoneInput
					country={'in'}
					value={countryCode}
					onChange={code => handleCountryCodeChange({ code })}
				/>
				<input type="number" value={phoneNumbers[index]?.split('-').length > 1 ? phoneNumbers[index].split('-')[1] : ""} onChange={handleNumberChange} />
				{
					value > 2 &&
					<div className='number_input_remov_button' onClick={() => valueChangeHandler(value - 1, index)}>
						<p>Remove</p>
					</div>
				}
			</div>
		</div>
	</div>
}
const MultipleAccountPopup = ({ value, setValue, phoneNumbers, setPhoneNumbers, setShowMultipleAccountPopup, plan_duration, plan_type, amount, country_currency, multCountry }) => {
	const numbersContainerRef = useRef(null);
	const [isPageGenerating, setIsPageGenerating] = useState(false);
	const [userEmail, setUserEmail] = useState(JSON.parse(localStorage.getItem("userEmail")) || '');
	const [showNumbersList, setShowNumbersList] = useState(false);
	const [numbersAdded, setNumbersAdded] = useState(false);

	const valueChangeHandler = (val, ind) => {
		if (val < 2) {
			setValue(val);
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

	const setDataInDatabase = async (name, description, currency) => {
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
			return body.data.stripe_page_url;
		} catch (error) {
			setIsPageGenerating(false);
			console.log("error from setting data in database ", error);
		}
	}

	const handleBuyPlan = async () => {
		setIsPageGenerating(true);
		let productName = "Prime Sender";
		plan_type = plan_type == 'basic' ? "Basic" : "Advance";
		let bodyDuration = plan_duration == 'monthly' ? 'Monthly' : 'Annual';
		productName += ' ' + plan_type + ' ' + bodyDuration;
		let productDescription = `Prime Sender ${plan_type} ${bodyDuration} plan for ${phoneNumbers.length} numbers.`
		let finalPrice = "";
		for (let i = 0; i < amount.totalPrice.length; i++) {
			if (amount.totalPrice[i] >= '0' && amount.totalPrice[i] <= '9') {
				finalPrice = amount.totalPrice.substring(i);
				break;
			}
		}
		finalPrice += '00';

		const stripe_page_url = await setDataInDatabase(productName, productDescription, country_currency);
		setIsPageGenerating(false);
		if(stripe_page_url) {
			window.open(stripe_page_url, '_blank');
			setShowMultipleAccountPopup(false);
		}
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
				<button className='mult_popup_buy_button go_back_button' onClick={handleBuyPlan} disabled={isPageGenerating}>
					{isPageGenerating ? <Oval /> : <a>Buy Now</a>}
				</button>
			</div>
		</>
	}

	return (
		<>
			<div className="pricing-popup-overlay" ref={overlayRef}></div>
			<div className='multiple_account_popup'>
				{/* popup top section */}
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
								<div className="mult_account_logo_text">Advance Annual</div>
							</div>
						</div>
						{/* popup body */}
						<div className='mult_account_body'>
							<div className='mult_account_num'>
								<p className='mult_account_num_text'>Enter number of accounts: </p>
								<input type="number" value={value} onChange={(e) => valueChangeHandler(e.target.value)} />
							</div>
							<div className='mult_account_num'>
								<p className='mult_account_num_text'>Enter email address: </p>
								<input type="email" className='mult_account_email_input' value={userEmail} onChange={(e) => {
									setUserEmail(e.target.value)
									localStorage.setItem("userEmail", JSON.stringify(e.target.value))
								}} />
							</div>
							<div className='mult_account_body_heading'>
								<p>Enter the <span>Whatsapp numbers</span> on which the premium needs to be enabled</p>
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
												key={index}
												value={value}
												valueChangeHandler={valueChangeHandler}
											/>
										})
									}
								</div>
							}
							<div className='mult_account_add_more'>
								<p onClick={() => {
									valueChangeHandler(Number(value) + 1)
								}}>+ Add More</p>
							</div>
							<div className='mult_popup_button_section'>
								<button className='mult_popup_buy_button mult_review_button' disabled={value<2} onClick={() => setShowNumbersList(true)}>
									<a>Show numbers</a>
								</button>
								<button className='mult_popup_buy_button' onClick={handleBuyPlan} disabled={isPageGenerating}>
									{isPageGenerating ? <Oval /> : <a>Buy Now</a>}
								</button>
							</div>
						</div>
					</>
				}
			</div>
		</>

	)
}

export default MultipleAccountPopup
