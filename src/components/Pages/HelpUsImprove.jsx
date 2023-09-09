import SectionTitle from '../Common/SectionTitle';

const HelpUsImprove = () => {
  document.title = 'Help Us Improve | Prime Sender';

  return (
    <div className='main-section'>
      <SectionTitle
        gif="/gifs/help-us-improve.gif"
        title="Help us Improve"
        subtitle="We strive to give you the best service possible but maybe there are certain things we need to catch up on."
      />
      <div className="main-container improve_container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf_dgPZ7qGtU7RER5Gq6fUg1MBf33kW2om3AMllAm9jT2URzw/viewform?embedded=true"
          height="1080"
          className='main-iframe'
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
        <div className='improve_para_2'>
          <p className='sub-heading'>If you had a change of heart somehow and want to know how Web Sender
            works quickly in 3 steps, here :</p>
          <br />
          <p className='text'>1. Enter the numbers you want to send the message to, separated by comma</p>
          <p className='text'>2. Enter the message that {`you'd`} like to send. You could also add an attachment.</p>
          <p className='text'>Click on {"Add Attachment"} {`>>`} Click on {"Image/Video/Document"}{" "}
            {`>>`} Select the file {`you'd`} like to send {`>>`} The first message
            would be sent to you itself {`>>`} Once it is sent, open the extension
            and click on {"Send Message"}. The messages along with the file will be
            sent one by one.</p>
          <p className='text'>3.Download the delivery report by clicking on {`'Delivery`} {`Report'`}{" "}
            to view the delivery status of the messages and the attachment sent
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpUsImprove;
