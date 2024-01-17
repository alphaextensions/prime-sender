import React from 'react';
import '../../styles/TermsOfUsePage/termsOfUse.css';
import SectionTitle from "../Common/SectionTitle";
import HelmetHeader from '../Common/HelmetHeader';
import { promoText } from '../Data/seo-data';

function TermsOfUse() {
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
        title={'Terms Of Service | Prime Sender - Best Web Sender Extension'}
        description={'Terms Of Service for Prime Sender'}
        keywords={'prime sender terms of use, terms and conditions, privacy policy and terms&conditions'}
      />
      <div className="terms-of-use main-section">
        {promoTextComponent}
        <SectionTitle gif="/gifs/terms-of-service.gif" title="Terms of Service" />
        <div className="terms-container main-container">
          <div className='term'>
            <p className="term-content text">Please read these terms of use carefully before using Prime Sender (hereinafter 'Prime Sender'). Terms of use (hereinafter 'terms of use') govern your access to and use of Prime Sender. Prime Sender is available for your use only on the condition that you agree to the terms of use set forth below. If you do not agree to all of the terms of use, do not access or use Prime Sender. By accessing or using Prime Sender, you and the entity you are authorized to represent (hereinafter 'you' or 'your') signify your agreement to be bound by the terms of use.</p>
          </div>

          <div className="term">
            <div className="term-title sub-heading">User Eligibility</div>
            <div className="term-content text">Prime Sender is provided by <a href='www.prime-sender.com'> www.prime-sender.com </a>   available only to entities and persons who have reached the age of legal majority and are competent to enter into a legally binding agreement(s) under the applicable law. If You do not qualify, You are not permitted to use PrimeSender.</div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Scope Of Terms Of Use</div>
            <div className="term-content text">These Terms of Use govern Your use of Prime Sender and all applications, software and services (collectively known as "Services") available via Prime Sender, except to the extent that such Services are the subject of a separate agreement. Specific terms or agreements may apply to the use of certain Services and other items provided to You via Prime Sender ("Service Agreement(s)"). Any such Service Agreements will accompany the applicable Services or are listed in association therewith or via a hyperlink associated there with.</div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Modifications</div>
            <div className="term-content text"><a href="www.prime-sender.com"> www.prime-sender.com </a>  may revise and update these Terms of Use at any time. Your continued usage of Prime Sender after any changes to these Terms of Use will be deemed as acceptance of such changes. Any aspect of Prime Sender may be changed, supplemented, deleted or updated without notice, at the sole discretion of <a href="www.prime-sender.com">www.prime-sender.com</a>. <a href="www.prime-sender.com"> www.prime-sender.com</a> may also change or impose fees for products and services provided through Prime Sender at any time, at its sole discretion. <a href="www.prime-sender.com">www.prime-sender.com</a> may establish or change, at any time, general practices and restrictions concerning other <a href="www.prime-sender.com"> www.prime-sender.com </a> products and services at its sole discretion. <a href="www.prime-sender.com"> www.prime-sender.com</a>  Privacy Notice With respect to any individual whose personal information is provided by You to <a href="www.prime-sender.com">www.prime-sender.com</a>, You represent to <a href="www.prime-sender.com">www.prime-sender.com</a> that You have obtained all necessary consents for the processing of such personal information contemplated by the Services.</div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Licence and Ownership</div>
            <div className="term-content text">Any and all intellectual property rights ("Intellectual Property") associated with Prime Sender and its contents (the "Content") are the sole property of <a href="www.prime-sender.com">www.prime-sender.com</a>, its affiliates or third parties. The Content is protected by Intellectual Property and other laws both in India and other countries. Elements of Prime Sender are also protected by trade name, trade secret, unfair competition, and other laws and may not be copied or imitated in whole or in part. All customised graphics, icons, and other items that appear on Prime Sender are trademarks, service marks or trade name ("Marks") of <a href="www.prime-sender.com">www.prime-sender.com</a>, its affiliates or other entities that have granted  <a href="www.prime-sender.com">www.prime-sender.com</a> the right and licence to use such Marks and may not be used or interfered with in any manner without the express written consent of <a href="www.prime-sender.com">www.prime-sender.com</a>. Except as otherwise expressly authorised by these Terms of Use, You may not copy, reproduce, modify, amend, lease, loan, sell and/or create derivative works from, upload, transmit, and/or distribute the Intellectual Property of Prime Sender in any way without www.prime-sender.com's prior written permission or that of an appropriate third party. Except as expressly provided herein, <a href="www.prime-sender.com">www.prime-sender.com</a> does not grant to You any express or implied rights to the Intellectual Property of www.prime-sender.com or that of any third party. www.prime-sender.com hereby grants You a limited, personal, non-transferable,non-sublicensable, revocable licence to (a)access and use only Prime Sender, Content and Services only in the manner presented by <a href="www.prime-sender.com">www.prime-sender.com</a>, and (b) access and use the <a href="www.prime-sender.com">www.prime-sender.com</a> computer and network services offered within Prime Sender (the "www.prime-sender.com Systems") only in the manner expressly permitted by <a href="www.prime-sender.com">www.prime-sender.com</a> . Except for this limited license,www.prime-sender.com does not convey any interest in or to the <a href="www.prime-sender.com">www.prime-sender.com</a> Systems, information or data available via the www.prime-sender.com Systems (the "Information"), Content, Services, Web Site or any other www.prime-sender.com property by permitting You to access Prime Sender. Except to the extent required by law or as expressly provided herein, none of the Content and/or Information may be reverse-engineered, modified, amended, reproduced, republished, translated into any language or computer language, re-transmitted in any form or by any means, resold or redistributed without the prior written consent of. You may not make, sell, offer for sale, modify, amend, reproduce, display, publicly perform, import, distribute, retransmit or otherwise use the Content in any way unless expressly permitted to do so by <a href="www.prime-sender.com">www.prime-sender.com</a></div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Restrictions on Use Of The Website</div>
            <div className="term-content text"><li> You shall not disguise the origin of information transmitted through Prime Sender </li>
              <li>You will not place false or misleading information on Prime Sender</li>
              <li>You will not place false or misleading information on Prime Sender</li>
              <li>You will not input or upload to Prime Sender any information that may contain viruses, Trojan horses, worms, time bombs or other computer programming routines that are intended to damage, interfere with, intercept or expropriate any system, Prime Sender or Information or that infringes the Intellectual Property rights of another</li>
              <li> Certain areas of Prime Sender are restricted to customers of  <a href="www.prime-sender.com">www.prime-sender.com</a> </li>
              <li>You may not use or access Prime Sender or the  <a href="www.prime-sender.com">www.prime-sender.com</a> Systems or Services in any way that, in <a href="www.prime-sender.com">www.prime-sender.com</a> judgment, adversely affects the performance or function of the <a href="www.prime-sender.com">www.prime-sender.com</a> Systems, Services or Prime Sender or interferes with the ability of authorised parties to access the www.prime-sender.com Systems, Services or Prime Sender.</li>
              <li>You may not frame or utilize framing techniques to enclose any portion or aspect of the Content or the Information, without the express written consent of <a href="www.prime-sender.com">www.prime-sender.com</a></li></div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Links</div>
            <div className="term-content text">Outbound Links. Prime Sender may contain links to third-party Web Sites and resources (referred to collectively hereinafter as "Linked Sites"). These Linked Sites are provided solely as a convenience to You and not as an endorsement by <a href="www.prime-sender.com">www.prime-sender.com</a> of the content of such Linked Sites. <a href="www.prime-sender.com">www.prime-sender.com</a> makes no representations or warranties regarding the correctness, accuracy, performance or quality of any content, software, service or application found at any Linked Site.<a href="www.prime-sender.com">www.prime-sender.com</a> shall not be responsible for the availability of the Linked Sites or the content or activities of such sites. If You decide to access Linked Sites, You do so at Your own risk. In addition, Your use of Linked Sites is subject to any applicable policies and terms and conditions of use, including but not limited to, the Linked Site's privacy policy. Inbound Links. Linking to any page of Prime Sender other than to <a href="www.prime-sender.com">www.prime-sender.com</a>through a plain text link is strictly prohibited in the absence of a separate linkage agreement with <a href="www.prime-sender.com">www.prime-sender.com</a>.  Any website or other devices that link to  <a href="www.prime-sender.com">www.prime-sender.com</a> or any page available therein is prohibited from replicating Content

              <li>Using a browser or border environment around the Content,</li>
              <li>Replicating Content</li>
              <li>Using a browser or border environment around the Content,</li>
              <li>Implying in any fashion that <a href="www.prime-sender.com">www.prime-sender.com</a> or any of its affiliates endorse it or its products,</li>
              <li>Misrepresenting any state of facts, including its relationship with <a href="www.prime-sender.com">www.prime-sender.com</a> or any of the <a href="www.prime-sender.com">www.prime-sender.com</a> affiliates,</li>
              <li>Presenting false information about <a href="www.prime-sender.com">www.prime-sender.com</a> products or services, and</li>
              <li>Using any logo or mark of <a href="www.prime-sender.com">www.prime-sender.com</a> or any of its affiliates, without express written permission from <a href="www.prime-sender.com">www.prime-sender.com</a></li></div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Termination</div>
            <div className="term-content text">agree that <a href="www.prime-sender.com">www.prime-sender.com</a>, at its sole discretion, may terminate or suspend Your use of Prime Sender, the www.prime-sender.com Systems, Information, Services and Content at any time and for any or no reason at its sole discretion, even if access and use continue to be allowed to others. Upon such suspension or termination, You must immediately

              <li> Discontinue Your use of Prime Sender, and</li>
              <li> Destroy any copies You may have made of any portion of the Content. Accessing Prime Sender,</li>

              the <a href="www.prime-sender.com">www.prime-sender.com</a> Systems, Information or Services after such termination, suspension or discontinuation shall constitute an act of trespass. Furthermore, You agree that<a href="www.prime-sender.com">www.prime-sender.com</a> shall not be liable to You or to any third party for any termination or suspension of Your access to Prime Sender, the <a href="www.prime-sender.com">www.prime-sender.com</a> Systems, Information and/or the Services.</div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Disclaimer of Warranties</div>
            <div className="term-content text"><a href="www.prime-sender.com">www.prime-sender.com</a>  makes no representations about the results to be obtained from using Prime Sender, the <a href="www.prime-sender.com">www.prime-sender.com</a> systems, the services, the information or the content. The use of same is at your own risk. Prime Sender, the www.prime-sender.com systems, the information,the services and the content are provided on an"Asis"basis.<a href="www.prime-sender.com">www.prime-sender.com</a>, its licensors, and its suppliers, to the fulles textent permitted by law,disclaimall warranties,either express or implied, statutory or otherwise including but not limited to, the implied warranties of merchantability,non-in fringement of third party rights, and fitness for a particular purpose. <a href="www.prime-sender.com">www.prime-sender.com</a> and its affiliates, licensors and suppliers make no representations or warranties concerning the accuracy, completeness, security or timeliness of the content, information or services provided on or through the use of Prime Sender or the <a href="www.prime-sender.com">www.prime-sender.com</a> systems. No information obtained by you from Prime Sender shall create any warranty not expressly stated by <a href="www.prime-sender.com">www.prime-sender.com</a> in these terms of use.</div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Limitation of Liability</div>
            <div className="term-content text">To the extent permitted by law, in no event shall <a href="www.prime-sender.com">www.prime-sender.com</a>,its affiliates,licensors, suppliers or any third parties mentioned at Prime Sender be liable for any incidental, direct, indirect, exemplary, punitive and/or consequential damages, lost profits, and/or damages resulting from lost data or business interruption resulting from the use of and/or inability touse Prime Sender, the <a href="www.prime-sender.com">www.prime-sender.com</a> systems, information, services or the content whether based on warranty, contract, tort, delict, or any other legal foundation, and whether or not <a href="www.prime-sender.com">www.prime-sender.com</a> is advised of the possibility of such damages.To the extent permitted by law, the remedies stated for you in these terms of use are exclusive and are limited to those expressly provided for herein.</div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Compliance With Law including Export Control</div>
            <div className="term-content text">You agree to use Prime Sender in strict compliance with all applicable laws, rulings, and regulations and in a fashion that does not, in the sole judgment of <a href="www.prime-sender.com">www.prime-sender.com</a>, negatively reflect on the goodwill or reputation of <a href="www.prime-sender.com">www.prime-sender.com</a> and You shall take no action which might cause <a href="www.prime-sender.com">www.prime-sender.com</a> to be in breach of any laws, rulings or regulations applicable to <a href="www.prime-sender.com">www.prime-sender.com</a>. <a href="www.prime-sender.com">www.prime-sender.com</a> is based in India. India, the United States and certain other jurisdictions control the export of products and information. You agree to comply with all such applicable restrictions and not to export orre-export the Content(including any software or the Services)to countries or persons prohibited under India or other applicable export control laws or regulations. If You access and download the Content(including any software or theServices)or Information, You represent that You are not in a country where such export is prohibited or are not a personor entity to which such export is prohibited. You are solely responsible for compliance with the laws of Your local jurisdiction and any other applicable laws regarding the import, export, or re-export of the Content (including any software or the Services)</div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Governing Law and Jurisdiction</div>
            <div className="term-content text">To the fullest extent permitted by law, these Terms of Use are governed by the internal laws of India and courtsin Amravati, India will have jurisdiction.</div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">General</div>
            <div className="term-content text">You may not assign these Terms of Useor any of Your interests,rights or obligations underthese Terms of Use. If any provision of these Terms of Use shall be found to be invalid by any court having competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of these Terms of Use, which shall remain in full force and effect. No waiver of any of these Terms of Use shall be deemed a further or continuing waiver of such term or condition or any other term or condition.You may preserve these Terms of Use inwritten form by printing them for Your records,and You waive anyother requirement for these Terms of Use to be proved by means of a written document.</div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Refund Policy </div>
            <div className="term-content text">
            We do not provide refunds unless the service has not been properly functional from our side for 7 days continuously
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TermsOfUse;
