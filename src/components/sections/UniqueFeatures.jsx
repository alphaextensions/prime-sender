import UniqueFeatureCard from "../Common/UniqueFeatureCard";
import '../../styles/HomePage/uniqueFeatures.css'
import SectionTitle from "../Common/SectionTitle";

const UniqueFeatures = () => {
  return (
    <div className="unique_main">
      <SectionTitle 
        gif="/gifs/unique-features.gif" 
        title="Unique Features"
        subtitle="Features that make your workflow effortless"
      />
      <div className="unique_container">
        <div className="unique_features">
          <UniqueFeatureCard 
          imgSrc={'/images/translate.gif'}
          order={1}
          subTitle={'Available in regional language'}
          title={'Easily Translate chats with customers and features inside the extension'}
          featureText={`With single click users can translate messages recived from customers and understand it in their regional language. No need to open Google translate everytime you recieve a message from a different language. The features inside the extension are also available in your regional language.`}
          />

          <UniqueFeatureCard 
            imgSrc={'/images/save-customer-data.gif'}
            order={2}
            subTitle={'Save Campaigns'}
            title={`Save your customer details in a single click`}
            featureText={`No need to upload the same Excel again or copy paste customers number again, with the save campaign feature you can save campaigns and reuse them again quickly as needed.`}
            />

          <UniqueFeatureCard 
            imgSrc={'/images/data-analysis.gif'}
            order={1}
            subTitle={'Invoice, Report and analysis'}
            title={'Get details of your past activities'}
            featureText={`You can download reports of previous campaigns and check your usage of premium features. You can also get receipt of your monthly invoice in a single click.`}
            />
        </div>
      </div>
    </div>
  );
};

export default UniqueFeatures;