import {
  Card,
  CardBody,
  Avatar,
  Typography
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileInfoCard } from "../widgets/cards";
import { primeSenderController } from "../context";
import { jwtDecode } from "jwt-decode";
import MultipleTransferHandler from "../widgets/profileSection/multipleTransferHandler";
import TransferPlan from "../widgets/profileSection/transferPlan";

export function Profile() {
  const [controller, dispatch] = primeSenderController();
  const [data, setData] = useState({});
  const [cred, setCred] = useState({});

  const navigate = useNavigate();

  const is_transfer_allowed = (user) => {
    try {
      let { purchased_date, is_account_transfered } = user;

      let today = new Date();
      let days_since_purchased = Utility.get_days_diff(today, purchased_date);

      if (!is_account_transfered && days_since_purchased <= TRANSFER_ALLOWED_DAYS) {
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error in is_transfer_allowed: ", error);
      return false;
    }
  }

  const convert_date_str = (date = null) => {
    if (!date)
      return null;
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }

  const convert_date = (date = null) => {
    if (!date)
      return null;
    return new Date(date);
  }

  const get_days_diff = (date1, date2) => {
    date1 = convert_date(date1);
    date2 = convert_date(date2);

    if (!date1 || !date2)
      return NaN;

    let days_diff = Math.floor((date1.getTime() - date2.getTime()) / (1000 * 3600 * 24))
    return days_diff;
  }

  useEffect(() => {
    if (!controller.credentials) {
      navigate("/login")
    }
    else {
      setCred(jwtDecode(controller.credentials.cred))
      setData(controller.credentials.data[controller.profile]);
    }
  }, [controller.profile, controller.credentials, dispatch]);

  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br transition-transform from-[#00d4bb] to-[#009a88]" />
      </div>
      <Card className="mx-3 -mt-40 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src={cred.picture}
                alt="user-img"
                size="xl"
                variant="circular"
                className="w-[50px] h-[50px]"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {cred.given_name || "Default Username"}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  {data.plan_type || "Default PlanType"}
                </Typography>
              </div>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <ProfileInfoCard
              title="Profile Information"
              details={{
                "first name": `${cred.given_name}`,
                "mobile": `${data.phone}`,
                "country-code": `IN`,
                "email": `${data.email}`,
              }}
            />
            <div className="mt-5">
              <ProfileInfoCard
                title=""
                details={{
                  "plan-type": `${data.plan_type}`,
                  "Start-Date": `${data.subscribed_date}`,
                  "Expiry-Date": `${data.expiry_date}`,
                  "Last Plan Type": `${data.last_plan_type}`
                }}
              />
            </div>
          </div>
          <TransferPlan isAuthor={data.parent_email === "" || data.email === data.parent_email ? true : false} />
          {
            data.parent_email !== "" &&
            <MultipleTransferHandler />
          }
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
