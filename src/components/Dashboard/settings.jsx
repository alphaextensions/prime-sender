import TransferPlan from "../widgets/profileSection/transferPlan";
import { ToastContainer, toast } from 'react-toastify';
import {
    Card,
    CardBody
} from "@material-tailwind/react";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { primeSenderController } from "../context";

export function Settings() {
    const [controller, dispatch] = primeSenderController();

    const navigate = useNavigate();

    useEffect(() => {
        if (!controller?.credentials?.cred) {
            navigate("/login");
            return;
        }
    }, [controller.profile, controller.credentials, dispatch]);

    return (
        <>
            <ToastContainer />
            <Card className="mx-3 mt-8 mb-6 lg:mx-4 border border-blue-gray-100">
                <CardBody className="p-4">
                    <TransferPlan />
                </CardBody>
            </Card>
        </>
    );
}

export default Settings;
