import Image from "next/image";
import { Heart, Notification, Plane, Bike } from "../../../components/SVG/Svg";
import styles from "./Dashboard.module.css";
import { DashboardButton } from "../../../components/Button/button";
import { useRouter } from "next/router";
import { DashboardCard } from "../../../components/Cards/card";
import dynamic from "next/dynamic";
import { useGetPackagesQuery } from "../../api/apiSlice";
import { useEffect, useState } from "react";
import { ClaimModal } from "../../../components/Modals/Motoroptions";
import { useDispatch } from "react-redux";
import { showClaimsModal } from "../../store/slices";
import { setCookie } from "cookies-next";
import { Left, Right } from "./dashboardSVG";
import Spinner from "../../../components/Spinner/spinner";

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
      <div className="w-[50px] flex justify-center">{icon}</div>
      <p className="text-common pl-[15px] text-[15px]">{desc}</p>
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
    error: dashError,
  } = useGetPackagesQuery();

  let userDetails = null;
  let activePackages;
  let claims = [];
  if (isLoading) {
    console.log("loading");
  } else if (packages) {
    console.log(packages, "packages");
    userDetails = packages?.data?.userDetails;
    let activepack = [...packages?.data?.activePackages];
    let claimes = [...packages?.data?.claims];
    activePackages = activepack?.reverse();
    claims = claimes.reverse();
  }
  if (isError) {
    console.log(isError);
    if (dashError?.data?.message?.message == "jwt expired")
      router.push("/signin");
  }

  const tableData = claims.map((data) => {
    const date=new Date(data.createdAt)
    return {
      claims: () => {
        if (data.insurancePackage.includes("Health"))
          return (
            <ClaimsComp icon={MedIcon} desc={data.description}></ClaimsComp>
          );
        else if (data.insurancePackage.includes("Motor"))
          return (
            <ClaimsComp icon={MotorIcon} desc={data.description}></ClaimsComp>
          );
        else if (data.insurancePackage.includes("Travel"))
          return (
            <ClaimsComp icon={TravIcon} desc={data.description}></ClaimsComp>
          );
        else "";
      },
      date: date.toLocaleDateString("en-GB"),
      cost: data.amount,
      status: () => {
        if (data.status === "pending")
          return (
            <ClaimStatus
              status={"Pending"}
              color={"text-[#FFB703]"}
            ></ClaimStatus>
          );
        else if (data.status === "resolved")
          return (
            <ClaimStatus
              status={"Resolved"}
              color={"text-[#33D1B5]"}
            ></ClaimStatus>
          );
        else "";
      },
    };
  });

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
  const [startPagin, setStartPagin] = useState(0);
  const [endPagin, setEndPagin] = useState(3);
  const [nextCount, setNextCount] = useState(0);
  function nextPagin() {
    console.log(
      nextCount,
      startPagin,
      Math.floor(activePackages.length / 3),
      activePackages.length
    );
    if (activePackages.length <= 3) return;
    else if (
      activePackages.length > 3 &&
      Math.floor(activePackages.length / 3) !== nextCount &&
      activePackages.length % 3 !== 0
    ) {
      setNextCount((count) => count + 1);
      setStartPagin((pagin) => pagin + 3);
      setEndPagin((pagin) => pagin + 3);
    } else if (
      activePackages.length > 3 &&
      Math.floor(activePackages.length / 3) !== nextCount + 1 &&
      activePackages.length % 3 === 0
    ) {
      setNextCount((count) => count + 1);
      setStartPagin((pagin) => pagin + 3);
      setEndPagin((pagin) => pagin + 3);
    } else "";
  }
  function prevPagin() {
    console.log(startPagin, activePackages.length, "prev");
    if (activePackages.length <= 3) return;
    else if (activePackages.length > 3 && startPagin !== 0) {
      setNextCount(0);
      setStartPagin((pagin) => pagin - 3);
      setEndPagin((pagin) => pagin - 3);
    } else "";
  }
  const actives = activePackages
    ? activePackages.slice(startPagin, endPagin).map((data) => {
        return {
          svg: () => {
            if (data.productType.includes("Health"))
              return <Heart fill={"#FF7777"}></Heart>;
            else if (data.productType.includes("Motor"))
              return <Bike fill={"#FFB703"}></Bike>;
            else if (data.productType.includes("Travel"))
              return <Plane fill={"#3E96FC"}></Plane>;
            else "";
          },
          background: () => {
            if (data.productType.includes("Health")) return "bg-medical";
            else if (data.productType.includes("Motor")) return "bg-motor";
            else if (data.productType.includes("Travel")) return "bg-travel";
            else "";
          },
          type: () => {
            if (data.productType.includes("Health")) return "Medical";
            else if (data.productType.includes("Motor")) return "Motor";
            else if (data.productType.includes("Travel")) return "Travel";
            else "";
          },
          company: data.nameOfPackage,
          btnText: "View more",
          color: () => {
            if (data.productType.includes("Health")) return "text-[#FF7777]";
            else if (data.productType.includes("Motor"))
              return "text-[#FFB703]";
            else if (data.productType.includes("Travel"))
              return "text-[#3E96FC]";
            else "";
          },
          borderbuttom: () => {
            if (data.productType.includes("Health"))
              return "border-b-[#F5564C]";
            else if (data.productType.includes("Motor"))
              return "border-b-[#FFB703]";
            else if (data.productType.includes("Travel"))
              return "border-b-[#3E96FC]";
            else "";
          },
        };
      })
    : "";
  const expired = [];
  const dispatch = useDispatch();
  return (
    <div>
      {!packages ? (
        <div className="absolute top-0 left-0 z-[200] flex justify-center items-center  h-[100vh] w-[100vw]">
          <Spinner></Spinner>
        </div>
      ) : (
        <div>
          <ClaimModal></ClaimModal>
          <div
            className={`flex ${styles.Navcontainer} items-center px-[5%] py-[20px]`}
          >
            <Image
              src={"/assets/logo.png"}
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
                <p className="text-[15px] text-white">
                  {userDetails ? userDetails.fullName : ""}
                </p>
                <p className={`${styles.Id} text-[14px]`}>{`ID: ${
                  userDetails ? userDetails._id : ""
                }`}</p>
              </div>
            </div>
          </div>
          <div className="px-[7%] mt-[5rem] flex relative">
            <div className="flex items-center absolute top-0 right-[10%]">
              <div
                onClick={() => {
                  prevPagin();
                }}
                className="mr-[25px] hover:opacity-[19%] cursor-pointer"
              >
                <Left></Left>
              </div>
              <div
                onClick={() => {
                  nextPagin();
                }}
                className="cursor-pointer hover:opacity-[19%]"
              >
                <Right></Right>
              </div>
            </div>
            <div
              className={` ${styles.User} w-[35%] flex flex-col items-center`}
            >
              <p className="text-[16px] text-[#77869B] font-bold py-[20px]">
                Welcome to your dashboard!
              </p>
              <div className="py-[18px] mb-auto">
                <p className="text-major text-[21px] font-bold">
                  {userDetails ? userDetails._id : ""}
                </p>
                <p className="text-center text-[#77869B] text-[13px]">
                  Member ID
                </p>
              </div>
              <div
                className={`${styles.BorderTop} flex px-[15px] py-[10px] w-[100%]  items-center justify-between`}
              >
                <div>
                  <p className="text-[#77869B] text-[15px] font-bold">
                    {userDetails ? userDetails.fullName : ""}
                  </p>
                  <p className="text-common text-[13px]">
                    Member since 19/04/2022
                  </p>
                </div>
                <p className="text-[#3E96FC] text-[13px]">View History</p>
              </div>
            </div>
            <div className="ml-[50px] w-[60%]">
              <p className="text-[#77869B] pb-[20px] font-bold text-[20px] ">
                Active Packages
              </p>
              <div className="flex w-[100%]">
                {actives.length > 0 ? (
                  actives.map((data, i) => (
                    <DashboardCard
                      key={i}
                      svg={data.svg()}
                      background={data.background()}
                      type={data.type()}
                      company={data.company}
                      btnText={data.btnText}
                      color={data.color()}
                      borderbuttom={data.borderbuttom()}
                      className={"mr-[40px]"}
                    ></DashboardCard>
                  ))
                ) : (
                  <p className="text-[#77869B] w-[100%] py-[7px] text-center text-[20px] font-bold tracking-[1px]">
                    {`You currently don't have any active packages`}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className={`px-[7%] w-[100%] mt-[2rem] py-[4rem]`}>
            <p className="text-[#77869B] py-[20px] text-[20px] font-bold tracking-[1px]">
              Expired Packages
            </p>
            <div className="flex  w-[100%]">
              {expired.length > 0 ? (
                expired.map((data, i) => (
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
                ))
              ) : (
                <p className="text-[#77869B] w-[100%] py-[7px] text-center text-[20px] font-bold tracking-[1px]">
                  {`You currently don't have any expired packages`}
                </p>
              )}
            </div>
          </div>
          <div className="py-[4rem] px-[7%]">
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
                className={`w-[65%] ${styles.User} h-[420px] px-[20px] py-[30px] justify-center`}
              >
                <div
                  className={`h-[350px] overflow-y-scroll ${styles.Hidescroll}`}
                >
                  {tableData.length > 0 ? (
                    <table className="w-[100%] relative ">
                      <thead>
                        <tr className="text-[#77869B] text-[16px]">
                          <th className="text-start w-[60%] py-[20px]">
                            Claim Description
                          </th>
                          <th className="w-[10%]">Date</th>
                          <th className="w-[20%]">Cost</th>
                          <th className="w-[10%]">Status</th>
                        </tr>
                      </thead>

                      <tbody
                        className={`w-[100%] h-[100%] relative px-[20px] pt-[30px]`}
                      >
                        {tableData.map((data, i) => (
                          <tr key={i} className=" w-[100%] ">
                            <td className="text-center w-[60%] py-[15px]">
                              {data.claims()}
                            </td>
                            <td className="text-center w-[10%] text-common text-[14px]">
                              {data.date}
                            </td>
                            <td className="text-center w-[20%] text-common text-[14px]">
                              {data.cost}
                            </td>
                            <td className="text-center w-[10%] text-common text-[14px]">
                              {data.status()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="text-[#77869B] w-[100%] py-[7px] mt-[30px] text-center text-[20px] font-bold tracking-[1px]">
                      {`You currently dont have any claims`}
                    </p>
                  )}
                </div>

                <p className=" cursor-pointer text-[12px] mt-[15px] text-major">
                  Back to Home Page
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
