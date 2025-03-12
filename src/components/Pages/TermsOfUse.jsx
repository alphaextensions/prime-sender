import React from 'react';
import '../../styles/TermsOfUsePage/termsOfUse.css';
import SectionTitle from "../common/SectionTitle";
import HelmetHeader from '../common/HelmetHeader';
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
        title={'Terms Of Service | Message Broadcaster - Best Web Sender Extension'}
        description={'Terms Of Service for Message Broadcaster'}
        keywords={'message broadcaster terms of use, terms and conditions, privacy policy and terms&conditions'}
      />
      <div className="terms-of-use main-section">
        {promoTextComponent}
        <SectionTitle gif="/gifs/terms-of-service.gif" title="Terms of Service" />
        <div className="terms-container main-container">
          <div className='term'>
            <p className="term-content text">Please read these terms of use carefully before using Message Broadcaster (hereinafter 'Message Broadcaster'). Terms of use (hereinafter 'terms of use') govern your access to and use of Message Broadcaster. Message Broadcaster is available for your use only on the condition that you agree to the terms of use set forth below. If you do not agree to all of the terms of use, do not access or use Message Broadcaster. By accessing or using Message Broadcaster, you and the entity you are authorized to represent (hereinafter 'you' or 'your') signify your agreement to be bound by the terms of use.</p>
          </div>

          <div className="term">
            <div className="term-title sub-heading">User Eligibility</div>
            <div className="term-content text">Message Broadcaster is provided by <a href='Message Broadcaster'> Message Broadcaster </a>   available only to entities and persons who have reached the age of legal majority and are competent to enter into a legally binding agreement(s) under the applicable law. If You do not qualify, You are not permitted to use PrimeSender.</div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Scope Of Terms Of Use</div>
            <div className="term-content text">These Terms of Use govern Your use of Message Broadcaster and all applications, software and services (collectively known as "Services") available via Message Broadcaster, except to the extent that such Services are the subject of a separate agreement. Specific terms or agreements may apply to the use of certain Services and other items provided to You via Message Broadcaster ("Service Agreement(s)"). Any such Service Agreements will accompany the applicable Services or are listed in association therewith or via a hyperlink associated there with.</div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Modifications</div>
            <div className="term-content text"><a href="/"> Message Broadcaster </a>  may revise and update these Terms of Use at any time. Your continued usage of Message Broadcaster after any changes to these Terms of Use will be deemed as acceptance of such changes. Any aspect of Message Broadcaster may be changed, supplemented, deleted or updated without notice, at the sole discretion of <a href="/">Message Broadcaster</a>. <a href="/"> Message Broadcaster</a> may also change or impose fees for products and services provided through Message Broadcaster at any time, at its sole discretion. <a href="/">Message Broadcaster</a> may establish or change, at any time, general practices and restrictions concerning other <a href="/"> Message Broadcaster </a> products and services at its sole discretion. <a href="/"> Message Broadcaster</a>  Privacy Notice With respect to any individual whose personal information is provided by You to <a href="/">Message Broadcaster</a>, You represent to <a href="/">Message Broadcaster</a> that You have obtained all necessary consents for the processing of such personal information contemplated by the Services.</div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Licence and Ownership</div>
            <div className="term-content text">Any and all intellectual property rights ("Intellectual Property") associated with Message Broadcaster and its contents (the "Content") are the sole property of <a href="/">Message Broadcaster</a>, its affiliates or third parties. The Content is protected by Intellectual Property and other laws both in India and other countries. Elements of Message Broadcaster are also protected by trade name, trade secret, unfair competition, and other laws and may not be copied or imitated in whole or in part. All customised graphics, icons, and other items that appear on Message Broadcaster are trademarks, service marks or trade name ("Marks") of <a href="/">Message Broadcaster</a>, its affiliates or other entities that have granted  <a href="/">Message Broadcaster</a> the right and licence to use such Marks and may not be used or interfered with in any manner without the express written consent of <a href="/">Message Broadcaster</a>. Except as otherwise expressly authorised by these Terms of Use, You may not copy, reproduce, modify, amend, lease, loan, sell and/or create derivative works from, upload, transmit, and/or distribute the Intellectual Property of Message Broadcaster in any way without Message Broadcaster's prior written permission or that of an appropriate third party. Except as expressly provided herein, <a href="/">Message Broadcaster</a> does not grant to You any express or implied rights to the Intellectual Property of Message Broadcaster or that of any third party. Message Broadcaster hereby grants You a limited, personal, non-transferable,non-sublicensable, revocable licence to (a)access and use only Message Broadcaster, Content and Services only in the manner presented by <a href="/">Message Broadcaster</a>, and (b) access and use the <a href="/">Message Broadcaster</a> computer and network services offered within Message Broadcaster (the "Message Broadcaster Systems") only in the manner expressly permitted by <a href="/">Message Broadcaster</a> . Except for this limited license,Message Broadcaster does not convey any interest in or to the <a href="/">Message Broadcaster</a> Systems, information or data available via the Message Broadcaster Systems (the "Information"), Content, Services, Web Site or any other Message Broadcaster property by permitting You to access Message Broadcaster. Except to the extent required by law or as expressly provided herein, none of the Content and/or Information may be reverse-engineered, modified, amended, reproduced, republished, translated into any language or computer language, re-transmitted in any form or by any means, resold or redistributed without the prior written consent of. You may not make, sell, offer for sale, modify, amend, reproduce, display, publicly perform, import, distribute, retransmit or otherwise use the Content in any way unless expressly permitted to do so by <a href="/">Message Broadcaster</a></div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Restrictions on Use Of The Website</div>
            <div className="term-content text"><li> You shall not disguise the origin of information transmitted through Message Broadcaster </li>
              <li>You will not place false or misleading information on Message Broadcaster</li>
              <li>You will not place false or misleading information on Message Broadcaster</li>
              <li>You will not input or upload to Message Broadcaster any information that may contain viruses, Trojan horses, worms, time bombs or other computer programming routines that are intended to damage, interfere with, intercept or expropriate any system, Message Broadcaster or Information or that infringes the Intellectual Property rights of another</li>
              <li> Certain areas of Message Broadcaster are restricted to customers of  <a href="/">Message Broadcaster</a> </li>
              <li>You may not use or access Message Broadcaster or the  <a href="/">Message Broadcaster</a> Systems or Services in any way that, in <a href="/">Message Broadcaster</a> judgment, adversely affects the performance or function of the <a href="/">Message Broadcaster</a> Systems, Services or Message Broadcaster or interferes with the ability of authorised parties to access the Message Broadcaster Systems, Services or Message Broadcaster.</li>
              <li>You may not frame or utilize framing techniques to enclose any portion or aspect of the Content or the Information, without the express written consent of <a href="/">Message Broadcaster</a></li></div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Links</div>
            <div className="term-content text">Outbound Links. Message Broadcaster may contain links to third-party Web Sites and resources (referred to collectively hereinafter as "Linked Sites"). These Linked Sites are provided solely as a convenience to You and not as an endorsement by <a href="/">Message Broadcaster</a> of the content of such Linked Sites. <a href="/">Message Broadcaster</a> makes no representations or warranties regarding the correctness, accuracy, performance or quality of any content, software, service or application found at any Linked Site.<a href="/">Message Broadcaster</a> shall not be responsible for the availability of the Linked Sites or the content or activities of such sites. If You decide to access Linked Sites, You do so at Your own risk. In addition, Your use of Linked Sites is subject to any applicable policies and terms and conditions of use, including but not limited to, the Linked Site's privacy policy. Inbound Links. Linking to any page of Message Broadcaster other than to <a href="/">Message Broadcaster</a>through a plain text link is strictly prohibited in the absence of a separate linkage agreement with <a href="/">Message Broadcaster</a>.  Any website or other devices that link to  <a href="/">Message Broadcaster</a> or any page available therein is prohibited from replicating Content

              <li>Using a browser or border environment around the Content,</li>
              <li>Replicating Content</li>
              <li>Using a browser or border environment around the Content,</li>
              <li>Implying in any fashion that <a href="/">Message Broadcaster</a> or any of its affiliates endorse it or its products,</li>
              <li>Misrepresenting any state of facts, including its relationship with <a href="/">Message Broadcaster</a> or any of the <a href="/">Message Broadcaster</a> affiliates,</li>
              <li>Presenting false information about <a href="/">Message Broadcaster</a> products or services, and</li>
              <li>Using any logo or mark of <a href="/">Message Broadcaster</a> or any of its affiliates, without express written permission from <a href="/">Message Broadcaster</a></li></div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Termination</div>
            <div className="term-content text">agree that <a href="/">Message Broadcaster</a>, at its sole discretion, may terminate or suspend Your use of Message Broadcaster, the Message Broadcaster Systems, Information, Services and Content at any time and for any or no reason at its sole discretion, even if access and use continue to be allowed to others. Upon such suspension or termination, You must immediately

              <li> Discontinue Your use of Message Broadcaster, and</li>
              <li> Destroy any copies You may have made of any portion of the Content. Accessing Message Broadcaster,</li>

              the <a href="/">Message Broadcaster</a> Systems, Information or Services after such termination, suspension or discontinuation shall constitute an act of trespass. Furthermore, You agree that<a href="/">Message Broadcaster</a> shall not be liable to You or to any third party for any termination or suspension of Your access to Message Broadcaster, the <a href="/">Message Broadcaster</a> Systems, Information and/or the Services.</div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Disclaimer of Warranties</div>
            <div className="term-content text"><a href="/">Message Broadcaster</a>  makes no representations about the results to be obtained from using Message Broadcaster, the <a href="/">Message Broadcaster</a> systems, the services, the information or the content. The use of same is at your own risk. Message Broadcaster, the Message Broadcaster systems, the information,the services and the content are provided on an"Asis"basis.<a href="/">Message Broadcaster</a>, its licensors, and its suppliers, to the fulles textent permitted by law,disclaimall warranties,either express or implied, statutory or otherwise including but not limited to, the implied warranties of merchantability,non-in fringement of third party rights, and fitness for a particular purpose. <a href="/">Message Broadcaster</a> and its affiliates, licensors and suppliers make no representations or warranties concerning the accuracy, completeness, security or timeliness of the content, information or services provided on or through the use of Message Broadcaster or the <a href="/">Message Broadcaster</a> systems. No information obtained by you from Message Broadcaster shall create any warranty not expressly stated by <a href="/">Message Broadcaster</a> in these terms of use.</div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Limitation of Liability</div>
            <div className="term-content text">To the extent permitted by law, in no event shall <a href="/">Message Broadcaster</a>,its affiliates,licensors, suppliers or any third parties mentioned at Message Broadcaster be liable for any incidental, direct, indirect, exemplary, punitive and/or consequential damages, lost profits, and/or damages resulting from lost data or business interruption resulting from the use of and/or inability touse Message Broadcaster, the <a href="/">Message Broadcaster</a> systems, information, services or the content whether based on warranty, contract, tort, delict, or any other legal foundation, and whether or not <a href="/">Message Broadcaster</a> is advised of the possibility of such damages.To the extent permitted by law, the remedies stated for you in these terms of use are exclusive and are limited to those expressly provided for herein.</div>
          </div>
          <div className="term">
            <div className="term-title sub-heading">Compliance With Law including Export Control</div>
            <div className="term-content text">You agree to use Message Broadcaster in strict compliance with all applicable laws, rulings, and regulations and in a fashion that does not, in the sole judgment of <a href="/">Message Broadcaster</a>, negatively reflect on the goodwill or reputation of <a href="/">Message Broadcaster</a> and You shall take no action which might cause <a href="/">Message Broadcaster</a> to be in breach of any laws, rulings or regulations applicable to <a href="/">Message Broadcaster</a>. <a href="/">Message Broadcaster</a> is based in India. India, the United States and certain other jurisdictions control the export of products and information. You agree to comply with all such applicable restrictions and not to export orre-export the Content(including any software or the Services)to countries or persons prohibited under India or other applicable export control laws or regulations. If You access and download the Content(including any software or theServices)or Information, You represent that You are not in a country where such export is prohibited or are not a personor entity to which such export is prohibited. You are solely responsible for compliance with the laws of Your local jurisdiction and any other applicable laws regarding the import, export, or re-export of the Content (including any software or the Services)</div>
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
          <div className="term">
            <div className="term-title sub-heading">Account Suspension and Banning</div>
            <div className="term-content text">
            We do not guarantee or promise any specific outcome regarding account bans, suspensions, or reinstatements. Any bans imposed by the source platform are beyond our control, and we are not responsible for such actions. Decisions related to banning are made solely by the source platform based on their policies and regulations.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TermsOfUse;
