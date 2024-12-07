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
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from "jwt-decode";

export function Profile() {
  const [controller, dispatch] = primeSenderController();
  const [data, setData] = useState({});
  const [cred, setCred] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (!controller?.credentials?.cred) {
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
              </div>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <ProfileInfoCard
              title="Profile Information"
              details={{
                "Name": `${data?.name ? data.name : cred.given_name}`,
                "Current Plan": `${data.plan_type}`,
              }}
            />
            <div className="mt-5">
              <ProfileInfoCard
                title=""
                details={{
                  "Whatsapp Number": `+${data.phone}`,
                  "Email": `${data.email}`,
                }}
              />
            </div>
          </div>

        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
