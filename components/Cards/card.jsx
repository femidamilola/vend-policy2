import { showPackageModal } from "@/store/slices";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Card.module.css";
import { DashboardButton } from "components/Button/button";
export const PackageCard = ({ img, text, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ border: "1px solid rgba(119, 134, 155, 0.23) " }}
      className="flex flex-col rounded-[17px] h-[110px] w-[100%] justify-center items-center py-[20px]"
    >
      {img}
      <p className="text-[16px] text-[#2D4565] leading-[27px]">{text}</p>
    </div>
  );
};
export const InsureCard = ({ img, head, text }) => {
  return (
    <div className="flex flex-col w-[100%]">
      <Image width={55} className="mb-[20px]" height={55} src={img}></Image>
      <p className="text-[18px] font-semibold py-[2rem] text-[#2D4565] leading-[27px]">
        {head}
      </p>
      <p className="text-[16px] leading-[30px] text-[#627284] tracking-[0.02em]">
        {text}
      </p>
    </div>
  );
};

export const CarouselCard = ({ img, head, text }) => {
  return (
    <div className="w-[400px] ml-[15%] mb-[0px]   flex relative flex-col px-[10px] rounded-[15px] rounded-l-0 py-[30px] bg-white">
      <Image
        width={55}
        className="absolute left-[-22px] top-[-22px] outline-4 outline-white "
        height={55}
        src={img}
      ></Image>
      <p className="text-[17px] font-semibold py-[7px] text-[#2D4565] leading-[27px]">
        {head}
      </p>
      <p className="text-[15px] leading-[25px] text-[#627284] tracking-[0.02em]">
        {text}
      </p>
    </div>
  );
};
export const CommentCard = ({ img, name, comment, className }) => {
  return (
    <div
      style={{ border: "1px solid rgba(119, 134, 155, 0.22) " }}
      className={`flex items-start px-[10px] py-[15px] bg-white rounded-[15px] ${className}`}
    >
      <Image
        src={img}
        className="mr-[7px]"
        width={59}
        height={59}
        alt=""
      ></Image>
      <div>
        <h1 className="text-[#0E3163] font-semibold text-[15px]  leading-[30px]">
          {name}
        </h1>
        <p className="text-[#657587] text-[15px] leading-[26px]">{comment}</p>
      </div>
    </div>
  );
};

