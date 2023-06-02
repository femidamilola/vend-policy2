import Image from "next/image";
import { Heart, Notification, Plane, Bike } from "../../../components/SVG/Svg";
import styles from "./Dashboard.module.css";
import { DashboardButton } from "../../../components/Button/button";
import { useRouter } from "next/router";
import { DashboardCard } from "../../../components/Cards/card";
import dynamic from "next/dynamic";
import { useGetPackagesQuery } from "../../api/apiSlice";
import { useEffect } from "react";
import { ClaimModal } from "../../../components/Modals/Motoroptions";
import { useDispatch } from "react-redux";
import { showClaimsModal } from "../../store/slices";
import { setCookie } from "cookies-next";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const Dashboard = () => {
  const router = useRouter();
  const MedIcon = (
    <div className="h-[20px] w-[30px] bg-medical flex justify-center items-center rounded-[4px]">
      <Heart fill="#FF7777"></Heart>
    </div>
  );
  const TravIcon = (
    <div className="px-[9px] py-[5px] bg-travel flex justify-center items-center rounded-[4px]">
      <Plane fill={"#3E96FC"}></Plane>
    </div>
  );
  const MotorIcon = (
    <div className="px-[9px] py-[5px] bg-motor flex justify-center items-center rounded-[4px]">
      <Bike fill={"#FFB703"}></Bike>
    </div>
  );
  const ClaimsComp = ({ icon, desc }) => (
    <div className="flex items-center">
      {icon}
      <p className="text-common pl-[15px] text-[14px]">{desc}</p>
    </div>
  );
  const ClaimStatus = ({ status, color }) => {
    return (
      <div>
        <p className={`${color} font-bold  text-[15px]`}>{status}</p>
      </div>
    );
  };
  const {
    data: packages,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPackagesQuery();

  useEffect(() => {
    if (packages) {
      console.log(packages);
    } else if (isError) {
      console.log(error);
    }
  }, []);
  const tableData = [
    {
      claims: (
        <ClaimsComp
          icon={MedIcon}
          desc={"Broken legs from the gym/ sports centre"}
        ></ClaimsComp>
      ),
      date: "05/11/2022",
      cost: "N2,000.00",
      status: (
        <ClaimStatus status={"Pending"} color={"text-[#FFB703]"}></ClaimStatus>
      ),
    },
    {
      claims: (
        <ClaimsComp
          icon={MotorIcon}
          desc={"Car Accident that happened in Yaba"}
        ></ClaimsComp>
      ),
      date: "05/11/2022",
      cost: "N12,000.00",
      status: (
        <ClaimStatus status={"Resolved"} color={"text-[#33D1B5]"}></ClaimStatus>
      ),
    },
    {
      claims: (
        <ClaimsComp
          icon={MedIcon}
          desc={"Broken legs from the gym/ sports centre"}
        ></ClaimsComp>
      ),
      date: "05/11/2022",
      cost: "N2,000.00",
      status: (
        <ClaimStatus status={"Pending"} color={"text-[#FFB703]"}></ClaimStatus>
      ),
    },
    {
      claims: (
        <ClaimsComp
          icon={MotorIcon}
          desc={"Car Accident that happened in Yaba"}
        ></ClaimsComp>
      ),
      date: "05/11/2022",
      cost: "N12,000.00",
      status: (
        <ClaimStatus status={"Resolved"} color={"text-[#33D1B5]"}></ClaimStatus>
      ),
    },
    {
      claims: (
        <ClaimsComp
          icon={MedIcon}
          desc={"Broken legs from the gym/ sports centre"}
        ></ClaimsComp>
      ),
      date: "05/11/2022",
      cost: "N2,000.00",
      status: (
        <ClaimStatus status={"Pending"} color={"text-[#FFB703]"}></ClaimStatus>
      ),
    },
  ];

  const chartTest = {
    options: {
      title: {
        text: "Current Claim Progress",
        align: "center",
        style: {
          color: "#77869B",
          fontFamily: "Google Sans, sans-serif",
          fontSize: "18px",
        },
      },
      chart: {
        type: "donut",
      },
      legend: {
        show: false,
        position: "bottom",
      },
      tooltip: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          expandOnClick: false,
          donut: {
            size: "75%",
            labels: {
              show: true,
              name: {
                show: false,
              },
              value: {
                show: true,
                fontSize: "22px",
                fontFamily: "Google Sans, sans-serif",
                color: "#FF7C03",
                fontWeight: 700,

                formatter: function (val) {
                  return val + "%";
                },
              },
            },
          },
        },
      },
      colors: ["rgba(119, 134, 155, 0.06)", "#FF7C03"],
      dataLabels: {
        enabled: false,
      },
    },
    series: [50, 50],
  };

  const actives = [
    {
      svg: <Heart fill={"#FF7777"}></Heart>,
      background: "bg-medical",
      type: "Medical",
      company: "Allianz Health Insurance",
      btnText: "View more",
      color: "text-[#FF7777]",
      borderbuttom: "border-b-[#F5564C]",
    },
    {
      svg: <Bike fill={"#FFB703"}></Bike>,
      background: "bg-motor",
      type: "Motor",
      company: "Lasaco Motor Insurance",
      btnText: "View more",
      color: "text-[#FFB703]",
      borderbuttom: "border-b-[#FFB703]",
    },
    {
      svg: <Plane fill={"#3E96FC"}></Plane>,
      background: "bg-travel",
      type: "Travel",
      company: "HEM Travel Insurance 2",
      btnText: "View more",
      color: "text-[#3E96FC]",
      borderbuttom: "border-b-[#3E96FC]",
    },
  ];
  const expired = [
    {
      svg: <Heart fill={"#77869B"}></Heart>,
      background: "bg-expired",
      type: "Medical",
      company: "Allianz Health Insurance",
      btnText: "Renew",
      color: "text-ex",
      borderbuttom: "",
    },
    {
      svg: <Bike fill={"#77869B"}></Bike>,
      background: "bg-expired",
      type: "Motor",
      company: "Lasaco Motor Insurance",
      btnText: "Renew",
      color: "text-ex",
      borderbuttom: "",
    },
    {
      svg: <Plane fill={"#77869B"}></Plane>,
      background: "bg-expired",
      type: "Travel",
      company: "HEM Travel Insurance 2",
      btnText: "Renew",
      color: "text-ex",
      borderbuttom: "",
    },
    {
      svg: <Plane fill="#77869B"></Plane>,
      background: "bg-expired",
      type: "Travel",
      company: "HEM Travel Insurance 2",
      btnText: "Renew",
      color: "text-ex",
      borderbuttom: "",
    },
  ];
  const dispatch = useDispatch();
  return (
    <div>
      <ClaimModal></ClaimModal>
      <div
        className={`flex ${styles.Navcontainer} items-center px-[5%] py-[20px]`}
      >
        <Image
          src={"/assets/logo.svg"}
          width={150}
          height={30}
          alt="img"
          className="mr-[30px] cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        ></Image>
        <ul className="flex text-white text-[16px] mr-auto">
          <li className="px-[10px]">Dashboard</li>
          <li
            onClick={() => {
              router.push("/");
            }}
            className="px-[10px] cursor-pointer"
          >
            Product
          </li>
          <li className="px-[10px]">Settings</li>
          <li
            onClick={() => {
              dispatch(showClaimsModal());
            }}
            className="px-[10px] cursor-pointer"
          >
            Damages and Claims
          </li>
        </ul>
        <p
          onClick={() => {
            setCookie("token", null, {
              path: "/",
              secure: true,
            });
            router.push("/signin");
          }}
          className="text-[16px] text-white pr-[7px] cursor-pointer"
        >
          Logout
        </p>
        <Notification></Notification>
        <div className="flex">
          <Image
            width={35}
            src={"/assets/profpic.svg"}
            height={34}
            alt=""
            className="mx-[16px]"
          ></Image>
          <div>
            <p className="text-[15px] text-white">Adeyemi Oladayo</p>
            <p className={`${styles.Id} text-[14px]`}>ID: 1203847328</p>
          </div>
        </div>
      </div>
      <div className="px-[10%] mt-[5rem] flex">
        <div className={` ${styles.User} w-[35%] flex flex-col items-center`}>
          <p className="text-[16px] text-[#77869B] font-bold py-[20px]">
            Welcome to your dashboard!
          </p>
          <div className="py-[18px] mb-auto">
            <p className="text-major text-[21px] font-bold">120-384-7328</p>
            <p className="text-center text-[#77869B] text-[13px]">Member ID</p>
          </div>
          <div
            className={`${styles.BorderTop} flex px-[15px] py-[10px] w-[100%]  items-center justify-between`}
          >
            <div>
              <p className="text-[#77869B] text-[15px] font-bold">
                Adeyemi Oladayo
              </p>
              <p className="text-common text-[13px]">Member since 19/04/2022</p>
            </div>
            <p className="text-[#3E96FC] text-[13px]">View History</p>
          </div>
        </div>
        <div className="ml-[50px] w-[60%]">
          <p className="text-[#77869B] pb-[20px] font-bold text-[20px] ">
            Active Packages
          </p>
          <div className="flex justify-between w-[100%]">
            {actives.map((data, i) => (
              <DashboardCard
                key={i}
                svg={data.svg}
                background={data.background}
                type={data.type}
                company={data.company}
                btnText={data.btnText}
                color={data.color}
                borderbuttom={data.borderbuttom}
              ></DashboardCard>
            ))}
          </div>
        </div>
      </div>
      <div className={`px-[10%] w-[100%] mt-[2rem] py-[4rem]`}>
        <p className="text-[#77869B] py-[20px] text-[20px] font-bold tracking-[1px]">
          Expired Packages
        </p>
        <div className="flex  w-[100%]">
          {expired.map((data, i) => (
            <div key={i} className="mr-[40px]">
              <DashboardCard
                svg={data.svg}
                background={data.background}
                type={data.type}
                company={data.company}
                btnText={data.btnText}
                color={data.color}
                borderbuttom={data.borderbuttom}
              ></DashboardCard>
            </div>
          ))}
        </div>
      </div>
      <div className="py-[4rem] px-[10%]">
        <p className="text-[#77869B] py-[20px] text-[20px] font-bold tracking-[1px]">
          Recent Claims
        </p>
        <div className={`flex `}>
          <div
            className={`${styles.User} mr-auto px-[20px] py-[30px] justify-center`}
          >
            <div className="mb-auto">
              <ApexChart
                options={chartTest.options}
                series={chartTest.series}
                type="donut"
                width="300"
              ></ApexChart>
            </div>

            <div className="w-[100%]">
              <p className="text-[#77869B] text-[13px] mb-[7px]">
                Being reviewed
              </p>
              <div className="h-[20px]  flex">
                <div className="w-[50%] rounded-l-[3px] bg-major"></div>
                <div className="w-[50%] rounded-r-[3px] bg-ex"></div>
              </div>
            </div>
          </div>
          <div
            className={`w-[65%] ${styles.User} px-[20px] py-[30px] justify-center`}
          >
            <table className="w-[100%] ">
              <thead>
                <tr className="text-[#77869B] text-[16px]">
                  <th className="text-start py-[20px]">Claim Description</th>
                  <th>Date</th>
                  <th>Cost</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className={`w-[100%] px-[20px] pt-[30px]`}>
                {tableData.map((data, i) => (
                  <tr key={i} className=" w-[100%] ">
                    <td className="text-center py-[15px]">{data.claims}</td>
                    <td className="text-center text-common text-[14px]">
                      {data.date}
                    </td>
                    <td className="text-center text-common text-[14px]">
                      {data.cost}
                    </td>
                    <td className="text-center text-common text-[14px]">
                      {data.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="relative top-[20px] cursor-pointer text-[12px] text-major">
              Back to Home Page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
