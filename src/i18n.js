import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      successPage: {
        titles: {
          basic: "Basic Success",
          advance: "Advance Success"
        },
        heading: "Congrats! You have successfully purchased PS {{plan}} Premium",
        description: "Please reload WhatsApp Web after 10 minutes to activate Premium. You will receive a confirmation email soon.",
        subText: "If Premium is not enabled, do not worry. Please click on 'Live Support' button on the top left of the extension.",
        featuresTitle: "Features"
      },
      helpUsImprove: {
        pageTitle: 'Help Us Improve | Prime Sender - Free AI Web Message Sender',
        pageDescription: 'Submit your feedback to help us improve Prime Sender',
        pageKeywords: 'help-us-improve, prime sender help, prime sender feedback',
        title: 'Help us Improve',
        subtitle: 'We strive to give you the best service possible but maybe there are certain things we need to catch up on.',
        loading: 'Loading...',
        stepsTitle: 'If you had a change of heart somehow and want to know how Prime Sender works quickly in 3 steps, here:',
        steps: [
          "1. Enter the numbers you want to send the message to, separated by comma.",
          "2. Enter the message you'd like to send. You could also add attachments 📁.",
          "3. Download the delivery report by clicking on Delivery Report to view the delivery status of the messages and the attachment sent."
        ],
        attachmentSteps: [
          "Click on the icon of 📎 Attachment inside the text box inside the extension",
          "Select files you'd like to send. You can select multiple files.",
          "You can click on Add Caption to add caption to your attachment",
          "Click on Send button inside the extension"
        ]
      },
      faqs: {
        pageTitle: 'FAQs | Prime Sender - Free AI Web Message Sender',
        pageDescription: 'Frequently Asked Questions about Prime Sender',
        pageKeywords: 'prime sender frequently asked questions, FAQs, prime sender faqs, most frequently asked questions',
        sectionTitle: 'Frequently Asked Questions',
        items: [
          {
            question: "1. Does it work in the Desktop App?",
            answer: "No, it is a chrome extension and it works only on Google Chrome (Mac, Windows, and Linux)."
          },
          {
            question: "2. Does it Work in my Country?",
            answer: "Yes, Every country in the world can use the extension."
          },
          {
            question: "3. How to Send Clickable Links through Prime Sender?",
            answer: "You can send a clickable link to anyone who <br> - Either has your number saved in their phone book  <br> - Or has replied to you at least once."
          },
          {
            question: "4. How to Correctly Format the Numbers Column in CSV File?",
            answer: "1. Select the numbers column -> Right Click -> Click on 'Format Cells'.<br>2. Go to the 'Number' category -> Go to 'Decimal Places' box<br>3. Change it to '0' and click 'OK'.<br>4. Verify that the numbers are now coming correctly."
          },
          {
            question: "5. How to send an attachment?",
            answer: "1. Click on 'Add Attachment' and select the type of attachment<br>2. Select the file you want to send<br>3. Your personal chat would open up - send the file in the chat.<br>4. Now open the extension and click on 'Send Message'. Your file will be sent one by one to all the contacts."
          },
          {
            question: "6. Can I send message to people in a group separately without saving their contacts?",
            answer: "Yes, you can. Here's how:<br>1. Open the respective group and click on the extension<br>2. Click on 'Download Group Contacts' and an excel of contact numbers will be downloaded<br>3. Upload this csv and enter the message you want to send in the extension. Send!"
          }
        ]
      },
      featureRequest: {
        title: "Feature Request",
        description: "Submit your request for adding new features to Prime Sender",
        keywords: "prime sender request a feature, request new feature, add feature",
        loading: "Loading..."
      },
      refundPolicyPage: {
        title: "Refund & Cancellation Policy",
        shippingRefundTitle: "Shipping & Refund Policy",
        content: [
          "When you subscribe for a monthly plan, you yourself authorize to payment deduction each month. The service gets automatically and immediately enabled on the number you enter while purchasing.",
          "Our service has features which often are one time use so therefore, we do not provide refunds unless the broadcasting feature has not been properly functional from our side for 7 days continuously. Upon cancellation post purchase, the policy remains the same."
        ]
      },
      privacyPolicy: {
        title: "Privacy Policy",
        safety: {
          title: "Is it safe to use the extension?",
          content: "Chrome store extension codes are reviewed manually by Google team, if an extension is danger on user privacy, or goes against the terms of use, they would take it down immediately. Yes, It is safe."
        },
        dataSharing: {
          title: "Is my personal data exposed to any third parties?",
          items: [
            "Not being sold to third parties",
            "Not being used or transferred for purposes that are unrelated to the item's core functionality",
            "Not being used or transferred to determine creditworthiness or for lending purposes"
          ]
        },
        conversations: {
          title: "Are my conversations or contacts exposed to any third parties?",
          content: "No, the excel sheet of numbers you upload directly reflects all the data onto the extension without saving anything. Your conversations are completely secure as per WhatsApp guidelines and as far as the data part is concerned, it is covered in the previous question"
        },
        dataCollection: {
          title: "What all data do we collect?",
          content: "We just need minimal data for tracking purpose to resolve bugs if any on the extension and for basic analytics. We collect your email, number and the events performed on the extension. All this information is not sold to any third parties"
        }
      },
      greeting: 'Hello',
      termsOfUse: {
        title: 'Terms of Service',
        intro: "Please read these terms of use carefully before using Prime Sender (hereinafter 'Prime Sender'). Terms of use (hereinafter 'terms of use') govern your access to and use of Prime Sender. Prime Sender is available for your use only on the condition that you agree to the terms of use set forth below. If you do not agree to all of the terms of use, do not access or use Prime Sender. By accessing or using Prime Sender, you and the entity you are authorized to represent (hereinafter 'you' or 'your') signify your agreement to be bound by the terms of use.",
        userEligibility: {
          title: "User Eligibility",
          content: "Prime Sender is provided by <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> available only to entities and persons who have reached the age of legal majority and are competent to enter into a legally binding agreement(s) under the applicable law. If You do not qualify, You are not permitted to use PrimeSender."
        },
        scopeOfTerms: {
          title: "Scope Of Terms Of Use",
          content: "These Terms of Use govern Your use of Prime Sender and all applications, software and services (collectively known as \"Services\") available via Prime Sender, except to the extent that such Services are the subject of a separate agreement. Specific terms or agreements may apply to the use of certain Services and other items provided to You via Prime Sender (\"Service Agreement(s)\"). Any such Service Agreements will accompany the applicable Services or are listed in association therewith or via a hyperlink associated there with."
        },
        modifications: {
          title: "Modifications",
          content: "<a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> may revise and update these Terms of Use at any time. Your continued usage of Prime Sender after any changes to these Terms of Use will be deemed as acceptance of such changes. Any aspect of Prime Sender may be changed, supplemented, deleted or updated without notice, at the sole discretion of <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>. <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> may also change or impose fees for products and services provided through Prime Sender at any time, at its sole discretion. <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> may establish or change, at any time, general practices and restrictions concerning other <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> products and services at its sole discretion. <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> Privacy Notice With respect to any individual whose personal information is provided by You to <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, You represent to <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> that You have obtained all necessary consents for the processing of such personal information contemplated by the Services."
        },
        licenseAndOwnership: {
          title: "Licence and Ownership",
          content: "Any and all intellectual property rights (\"Intellectual Property\") associated with Prime Sender and its contents (the \"Content\") are the sole property of <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, its affiliates or third parties. The Content is protected by Intellectual Property and other laws both in India and other countries. Elements of Prime Sender are also protected by trade name, trade secret, unfair competition, and other laws and may not be copied or imitated in whole or in part. All customised graphics, icons, and other items that appear on Prime Sender are trademarks, service marks or trade name (\"Marks\") of <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, its affiliates or other entities that have granted <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> the right and licence to use such Marks and may not be used or interfered with in any manner without the express written consent of <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>. Except as otherwise expressly authorised by these Terms of Use, You may not copy, reproduce, modify, amend, lease, loan, sell and/or create derivative works from, upload, transmit, and/or distribute the Intellectual Property of Prime Sender in any way without <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>'s prior written permission or that of an appropriate third party. Except as expressly provided herein, <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> does not grant to You any express or implied rights to the Intellectual Property of <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> or that of any third party. <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> hereby grants You a limited, personal, non-transferable, non-sublicensable, revocable licence to (a) access and use only Prime Sender, Content and Services only in the manner presented by <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, and (b) access and use the <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> computer and network services offered within Prime Sender (the \"<a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> Systems\") only in the manner expressly permitted by <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>. Except for this limited license, <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> does not convey any interest in or to the <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> Systems, information or data available via the <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> Systems (the \"Information\"), Content, Services, Web Site or any other <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> property by permitting You to access Prime Sender. Except to the extent required by law or as expressly provided herein, none of the Content and/or Information may be reverse-engineered, modified, amended, reproduced, republished, translated into any language or computer language, re-transmitted in any form or by any means, resold or redistributed without the prior written consent of. You may not make, sell, offer for sale, modify, amend, reproduce, display, publicly perform, import, distribute, retransmit or otherwise use the Content in any way unless expressly permitted to do so by <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>."
        },
        restrictions: {
          title: "Restrictions on Use Of The Website",
          items: [
            "You shall not disguise the origin of information transmitted through Prime Sender",
            "You will not place false or misleading information on Prime Sender",
            "You will not input or upload to Prime Sender any information that may contain viruses, Trojan horses, worms, time bombs or other computer programming routines that are intended to damage, interfere with, intercept or expropriate any system, Prime Sender or Information or that infringes the Intellectual Property rights of another",
            "Certain areas of Prime Sender are restricted to customers of <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>",
            "You may not use or access Prime Sender or the <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> Systems or Services in any way that, in <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> judgment, adversely affects the performance or function of the <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> Systems, Services or Prime Sender or interferes with the ability of authorised parties to access the <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> Systems, Services or Prime Sender",
            "You may not frame or utilize framing techniques to enclose any portion or aspect of the Content or the Information, without the express written consent of <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>"
          ]
        },
        links: {
          title: "Links",
          outbound: {
            title: "Outbound Links",
            content: "Prime Sender may contain links to third-party Web Sites and resources (referred to collectively hereinafter as \"Linked Sites\"). These Linked Sites are provided solely as a convenience to You and not as an endorsement by <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> of the content of such Linked Sites. <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> makes no representations or warranties regarding the correctness, accuracy, performance or quality of any content, software, service or application found at any Linked Site. <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> shall not be responsible for the availability of the Linked Sites or the content or activities of such sites. If You decide to access Linked Sites, You do so at Your own risk. In addition, Your use of Linked Sites is subject to any applicable policies and terms and conditions of use, including but not limited to, the Linked Site's privacy policy."
          },
          inbound: {
            title: "Inbound Links",
            content: "Linking to any page of Prime Sender other than to <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> through a plain text link is strictly prohibited in the absence of a separate linkage agreement with <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>. Any website or other devices that link to <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> or any page available therein is prohibited from:",
            restrictions: [
              "Replicating Content",
              "Using a browser or border environment around the Content",
              "Implying in any fashion that <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> or any of its affiliates endorse it or its products",
              "Deturpar qualquer estado de fatos, incluindo seu relacionamento com o <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> ou qualquer uma das afiliadas do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>",
              "Apresentar informações falsas sobre os produtos ou serviços do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>",
              "Usar qualquer logotipo ou marca do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> ou de qualquer uma de suas afiliadas, sem permissão por escrito expressa do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>"
            ]
          }
        },
        termination: {
          title: "Termination",
          content: "You agree that <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, at its sole discretion, may terminate or suspend Your use of Prime Sender, the <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> Systems, Information, Services and Content at any time and for any or no reason at its sole discretion, even if access and use continue to be allowed to others. Upon such suspension or termination, You must immediately:",
          actions: [
            "Discontinue Your use of Prime Sender, and",
            "Destroy any copies You may have made of any portion of the Content."
          ],
          warning: "Accessing Prime Sender, the <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> Systems, Information or Services after such termination, suspension or discontinuation shall constitute an act of trespass. Furthermore, You agree that <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> shall not be liable to You or to any third party for any termination or suspension of Your access to Prime Sender, the <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> Systems, Information and/or the Services."
        },
        disclaimerOfWarranties: {
          title: "Disclaimer of Warranties",
          content: "<a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> makes no representations about the results to be obtained from using Prime Sender, the <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> systems, the services, the information or the content. The use of same is at your own risk. Prime Sender, the <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> systems, the information, the services and the content are provided on an \"As Is\" basis. <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, its licensors, and its suppliers, to the fullest extent permitted by law, disclaim all warranties, either express or implied, statutory or otherwise including but not limited to, the implied warranties of merchantability, non-infringement of third party rights, and fitness for a particular purpose. <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> and its affiliates, licensors and suppliers make no representations or warranties concerning the accuracy, completeness, security or timeliness of the content, information or services provided on or through the use of Prime Sender or the <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> systems. No information obtained by you from Prime Sender shall create any warranty not expressly stated by <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> in these terms of use."
        },
        limitationOfLiability: {
          title: "Limitation of Liability",
          content: "To the extent permitted by law, in no event shall <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, its affiliates, licensors, suppliers or any third parties mentioned at Prime Sender be liable for any incidental, direct, indirect, exemplary, punitive and/or consequential damages, lost profits, and/or damages resulting from lost data or business interruption resulting from the use of and/or inability to use Prime Sender, the <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> systems, information, services or the content whether based on warranty, contract, tort, delict, or any other legal foundation, and whether or not <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> is advised of the possibility of such damages. To the extent permitted by law, the remedies stated for you in these terms of use are exclusive and are limited to those expressly provided for herein."
        },
        complianceWithLaw: {
          title: "Compliance With Law including Export Control",
          content: "You agree to use Prime Sender in strict compliance with all applicable laws, rulings, and regulations and in a fashion that does not, in the sole judgment of <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, negatively reflect on the goodwill or reputation of <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> and You shall take no action which might cause <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> to be in breach of any laws, rulings or regulations applicable to <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>. <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> is based in India. India, the United States and certain other jurisdictions control the export of products and information. You agree to comply with all such applicable restrictions and not to export or re-export the Content (including any software or the Services) to countries or persons prohibited under India or other applicable export control laws or regulations. If You access and download the Content (including any software or the Services) or Information, You represent that You are not in a country where such export is prohibited or are not a person or entity to which such export is prohibited. You are solely responsible for compliance with the laws of Your local jurisdiction and any other applicable laws regarding the import, export, or re-export of the Content (including any software or the Services)."
        },
        governingLaw: {
          title: "Governing Law and Jurisdiction",
          content: "To the fullest extent permitted by law, these Terms of Use are governed by the internal laws of India and courts in Amravati, India will have jurisdiction."
        },
        general: {
          title: "General",
          content: "You may not assign these Terms of Use or any of Your interests, rights or obligations under these Terms of Use. If any provision of these Terms of Use shall be found to be invalid by any court having competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of these Terms of Use, which shall remain in full force and effect. No waiver of any of these Terms of Use shall be deemed a further or continuing waiver of such term or condition or any other term or condition. You may preserve these Terms of Use in written form by printing them for Your records, and You waive any other requirement for these Terms of Use to be proved by means of a written document."
        },
        refundPolicy: {
          title: "Refund Policy",
          content: "When you subscribe for a monthly plan, you yourself authorize to payment deduction each month. The service gets automatically and immediately enabled on the number you enter while purchasing. Our service has features which often are one time use so therefore, we do not provide refunds unless the broadcasting feature has not been properly functional from our side for 7 days continuously. Upon cancellation post purchase, the policy remains the same."
        },
        freeTrialPolicy: {
          title: "Free Trial Policy",
          content: "Customers can use the free trial for a particular duration which allows them access to majority features. Once the customer has purchased a premium plan, they would have access to more features depending on the type of plan. Once the premium plan expires, customer cannot access any features unless they purchase the premium plan again."
        },
        accountSuspension: {
          title: "Account Suspension and Banning",
          content: "We do not guarantee or promise any specific outcome regarding account bans, suspensions, or reinstatements. Any bans imposed by the source platform are beyond our control, and we are not responsible for such actions. Decisions related to banning are made solely by the source platform based on their policies and regulations."
        },
        planTransferPolicy: {
          title: "Plan Transfer Policy",
          content: "If a user has entered the wrong number during purchase, they can transfer their premium plan to a different number within 7 days of purchase via the dashboard. Each plan is eligible for a one-time transfer only. Transfers are not allowed after 7 days or if the plan has already been transferred."
        },
        customersTitle: 'What Customers Are Saying',
        viewAll: 'View All',
        reviews: {
          r1: { heading: 'This is crazy', review: 'The best application, really helps my work, the application is simple, easy to use, admin respond quickly when there are problems. The monthly subscription fee is affordable, thank you Prime Sender team.', name: 'EKO WICAKSONO' },
          r2: { heading: 'Very Helpful', review: 'I run a small business in Indonesia and this helped me a lot to get new customers. Not many chrome extensions are useful but this one is very good, Thank You!', name: 'David' },
          r3: { heading: 'Amazing', review: 'Very easy to understand and use, unlike other complicated software. What surprised me is that during operation I wanted to know more, messaged their support team, and got a very quick reply.', name: 'Joel Peterson' },
          r4: { heading: 'Highly Recommended!', review: 'So far, seems to be completely free. You can send a bulk message to hundreds of contacts very easily and quickly. Saves a ton of time!! Especially the function for importing contacts from a spreadsheet.', name: 'Phillipe Kenny' },
          r5: { heading: 'Thanks Prime Sender!', review: 'This extension is helping our company a lot to get in touch with many leads. Really helpful in mass messaging and offers announcement. Overall it is a perfect tool for mass sending messages, I love it.', name: 'Alexandre Farias' },
          r6: { heading: 'Thank you Alpha', review: 'Premium features are great, the admin is very helpful. Emails get responses within 24hrs. Adjustment request was done within few hours after sending an email to Alpha extensions.', name: 'Danush Rao' }
        },
        chatSupport: {
          tooltip: 'Hey! Can I help you?'
        },
        checkout: {
          payNow: 'Pay now',
          primeSenderPlan: 'Prime Sender {{planTitle}} plan for {{users}} users'
        },
        notification: {
          boughtPlan: 'Someone from <location>{{city}}, {{country}}</location><br/>bought <price><currency>{{currency}}</currency>{{price}} (billed yearly)</price> plan!',
          hoursAgo: '{{time}} hours ago',
          verifiedBy: 'Verified by'
        }
      },
      navbar: {
        home: 'Home',
        howToUse: 'How To Use',
        features: 'Features',
        pricing: 'Pricing',
        blogs: 'Blogs',
        login: 'Login',
        language: 'Language',
        freeDownload: 'Free Download',
      },
      blogs: {
        sectionTitle: 'Blogs',
        pageTitle: 'Blogs | Prime Sender - Free AI Web Message Sender',
        pageDescription: 'Blogs of Prime Sender',
        pageKeywords: 'Blogs,prime sender blog page, prime sender blogs,Chat Productivity, WhatsApp Sender Extension',
        blogPageTitle: 'Blog | Prime Sender - Free AI Web Message Sender',
        blogPageDescription: 'Blog Page of Prime Sender, Efficient WhatsApp Sender Extension for Productive Messaging, Unlock Seamless Communication with Our WhatsApp Sender Extension',
        blogPageKeywords: 'Blogs,prime sender blog page, prime sender blogs',
        translateChats: {
          title: 'How do I translate my chats into my local language',
          date: 'June 23, 2024',
          step1: 'Select your local language in the extension from the options given below.',
          step2: 'After selecting the language, click on the "Save" button.',
          step3: 'Now, all your chats will be translated into your local language.',
          step4: 'You can change the language anytime by clicking on the "Settings" button.',
          step5: 'You can also translate your chats manually by selecting the text and clicking on the "Translate" button.',
          translateOption: 'Once you click on the "Translate using Prime Sender" option, the whole chat will be translated into your local language. This will also apply to all other chats.',
          undoTranslation: 'To undo the translation, you need to click on the "View Original" option available at the top of the chat.',
          cardSummary: '1. Select your local language in the extension from the options given below. 2. After selecting the language, click on the "Save" button. 3. Now, all your chats will be translated into your local language.'
        },
        multipleCaption: {
          title: 'How do I send individual captions for each of multiple attachments',
          date: 'June 23, 2024',
          coverImageAlt: 'Attachments icon',
          subheading1: 'How do I add multiple attachments first',
          step1: 'To add multiple attachments, click on the attachments icon and select the files you want to send. To add another attachment, click on the attachments icon again and select the next file. Now you can send two attachments at once. You can add as many attachments as you want. you can show the example below of multiple attachments:',
          image1Alt: 'Multiple attachments example',
          subheading2: 'Now how can I add a caption for each of multiple attachments',
          image2Alt: 'Caption feature',
          step2: 'After that, click the checkbox "Add Caption" and you will get radio buttons for each of your attachments. Write your caption for each attachment. You can also edit the caption by selecting the radio button of that image and typing your new caption in the given text area.',
          step3: 'As you are ready to send all the attachments and individual captions, click on the "Send" button. This will send all the attachments with their respective captions to the numbers you have provided in the "Number Box".',
          cardSummary: '1. Add multiple attachments by clicking the attachment icon multiple times. 2. Check "Add Caption" to enable individual captions. 3. Select each attachment and add its caption. 4. Click Send to deliver all attachments with their captions.'
        },
        sendUsingExcel: {
          title: 'How to send messages using excel - Prime Sender',
          date: 'May 13, 2023',
          coverImageAlt: 'Excel icon',
          step1: '1. Upload the numbers in the first column you want to send the messages to. [Optional] You can add columns based on your requirement.',
          step2: 'Click on "Example" button give in "Number box"(image is given below) to download the',
          templateLink: 'Template of Excel',
          image1Alt: 'Example image of number box',
          step3: '2. Open',
          primeSender: 'Prime Sender',
          step3Continued: 'extension. You can click on Upload and upload the excel right away.',
          image2Alt: 'Upload excel example',
          step4: '3. Uploaded numbers would be visible in the numbers area.',
          step5: '4. The remaining process remains the same - You enter the message you want to send and click on "Send"',
          cardSummary: '1. Upload the numbers in the first column you want to send the messages to. [Optional] You can add columns based on your requirement. 2. Open Prime Sender extension. You can click on Upload and upload the excel right away.' 
        },
        scheduleMessage: {
          title: 'How to schedule messages using Prime Sender',
          date: 'December 22, 2022',
          coverImageAlt: 'Schedule icon',
          subheading1: 'How to use Scheduler',
          paragraph1: 'The option to schedule allows you to send messages to your contacts at a pre-set time. When you want to broadcast your message at a certain time during the day and you aren\'t available during that time, you can choose to schedule your message.',
          image1Alt: 'Schedule feature screenshot',
          paragraph2: 'After entering the contacts and the message you want to send, enter the time you would want to send the message at. Once you enter the preferred time, click on Schedule. You should receive a notification confirming about the same.',
          paragraph3: 'You can also view the scheduled time in the extension',
          paragraph4: 'If you have scheduled a campaign at 9 PM in the evening, your messages should start broadcasting the next time it turns 9 PM. The campaign shall be valid once and it will shoot in the next 24 hours at the set time.',
          subheading2: 'Important points to consider',
          point1: 'Your browser tab should be open at the set time i.e. the time campaign would shoot',
          point2: 'Please do not run any normal campaign before the scheduled time. If you run a campaign before the scheduled campaign time, it might affect your scheduled campaign',
          point3: 'If you want to cancel the scheduled campaign, you can just close the tab or refresh the tab',
          point4: 'Do not close the tab when the messages are being sent',
          cardSummary: 'How to use Scheduler The option to schedule allows you to send messages to your contacts at a pre-set time. When you want to broadcast your message at a certain time during the day and you aren\'t available during that time, you can choose to schedule your message. After entering the contacts and the message you want to send, enter the time you would want to send the message at. Once you enter the preferred time, click on Schedule...'
        },
        customizeMessage: {
          title: 'How to send customized message using Prime Sender',
          date: 'December 22, 2022',
          paragraph1: 'When you want to inform your customers about a promotional offer, it is always better if the message is personalized to the customer. It increases the probability of the customer replying to the message. Similarly, if you want to update your customer regarding their order, it is obvious to send the message custom to the user. Here\'s how you can send customized messages using',
          primeSender: 'Prime Sender',
          image1Alt: 'Excel spreadsheet with contact data',
          paragraph2: 'Enter the details you\'d like to send customized to the user along with their contact numbers. For example, in this case, I\'d like to add the customer\'s Name and a custom message. The first row is always for the column headings - Contact numbers, Name and Message in this case.',
          boldNote: 'Please note that the first column should always be the contact numbers. Other columns can be whatever you like and in whichever order.',
          templateText: 'Here is a link to the template excel:',
          templateLink: 'Template Excel',
          paragraph3: 'Once you have the excel ready, you can now upload it in the extension',
          image2Alt: 'Upload excel file interface',
          paragraph4: 'Once they are ready, you can now enter the custom column you\'d like to send from the given option below.',
          image3Alt: 'Customize message box interface',
          paragraph5: 'Once this is done, click on \'Send\'.',
          paragraph6: 'This is how you can send customized messages on using',
          cardSummary: 'When you want to inform your customers about a promotional offer, it is always better if the message is personalized to the customer. It increases the probability of the customer replying to the message. Similarly, if you want to update your customer regarding their order, it is obvious to send the message custom to the user. Here\'s how you can send customized messages using Prime Sender: Enter the details you\'d like to send customized to the user along with their contact numbers...'
        },
        addCountryCode: {
          title: 'How to add country code to every number in excel?',
          date: 'December 22, 2022',
          coverImageAlt: 'Excel spreadsheet with country codes',
          paragraph1: 'Everyone has faced this issue of adding country code in front of contact numbers. Suppose your country code is +62 and you would like to add that in front of all the contacts. The simplest way to do that in',
          boldText: 'excel or spreadsheets',
          paragraph1Continued: 'is to use the function CONCATENATE. Here\'s how to use it :',
          paragraph2: 'First, make another column and add +62( or whatever your country code is) in each cell of the column. You can do that by simply typing +62 in the first cell and dragging the pointer till the last cell. Like this :',
          image1Alt: 'Excel spreadsheet showing country code column',
          paragraph3: 'Once this is done, in the column besides the number, type \'=CONCATENATE(Column1, Column2)\' Remember, Column1 is +62 and Column2 is the contact numbers. This is how it will look :',
          image2Alt: 'Excel spreadsheet showing CONCATENATE function',
          paragraph4: 'The + sign can be later formatted if it\'s needed.',
          cardSummary: 'Everyone has faced this issue of adding country code in front of contact numbers. Suppose your country code is +62 and you would like to add that in front of all the contacts. The simplest way to do that in excel or spreadsheets is to use the function CONCATENATE. Here\'s how to use it: First, make another column and add +62( or whatever your country code is) in each cell of the column. You can do that by simply typing +62 in the first cell and dragging the pointer till the last cell...'
        },
        quickResponse: {
          title: 'How to reply quickly to your customers using Quick Response using Prime Sender',
          date: 'December 17, 2022',
          coverImageAlt: 'Quick Response feature in Prime Sender',
          subheading: 'Quick Response using Prime Sender',
          paragraph1: 'There are phrases or sentences that businesses have to use often while interacting with their customers like "Hello!" or "How can we help you" or "Thank you for contacting". Quick Response on Prime Sender helps you to save such terms and use accordingly when needed quickly without having to type out the same again. Once you install',
          primeSenderLink: 'Prime Sender',
          paragraph1Continued: 'you can see a strip of default template messages just above the chat box',
          image1Alt: 'Template messages strip above chat box',
          paragraph2: 'If you click on \'Hello! how can we help you?\', it\'ll right away send the message to the respective person',
          image2Alt: 'Message sent using quick response',
          paragraph3: 'You can of course edit the responses by clicking on Edit:',
          image3Alt: 'Edit template interface',
          cardSummary: 'Quick Response using Prime Sender There are phrases or sentences that businesses have to use often while interacting with their customers like "Hello!",or "How can we help you", or "Thank you for contacting". Quick Response on Prime Sender helps you to save such terms and use accordingly when needed quickly without having to type out the same again. Once you install Prime Sender you can see a strip of default...'
        }
      },
      dashboard: {
        profile: {
          pageTitle: 'Profile Information',
          name: 'Name',
          currentPlan: 'Current Plan',
          whatsappNumber: 'Whatsapp Number',
          email: 'Email',
          downloadReceipt: 'Download your receipt :',
          selectDate: 'Select Date',
          noReceiptFound: 'No Receipt Found',
          selectDatePlaceholder: '---- Select date ----',
          downloadButton: 'Download'
        },
        tables: {
          lastCampaignsTitle: 'Last 2 Campaign Details',
          recentCampaignsTitle: 'Recent Campaigns Details',
          tableHeaders: {
            campaignName: 'Campaign Name',
            time: 'Time',
            downloadCampaign: 'Download Campaign',
            downloadReport: 'Download Delivery Report',
            delete: 'Delete'
          }
        }
      },
      login: {
        pageTitle: 'Login | Prime Sender - Free AI Web Message Sender',
        leftSide: {
          heading: 'Reach Your Audience on WhatsApp with Precision',
          imageAlt: 'Login illustration'
        },
        rightSide: {
          welcome: 'Welcome!',
          subtitle: 'Let\'s make whatsApp work smarter for you with Prime Sender.',
          callToAction: 'Log in to connect, engage, and grow!'
        },
        popups: {
          mobileLoginError: {
            headline: 'Sorry, we couldn\'t identify your login.',
            subheadline: 'For a smoother experience, please try logging in through a desktop device. Stay tuned for updates!'
          },
          premiumOnly: {
            headline: 'Login Only Available for Premium Users',
            subheadline: 'We\'re upgrading our login experience to serve you better. Currently, this feature is available for Premium Users. Stay tuned for updates!'
          },
          serverError: {
            headline: 'Internal Server Error',
            subheadline: 'An issue occurred on our end. Please try again later.'
          },
          emailMismatch: {
            headline: 'Email Doesn\'t Match WhatsApp Account',
            subheadline: 'Hi {{userName}}{{comma}}it looks like your WhatsApp number is already linked to a different email address ({{maskedEmail}}). To see the full email, please visit the profile section in your extension. Make sure you\'re signing in with the correct Google account.'
          }
        },
        support: {
          question: 'Still not able to login?',
          clickHere: 'Click here'
        },
        cta: {
          purchaseNow: 'Purchase Now'
        }
      },
      common: {
        logoAlt: 'Prime Sender logo'
      },
      home: {
        title: 'Best Chrome Extension for Messaging and Productivity',
        subtitle: 'Send personalized and unlimited bulk messages using Excel, captioned images and more with our web extension',
        buyNow: 'Buy Now',
        freeForever: 'IT\'S FREE. FOREVER.'
      },
      testimonial: {
        numbersTitle: 'Our Numbers Speak For Themselves',
        userRatings: 'User Ratings',
        users: 'Users',
        rank: 'Rank',
        rankText: 'Sender on Web Store',
        customersTitle: 'What Customers Are Saying',
        viewAll: 'View All',
        reviews: {
          r1: { heading: 'This is crazy', review: 'The best application, really helps my work, the application is simple, easy to use, admin respond quickly when there are problems. The monthly subscription fee is affordable, thank you Prime Sender team.', name: 'EKO WICAKSONO' },
          r2: { heading: 'Very Helpful', review: 'I run a small business in Indonesia and this helped me a lot to get new customers. Not many chrome extensions are useful but this one is very good, Thank You!', name: 'David' },
          r3: { heading: 'Amazing', review: 'Very easy to understand and use, unlike other complicated software. What surprised me is that during operation I wanted to know more, messaged their support team, and got a very quick reply.', name: 'Joel Peterson' },
          r4: { heading: 'Highly Recommended!', review: 'So far, seems to be completely free. You can send a bulk message to hundreds of contacts very easily and quickly. Saves a ton of time!! Especially the function for importing contacts from a spreadsheet.', name: 'Phillipe Kenny' },
          r5: { heading: 'Thanks Prime Sender!', review: 'This extension is helping our company a lot to get in touch with many leads. Really helpful in mass messaging and offers announcement. Overall it is a perfect tool for mass sending messages, I love it.', name: 'Alexandre Farias' },
          r6: { heading: 'Thank you Alpha', review: 'Premium features are great, the admin is very helpful. Emails get responses within 24hrs. Adjustment request was done within few hours after sending an email to Alpha extensions.', name: 'Danush Rao' }
        }
      },
      solutions: {
        sectionTitle: 'Supercharge your communication for your business',
        sectionSubtitle: 'Unlock maximum efficiency using our web sender extension. Connect with all your customers instantly and efficiently',
        cards: {
          trustedTitle: 'Highly Trusted',
          trustedDesc: 'More than 1,00,000 businesses use our chrome extension to connect with their customers',
          interfaceTitle: 'Friendly Interface',
          interfaceDesc: 'Our web sender has an intuitive design to optimize your productivity',
          freeTitle: 'Free to use',
          freeDesc: 'Our web sender chrome extension has basic features which are completely free to use'
        }
      },
      pricing: {
        sectionTitle: 'Compare Our Plans',
        sectionSubtitle: 'Choose the plan that works best for you',
        save: 'Save',
        buy: 'Buy',
        subscribe: 'Subscribe',
        billedFor12Months: 'Billed for 12 months',
        upiTransferOnlyAvailableForAnnualPlans: 'UPI transfer only available for annual plans',
        userPerMonth: '/user/month',
        userPerMonthBilledAnnually: '/user/month billed annually',
        buyMultipleUsers: 'Buy for multiple users',
        numberOfAccounts: 'Number of accounts',
        numberOfAccountsCannotBeLessThan2: 'Number of accounts cannot be less than 2',
        needMoreSupport: 'Need more support?',
        clickHere: 'Click here',
        autoDeductionsDisclaimer: 'Auto deductions will be made from the same payment method used for the initial purchase',
        termsAgreement: 'By purchasing, you agree to our Terms of Service and Privacy Policy',
        mainTitle: 'Simple, Affordable Pricing',
        curatedForYou: 'Pricing curated just for you',
        monthly: 'Monthly',
        annual: 'Annual',
        '12Months': '12 Months',
        '24Months': '24 Months',
        purchasePlanToSave: 'Purchase a {{months}} months plan to save <bold>{{percentage}}</bold> for the whole year',
        tryNow: 'Try Now',
        earlyBird: {
          prefix: 'Early bird offer for new user -',
          bold: 'Extra 30% OFF.',
          useCode: 'Use code'
        },
        allFreeFeatures: 'All Free Features',
        allBasicFeatures: 'All Basic Features',
        wantToPayViaUPI: 'Want to pay via UPI?',
        payPal: 'PayPal also available',
        needMultipleAccounts: 'Need multiple accounts?',
        purchasePremiumPlanForMultipleUsers: 'Purchase premium plan for multiple users for your organization at a <bold>discounted rate upto <star/> 70%</bold>',
        pricingCalculator: 'Pricing Calculator',
        billedAnnually: 'billed annually',
        popup: {
          buyMultipleAccounts: 'Buy Multiple Accounts upto 70% discount',
          email: 'Email :',
          numberHeading: 'Number {{index}} :',
          goBack: 'Go Back',
          numberOfAccounts: 'Number of accounts:',
          emailAddress: 'Email address:',
          addWhatsAppNumbersHeading: 'Add the <highlight>WhatsApp numbers</highlight> on which the premium needs to be enabled',
          showNumbers: 'Show numbers',
          addMore: 'Add More',
          enableAutoRenew: 'Enable auto-renew',
          autoRenewInfo: 'Premium amount will be deducted every month on checking this box.',
          pleaseWait: 'Please wait...',
          validEmailError: 'Please enter a valid email id',
          validPhoneNumberError: 'Please enter a valid phone number',
          somethingWentWrong: 'Something went wrong. Please try again.',
          userPerMonthBilledAnnually: '/user/month billed annually',
          plan: 'Plan',
          discountFirstMonth: '*Discount applicable for the first month',
          autoDeductionDisclaimer: 'By subscribing, you agree to auto-deductions every month according to your plan type which will extend your plan type by a month. By purchasing the premium plan, you agree to our <termsLink>Terms of Service</termsLink> and <privacyLink>Privacy Policy</privacyLink>.',
          purchaseDisclaimer: 'By purchasing the premium plan, you agree to our <termsLink>Terms of Service</termsLink> and <privacyLink>Privacy Policy</privacyLink>.',
          or: 'or',
          advance: '(Advance)',
          basicPlan: 'Basic',
          advancePlan: 'Advance',
          monthly: 'Monthly',
          annual: 'Annual'
        },
        features: {
          unlimitedBroadcasting: {
            name: 'Unlimited Broadcasting',
            description: 'Broadcast to multiple chats at once, effortlessly scaling your communication. No need for template approvals and extra fees.'
          },
          attachment: {
            name: 'Attachment',
            description: 'You can attach and send images, documents, videos, etc. along with your message to users'
          },
          customization: {
            name: 'Message Customization',
            description: 'You can customize your message according to the customer with their name, email, order number, etc'
          },
          chatSupport: {
            name: 'Chat Support',
            description: 'You can click on \'Chat Support\' on the extension to get your queries resolved.'
          },
          caption: {
            name: 'Caption',
            description: 'Add a caption to your attachments'
          },
          saveCampaignDetails: {
            name: 'Save Campaign Details',
            description: 'Get a detailed report of your campaigns to improve sales and utilize Prime Sender to the fullest'
          },
          saveMessageTemplate: {
            name: 'Save Message Template',
            description: 'Use saved message template in a single click'
          },
          detailedDeliveryReport: {
            name: 'Detailed Delivery Report',
            description: 'Get a detailed report of your campaigns to improve sales and utilize Prime Sender to the fullest'
          },
          translateConversation: {
            name: 'Translate Conversation',
            description: 'Now you can translate your messages to any language with just a single click'
          },
          blurConversations: {
            name: 'Blur Conversations',
            description: 'Blur conversations to protect sensitive information.'
          },
          prioritySupport: {
            name: 'Priority Support',
            description: 'We provide priority support to our premium customers, to help them with their queries'
          },
          noMinimumTimeGap: {
            name: 'No minimum time gap',
            description: 'Save time and quickly send messages by reducing the time gap between messages.'
          },
          randomTimeGap: {
            name: 'Random time gap',
            description: 'Randomise the time gap between messages'
          },
          batching: {
            name: 'Batching',
            description: 'Send your messages in batches and add a time interval between the batches'
          },
          stopCampaign: {
            name: 'Stop Campaign',
            description: 'Ability to stop messaging mid-campaign'
          },
          groupContactsExport: {
            name: 'Group Contacts Export',
            description: 'Download unsaved contacts from groups'
          },
          quickReplies: {
            name: 'Quick Replies',
            description: 'You can respond to your customers quickly, with pre-saved responses'
          },
          pauseCampaign: {
            name: 'Pause Campaign',
            description: 'Ability to resume messaging mid-campaign'
          },
          multipleAttachments: {
            name: 'Multiple Attachments',
            description: 'You can attach and send multiple images, documents, videos, etc. along with your message to users at once'
          },
          schedule: {
            name: 'Schedule',
            description: 'You can schedule at what time to send your messages to users and your messages would be sent automatically at the set time'
          },
          businessChatLink: {
            name: 'Business Chat Link',
            description: 'Generate a link to your WhatsApp number\'s chat and let customers directly connect with you'
          },
          exportUnsavedChatContacts: {
            name: 'Export Unsaved Chat Contacts',
            description: 'Download unsaved chat contacts'
          },
          meetZoomSupport: {
            name: 'Meet/Zoom Support',
            description: 'Support for meet and zoom integration'
          },
          exportUnsavedContacts: {
            name: 'Export Unsaved Contacts',
            description: 'Export unsaved contacts from chats'
          },
          groupMessage: {
            name: 'Group Message',
            description: 'Send messages to groups'
          },
          customizableTimeGap: {
            name: 'Customizable Time Gap',
            description: 'Customize the time gap between messages'
          }
        }
      },
      footer: {
        company: 'Company',
        product: 'Product',
        legal: 'Legal',
        contactUs: 'Contact Us',
        links: {
          home: 'Home',
          howToUse: 'How to Use',
          blogs: 'Blogs',
          faqs: 'FAQs',
          pricing: 'Pricing',
          requestFeature: 'Request a Feature',
          reviews: 'Reviews',
          termsOfService: 'Terms of Service',
          refundPolicy: 'Refund Policy',
          privacyPolicy: 'Privacy Policy',
          contact: 'Contact Us',
          emailUs: 'Email Us'
        },
        copyright: '  Zero to Zee | All Rights Reserved'
      },
      uniqueFeatures: {
        sectionTitle: 'Unique Features',
        sectionSubtitle: 'Features that optimize your productivity and communication with customers',
        slides: [
          {
            subTitle: 'Available in Your regional language',
            featureTitle: 'Easily Translate chats with customers and features inside the chrome extension',
            featureText: 'With single click users can translate messages received from customers and understand it in their regional language. No need to open Google translate every time you receive a message from a different language. The features inside the extension are also available in your regional language.'
          },
          {
            subTitle: 'Save Campaigns',
            featureTitle: 'Save your customer details in a single click',
            featureText: 'Improve your messaging experience. No need to upload the same Excel again or copy paste customers number again, with the save campaign feature you can save campaigns and reuse them again quickly as needed.'
          },
          {
            subTitle: 'Invoice, Report and analysis',
            featureTitle: 'Get details of your past activities',
            featureText: 'You can download reports of previous campaigns and check your usage of premium features. You can also get receipt of your monthly invoice in a single click.'
          }
        ]
      },
      features: {
        sectionTitle: 'Main Features',
        items: [
          {
            name: "Unlimited Broadcast message",
            desc: "Broadcast to multiple chats at once, effortlessly scaling your communication. No need for template approvals and extra fees."
          },
          {
            name: "Report",
            desc: "Get a detailed report of your campaigns to improve sales and utilize Prime Sender to the fullest"
          },
          {
            name: "File Attachment",
            desc: "You can attach and send images, documents, videos, etc. along with your message to users"
          },
          {
            name: "Customise your message",
            desc: "You can customize your message according to the customer with their name, email, order number, etc"
          },
          {
            name: "Add Caption",
            desc: "Add a caption to your attachments"
          },
          {
            name: "Schedule your message",
            desc: "You can schedule at what time to send your messages to users and your messages would be sent automatically at the set time"
          },
          {
            name: "Quick Response",
            desc: "You can respond to your customers quickly, with pre-saved responses"
          },
          {
            name: "Active support",
            desc: "You can click on 'Chat Support' on the extension to get your queries resolved."
          },
          {
            name: "Upload excel of numbers",
            desc: "You can directly upload an excel sheet of numbers you want to send your message to without having to type or copy-paste"
          },
          {
            name: "Download contacts from group",
            desc: "You can get a detailed download of all the contacts from a group including the ones you have not saved"
          },
          {
            name: "Message Formatting",
            desc: "You can format your message - BOLD, italic, strikethrough, and Emojis"
          },
          {
            name: "Real-Time Excel Preview",
            desc: "Get a real-time preview of uploaded CSV of numbers"
          },
          {
            name: "Real-Time Notification",
            desc: "Get real-time updates via notifications"
          },
          {
            name: "Save Templates",
            desc: "Use saved message template in a single click"
          }
        ]
      },
      howto: {
        sectionTitle: 'How to Use',
        steps: {
          uploadTitle: 'Upload',
          uploadDesc: 'Enter the numbers you want to send the message to, separated by comma.',
          sendTitle: 'Send Message',
          sendDesc1: "Enter the message you'd like to send. You could also add attachments 📁",
          sendDesc2: '1. Click on the icon of 📎 Attachment inside the text box inside the extension',
          sendDesc3: '2. Select files you would like to send. You can select multiple',
          sendDesc4: '3. You can click on Add Caption to add caption to your attachment',
          sendDesc5: '4. Click on Send button inside the extension',
          downloadTitle: 'Download Report',
          downloadDesc: 'Download the delivery report by clicking on Delivery Report to view the delivery status of the messages and the attachment sent.'
        },
        howtoimg: '/images/how-to-use.png',
     
      
      },
      contact: {
        pageTitle: 'Contact Us | Prime Sender - Free AI Web Message Sender',
        pageDescription: 'Contact Us at Prime Sender',
        pageKeywords: 'contact,prime sender contact page, prime sender support',
        sectionTitle: 'Contact Us',
        nameLabel: 'Name',
        emailLabel: 'Email',
        contactNoLabel: 'Contact No',
        messageLabel: 'Message',
        phoneError: 'Phone number must be at least 10 characters long',
        sendMessage: 'Send Message'
      },
      chatSupport: {
        tooltip: 'Hey! Can I help you?'
      },
      checkout: {
        payNow: 'Pay now',
        primeSenderPlan: 'Prime Sender {{planTitle}} plan for {{users}} users'
      },
      notification: {
        boughtPlan: 'Someone from <location>{{city}}, {{country}}</location><br/>bought <price><currency>{{currency}}</currency>{{price}} (billed yearly)</price> plan!',
        hoursAgo: '{{time}} hours ago',
        verifiedBy: 'Verified by'
      },
    },
  },
  pt: {
    translation: {
      successPage: {
        titles: {
          basic: "Sucesso Básico",
          advance: "Sucesso Avançado"
        },
        heading: "Parabéns! Você adquiriu com sucesso o PS {{plan}} Premium",
        description: "Recarregue o WhatsApp Web após 10 minutos para ativar o Premium. Você receberá um e-mail de confirmação em breve.",
        subText: "Se o Premium não for ativado, não se preocupe. Clique no botão 'Suporte ao Vivo' no canto superior esquerdo da extensão.",
        featuresTitle: "Recursos"
      },
      helpUsImprove: {
        pageTitle: 'Ajude-nos a Melhorar | Prime Sender - Enviador de Mensagens Web AI Gratuito',
        pageDescription: 'Envie seu feedback para nos ajudar a melhorar o Prime Sender',
        pageKeywords: 'ajude-nos-a-melhorar, ajuda do prime sender, feedback do prime sender',
        title: 'Ajude-nos a Melhorar',
        subtitle: 'Nós nos esforçamos para oferecer o melhor serviço possível, mas talvez haja certas coisas em que precisamos melhorar.',
        loading: 'Carregando...',
        stepsTitle: 'Se você mudou de ideia e quer saber como o Prime Sender funciona rapidamente em 3 passos, aqui está:',
        steps: [
          "1. Digite os números para os quais deseja enviar a mensagem, separados por vírgula.",
          "2. Digite a mensagem que deseja enviar. Você também pode adicionar anexos 📁.",
          "3. Baixe o relatório de entrega clicando em Relatório de Entrega para visualizar o status de entrega das mensagens e do anexo enviado."
        ],
        attachmentSteps: [
          "Clique no ícone de 📎 Anexo dentro da caixa de texto dentro da extensão",
          "Selecione os arquivos que deseja enviar. Você pode selecionar vários arquivos.",
          "Você pode clicar em Adicionar Legenda para adicionar uma legenda ao seu anexo",
          "Clique no botão Enviar dentro da extensão."
        ]
      },
      faqs: {
        pageTitle: 'Perguntas Frequentes | Prime Sender - Enviador de Mensagens Web AI Gratuito',
        pageDescription: 'Perguntas Frequentes sobre o Prime Sender',
        pageKeywords: 'perguntas frequentes do prime sender, perguntas frequentes, perguntas mais frequentes',
        sectionTitle: 'Perguntas Frequentes',
        items: [
          {
            question: "1. Funciona no Aplicativo de Desktop?",
            answer: "Não, é uma extensão do Chrome e funciona apenas no Google Chrome (Mac, Windows e Linux)."
          },
          {
            question: "2. Funciona no meu país?",
            answer: "Sim, todos os países do mundo podem usar a extensão."
          },
          {
            question: "3. Como Enviar Links Clicáveis pelo Prime Sender?",
            answer: "Você pode enviar um link clicável para qualquer pessoa que <br> - Tenha seu número salvo na lista de contatos <br> - Ou tenha respondido a você pelo menos uma vez."
          },
          {
            question: "4. Como Formatar Corretamente a Coluna de Números no Arquivo CSV?",
            answer: "1. Selecione a coluna de números -> Clique com o botão direito -> Clique em 'Formatar Células'.<br>2. Vá para a categoria 'Número' -> Vá para a caixa 'Casas Decimais'<br>3. Mude para '0' e clique em 'OK'.<br>4. Verifique se os números estão aparecendo corretamente."
          },
          {
            question: "5. Como enviar um anexo?",
            answer: "1. Clique em 'Adicionar Anexo' e selecione o tipo de anexo<br>2. Selecione o arquivo que deseja enviar<br>3. Sua conversa pessoal será aberta - envie o arquivo no chat.<br>4. Agora abra a extensão e clique em 'Enviar Mensagem'. Seu arquivo será enviado um por um para todos os contatos."
          },
          {
            question: "6. Posso enviar mensagem para pessoas em um grupo separadamente sem salvar seus contatos?",
            answer: "Sim, você pode. Veja como:<br>1. Abra o respectivo grupo e clique na extensão<br>2. Clique em 'Baixar Contatos do Grupo' e uma planilha com os números de contato será baixada<br>3. Envie este arquivo CSV e digite a mensagem que deseja enviar na extensão. Envie!"
          }
        ]
      },
      featureRequest: {
        title: "Solicitação de Recurso",
        description: "Envie sua solicitação para adicionar novos recursos ao Prime Sender",
        keywords: "prime sender solicitar recurso, solicitar novo recurso, adicionar recurso",
        loading: "Carregando..."
      },
      refundPolicyPage: {
        title: "Política de Reembolso e Cancelamento",
        shippingRefundTitle: "Política de Envio e Reembolso",
        content: [
          "Ao assinar um plano mensal, você mesmo autoriza a dedução do pagamento a cada mês. O serviço é ativado automática e imediatamente no número que você inserir durante a compra.",
          "Nosso serviço possui recursos que geralmente são de uso único e, portanto, não oferecemos reembolsos, a menos que o recurso de transmissão não tenha funcionado corretamente do nosso lado por 7 dias consecutivos. Após o cancelamento da compra, a política permanece a mesma."
        ]
      },
      privacyPolicy: {
        title: "Política de Privacidade",
        safety: {
          title: "É seguro usar a extensão?",
          content: "Os códigos de extensão da Chrome Store são revisados manualmente pela equipe do Google. Se uma extensão for perigosa para a privacidade do usuário ou violar os termos de uso, ela será removida imediatamente. Sim, é seguro."
        },
        dataSharing: {
          title: "Meus dados pessoais são expostos a terceiros?",
          items: [
            "Não são vendidos a terceiros",
            "Não são usados ou transferidos para fins não relacionados à funcionalidade principal do item",
            "Não são usados ou transferidos para determinar a capacidade de crédito ou para fins de empréstimo"
          ]
        },
        conversations: {
          title: "Minhas conversas ou contatos são expostos a terceiros?",
          content: "Não, a planilha de números que você faz upload reflete diretamente todos os dados na extensão sem salvar nada. Suas conversas são completamente seguras de acordo com as diretrizes do WhatsApp e no que diz respeito à parte de dados, isso está coberto na pergunta anterior"
        },
        dataCollection: {
          title: "Quais dados coletamos?",
          content: "Precisamos apenas de dados mínimos para fins de rastreamento, para resolver possíveis bugs na extensão e para análises básicas. Coletamos seu e-mail, número e os eventos realizados na extensão. Todas essas informações não são vendidas a terceiros"
        }
      },
      greeting: 'Olá',
      termsOfUse: {
        title: 'Termos de Serviço',
        intro: "Por favor, leia estes termos de uso atentamente antes de usar o Prime Sender (doravante 'Prime Sender'). Os termos de uso (doravante 'termos de uso') regem o seu acesso e uso do Prime Sender. O Prime Sender está disponível para seu uso apenas sob a condição de que você concorde com os termos de uso estabelecidos abaixo. Se você não concordar com todos os termos de uso, não acesse nem use o Prime Sender. Ao acessar ou usar o Prime Sender, você e a entidade que você está autorizado a representar (doravante 'você' ou 'seu') declaram sua concordância em ficar vinculado aos termos de uso.",
        userEligibility: {
          title: "Elegibilidade do Usuário",
          content: "O Prime Sender é fornecido pelo <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> disponível apenas para entidades e pessoas que tenham atingido a maioridade legal e sejam competentes para celebrar acordo(s) juridicamente vinculativo(s) de acordo com a lei aplicável. Se você não se qualificar, não tem permissão para usar o PrimeSender."
        },
        scopeOfTerms: {
          title: "Escopo dos Termos de Uso",
          content: "Estes Termos de Uso regem o Seu uso do Prime Sender e todos os aplicativos, softwares e serviços (coletivamente conhecidos como \"Serviços\") disponíveis através do Prime Sender, exceto na medida em que tais Serviços sejam objeto de um acordo separado. Termos ou acordos específicos podem se aplicar ao uso de determinados Serviços e outros itens fornecidos a Você através do Prime Sender (\"Acordo(s) de Serviço\"). Quaisquer desses Acordos de Serviço acompanharão os Serviços aplicáveis ​​ou serão listados em associação com os mesmos ou através de um hiperlink associado."
        },
        modifications: {
          title: "Modificações",
          content: "O <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> pode revisar e atualizar estes Termos de Uso a qualquer momento. O seu uso contínuo do Prime Sender após quaisquer alterações nestes Termos de Uso será considerado como aceitação de tais alterações. Qualquer aspecto do Prime Sender pode ser alterado, complementado, excluído ou atualizado sem aviso prévio, a critério exclusivo do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>. O <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> também pode alterar ou impor taxas para produtos e serviços fornecidos através do Prime Sender a qualquer momento, a seu exclusivo critério. O <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> pode estabelecer ou alterar, a qualquer momento, práticas e restrições gerais relativas a outros produtos e serviços do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> a seu exclusivo critério. Aviso de Privacidade do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> Com relação a qualquer indivíduo cujas informações pessoais sejam fornecidas por Você ao <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, You represent to <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> that You have obtained all necessary consents for the processing of such personal information contemplated by the Services."
        },
        licenseAndOwnership: {
          title: "Licença e Propriedade",
          content: "Quaisquer e todos os direitos de propriedade intelectual (\"Propriedade Intelectual\") associados ao Prime Sender e seus conteúdos (o \"Conteúdo\") são de propriedade exclusiva do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, suas afiliadas ou terceiros. O Conteúdo é protegido por leis de Propriedade Intelectual e outras leis tanto na Índia quanto em outros países. Elementos do Prime Sender também são protegidos por nome comercial, segredo comercial, concorrência desleal e outras leis e não podem ser copiados ou imitidos no todo ou em parte. Todos os gráficos personalizados, ícones e outros itens que aparecem no Prime Sender são marcas registradas, marcas de serviço ou nomes comerciais (\"Marcas\") do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, suas afiliadas ou outras entidades que concederam ao <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> o direito e a licença de usar tais Marcas e não podem ser usados ​​ou interferidos de qualquer forma sem o consentimento por escrito expresso do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>. Exceto conforme expressamente autorizado por estes Termos de Uso, Você não pode copiar, reproduzir, modificar, alterar, arrendar, emprestar, vender e/ou criar trabalhos derivados, fazer upload, transmitir e/ou distribuir a Propriedade Intelectual do Prime Sender de qualquer forma sem a permissão prévia por escrito do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> ou de um terceiro apropriado. Exceto conforme expressamente previsto nestes Termos, o <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> não concede a Você quaisquer direitos expressos ou implícitos sobre a Propriedade Intelectual do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> ou de qualquer terceiro. O <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> concede a Você, por meio destes, uma licença limitada, pessoal, intransferível, não sublicenciável e revogável para: (a) acessar e usar apenas o Prime Sender, Conteúdo e Serviços da maneira apresentada pelo <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>; e (b) acessar e usar os serviços de computador e rede do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> oferecidos no âmbito do Prime Sender (os \"Sistemas <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>\") apenas da maneira expressamente permitida pelo <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>. Except for this limited license, <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> does not convey any interest in or to the <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> Systems, information or data available via the <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> Systems (the \"Information\"), Content, Services, Web Site or any other <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> property by permitting You to access Prime Sender. Except to the extent required by law or as expressly provided herein, none of the Content and/or Information may be reverse-engineered, modified, amended, reproduced, republished, translated into any language or computer language, re-transmitted in any form or by any means, resold or redistributed without the prior written consent of. You may not make, sell, offer for sale, modify, amend, reproduce, display, publicly perform, import, distribute, retransmit or otherwise use the Content in any way unless expressly permitted to do so by <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>."
        },
        restrictions: {
          title: "Restrições ao Uso do Site",
          items: [
            "Você não deve disfarçar a origem das informações transmitidas através do Prime Sender",
            "Você não colocará informações falsas ou enganosas no Prime Sender",
            "Você não inserirá nem fará upload para o Prime Sender de qualquer informação que possa conter vírus, cavalos de Troia, worms, bombas-relógio ou outras rotinas de programação de computador que tenham a intenção de danificar, interferir, interceptar ou expropriar qualquer sistema, Prime Sender ou Informação ou que infrinjam os direitos de Propriedade Intelectual de terceiros",
            "Certas áreas do Prime Sender são restritas a clientes do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>",
            "Você não pode usar ou acessar o Prime Sender ou os Sistemas ou Serviços do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> de forma que, a critério do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, afete negativamente o desempenho ou a função dos Sistemas, Serviços ou Prime Sender do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> ou interfira na capacidade das partes autorizadas de acessar os Sistemas, Serviços ou Prime Sender do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>",
            "Você não pode enquadrar ou utilizar técnicas de enquadramento para incluir qualquer parte ou aspecto do Conteúdo ou das Informações, sem o consentimento por escrito expresso do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>"
          ]
        },
        links: {
          title: "Links",
          outbound: {
            title: "Links Externos",
            content: "O Prime Sender pode conter links para sites e recursos de terceiros (denominados coletivamente como \"Sites Vinculados\"). Esses Sites Vinculados são fornecidos apenas para sua conveniência e não como um endosso do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> ao conteúdo desses Sites Vinculados. O <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> não faz representações ou garantias quanto à correção, precisão, desempenho ou qualidade de qualquer conteúdo, software, serviço ou aplicativo encontrado em qualquer Site Vinculado. O <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> não será responsável pela disponibilidade dos Sites Vinculados ou pelo conteúdo ou atividades desses sites. Se você decidir acessar Sites Vinculados, você o faz por sua própria conta e risco. Além disso, o uso de Sites Vinculados está sujeito a quaisquer políticas e termos e condições de uso aplicáveis, incluindo, mas não se limitando à política de privacidade do Site Vinculado."
          },
          inbound: {
            title: "Links de Entrada",
            content: "É estritamente proibido vincular a qualquer página do Prime Sender que não seja <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> através de um link de texto simples na ausência de um acordo de vinculação separado com o <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>. Any website or other devices that link to <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> or any page available therein is prohibited from:",
            restrictions: [
              "Replicating Content",
              "Using a browser or border environment around the Content",
              "Implying in any fashion that <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> or any of its affiliates endorse it or its products",
              "Deturpar qualquer estado de fatos, incluindo seu relacionamento com o <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> ou qualquer uma das afiliadas do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>",
              "Apresentar informações falsas sobre os produtos ou serviços do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>",
              "Usar qualquer logotipo ou marca do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> ou de qualquer uma de suas afiliadas, sem permissão por escrito expressa do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>"
            ]
          }
        },
        termination: {
          title: "Rescisão",
          content: "Você concorda que o <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, a seu exclusivo critério, pode encerrar ou suspender o seu uso do Prime Sender, dos Sistemas <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, Informações, Serviços e Conteúdo a qualquer momento e por qualquer motivo ou sem motivo, a seu exclusivo critério, mesmo que o acesso e uso continuem a ser permitidos a terceiros. Após tal suspensão ou rescisão, você deve imediatamente:",
          actions: [
            "Interromper o uso do Prime Sender, e",
            "Destruir quaisquer cópias que você possa ter feito de qualquer parte do Conteúdo."
          ],
          warning: "Acessar o Prime Sender, os Sistemas <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, Informações ou Serviços após tal rescisão, suspensão ou interrupção constituirá ato de violação. Além disso, você concorda que o <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> não será responsável perante você ou qualquer terceiro por qualquer rescisão ou suspensão de seu acesso ao Prime Sender, aos Sistemas <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, Informações e/ou Serviços."
        },
        disclaimerOfWarranties: {
          title: "Isenção de Garantias",
          content: "O <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> não faz quaisquer declarações sobre os resultados a serem obtidos com o uso do Prime Sender, dos sistemas do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, dos serviços, das informações ou do conteúdo. O uso dos mesmos é por sua conta e risco. O Prime Sender, os sistemas do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, as informações, os serviços e o conteúdo são fornecidos \"no estado em que se encontram\". O <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, seus licenciadores e fornecedores, na máxima extensão permitida por lei, negam todas as garantias, expressas ou implícitas, legais ou de outra forma, incluindo, mas não se limitando às garantias implícitas de comercialização, não violação de direitos de terceiros e adequação a uma finalidade específica. O <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> e suas afiliadas, licenciadores e fornecedores não fazem quaisquer declarações ou garantias sobre a precisão, integridade, segurança ou atualidade do conteúdo, informações ou serviços fornecidos no ou através do uso do Prime Sender ou dos sistemas do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>. Nenhuma informação obtida por você do Prime Sender criará qualquer garantia não expressamente declarada pelo <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> nestes termos de uso."
        },
        limitationOfLiability: {
          title: "Limitação de Responsabilidade",
          content: "Na máxima extensão permitida por lei, em nenhuma circunstância o <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, suas afiliadas, licenciadores, fornecedores ou quaisquer terceiros mencionados no Prime Sender serão responsáveis por quaisquer danos incidentais, diretos, indiretos, exemplares, punitivos e/ou consequenciais, lucros cessantes e/ou danos resultantes de perda de dados ou interrupção de negócios decorrentes do uso e/ou incapacidade de usar o Prime Sender, os sistemas do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, informações, serviços ou o conteúdo, seja com base em garantia, contrato, ato ilícito, delito ou qualquer outra base legal, e quer o <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> tenha ou não sido avisado da possibilidade de tais danos. Na medida permitida por lei, os recursos previstos para você nestes termos de uso são exclusivos e limitam-se àqueles expressamente previstos aqui."
        },
        complianceWithLaw: {
          title: "Conformidade com a Lei, incluindo Controle de Exportação",
          content: "Você concorda em usar o Prime Sender em estrita conformidade com todas as leis, decisões e regulamentos aplicáveis e de uma forma que não reflita negativamente, a critério exclusivo do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, sobre a boa vontade ou reputação do <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>, e você não tomará nenhuma ação que possa fazer com que o <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> esteja em violação de quaisquer leis, decisões ou regulamentos aplicáveis ao <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a>. O <a href='https://www.prime-sender.com' className='link'>www.prime-sender.com</a> está sediado na Índia. A Índia, os Estados Unidos e certas outras jurisdições controlam a exportação de produtos e informações. Você concorda em cumprir todas as restrições aplicáveis e não exportar ou reexportar o Conteúdo (incluindo qualquer software ou o Serviços) para países ou pessoas proibidos pelas leis ou regulamentos de controle de exportação da Índia ou outros aplicáveis. Se você acessar e baixar o Conteúdo (incluindo qualquer software ou Serviços) ou Informações, você declara que não está em um país onde tal exportação seja proibida ou não é uma pessoa ou entidade para a qual tal exportação seja proibida. Você é o único responsável pelo cumprimento das leis de sua jurisdição local e quaisquer outras leis aplicáveis relativas à importação, exportação ou reexportação do Conteúdo (incluindo qualquer software ou o Serviços)."
        },
        governingLaw: {
          title: "Lei Aplicável e Jurisdição",
          content: "Na máxima extensão permitida por lei, estes Termos de Uso são regidos pelas leis internas da Índia e os tribunais de Amravati, Índia, terão jurisdição exclusiva."
        },
        general: {
          title: "Disposições Gerais",
          content: "Você não pode ceder estes Termos de Uso ou qualquer um de seus interesses, direitos ou obrigações sob estes Termos de Uso. Se qualquer disposição destes Termos de Uso for considerada inválida por qualquer tribunal com jurisdição competente, a invalidade de tal disposição não afetará a validade das demais disposições destes Termos de Uso, que permanecerão em pleno vigor e efeito. A não exigência do cumprimento de qualquer um destes Termos de Uso não será considerada como renúncia a tal termo ou condição ou a qualquer outro termo ou condição. Você pode preservar estes Termos de Uso em forma impressa para seus registros, e você renuncia a qualquer outro requisito para que estes Termos de Uso sejam comprovados por meio de um documento escrito."
        },
        refundPolicy: {
          title: "Política de Reembolso",
          content: "Ao assinar um plano mensal, você mesmo autoriza a dedução do pagamento a cada mês. O serviço é ativado automática e imediatamente no número que você inserir durante a compra. Nosso serviço possui recursos que geralmente são de uso único e, portanto, não oferecemos reembolsos, a menos que o recurso de transmissão não tenha funcionado corretamente do nosso lado por 7 dias consecutivos. Após o cancelamento da compra, a política permanece a mesma."
        },
        freeTrialPolicy: {
          title: "Política de Teste Grátis",
          content: "Os clientes podem usar o teste gratuito por um período específico que lhes dá acesso à maioria dos recursos. Uma vez que o cliente adquire um plano premium, ele terá acesso a mais recursos, dependendo do tipo de plano. Quando o plano premium expirar, o cliente não poderá acessar nenhum recurso, a menos que adquira o plano premium novamente."
        },
        accountSuspension: {
          title: "Suspensão e Banimento de Conta",
          content: "Não garantimos nem prometemos nenhum resultado específico em relação a banimentos, suspensões ou reativações de contas. Quaisquer banimentos impostos pela plataforma de origem estão além do nosso controle, e não somos responsáveis por tais ações. As decisões relacionadas ao banimento são tomadas exclusivamente pela plataforma de origem com base em suas políticas e regulamentos."
        },
        planTransferPolicy: {
          title: "Política de Transferência de Plano",
          content: "Se um usuário digitou o número errado durante a compra, ele pode transferir seu plano premium para um número diferente dentro de 7 dias após a compra através do painel. Cada plano tem direito a apenas uma transferência. Transferências não são permitidas após 7 dias ou se o plano já tiver sido transferido anteriormente."
        },
        customersTitle: 'O que os Clientes Estão Dizendo',
        viewAll: 'Ver Todos',
        reviews: {
          r1: { heading: 'Isso é incrível', review: 'O melhor aplicativo, realmente ajuda no meu trabalho. O aplicativo é simples, fácil de usar e o suporte responde rapidamente quando há problemas. A assinatura mensal é acessível. Obrigado equipe Prime Sender.', name: 'EKO WICAKSONO' },
          r2: { heading: 'Muito Útil', review: 'Tenho um pequeno negócio na Indonésia e isso me ajudou muito a conseguir novos clientes. Poucas extensões do Chrome são úteis, mas esta é muito boa. Obrigado!', name: 'David' },
          r3: { heading: 'Espetacular', review: 'Muito fácil de entender e usar, diferente de outros softwares complicados. E o que me surpreendeu foi que, durante o uso, enviei mensagem ao suporte e obtive resposta muito rápida.', name: 'Joel Peterson' },
          r4: { heading: 'Altamente Recomendado!', review: 'Até agora parece ser totalmente grátis. Você pode enviar mensagens em massa para centenas de contatos de forma muito fácil e rápida. Economiza muito tempo! Especialmente a função de importar contatos de uma planilha.', name: 'Phillipe Kenny' },
          r5: { heading: 'Obrigado Prime Sender!', review: 'Esta extensão está ajudando muito nossa empresa a entrar em contato com muitos leads. Muito útil para mensagens em massa e anúncios de ofertas. No geral, é uma ferramenta perfeita para envio em massa, eu adoro.', name: 'Alexandre Farias' },
          r6: { heading: 'Obrigado Alpha', review: 'Os recursos premium são excelentes, o suporte é muito prestativo. E-mails são respondidos dentro de 24h. Solicitações de ajuste foram atendidas poucas horas após o envio do e-mail para a equipe.', name: 'Danush Rao' }
        },
        chatSupport: {
          tooltip: 'Hey! Can I help you?'
        },
        checkout: {
          payNow: 'Pay now',
          primeSenderPlan: 'Prime Sender {{planTitle}} plan for {{users}} users'
        },
        notification: {
          boughtPlan: 'Someone from <location>{{city}}, {{country}}</location><br/>bought <price><currency>{{currency}}</currency>{{price}} (billed yearly)</price> plan!',
          hoursAgo: '{{time}} hours ago',
          verifiedBy: 'Verified by'
        },
      },
      navbar: {
        home: 'Início',
        howToUse: 'Como Usar',
        features: 'Recursos',
        pricing: 'Preços',
        blogs: 'Blogs',
        login: 'Entrar',
        language: 'Idioma',
        freeDownload: 'Download Grátis',
        checkout: {
          'payNow': 'Pagar agora',
          'primeSenderPlan': 'Plano Prime Sender {{planTitle}} para {{users}} usuários'
        },
        notification: {
          'boughtPlan': 'Alguém de <location>{{city}}, {{country}}</location><br/>comprou um plano de <price><currency>{{currency}}</currency>{{price}} (billed yearly)</price>!',
          'hoursAgo': '{{time}} horas atrás',
          'verifiedBy': 'Verificado por'
        },
      },
      blogs: {
        sectionTitle: 'Blogs',
        pageTitle: 'Blogs | Prime Sender - Enviador de Mensagens Web AI Gratuito',
        pageDescription: 'Blogs do Prime Sender',
        pageKeywords: 'Blogs,página de blog do prime sender, blogs do prime sender,Produtividade de Chat, Extensão de Envio de WhatsApp',
        blogPageTitle: 'Blog | Prime Sender - Enviador de Mensagens Web AI Gratuito',
        blogPageDescription: 'Página de Blog do Prime Sender, Extensão Eficiente de Envio de WhatsApp para Mensagens Produtivas, Desbloqueie Comunicação Perfeita com Nossa Extensão de Envio de WhatsApp',
        blogPageKeywords: 'Blogs,página de blog do prime sender, blogs do prime sender',
        translateChats: {
          title: 'Como traduzo meus chats para meu idioma local',
          date: '23 de Junho de 2024',
          step1: 'Selecione seu idioma local na extensão a partir das opções fornecidas abaixo.',
          step2: 'Depois de selecionar o idioma, clique no botão "Salvar".',
          step3: 'Agora, todos os seus chats serão traduzidos para seu idioma local.',
          step4: 'Você pode mudar o idioma a qualquer momento clicando no botão "Configurações".',
          step5: 'Você também pode traduzir seus chats manualmente selecionando o texto e clicando no botão "Traduzir".',
          translateOption: 'Uma vez que você clica na opção "Traduzir usando o Prime Sender", todo o chat será traduzido para seu idioma local. Isso também se aplica a todos os outros chats.',
          undoTranslation: 'Para desfazer a tradução, você precisa clicar na opção "Ver Original" disponível no topo do chat',
          cardSummary: '1. Selecione seu idioma local na extensão a partir das opções fornecidas abaixo. 2. Depois de selecionar o idioma, clique no botão "Salvar". 3. Agora, todos os seus chats serão traduzidos para seu idioma local.'
        },
        multipleCaption: {
          title: 'Como envio legendas individuais para cada um dos múltiplos anexos',
          date: '23 de Junho de 2024',
          coverImageAlt: 'Ícone de anexos',
          subheading1: 'Como adiciono vários anexos primeiro',
          step1: 'Para adicionar vários anexos, clique no ícone de anexos e selecione os arquivos que deseja enviar. Para adicionar outro anexo, clique novamente no ícone de anexos e selecione o próximo arquivo. Agora você pode enviar dois anexos de uma vez. Você pode adicionar quantos anexos quiser. Veja o exemplo abaixo de múltiplos anexos:',
          image1Alt: 'Exemplo de múltiplos anexos',
          subheading2: 'Agora como posso adicionar uma legenda para cada um dos múltiplos anexos',
          image2Alt: 'Recurso de legenda',
          step2: 'Depois disso, marque a caixa de seleção "Adicionar Legenda" e você receberá botões de opção para cada um dos seus anexos. Escreva sua legenda para cada anexo. Você também pode editar a legenda selecionando o botão de opção dessa imagem e digitando sua nova legenda na área de texto fornecida.',
          step3: 'Quando estiver pronto para enviar todos os anexos e legendas individuais, clique no botão "Enviar". Isso enviará todos os anexos com suas respectivas legendas para os números que você forneceu na "Caixa de Números".',
          cardSummary: '1. Adicione vários anexos clicando no ícone de anexo várias vezes. 2. Marque "Adicionar Legenda" para ativar legendas individuais. 3. Selecione cada anexo e adicione sua legenda. 4. Clique em Enviar para entregar todos os anexos com suas legendas.'
        },
        sendUsingExcel: {
          title: 'Como enviar mensagens usando excel - Prime Sender',
          date: '13 de Maio de 2023',
          coverImageAlt: 'Ícone do Excel',
          step1: '1. Carregue os números na primeira coluna para os quais você deseja enviar as mensagens. [Opcional] Você pode adicionar colunas com base em sua necessidade.',
          step2: 'Clique no botão "Exemplo" fornecido na "Caixa de Números" (a imagem é mostrada abaixo) para baixar o',
          templateLink: 'Modelo de Excel',
          image1Alt: 'Exemplo de imagem da caixa de números',
          step3: '2. Abra',
          primeSender: 'Prime Sender',
          step3Continued: 'extensão. Você pode clicar em Carregar e carregar o excel imediatamente.',
          image2Alt: 'Exemplo de carregamento de excel',
          step4: '3. Os números carregados serão visíveis na área de números.',
          step5: '4. O processo restante permanece o mesmo - Você insere a mensagem que deseja enviar e clica em "Enviar"',
          cardSummary: '1. Carregue os números na primeira coluna para os quais você deseja enviar as mensagens. [Opcional] Você pode adicionar colunas com base em sua necessidade. 2. Abra a extensão Prime Sender. Você pode clicar em Carregar e carregar o excel imediatamente.' 
        },
        scheduleMessage: {
          title: 'Como agendar uma mensagem',
          date: '22 de Dezembro de 2022',
          coverImageAlt: 'Ícone de agendamento',
          subheading1: 'Como usar o Agendador',
          paragraph1: 'A opção de agendar permite que você envie mensagens para seus contatos em um horário predefinido. Quando você deseja transmitir sua mensagem em um determinado momento do dia e não está disponível durante esse período, pode optar por agendar sua mensagem.',
          image1Alt: 'Captura de tela do recurso de agendamento',
          paragraph2: 'Após inserir os contatos e a mensagem que deseja enviar, insira o horário em que deseja enviar a mensagem. Depois de inserir o horário preferido, clique em Agendar. Você deve receber uma notificação confirmando o mesmo.',
          paragraph3: 'Você também pode ver o horário agendado na extensão',
          paragraph4: 'Se você agendou uma campanha para as 21h da noite, suas mensagens começarão a ser transmitidas na próxima vez que for 21h. A campanha será válida uma vez e será executada nas próximas 24 horas no horário definido.',
          subheading2: 'Pontos importantes a considerar',
          point1: 'Sua guia do navegador deve estar aberta no horário definido, ou seja, no momento em que a campanha será executada',
          point2: 'Por favor, não execute nenhuma campanha normal antes do horário agendado. Se você executar uma campanha antes do horário da campanha agendada, isso pode afetar sua campanha agendada',
          point3: 'Se você quiser cancelar a campanha agendada, pode simplesmente fechar a guia ou atualizar a guia',
          point4: 'Não feche a guia quando as mensagens estiverem sendo enviadas',
          cardSummary: 'Como usar o Agendador A opção de agendar permite que você envie mensagens para seus contatos em um horário predefinido. Quando você deseja transmitir sua mensagem em um determinado momento do dia e não está disponível durante esse período, pode optar por agendar sua mensagem. Após inserir os contatos e a mensagem que deseja enviar, insira o horário em que deseja enviar a mensagem. Depois de inserir o horário preferido, clique em Agendar...'
        },
        customizeMessage: {
          title: 'Como enviar mensagem personalizada usando Prime Sender',
          date: '22 de Dezembro de 2022',
          paragraph1: 'Quando você deseja informar seus clientes sobre uma oferta promocional, é sempre melhor se a mensagem for personalizada para o cliente. Isso aumenta a probabilidade de o cliente responder à mensagem. Da mesma forma, se você deseja atualizar seu cliente sobre seu pedido, é óbvio enviar a mensagem personalizada para o usuário. Veja como você pode enviar mensagens personalizadas usando',
          primeSender: 'Prime Sender',
          image1Alt: 'Planilha Excel com dados de contato',
          paragraph2: 'Insira os detalhes que você gostaria de enviar personalizados para o usuário junto com seus números de contato. Por exemplo, neste caso, eu gostaria de adicionar o Nome do cliente e uma mensagem personalizada. A primeira linha é sempre para os cabeçalhos das colunas - Números de contato, Nome e Mensagem neste caso.',
          boldNote: 'Por favor, note que a primeira coluna deve sempre ser os números de contato. Outras colunas podem ser o que você quiser e em qualquer ordem.',
          templateText: 'Aqui está um link para o modelo de excel:',
          templateLink: 'Modelo de Excel',
          paragraph3: 'Depois que o excel estiver pronto, você pode carregá-lo na extensão',
          image2Alt: 'Interface de carregamento de arquivo excel',
          paragraph4: 'Depois que estiverem prontos, você pode inserir a coluna personalizada que gostaria de enviar a partir da opção abaixo.',
          image3Alt: 'Interface da caixa de mensagem personalizada',
          paragraph5: 'Depois disso, clique em \'Enviar\'.',
          paragraph6: 'É assim que você pode enviar mensagens personalizadas usando',
          cardSummary: 'Quando você deseja informar seus clientes sobre uma oferta promocional, é sempre melhor se a mensagem for personalizada para o cliente. Isso aumenta a probabilidade de o cliente responder à mensagem. Da mesma forma, se você deseja atualizar seu cliente sobre seu pedido, é óbvio enviar a mensagem personalizada para o usuário. Veja como você pode enviar mensagens personalizadas usando Prime Sender: Insira os detalhes que você gostaria de enviar personalizados para o usuário junto com seus números de contato...'
        },
        addCountryCode: {
          title: 'Como adicionar código de país a cada número no excel?',
          date: '22 de Dezembro de 2022',
          coverImageAlt: 'Planilha Excel com códigos de país',
          paragraph1: 'Todos já enfrentaram esse problema de adicionar código de país na frente dos números de contato. Suponha que seu código de país seja +62 e você gostaria de adicioná-lo na frente de todos os contatos. A maneira mais simples de fazer isso no',
          boldText: 'excel ou planilhas',
          paragraph1Continued: 'é usar a função CONCATENAR. Veja como usá-la :',
          paragraph2: 'Primeiro, crie outra coluna e adicione +62 (ou qualquer que seja seu código de país) em cada célula da coluna. Você pode fazer isso simplesmente digitando +62 na primeira célula e arrastando o ponteiro até a última célula. Como isto :',
          image1Alt: 'Planilha Excel mostrando coluna de código de país',
          paragraph3: 'Depois disso, na coluna ao lado do número, digite \'=CONCATENAR(Coluna1, Coluna2)\' Lembre-se, Coluna1 é +62 e Coluna2 são os números de contato. É assim que vai ficar :',
          image2Alt: 'Planilha Excel mostrando função CONCATENAR',
          paragraph4: 'O sinal + pode ser formatado posteriormente, se necessário.',
          cardSummary: 'Todos já enfrentaram esse problema de adicionar código de país na frente dos números de contato. Suponha que seu código de país seja +62 e você gostaria de adicioná-lo na frente de todos os contatos. A maneira mais simples de fazer isso no excel ou planilhas é usar a função CONCATENAR. Veja como usá-la: Primeiro, crie outra coluna e adicione +62 (ou qualquer que seja seu código de país) em cada célula da coluna. Você pode fazer isso simplesmente digitando +62 na primeira célula e arrastando o ponteiro até a última célula...'
        },
        quickResponse: {
          title: 'Como responder rapidamente aos seus clientes usando Resposta Rápida do Prime Sender',
          date: '17 de Dezembro de 2022',
          coverImageAlt: 'Recurso de Resposta Rápida no Prime Sender',
          subheading: 'Resposta Rápida usando Prime Sender',
          paragraph1: 'Existem frases ou sentenças que as empresas precisam usar frequentemente ao interagir com seus clientes, como "Olá!" ou "Como podemos ajudá-lo" ou "Obrigado por entrar em contato". A Resposta Rápida no Prime Sender ajuda você a salvar esses termos e usá-los adequadamente quando necessário rapidamente sem ter que digitar o mesmo novamente. Depois de instalar o',
          primeSenderLink: 'Prime Sender',
          paragraph1Continued: 'você pode ver uma faixa de mensagens de modelo padrão logo acima da caixa de bate-papo',
          image1Alt: 'Faixa de mensagens de modelo acima da caixa de bate-papo',
          paragraph2: 'Se você clicar em \'Olá! como podemos ajudá-lo?\', ele enviará imediatamente a mensagem para a pessoa respectiva',
          image2Alt: 'Mensagem enviada usando resposta rápida',
          paragraph3: 'Você pode, claro, editar as respostas clicando em Editar:',
          image3Alt: 'Interface de edição de modelo',
          cardSummary: 'Resposta Rápida usando Prime Sender Existem frases ou sentenças que as empresas precisam usar frequentemente ao interagir com seus clientes, como "Olá!", ou "Como podemos ajudá-lo", ou "Obrigado por entrar em contato". A Resposta Rápida no Prime Sender ajuda você a salvar esses termos e usá-los adequadamente quando necessário rapidamente sem ter que digitar o mesmo novamente. Depois de instalar o Prime Sender, você pode ver uma faixa de padrões...'
        }
      },
      dashboard: {
        profile: {
          pageTitle: 'Informações do Perfil',
          name: 'Nome',
          currentPlan: 'Plano Atual',
          whatsappNumber: 'Número do Whatsapp',
          email: 'Email',
          downloadReceipt: 'Baixe seu recibo :',
          selectDate: 'Selecione a Data',
          noReceiptFound: 'Nenhum Recibo Encontrado',
          selectDatePlaceholder: '---- Selecione a data ----',
          downloadButton: 'Baixar'
        },
        tables: {
          lastCampaignsTitle: 'Detalhes das 2 Últimas Campanhas',
          recentCampaignsTitle: 'Detalhes das Campanhas Recentes',
          tableHeaders: {
            campaignName: 'Nome da Campanha',
            time: 'Tempo',
            downloadCampaign: 'Baixar Campanha',
            downloadReport: 'Baixar Relatório de Entrega',
            delete: 'Excluir'
          }
        }
      },
      home: {
        title: 'Melhor Extensão do Chrome para Mensagens e Produtividade',
        subtitle: 'Envie mensagens personalizadas e ilimitadas em massa usando Excel, imagens com legenda e muito mais com nossa extensão web',
        buyNow: 'Compre Agora',
        freeForever: 'É GRÁTIS. PARA SEMPRE.'
      },
      login: {
        pageTitle: 'Login | Prime Sender - Enviador de Mensagens Web AI Gratuito',
        leftSide: {
          heading: 'Alcance Seu Público no WhatsApp com Precisão',
          imageAlt: 'Ilustração de login'
        },
        rightSide: {
          welcome: 'Bem-vindo!',
          subtitle: 'Vamos fazer o WhatsApp trabalhar de forma mais inteligente para você com o Prime Sender.',
          callToAction: 'Faça login para conectar, engajar e crescer!'
        },
        popups: {
          mobileLoginError: {
            headline: 'Desculpe, não conseguimos identificar seu login.',
            subheadline: 'Para uma experiência mais tranquila, tente fazer login através de um dispositivo desktop. Fique atento para atualizações!'
          },
          premiumOnly: {
            headline: 'Login Disponível Apenas para Usuários Premium',
            subheadline: 'Estamos melhorando nossa experiência de login para atendê-lo melhor. Atualmente, este recurso está disponível para Usuários Premium. Fique atento para atualizações!'
          },
          serverError: {
            headline: 'Erro Interno do Servidor',
            subheadline: 'Ocorreu um problema em nosso sistema. Por favor, tente novamente mais tarde.'
          },
          emailMismatch: {
            headline: 'Email Não Corresponde à Conta do WhatsApp',
            subheadline: 'Olá {{userName}}{{comma}}parece que seu número do WhatsApp já está vinculado a um endereço de email diferente ({{maskedEmail}}). Para ver o email completo, visite a seção de perfil em sua extensão. Make sure you\'re signing in with the correct Google account.'
          }
        },
        support: {
          question: 'Ainda não consegue fazer login?',
          clickHere: 'Clique aqui'
        },
        cta: {
          purchaseNow: 'Comprar Agora'
        }
      },
      common: {
        logoAlt: 'Logo do Prime Sender'
      },
      testimonial: {
        numbersTitle: 'Nossos Números Falam por Si',
        userRatings: 'Avaliações de Usuários',
        users: 'Usuários',
        rank: 'Classificação',
        rankText: 'Remetente na Web Store',
        customersTitle: 'O que os Clientes Estão Dizendo',
        viewAll: 'Ver Todos',
        reviews: {
          r1: { heading: 'Isso é incrível', review: 'O melhor aplicativo, realmente ajuda no meu trabalho. O aplicativo é simples, fácil de usar e o suporte responde rapidamente quando há problemas. A assinatura mensal é acessível. Obrigado equipe Prime Sender.', name: 'EKO WICAKSONO' },
          r2: { heading: 'Muito Útil', review: 'Tenho um pequeno negócio na Indonésia e isso me ajudou muito a conseguir novos clientes. Poucas extensões do Chrome são úteis, mas esta é muito boa. Obrigado!', name: 'David' },
          r3: { heading: 'Espetacular', review: 'Muito fácil de entender e usar, diferente de outros softwares complicados. E o que me surpreendeu foi que, durante o uso, enviei mensagem ao suporte e obtive resposta muito rápida.', name: 'Joel Peterson' },
          r4: { heading: 'Altamente Recomendado!', review: 'Até agora parece ser totalmente grátis. Você pode enviar mensagens em massa para centenas de contatos de forma muito fácil e rápida. Economiza muito tempo! Especialmente a função de importar contatos de uma planilha.', name: 'Phillipe Kenny' },
          r5: { heading: 'Obrigado Prime Sender!', review: 'Esta extensão está ajudando muito nossa empresa a entrar em contato com muitos leads. Muito útil para mensagens em massa e anúncios de ofertas. No geral, é uma ferramenta perfeita para envio em massa, eu adoro.', name: 'Alexandre Farias' },
          r6: { heading: 'Obrigado Alpha', review: 'Os recursos premium são excelentes, o suporte é muito prestativo. E-mails são respondidos dentro de 24h. Solicitações de ajuste foram atendidas poucas horas após o envio do e-mail para a equipe.', name: 'Danush Rao' }
        }
      },
      solutions: {
        sectionTitle: 'Impulsione sua comunicação para o seu negócio',
        sectionSubtitle: 'Desbloqueie máxima eficiência usando nossa extensão de envio web. Conecte-se com todos os seus clientes instantaneamente e com eficiência',
        cards: {
          trustedTitle: 'Altamente Confiável',
          trustedDesc: 'Mais de 100.000 empresas usam nossa extensão do Chrome para se conectar com seus clientes',
          interfaceTitle: 'Interface Amigável',
          interfaceDesc: 'Nosso remetente web possui um design intuitivo para otimizar sua produtividade',
          freeTitle: 'Gratuito para usar',
          freeDesc: 'Nossa extensão do Chrome para envio web possui recursos básicos totalmente gratuitos para usar'
        }
      },
      pricing: {
        sectionTitle: 'Compare nossos planos',
        sectionSubtitle: 'Escolha o plano que funciona melhor para você',
        save: 'Economize',
        buy: 'Comprar',
        subscribe: 'Assinar',
        billedFor12Months: 'Cobrado por 12 meses',
        upiTransferOnlyAvailableForAnnualPlans: 'Transferência UPI disponível apenas para planos anuais',
        userPerMonth: '/usuário/mês',
        userPerMonthBilledAnnually: '/usuário/mês cobrado anualmente',
        buyMultipleUsers: 'Comprar para vários usuários',
        numberOfAccounts: 'Número de contas',
        numberOfAccountsCannotBeLessThan2: 'O número de contas não pode ser menor que 2',
        needMoreSupport: 'Precisa de mais suporte?',
        clickHere: 'Clique aqui',
        autoDeductionsDisclaimer: 'As deduções automáticas serão feitas do mesmo método de pagamento usado para a compra inicial',
        termsAgreement: 'Ao comprar, você concorda com nossos Termos de Serviço e Política de Privacidade',
        mainTitle: 'Preços simples e acessíveis',
        curatedForYou: 'Preços personalizados para você',
        monthly: 'Mensal',
        annual: 'Anual',
        '12Months': '12 Meses',
        '24Months': '24 Meses',
        purchasePlanToSave: 'Compre um plano de {{months}} meses para economizar <bold>{{percentage}}</bold> durante todo o ano',
        tryNow: 'Experimente agora',
        earlyBird: {
          prefix: 'Oferta antecipada para novos usuários -',
          bold: '30% de DESCONTO Extra.',
          useCode: 'Use o código'
        },
        allFreeFeatures: 'Todos os recursos Free',
        allBasicFeatures: 'Todos os recursos Basic',
        wantToPayViaUPI: 'Deseja pagar via UPI?',
        payPal: 'PayPal também disponível',
        needMultipleAccounts: 'Precisa de várias contas?',
        purchasePremiumPlanForMultipleUsers: 'Compre o plano premium para vários usuários de sua organização com <bold>desconto de até <star/> 70%</bold>',
        pricingCalculator: 'Calculadora de preços',
        billedAnnually: 'cobrado anualmente',
        popup: {
          buyMultipleAccounts: 'Comprar múltiplas contas com até 70% de desconto',
          email: 'Email :',
          numberHeading: 'Número {{index}} :',
          goBack: 'Voltar',
          numberOfAccounts: 'Número de contas:',
          emailAddress: 'Endereço de email:',
          addWhatsAppNumbersHeading: 'Adicione os <highlight>números do WhatsApp</highlight> nos quais o premium precisa ser ativado',
          showNumbers: 'Mostrar números',
          addMore: 'Adicionar mais',
          enableAutoRenew: 'Ativar renovação automática',
          autoRenewInfo: 'O valor do premium será deduzido todos os meses ao marcar esta opção.',
          pleaseWait: 'Por favor, aguarde...',
          validEmailError: 'Por favor, insira um email válido',
          validPhoneNumberError: 'Por favor, insira um número de telefone válido',
          somethingWentWrong: 'Algo deu errado. Por favor, tente novamente.',
          userPerMonthBilledAnnually: '/usuário/mês anualmente <span style="opacity:0">m</span>',
          plan: 'Plano',
          discountFirstMonth: '*Desconto aplicável apenas no primeiro mês',
          autoDeductionDisclaimer: 'Ao assinar, você concorda com deduções automáticas todos os meses de acordo com seu tipo de plano, que estenderá seu tipo de plano por um mês. Ao comprar o plano premium, você concorda com nossos <termsLink>Termos de Serviço</termsLink> e <privacyLink>Política de Privacidade</privacyLink>.',
          purchaseDisclaimer: 'Ao comprar o plano premium, você concorda com nossos <termsLink>Termos de Serviço</termsLink> e <privacyLink>Política de Privacidade</privacyLink>.',
          or: 'ou',
          advance: '(Advance)',
          basicPlan: 'Basic',
          advancePlan: 'Advance',
          monthly: 'Mensal',
          annual: 'Anual',
        },
        features: {
          unlimitedBroadcasting: {
            name: 'Transmissão Ilimitada',
            description: 'Transmita para vários chats de uma vez, escalando sua comunicação sem esforço. Sem necessidade de aprovações de modelo e taxas extras.'
          },
          attachment: {
            name: 'Enviar Anexos',
            description: 'Você pode anexar e enviar imagens, documentos, vídeos, etc. junto com sua mensagem para os usuários'
          },
          customization: {
            name: 'Personalização',
            description: 'Você pode personalizar sua mensagem de acordo com o cliente com seu nome, e-mail, número do pedido, etc'
          },
          chatSupport: {
            name: 'Suporte por Chat',
            description: 'Você pode clicar em \'Suporte por Chat\' na extensão para resolver suas dúvidas.'
          },
          caption: {
            name: 'Legenda',
            description: 'Adicione uma legenda aos seus anexos'
          },
          saveCampaignDetails: {
            name: 'Salvar Detalhes da Campanha',
            description: 'Obtenha um relatório detalhado de suas campanhas para melhorar as vendas e utilizar o Prime Sender ao máximo'
          },
          saveMessageTemplate: {
            name: 'Salvar Modelo de Mensagem',
            description: 'Use o modelo de mensagem salvo com um único clique'
          },
          detailedDeliveryReport: {
            name: 'Relatório Detalhado de Entrega',
            description: 'Obtenha um relatório detalhado de suas campanhas para melhorar as vendas e utilizar o Prime Sender ao máximo'
          },
          translateConversation: {
            name: 'Traduzir Conversa',
            description: 'Agora você pode traduzir suas mensagens para qualquer idioma com apenas um clique'
          },
          blurConversations: {
            name: 'Desfocar conversas',
            description: 'Desfoque conversas para proteger informações confidenciais.'
          },
          prioritySupport: {
            name: 'Suporte Prioritário',
            description: 'Fornecemos suporte prioritário aos nossos clientes premium, para ajudá-los com suas dúvidas'
          },
          noMinimumTimeGap: {
            name: 'Sem intervalo mínimo de tempo',
            description: 'Economize tempo e envie mensagens rapidamente reduzindo o intervalo de tempo entre as mensagens.'
          },
          randomTimeGap: {
            name: 'Intervalo de tempo aleatório',
            description: 'Aleatorize o intervalo de tempo entre as mensagens'
          },
          batching: {
            name: 'Envio em Lotes',
            description: 'Envie suas mensagens em lotes e adicione um intervalo de tempo entre os lotes'
          },
          stopCampaign: {
            name: 'Parar Campanha',
            description: 'Capacidade de parar o envio de mensagens no meio da campanha'
          },
          groupContactsExport: {
            name: 'Exportar Contatos de Grupo',
            description: 'Baixe contatos não salvos de grupos'
          },
          quickReplies: {
            name: 'Respostas Rápidas',
            description: 'Você pode responder aos seus clientes rapidamente, com respostas pré-salvas'
          },
          pauseCampaign: {
            name: 'Pausar Campanha',
            description: 'Capacidade de retomar o envio de mensagens no meio da campanha'
          },
          multipleAttachments: {
            name: 'Múltiplos Anexos',
            description: 'Você pode anexar e enviar várias imagens, documentos, vídeos, etc. junto com sua mensagem para os usuários de uma vez'
          },
          schedule: {
            name: 'Agendar',
            description: 'Você pode agendar a que horas enviar suas mensagens aos usuários e suas mensagens seriam enviadas automaticamente no horário definido'
          },
          businessChatLink: {
            name: 'Business Chat Link',
            description: 'Gere um link para o chat do seu número do WhatsApp e permita que os clientes se conectem diretamente com você'
          },
          exportUnsavedChatContacts: {
            name: 'Exportar Contatos de Chat Não Salvos',
            description: 'Baixe contatos de chat não salvos'
          },
          meetZoomSupport: {
            name: 'Suporte Meet/Zoom',
            description: 'Suporte para integração meet e zoom'
          },
          exportUnsavedContacts: {
            name: 'Exportar Contatos Não Salvos',
            description: 'Exportar contatos não salvos de chats'
          },
          groupMessage: {
            name: 'Mensagem de Grupo',
            description: 'Enviar mensagens para grupos'
          },
          customizableTimeGap: {
            name: 'Intervalo de Tempo Personalizável',
            description: 'Personalize o intervalo de tempo entre as mensagens'
          }
        }
      },
      footer: {
        company: 'Empresa',
        product: 'Produto',
        legal: 'Legal',
        contactUs: 'Contate-nos',
        links: {
          home: 'Início',
          howToUse: 'Como Usar',
          blogs: 'Blogs',
          faqs: 'Perguntas Frequentes',
          pricing: 'Preços',
          requestFeature: 'Solicitar um Recurso',
          reviews: 'Avaliações',
          termsOfService: 'Termos de Serviço',
          refundPolicy: 'Política de Reembolso',
          privacyPolicy: 'Política de Privacidade',
          contact: 'Contate-nos',
          emailUs: 'Envie-nos um Email'
        },
        copyright: '© {year} Zero to Zee | Todos os Direitos Reservados'
      },
      uniqueFeatures: {
        sectionTitle: 'Recursos Exclusivos',
        sectionSubtitle: 'Recursos que otimizam sua produtividade e comunicação com clientes',
        slides: [
          {
            subTitle: 'Disponível em seu idioma regional',
            featureTitle: 'Traduza facilmente conversas com clientes e recursos dentro da extensão do Chrome',
            featureText: 'Com um único clique, os usuários podem traduzir mensagens recebidas de clientes e entendê-las em seu idioma regional. Não é necessário abrir o Google Translate toda vez que você recebe uma mensagem em um idioma diferente. Os recursos dentro da extensão também estão disponíveis no seu idioma regional.'
          },
          {
            subTitle: 'Salvar Campanhas',
            featureTitle: 'Salve os detalhes do cliente com um único clique',
            featureText: 'Melhore sua experiência de mensagens. Não é necessário fazer upload do mesmo Excel novamente ou copiar e colar o número de clientes novamente, com o recurso de salvar campanha, você pode salvar campanhas e reutilizá-las rapidamente conforme necessário.'
          },
          {
            subTitle: 'Fatura, Relatório e análise',
            featureTitle: 'Obtenha detalhes de suas atividades passadas',
            featureText: 'Você pode baixar relatórios de campanhas anteriores e verificar seu uso de recursos premium. Você também pode obter o recibo de sua fatura mensal com um único clique.'
          }
        ]
      },
      features: {
        sectionTitle: 'Recursos Principais',
        items: [
          {
            name: "Mensagem de Transmissão Ilimitada",
            desc: "Transmita para vários chats de uma só vez, escalando sua comunicação sem esforço. Sem necessidade de aprovações de modelo e taxas extras."
          },
          {
            name: "Relatório",
            desc: "Obtenha um relatório detalhado de suas campanhas para melhorar as vendas e utilizar o Prime Sender ao máximo"
          },
          {
            name: "Anexo de Arquivo",
            desc: "Você pode anexar e enviar imagens, documentos, vídeos, etc. junto com sua mensagem para os usuários"
          },
          {
            name: "Personalize sua mensagem",
            desc: "Você pode personalizar sua mensagem de acordo com o cliente com seu nome, e-mail, número do pedido, etc"
          },
          {
            name: "Adicionar Legenda",
            desc: "Adicione uma legenda aos seus anexos"
          },
          {
            name: "Agende sua mensagem",
            desc: "Você pode programar a que horas enviar suas mensagens aos usuários e suas mensagens seriam enviadas automaticamente no horário definido"
          },
          {
            name: "Resposta Rápida",
            desc: "Você pode responder aos seus clientes rapidamente, com respostas pré-salvas"
          },
          {
            name: "Suporte ativo",
            desc: "Você pode clicar em 'Suporte de Chat' na extensão para resolver suas dúvidas."
          },
          {
            name: "Carregar excel de números",
            desc: "Você pode carregar diretamente uma planilha excel de números para os quais deseja enviar sua mensagem sem precisar digitar ou copiar e colar"
          },
          {
            name: "Baixar contatos do grupo",
            desc: "Você pode obter um download detalhado de todos os contatos de um grupo, incluindo aqueles que você não salvou"
          },
          {
            name: "Formatação de Mensagem",
            desc: "Você pode formatar sua mensagem - NEGRITO, itálico, tachado e Emojis"
          },
          {
            name: "Pré-visualização de Excel em Tempo Real",
            desc: "Obtenha uma pré-visualização em tempo real do CSV de números carregado"
          },
          {
            name: "Notificação em Tempo Real",
            desc: "Receba atualizações em tempo real via notificações"
          },
          {
            name: "Salvar Modelos",
            desc: "Use o modelo de mensagem salvo com um único clique"
          }
        ]
      },
      howto: {
        sectionTitle: 'Como Usar',
        steps: {
          uploadTitle: 'Upload',
          uploadDesc: 'Insira os números para os quais deseja enviar a mensagem, separados por vírgula.',
          sendTitle: 'Enviar Mensagem',
          sendDesc1: 'Insira a mensagem que deseja enviar. Você também pode adicionar anexos 📁',
          sendDesc2: '1. Clique no ícone de 📎 Anexo dentro da caixa de texto na extensão',
          sendDesc3: '2. Selecione os arquivos que deseja enviar. Você pode selecionar vários',
          sendDesc4: '3. Você pode clicar em Adicionar Legenda para adicionar legenda ao seu anexo',
          sendDesc5: '4. Clique no botão Enviar dentro da extensão',
          downloadTitle: 'Baixar Relatório',
          downloadDesc: 'Baixe o relatório de entrega clicando em Relatório de Entrega para ver o status de entrega das mensagens e do anexo enviados.'
        },
        howtoimg: '/images/Portuguese_how_to.png',
     
      
      },
      contact: {
        pageTitle: 'Contate-Nos | Prime Sender - Enviador de Mensagens Web AI Gratuito',
        pageDescription: 'Entre em contato com o Prime Sender',
        pageKeywords: 'contato,página de contato prime sender, suporte prime sender',
        sectionTitle: 'Contate-Nos',
        nameLabel: 'Nome',
        emailLabel: 'Email',
        contactNoLabel: 'Contato',
        messageLabel: 'Mensagem',
        phoneError: 'O número de telefone deve ter pelo menos 10 dígitos',
        sendMessage: 'Enviar Mensagem'
      },
      chatSupport: {
        tooltip: 'Ei! Posso ajudar você?'
      },
      checkout: {
        payNow: 'Pagar agora',
        primeSenderPlan: 'Prime Sender {{planTitle}} para {{users}} usuários'
      },
      notification: {
        boughtPlan: 'Alguém de <location>{{city}}, {{country}}</location><br/>comprou um plano de <price><currency>{{currency}}</currency>{{price}} (billed yearly)</price>!',
        hoursAgo: '{{time}} horas atrás',
        verifiedBy: 'Verificado por'
      },
    },
  },
};

const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
const savedLang = browserLang.startsWith('pt') ? localStorage.getItem('language') : browserLang;
const initialLang = browserLang.startsWith('pt') ? (savedLang || 'pt') : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export const changeLanguage = (lang) => {
  if (browserLang.startsWith('pt')) {
    localStorage.setItem('language', lang);
  }
  return i18n.changeLanguage(lang);
};

export default i18n;
