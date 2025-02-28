export const blogHtml = {
  "send-using-excel": (
    <>
      <div className="blog_page_title">
        <p className="blog_page_heading">
          How to send messages using excel - Message Broadcaster
        </p>
        <p className="blog_page_date">May 13, 2023</p>
      </div>
      <div className="blog_page_cover_image">
        <img src="/images/excel-2.png" alt="Excel icon" />
      </div>
      <div className="blog_page_content">
        <div className="blog_page_step">
          <p>
            1. Upload the numbers in the first column you want to send the
            messages to. <span style={{ fontWeight: "bold" }}>[Optional]</span>{" "}
            You can add columns based on your requirement.{" "}
          </p>
        </div>
        <div className="blog_page_step">
          <p>
            Click on "Example" button give in "Number box"(image is given below)
            to download the{" "}
            <a
              className="blog_page_link"
              target="_blank"
              href="https://docs.google.com/spreadsheets/d/1xCZr8e0wKO8bsQdrVZdXrmfijgO-zgLXLzFjAjaX8eQ/edit?usp=sharing"
            >
              Template of Excel
            </a>
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/blog_img_1.png" alt="blog image" />
        </div>
        <div className="blog_page_step">
          <p>
            2. Open{" "}
            <a
              target="_blank"
              href="https://chrome.google.com/webstore/detail/prime-sender-best-web-ext/klfaghfflijdgoljefdlofkoinndmpia"
              className="blog_text_blue"
            >
              Message Broadcaster
            </a>{" "}
            extension. You can click on Upload and upload the excel right away.
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/uploda_excel.png" alt="blog image" />
        </div>
        <div className="blog_page_step">
          <p>3. Uploaded numbers would be visible in the numbers area.</p>
        </div>
        <div className="blog_page_step">
          <p>
            4. The remaining process remains the same - You enter the message
            you want to send and click on "Send"
          </p>
        </div>
      </div>
    </>
  ),
  "schedule-message": (
    <>
      <div className="blog_page_title">
        <p className="blog_page_heading">How to schedule a message</p>
        <p className="blog_page_date">December 22, 2022</p>
      </div>
      <div className="blog_page_cover_image">
        <img src="/images/schedule.png" alt="Schedule icon" />
      </div>
      <div className="blog_page_content">
        <div className="blog_page_subheading">
          <p>How to use Scheduler</p>
        </div>
        <div className="blog_page_step">
          <p>
            The option to schedule allows you to send messages to your contacts
            at a pre-set time. When you want to broadcast your message at a
            certain time during the day and you aren’t available during that
            time, you can choose to schedule your message.
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/blog_schedule.png" alt="blog image" />
        </div>
        <div className="blog_page_step">
          <p>
            After entering the contacts and the message you want to send, enter
            the time you would want to send the message at. Once you enter the
            preferred time, click on Schedule. You should receive a notification
            confirming about the same.{" "}
          </p>
        </div>
        <div className="blog_page_step">
          <p>You can also view the scheduled time in the extension</p>
        </div>
        <div className="blog_page_step">
          <p>
            If you have scheduled a campaign at 9 PM in the evening, your
            messages should start broadcasting the next time it turns 9 PM. The
            campaign shall be valid once and it will shoot in the next 24 hours
            at the set time.
          </p>
        </div>
        <div className="blog_page_subheading">
          <p>Important points to consider</p>
        </div>
        <ul className="blog_page_ul">
          <li>
            Your browser tab should be open at the set time i.e. the time
            campaign would shoot
          </li>
          <li style={{ fontWeight: "bold" }}>
            Please do not run any normal campaign before the scheduled time. If
            you run a campaign before the scheduled campaign time, it might
            affect your scheduled campaign
          </li>
          <li>
            If you want to cancel the scheduled campaign, you can just close the
            tab or refresh the tab
          </li>
          <li>Do not close the tab when the messages are being sent</li>
        </ul>
      </div>
    </>
  ),
  "customize-message": (
    <>
      <div className="blog_page_title">
        <p className="blog_page_heading">
          How to send customized message using Message Broadcaster
        </p>
        <p className="blog_page_date">December 22, 2022</p>
      </div>
      <div className="blog_page_content">
        <div className="blog_page_step">
          <p>
            When you want to inform your customers about a promotional offer, it
            is always better if the message is personalized to the customer. It
            increases the probability of the customer replying to the message.
            Similarly, if you want to update your customer regarding their
            order, it is obvious to send the message custom to the user. Here's
            how you can send customized messages using{" "}
            <a
              target="_blank"
              href="https://chrome.google.com/webstore/detail/prime-sender-best-web-ext/klfaghfflijdgoljefdlofkoinndmpia"
              className="blog_text_blue"
            >
              Message Broadcaster
            </a>{" "}
            :
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/blog_img_4.png" alt="blog image" />
        </div>
        <div className="blog_page_step">
          <p>
            Enter the details you'd like to send customized to the user along
            with their contact numbers. For example, in this case, I'd like to
            add the customer's Name and a custom message. The first row is
            always for the column headings - Contact numbers, Name and Message
            in this case.
            <br />
            <span style={{ fontWeight: "bold" }}>
              Please note that the first column should always be the contact
              numbers. Other columns can be whatever you like and in whichever
              order.
            </span>{" "}
            Here is a link to the template excel:{" "}
            <a
              target="_blank"
              href="https://docs.google.com/spreadsheets/d/1xCZr8e0wKO8bsQdrVZdXrmfijgO-zgLXLzFjAjaX8eQ/edit?usp=sharing"
              className="blog_text_blue"
            >
              prime-sender.com/temp-excel-file
            </a>
          </p>
        </div>
        <div className="blog_page_step">
          <p>
            Once you have the excel ready, you can now upload it in the
            extension
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/blog_img_11.png" alt="blog image" />
        </div>
        <div className="blog_page_step">
          <p>
            Once they are ready, you can now enter the custom column you'd like
            to send from the given option below.
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/customize_box.png" alt="blog image" />
        </div>
        <div className="blog_page_step">
          <p>Once this is done, click on 'Send'.</p>
        </div>
        <div className="blog_page_step">
          <p>
            This is how you can send customized messages on using{" "}
            <a
              target="_blank"
              href="https://chrome.google.com/webstore/detail/prime-sender-best-web-ext/klfaghfflijdgoljefdlofkoinndmpia"
              className="blog_text_blue"
            >
              Message Broadcaster
            </a>
          </p>
        </div>
      </div>
    </>
  ),
  "add-country-code": (
    <>
      <div className="blog_page_title">
        <p className="blog_page_heading">
          How to add country code to every number in excel?
        </p>
        <p className="blog_page_date">December 22, 2022</p>
      </div>
      <div className="blog_page_cover_image">
        <img src="/images/blog_img_5.png" alt="blog image" />
      </div>
      <div className="blog_page_content">
        <div className="blog_page_step">
          <p>
            Everyone has faced this issue of adding country code in front of
            contact numbers. Suppose your country code is +62 and you would like
            to add that in front of all the contacts. The simplest way to do
            that in{" "}
            <span style={{ fontWeight: "bold" }}>excel or spreadsheets</span> is
            to use the function CONCATENATE. Here's how to use it :
          </p>
        </div>
        <div className="blog_page_step">
          <p>
            First, make another column and add +62( or whatever your country
            code is) in each cell of the column. You can do that by simply
            typing +62 in the first cell and dragging the pointer till the last
            cell. Like this :
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/blog_img_6.png" alt="blog image" />
        </div>
        <div className="blog_page_step">
          <p>
            Once this is done, in the column besides the number, type '
            =CONCATENATE(Column1, Column2)' Remember, Column1 is +62 and Column2
            is the contact numbers. This is how it will look :
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/blog_img_15.png" alt="blog image" />
        </div>
        <div className="blog_page_step">
          <p>The + sign can be later formatted if it's needed.</p>
        </div>
      </div>
    </>
  ),
  "quick-response": (
    <>
      <div className="blog_page_title">
        <p className="blog_page_heading">
          How to reply quickly to your customers using Quick Response using
          Message Broadcaster
        </p>
        <p className="blog_page_date">December 17, 2022</p>
      </div>
      <div style={{ width: "700px" }} className="blog_page_cover_image">
        <img src="/images/blog_img_10.png" alt="COVER IMAGE" />
      </div>
      <div className="blog_page_content">
        <div className="blog_page_subheading">
          <p>Quick Response using Message Broadcaster</p>
        </div>
        <div className="blog_page_step">
          <p>
            There are phrases or sentences that businesses have to use often
            while interacting with their customers like "Hello!" or "How can we
            help you" or "Thank you for contacting". Quick Response on Prime
            Sender helps you to save such terms and use accordingly when needed
            quickly without having to type out the same again. Once you install{" "}
            <a
              target="_blank"
              href="https://chrome.google.com/webstore/detail/prime-sender-best-web-ext/klfaghfflijdgoljefdlofkoinndmpia"
              className="blog_text_blue"
            >
              Message Broadcaster
            </a>
            , you can see a strip of default template messages just above the
            chat box
          </p>
        </div>
        <div style={{ width: "800px" }} className="blog_page_content_image">
          <img src="/images/blog_img_7.png" alt="blog image" />
        </div>
        <div className="blog_page_step">
          <p>
            If you click on 'Hello! how can we help you?', it'll right away send
            the message to the respective person
          </p>
        </div>
        <div style={{ width: "800px" }} className="blog_page_content_image">
          <img src="/images/blog_img_8.png" alt="blog image" />
        </div>
        <div className="blog_page_step">
          <p>You can of course edit the responses by clicking on Edit:</p>
        </div>
        <div style={{ width: "800px" }} className="blog_page_content_image">
          <img src="/images/edit_template.png" alt="blog image" />
        </div>
      </div>
    </>
  ),
  "multiple-caption": (
    <>
      <div className="blog_page_title">
        <p className="blog_page_heading">
          How do I send individual captions for each of multiple attachments
        </p>
        <p className="blog_page_date">June 23, 2024</p>
      </div>
      <div className="blog_page_cover_image">
        <img src="/images/attachments.png" alt="Schedule icon" />
      </div>
      <div className="blog_page_content">
        <div className="blog_page_subheading">
          <p>How do I add multiple attachments first</p>
        </div>
        <div className="blog_page_step">
          <p>
            To add multiple attachments, click on the attachments icon and
            select the files you want to send. To add another attachment, click
            on the attachments icon again and select the next file. Now you can
            send two attachments at once. You can add as many attachments as you
            want. you can show the example below of multiple attachments:
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/multiple_attachments.png" alt="blog image" />
        </div>
        <div className="blog_page_subheading">
          <p>Now how can I add a caption for each of multiple attachments</p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/caption.png" alt="blog image" />
        </div>
        <div className="blog_page_step">
          <p>
            After that, click the checkbox "Add Caption" and you will get radio
            buttons for each of your attachments. Write your caption for each
            attachment. You can also edit the caption by selecting the radio
            button of that image and typing your new caption in the given text
            area.
          </p>
        </div>
        <div className="blog_page_step">
          <p>
            As you are ready to send all the attachments and individual
            captions, click on the "Send" button. This will send all the
            attachments with their respective captions to the numbers you have
            provided in the "Number Box".
          </p>
        </div>
      </div>
    </>
  ),
  "translate-chats": (
    <>
      <div className="blog_page_title">
        <p className="blog_page_heading">
          How do I translate my chats into my local language
        </p>
        <p className="blog_page_date">June 23, 2024</p>
      </div>
      <div className="blog_page_cover_image">
        <img src="/images/translate.png" alt="Schedule icon" />
      </div>
      <div className="blog_page_content">
        <div className="blog_page_step">
          <p>
            1. Select your local language in the extension from the options
            given below.
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/translate_1.png" alt="blog image" />
        </div>
        <div className="blog_page_content_image">
          <img src="/images/translate_2.png" alt="blog image" />
        </div>
        <div className="blog_page_step">
          <p>
            2. Open the chat that you want to translate. If the chat is already
            open, please reopen it to see the translate option.
          </p>
        </div>
        <div className="blog_page_step">
          <p>
            3. At the top of the chat, the option to translate the chat will be
            available.
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/switch_1.png" alt="blog image" />
        </div>
        <div className="blog_page_step">
          <p>
            Once you click on the 'Translate using Message Broadcaster' option, the
            whole chat will be translated into your local language. This will
            also apply to all other chats.
          </p>
        </div>

        <div className="blog_page_step">
          <p>
            To undo the translation, you need to click on the 'View Original'
            option available at the top of the chat
          </p>
        </div>
        <div className="blog_page_content_image">
          <img src="/images/switch_2.png" alt="blog image" />
        </div>
      </div>
    </>
  ),
};
