import MultipleTransferHandler from "../widgets/profileSection/multipleTransferHandler";
import TransferPlan from "../widgets/profileSection/transferPlan";
import { ToastContainer, toast } from 'react-toastify';
import {
    Card,
    CardBody
} from "@material-tailwind/react";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { primeSenderController } from "../context";

export function Settings() {
    const [controller, dispatch] = primeSenderController();
    const [userLocation, setUserLocation] = useState({})
    const [data, setData] = useState(controller.credentials.data[controller.profile]);

    const navigate = useNavigate();

    const getUserLocation = () => {
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then((data) => {
                setUserLocation(data);
            })
            .catch(err => {
                console.error(err)
            });
    }

    useEffect(() => {
        if (!controller?.credentials?.cred) {
            navigate("/login")
        }
        getUserLocation()
    }, [controller.profile, controller.credentials, dispatch]);

    return (
        <>
            <ToastContainer />
            <Card className="mx-3 mt-8 mb-6 lg:mx-4 border border-blue-gray-100">
                <CardBody className="p-4">
                    <TransferPlan countryData={userLocation} />
                    {
                        data.parent_email && data.parent_email.trim() !== "" && data.parent_email !== "NULL" && (
                            <MultipleTransferHandler countryData={userLocation} />
                        )
                    }
                </CardBody>
            </Card>
        </>
    );
}

export default Settings;
