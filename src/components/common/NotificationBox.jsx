import "../../styles/NotificationBox/notification.css";
import { RxCross1 } from "react-icons/rx";
import { MdVerified } from "react-icons/md";
import { useTranslation, Trans } from 'react-i18next';

const NotificationBox = ({ notificationData, isShowingNotification, setShowNotification, setIsShowingNotification }) => {
    const { t } = useTranslation();

    const handleCloseNotification = () => {
        setIsShowingNotification(false);
        setTimeout(() => {setShowNotification(false);}, 500);
    }

    return (
        <div className={`notification_box_container ${isShowingNotification ? 'notification_slidein_animation' : 'notification_slideout_animation'}`}>
            <RxCross1 className="notification_cross_icon" onClick={handleCloseNotification}/>
            <div className="notification_img_container">
                <div className="notification_img">
                    <img src="/images/user_icon.png" />
                </div>
            </div>
            <div className="notification_text_container">
                <p className="notification_bought_text">
                    <Trans i18nKey="notification.boughtPlan"
                        values={{
                            city: notificationData.city,
                            country: notificationData.country,
                            price: notificationData.price,
                            currency: notificationData.currency,
                        }}
                        components={{
                            location: <span className="notification_location_text" />,
                            price: <span className="notification_price_text" />,
                            currency: <span className={`${notificationData.country.toLowerCase()=='india'?"rupee":""}`}/>,
                            br: <br/>,
                        }}
                    >
                        {`Someone from <location>{{city}}, {{country}}</location><br/>bought <price><currency>{{currency}}</currency>{{price}} (billed yearly)</price> plan!`}
                    </Trans>
                </p>
                <div className="notification_bottom_container">
                    <p className="notification_time_text">{t('notification.hoursAgo', { time: notificationData.time })}</p>
                    <p className="notification_stripe_verified">
                        <MdVerified />
                        <span>{t('notification.verifiedBy')} <span className="notification_stripe_text">Stripe</span></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotificationBox;
