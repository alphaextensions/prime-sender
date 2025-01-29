import "../../styles/NotificationBox/notification.css";
import { RxCross1 } from "react-icons/rx";
import { MdVerified } from "react-icons/md";

const NotificationBox = ({ notificationData, isShowingNotification, setShowNotification, setIsShowingNotification }) => {

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
                <p className="notification_bought_text">Someone from <span className="notification_location_text">{notificationData.city}, {notificationData.country}</span> <br/>bought <span className="notification_price_text"><span className={`${notificationData.country.toLowerCase()=='india'?"rupee":""}`}>{notificationData.currency}</span>{notificationData.price} (billed yearly)</span> plan!</p>
                <div className="notification_bottom_container">
                    <p className="notification_time_text">{notificationData.time} hours ago</p>
                    <p className="notification_stripe_verified">
                        <MdVerified />
                        <span>Verified by <span className="notification_stripe_text">Stripe</span></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotificationBox;
