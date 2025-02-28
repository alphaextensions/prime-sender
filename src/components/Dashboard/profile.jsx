import {
  Card,
  CardBody,
  Avatar,
  Typography,
  Select,
  Option,
  Button
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
  const [invoiceObject, setInvoiceObject] = useState([]);
  const [selectedDate, setSelectedDate] = useState("---- Select date ----")
  const navigate = useNavigate();

  const sortDatesDescending = (dateArray) => {
    return dateArray.sort(function (a, b) {
      const datePartsA = a.date.split('/').map(Number);
      const datePartsB = b.date.split('/').map(Number);

      const dateA = new Date(datePartsA[2], datePartsA[0] - 1, datePartsA[1]);
      const dateB = new Date(datePartsB[2], datePartsB[0] - 1, datePartsB[1]);

      return dateB - dateA;
    });
  }

  const formatDate = (inputDate) => {
    const dateParts = inputDate.split('/');
    const day = parseInt(dateParts[1]);
    const month = parseInt(dateParts[0]) - 1;
    const year = parseInt(dateParts[2]);
    const formattedDate = new Date(year, month, day);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDateString = formattedDate.toLocaleDateString('en-US', options);
    const splittedDate = formattedDateString.split(' ');
    let returnDateString = `${splittedDate[0]}, ${splittedDate[2]}`
    return returnDateString;
  }

  const getInvoiceArr = async () => {
    try {

      if (!data?.email || !data?.phone) {
        console.error("Email or phone is undefined. Please provide valid data.");
        return;
      }

      let url = `${import.meta.env.VITE_PROD_FETCH_INVOICE_API}?email=${data.email}&phone=${data.phone}`;

      const res = await fetch(url);
      const jsonData = await res.json();

      if (jsonData.length === 0) {
        setSelectedDate("No Receipt Found");
        return;
      }

      const sortedData = sortDatesDescending(jsonData);
      const formattedData = sortedData.map((item) => ({
        ...item,
        date: formatDate(item.date),
      }));

      setInvoiceObject(formattedData);
    } catch (error) {
      console.error("Error fetching and processing invoices:", error);
    }
  };

  const redirectInvoice = () => {
    if (selectedDate !== "---- Select date ----" && selectedDate !== "No Receipt Found") {
      let invoice = invoiceObject.find((invoice) => {
        return invoice.date == selectedDate;
      })
      window.open(invoice.invoice_pdf_url, "_blank");
    }
  }


  useEffect(() => {
    if (!controller?.credentials?.cred) {
      navigate("/login")
    }
    else {
      setCred(jwtDecode(controller.credentials.cred))
      setData(controller.credentials.data[controller.profile]);
    }
  }, [controller.profile, controller.credentials, dispatch]);

  useEffect(() => {
    const value = window.localStorage.getItem("PRIMES::Transfer")
    if (value === "true") {
      navigate("/dashboard/settings")
      window.localStorage.removeItem("PRIMES::Transfer");
    }
  }, [])

  useEffect(() => {
    if (data && invoiceObject.length === 0) {
      getInvoiceArr()
    }
  }, [data])

  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br transition-transform from-[#00d4bb] to-[#91B5FB]" />
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
                  {data?.name ? data.name : cred.given_name}
                </Typography>
              </div>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <ProfileInfoCard
              title="Profile Information"
              details={{
                "Name": `${data?.name ? data.name : cred.given_name}`,
                "Current Plan": `${data?.plan_type ? data.plan_type : "-"}`,
              }}
            />
            <div className="mt-5">
              <ProfileInfoCard
                title=""
                details={{
                  "Whatsapp Number": `+${data?.phone ? data.phone : "-"}`,
                  "Email": `${data.email || data.parent_email}`,
                }}
              />
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className="mx-3 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="px-3 py-[10px] flex items-center">
            <Typography className="font-bold text-lg text-blue-gray-900">Download your receipt : </Typography>
            <div className="w-[300px] ml-5">
              <Select
                onChange={(date) => setSelectedDate(date)}
                variant="outlined"
                label="Select Date"
              >
                {
                  invoiceObject.length === 0 ? <Option value={selectedDate}>{selectedDate}</Option> :
                    invoiceObject.map(({ date }) => (
                      <Option key={date} value={date}>{date}</Option>
                    ))
                }

              </Select>
            </div>
            <Button
              onClick={redirectInvoice}
              className="ml-3 bg-[#91B5FB]"
            >
              Download
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
