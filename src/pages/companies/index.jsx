import styles from "./Company.module.css";
import Image from "next/image";
import { Button } from "../../../components/Button/button";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setPurchaseProps } from "../../store/purchaseSlice";
const Company = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const Header = ({ img, location, price, onClick }) => (
    <div className="w-[100%] px-[25px] py-[40px] flex flex-col items-center">
      <Image
        width={130}
        height={50}
        src={`/assets/partner${img}.png`}
        alt=""
      ></Image>

      <p style={{ color: "rgba(55, 68, 83, 0.44)" }} className="text-[15px]">
        {location}
      </p>
      <h1 className=" whitespace-nowrap text-[#374453] text-[25px] leading-[53px]">
        {price}
      </h1>
      <Button
        text={"Select package"}
        className={"w-[100%] rounded-[5px] mt-[10px]"}
        onClick={onClick}
      ></Button>
    </div>
  );
  const tableData = [
    { name: "General Coverage", checks: [1, 1, 1] },
    { name: "Comprehensive Deductible", checks: [1, 0, 1] },
    { name: "Collision Deductible", checks: [1, 1, 1] },
    { name: "Medical Coverage", checks: [0, 1, 1] },
    { name: "Emergency Roadside Assistance", checks: [1, 1, 0] },
  ];

  const companyData = [
    {
      nameOfPackage: "Axa Mansard Insurance",
      img: 1,
      location: "Lagos, Nigeria",
      price: "N 23,000.00/yr",
    },
    {
      nameOfPackage: "NSIA Insurance",
      img: 7,
      location: "PH, Nigeria",
      price: "N 24,000.00/yr",
    },
    {
      nameOfPackage: "Lasaco Assurance PLC",
      img: 12,
      location: "Lagos, Nigeria",
      price: "N 27,000.00/yr",
    },
  ];
  const Pass = () => (
    <div className=" ">
      <div className="w-[20px] h-[20px] flex justify-center items-center rounded-[50%] bg-major">
        <Image src={"/assets/pass.svg"} width={10} height={10} alt=""></Image>
      </div>
    </div>
  );
  const states = useSelector((state) => state.purchaseState);
  return (
    <div className="">
      <div className={`${styles.Main} py-[10rem] flex justify-center`}>
        <div
          className={` text-white flex py-[5rem] flex-col items-center w-[50%] justify-center`}
        >
          <h1 className="font-bold text-center text-[48px] leading-[66px]">
            Compare Quotes from Various Insurance Companies
          </h1>
          <p className="text-center px-[200px] pt-[10px]  text-[16px] leading-[25px] opacity-90">
            Select the type of insurance policy which you will be buying today
            to start your protection
          </p>
        </div>
      </div>
      <div className="px-[10%] flex justify-between items-center mt-[50px]">
        <div className="flex">
          <input
            placeholder="Search keyword"
            style={{
              boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.05)",
              color: "rgba(108, 115, 124, 0.43)",
            }}
            className="py-[7px] bg-[#FAFAFA] text-[14px] pl-[20px] text-[#FAFAFA] outline-0"
            type="text"
          />
          <div className="py-[10px] px-[15px] rounded-[5px] bg-major">
            <Image
              src={"/assets/search.svg"}
              width={20}
              height={20}
              alt=""
              className=""
            ></Image>
          </div>
        </div>
        <div className="w-[100px] flex justify-around">
          <Image src={"/assets/left.svg"} width={8} height={10} alt=""></Image>
          <Image src={"/assets/right.svg"} width={8} height={10} alt=""></Image>
        </div>
      </div>
      <div className="px-[10%] mt-[2rem] flex justify-center">
        <table className="w-[100%]">
          <colgroup>
            <col span="2"></col>
            <col
              span="1"
              style={{
                border: " 2px solid rgba(255, 138, 30, 0.64)",
                borderRadius: "20px",
              }}
            ></col>
          </colgroup>
          <thead>
            <tr className="">
              <th></th>
              {companyData.map((data,i) => (
                <th key={i}  className="pb-[30px]">
                  <Header
                    img={data.img}
                    location={data.location}
                    price={data.price}
                    onClick={() => {
                      dispatch(
                        setPurchaseProps({
                          nameOfPackage: data.nameOfPackage,
                          location: data.location,
                          nicRegulated: false,
                        })
                      );
                      console.log(states);
                      router.push("/companies/details");
                    }}
                  ></Header>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="pt-[30px]">
            {tableData.map((data, i) => (
              <tr
                key={i}
                className={`py-[30px] ${
                  i % 2 == 0 ? "bg-white" : "bg-table1"
                } `}
              >
                <td className="text-[#7E8690] py-[18px] text-[14px] leading-[25px]">
                  {data?.name}
                </td>
                {data.checks.map((data, i) => (
                  <td key={i} className="w-[20%] py-[18px] text-center">
                    <div className="block w-[20px] ml-[50%] transform translate-x-[-50%] ">
                      {data === 1 ? <Pass></Pass> : ""}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Company;
