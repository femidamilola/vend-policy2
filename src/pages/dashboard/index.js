import Image from "next/image";
import { Heart, Notification } from "../../../components/SVG/Svg";
import styles from "./Dashboard.module.css";
import { DashboardButton } from "../../../components/Button/button";
import { DashboardCard } from "../../../components/Cards/card";
const Dashboard = () => {
  return (
    <div>
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
          <li className="px-[20px]">Dashboard</li>
          <li className="px-[20px]">Settings</li>
          <li className="px-[20px]">Damages and Claims</li>
        </ul>
        <p className="text-[16px] text-white pr-[7px]">Logout</p>
        <Notification></Notification>
        <div className="flex">
          <Image
            width={35}
            src={"/assets/profpic.svg"}
            height={34}
            alt=""
            className="mx-[20px]"
          ></Image>
          <div>
            <p className="text-[15px] text-white">Adeyemi Oladayo</p>
            <p className={`${styles.Id} text-[14px]`}>ID: 1203847328</p>
          </div>
        </div>
      </div>
      <div className="px-[10%] mt-[5rem] flex">
        <div className={` ${styles.User} w-[300px] flex flex-col items-center`}>
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
        <div className="ml-[50px] ">
          <p className="text-[#77869B] pb-[20px] font-bold text-[20px] ">
            Active Packages
          </p>
          <DashboardCard
            svg={<Heart></Heart>}
            type={"Medical"}
            company={"  Allianz Health Insurance"}
            btnText={"View more"}
          ></DashboardCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
