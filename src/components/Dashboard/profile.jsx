import {
  Card,
  CardBody,
  Avatar,
  Typography
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileInfoCard } from "../widgets/cards";
import { ToastContainer, toast } from 'react-toastify';
import { primeSenderController } from "../context";
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from "jwt-decode";
import MultipleTransferHandler from "../widgets/profileSection/multipleTransferHandler";
import TransferPlan from "../widgets/profileSection/transferPlan";

export function Profile() {
  const [controller, dispatch] = primeSenderController();
  const [data, setData] = useState({});
  const [cred, setCred] = useState({});
  const [userLocation, setUserLocation] = useState({})

  const navigate = useNavigate();

  const getUserLocation = () => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then((data) => {
        setUserLocation(data);
      })
      .catch(err => {
        console.log(err)
      });
  }

  useEffect(() => {
    if (!controller?.credentials?.cred) {
      navigate("/login")
    }
    else {
      setCred(jwtDecode(controller.credentials.cred))
      setData(controller.credentials.data[controller.profile]);
      getUserLocation()
    }
  }, [controller.profile, controller.credentials, dispatch]);

  return (
    <>
      <ToastContainer />
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
                "mobile": `+${data.phone}`,
                "country-code": `${userLocation.country}`,
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
          <TransferPlan countryData={userLocation} phone={data.phone} />
          {
            data.parent_email && data.parent_email.trim() !== "" && (
              <MultipleTransferHandler countryData={userLocation} />
            )
          }
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