export const ProductCard = ({ className, head, subhead, orange, onClick }) => {
  return (
    <div
      className={`px-[40px] w-[30%] ${className} relative py-[2.6rem] shadow-[0px_7px_32px_1px_rgba(0, 0, 0, 0.09)]`}
    >
      <h1
        className={`${
          orange ? "text-white" : "text-[#374453]"
        }  pt-[30px] text-[25px] font-bold leading-[50px]`}
      >
        {head}
      </h1>
      <p
        style={{
          color: `${
            orange ? "rgba(255, 255, 255, 0.76)" : "rgba(99, 94, 114, 0.78)"
          } `,
        }}
        className={`text-[15px] leading-[25px]`}
      >
        {subhead}
      </p>
      <div className="pb-[6rem] pt-[1rem]">
        {[
          "1 year Tenure",
          "30 days Quote Validity",
          "Extensive Coverage",
          "Add-on Coverage",
        ].map((data) => (
          <div key={data} className=" flex ">
            <Image
              width={15}
              height={15}
              src={`/assets/mark${orange ? "white" : ""}.svg`}
              alt=""
              className="mr-[10px]"
            ></Image>
            <p
              className={` ${
                orange ? "text-white" : "text-[#77869B]"
              } text-[15px] leading-[30px]`}
            >
              {data}
            </p>
          </div>
        ))}
      </div>
      <div
        onClick={onClick}
        className={`${
          orange ? "bg-[#ffffff] text-[#FF7C03]" : "bg-[#FF7C03] text-white"
        } w-[100%] rounded-[6px] cursor-pointer font-bold flex justify-center py-[10px] text-[15px] `}
      >
        <p className="tracking-[0.05em]"> Select Package </p>
      </div>
    </div>
  );
};
export const ProductCard1 = ({
  className,
  head,
  dropClass,
  subhead,
  orange,
}) => {
  const [dropDown, setDrop] = useState(false);
  const dispatch = useDispatch();
  const [buttonInput, setbuttonInput] = useState("Select Package");
  const options = [
    "Third Party Insurance",
    "Third Party Fire and Theft Insurace",
    "Third Party and Fire Insurance",
  ];
  return (
    <div
      className={`px-[40px] w-[30%] ${className} relative py-[2.6rem] shadow-[0px_7px_32px_1px_rgba(0, 0, 0, 0.09)]`}
    >
      <h1
        className={`${
          orange ? "text-white" : "text-[#374453]"
        }  pt-[30px] text-[25px] font-bold leading-[50px]`}
      >
        {head}
      </h1>
      <p
        style={{
          color: `${
            orange ? "rgba(255, 255, 255, 0.76)" : "rgba(99, 94, 114, 0.78)"
          } `,
        }}
        className={`text-[15px] leading-[25px]`}
      >
        {subhead}
      </p>
      <div className="pb-[6rem] pt-[1rem]">
        {[
          "1 year Tenure",
          "30 days Quote Validity",
          "Extensive Coverage",
          "Add-on Coverage",
        ].map((data) => (
          <div key={data} className=" flex ">
            <Image
              width={15}
              height={15}
              src={`/assets/mark${orange ? "white" : ""}.svg`}
              alt=""
              className="mr-[10px]"
            ></Image>
            <p
              className={` ${
                orange ? "text-white" : "text-[#77869B]"
              } text-[15px] leading-[30px]`}
            >
              {data}
            </p>
          </div>
        ))}
      </div>
      <div
        onClick={() => {
          if (buttonInput !== "Select Package") {
            dispatch(showPackageModal("carterms"));
          }
        }}
        className={`${
          orange ? "bg-[#ffffff]  text-[#FF7C03]" : "bg-[#FF7C03] text-white"
        } w-[100%] rounded-[6px] whitespace-nowrap  cursor-pointer font-bold flex justify-center py-[10px] ${
          buttonInput.length > 20 ? "text-[12px]" : "text-[15px]"
        } `}
      >
        <p className="tracking-[0.05em] "> {buttonInput} </p>

        <Image
          className="ml-[5px]"
          src={"/assets/down.svg"}
          alt=""
          width={10}
          height={10}
          onClick={() => setDrop(!dropDown)}
        ></Image>
      </div>

      <div
        className={`w-[80%] absolute bottom-[-100px] left-[50%] ${
          dropDown ? "block" : "hidden"
        } py-[10px] transform translate-x-[-50%] ${dropClass}`}
      >
        {options.map((data, i) => (
          <p
            key={i}
            onClick={() => {
              setbuttonInput(data);
              setDrop(false);
            }}
            className="text-[15px] cursor-pointer whitespace-nowrap leading-[25px] tracking-[2%] text-[#77869B] hover:bg-[#FF7C03] hover:text-white px-[10px] py-[3px]"
          >
            {data}
          </p>
        ))}
      </div>
    </div>
  );
};
export const DashboardCard = ({
  type,
  svg,
  company,
  btnText,
  color,
  background,
  borderbuttom,
}) => {
  return (
    <div
      className={`w-[200px] border-b ${borderbuttom} border-b-[5px] py-[20px] rounded-[8px] flex flex-col items-center ${styles.Card}`}
    >
      <div
        className={`flex px-[15px] h-[30px] justify-center ${background} items-center  w-[100px] rounded-[4px]`}
      >
        {svg}
        <p className={` ${color} ml-[4px] text-[13px]`}>{type}</p>
      </div>
      <p className="text-common  px-[30px] text-center py-[30px] text-[16px] font-bold">
        {company}
      </p>
      <DashboardButton text={btnText}></DashboardButton>
    </div>
  );
};
