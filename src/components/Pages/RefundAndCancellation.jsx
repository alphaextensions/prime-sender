import React from 'react';
import '../../styles/PrivacyPolicyPage/privacyPolicy.css';
import SectionTitle from "../common/SectionTitle";
import HelmetHeader from "../common/HelmetHeader";
import { promoText } from '../Data/seo-data.js';

function RefundAndCancellation() {
    const promoTextComponentGenerator = () => {
        return promoText.map((text, index) => {
            return <span key={index} className='white_promo_text pro'>{text}</span>
        })
    }

    const promoTextComponent = <div className='promo_text_container'>
        {...promoTextComponentGenerator()}
    </div>
    return (
        <>
            <HelmetHeader
                title={'Refund Policy | Prime Sender - Best Web Sender Extension'}
                description={'Refund Policy for Prime Sender'}
                keywords={'prime sender refund policy, refund policy,refund policy and cancelation'}
            />
            <div className="main-section privacy-policy">
                {promoTextComponent}
                <SectionTitle gif="/images/refund.png" title="Refund & Cancelation Policy" />
                <div className="main-container policy-container">
                    <div className="policy">
                        <p className="policy-title sub-heading">Shipping & Refund Policy</p>
                        <div className="policy-content text">
                            <p>
                                When you subscribe for a monthly plan, you yourself authorize to payment deduction each month. The service gets automatically and immediately enabled on the number you enter while purchasing.
                            </p>
                            <p>
                                Our service has features which often are one time use so therefore, we do not provide refunds unless the service has not been properly functional from our side for 7 days continuously. Upon cancellation post purchase, the policy remains the same.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RefundAndCancellation;
