import styles from "./Proposal.module.css";
import { GreaterThan, LeftArrow } from "../SVG/Small";
import UploadCard from "../UploadCard";
import { TextInput1 } from "../Foms/form";
import PhoneInput from "react-phone-input-2";
import { Button } from "../Button/button";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { PayLock, Paycard, Paypal } from "../SVG/Svg";
const HealthForm = () => {
  const [section, setSection] = useState(1);
  const [id, setId] = useState("");
  let sectionDisplayed = <div></div>;
  const plans = [
    "FGH PEARL",
    "FGH JADE",
    "FGH CRYS",
    "FGH MARB",
    "FGH SPE-1",
    "FGH SPE-2",
    "FGH SPE-3",
    "FGH ORC",
    "FGH PLUM",
    "FGH IRIS",
  ];
  const CheckComp = ({ name }) => {
    return (
      <div className="flex flex-col items-center mr-[10px]">
        <label
          className="text-[#77869B] whitespace-nowrap text-[15px] py-[10px]"
          htmlFor=""
        >
          {name}
        </label>
        <div className="relative ml-[-20px]">
          <input
            type="checkbox"
            id="defaultcheck"
            className={`${styles.DefaultCheckbox}`}
          />
          <div id="customcheck" className={`${styles.CustomCheckbox}`}></div>
        </div>
      </div>
    );
  };
  if (section === 1) {
    sectionDisplayed = (
      <div className="px-[10%] ">
        <div>
          <p className="text-[#374453] text-[23px] leading-[53px] font-bold my-[20px]">
            Personal Data
          </p>
          <div className={`${styles.Shadow2} bg-white px-[5%] py-[50px]`}>
            <div className="flex justify-between mb-[20px]">
              <TextInput1
                className={"w-[47%]"}
                label={"Name of Proposer (Mr/Mrs/Ms)"}
              ></TextInput1>
              <TextInput1
                className={"w-[47%]"}
                label={"E-mail Address"}
              ></TextInput1>
            </div>
            <div className="flex justify-between mb-[20px]">
              <TextInput1
                className={"w-[28%]"}
                label={"Date Of Birth"}
              ></TextInput1>
              <TextInput1
                className={"w-[67%]"}
                label={"Home Address (Full)"}
              ></TextInput1>
            </div>
            <div className="flex justify-between mb-[20px]">
              <TextInput1 label={"City"} className={"w-[35%]"}></TextInput1>
              <div className="w-[35%]">
                <label
                  className="text-[#77869B] py-[10px] text-[16px]"
                  htmlFor=""
                >
                  Contact Phone No
                </label>
                <PhoneInput
                  country={"us"}
                  containerClass={`${styles.ContainerClass}`}
                  inputClass={`my-[7px] ${styles.InputClass}`}
                  buttonClass={`${styles.Dropdown}`}
                  onChange={() => {
                    "";
                  }}
                ></PhoneInput>
              </div>
              <TextInput1
                label={"Marital Status"}
                className={"w-[25%]"}
              ></TextInput1>
            </div>
            <div className={`flex items-center py-[25px] ${styles.Line}`}>
              <p className="text-[#77869B] text-[13px] mt-[30px] mr-[20px]">
                Plan Selection(Tick the box)
              </p>
              <div className="flex">
                {plans.map((data) => (
                  <CheckComp key={data} name={data}></CheckComp>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#374453] text-[23px] leading-[53px] font-bold my-[20px]">
            Employment Data
          </p>
          <div className={`${styles.Shadow2} bg-white px-[5%] py-[50px]`}>
            <div className="flex  mb-[20px]">
              <TextInput1
                className={"w-[35%] mr-[40px]"}
                label={"Name Of Company"}
              ></TextInput1>
              <TextInput1
                className={"w-[35%]"}
                label={"Name Of Hospital"}
              ></TextInput1>
            </div>
            <div className="flex  mb-[20px]">
              <TextInput1
                className={"w-[35%] mr-[40px]"}
                label={"Residential Address"}
              ></TextInput1>
              <TextInput1
                className={"w-[35%]"}
                label={"Address Of Hospital"}
              ></TextInput1>
            </div>

            <div className="flex mb-[20px]">
              <TextInput1
                className={"w-[35%] mr-[40px]"}
                label={"LGA"}
              ></TextInput1>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#374453] text-[23px] leading-[53px] font-bold my-[20px]">
            Dependants
          </p>
          <div className={`${styles.Shadow2} bg-white px-[5%] py-[50px]`}>
            <div className="flex mb-[20px]">
              <TextInput1
                className={"w-[35%] mr-[40px]"}
                label={"Spouse"}
              ></TextInput1>
              <TextInput1 className={"w-[35%]"} label={"Children"}></TextInput1>
            </div>
            <div className="flex  mb-[20px]">
              <TextInput1
                className={"w-[40%] mr-[40px]"}
                label={"Spouse"}
              ></TextInput1>
              <TextInput1
                className={"w-[10%] mr-[40px]"}
                label={"Date OF Birth"}
              ></TextInput1>
              <TextInput1
                className={"w-[10%] mr-[40px]"}
                label={"Gender"}
              ></TextInput1>
              <TextInput1
                className={"w-[20%] mr-[40px]"}
                label={"Medical Conditions"}
              ></TextInput1>
            </div>
            <div className="mt-[30px] flex items-center">
              <Button
                onClick={() => {
                  setSection(2);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                text={"Upload Documents"}
              ></Button>
              <p className="text-[#F5564C] ml-[50px] text-[14px]">Cancel</p>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
  if (section == 2) {
    sectionDisplayed = (
      <div className="px-[10%]">
        <p className="text-[#374453] text-[23px] leading-[53px] font-bold my-[20px]">
          Please upload document
        </p>
        <div className={`${styles.Shadow2} bg-white px-[5%]  py-[50px]`}>
          <UploadCard
            name={id}
            setName={setId}
            identity={"Who are you? (ID verification)"}
            fill={"#321C77"}
          ></UploadCard>
          <div className="mt-[30px] flex items-center">
            <Button
              onClick={() => {
                setSection(3);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              text={"Proceed to payment"}
            ></Button>
            <p className="text-[#F5564C] ml-[50px] text-[14px]">Cancel</p>
          </div>
        </div>
      </div>
    );
  }
  if (section == 3) {
    sectionDisplayed = (
      <div className="px-[10%]">
        <p className="text-[#374453] text-[23px] leading-[53px] font-bold my-[20px]">
          Checkout
        </p>
        <div className="flex justify-between items-stretch">
          <div
            className={`${styles.Shadow2} bg-white px-[5%] w-[60%]   py-[50px]`}
          >
            <div className="flex justify-between  mb-[20px]">
              <TextInput1
                className={"w-[47%] "}
                label={"First Name"}
              ></TextInput1>

              <TextInput1
                className={"w-[47%] "}
                label={"Last Name"}
              ></TextInput1>
            </div>
            <div className="flex justify-between mb-[20px]">
              <TextInput1
                className={"w-[40%] "}
                label={"Card Number"}
              ></TextInput1>
              <TextInput1
                className={"w-[30%] "}
                label={"Expiry Date"}
              ></TextInput1>
              <TextInput1 className={"w-[20%] "} label={"CVV"}></TextInput1>
            </div>
            <div className="flex justify-between  mb-[20px]">
              <TextInput1
                className={"w-[47%] "}
                label={"Phone Number"}
              ></TextInput1>

              <TextInput1
                className={"w-[47%] "}
                label={"E-mail Address"}
              ></TextInput1>
            </div>
            <div className="flex mt-[30px]">
              <div className="flex items-center h-[43px] mr-[40px] border border-[#E0E0E0] px-[15px] rounded-[5px]">
                <Paycard></Paycard>
                <p className="text-[#535D6C] text-[15px] tracking-[1px] font-bold px-[20px]">
                  Debit card
                </p>
                <div className="w-[20px] h-[20px] rounded-[50%] flex justify-center items-center border border-[#E0E0E0]">
                  <div className="w-[12px] h-[12px] rounded-[50%] bg-[#E0E0E0]"></div>
                </div>
              </div>
              <div className="flex items-center h-[43px] border border-[#E0E0E0] px-[15px] rounded-[5px]">
                <Paypal></Paypal>
                <p className="text-[#535D6C] text-[15px] tracking-[1px] font-bold px-[20px]">
                  Paypal
                </p>
                <div className="w-[20px] h-[20px] rounded-[50%] flex justify-center items-center border border-[#E0E0E0]">
                  <div className="w-[12px] h-[12px] rounded-[50%] bg-[#E0E0E0]"></div>
                </div>
              </div>
            </div>
            <div className="flex mt-[25px]">
              <PayLock></PayLock>
              <p className="text-[#77869B] ml-[15px] text-[12px]">
                Your transaction is secure with SSL encryption
              </p>
            </div>
          </div>
          <div
            className={`${styles.Shadow2} bg-white px-[10px] py-[15px] pb-[100px] w-[30%]`}
          >
            <div className={`${styles.CheckoutBg} w-[100%] h-[40%]`}></div>
            <p
              className={`${styles.Line} mt-[20px] grid m-auto w-[80%] tracking-[1px] text-[#77869B] text-[15px] font-bold text-center px-[20px] py-[13px]`}
            >
              Third Party Fire Insurance
            </p>
            <div className="px-[15px] pt-[30px]">
              <div className="flex justify-between mb-[20px]">
                <p className="text-[15px] text-[#77869B]">Subtotal</p>
                <p className="text-[15px] font-bold text-[#77869B]">
                  ₦23,000.00
                </p>
              </div>
              <div className="flex justify-between mb-[20px]">
                <p className="text-[15px] text-[#77869B]">Discount</p>
                <p className="text-[15px] font-bold text-[#77869B]">₦0.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[15px] text-[#77869B]">Service Fee</p>
                <p className="text-[15px] font-bold text-[#77869B]">₦0.00</p>
              </div>
            </div>
            <Button
              text={"Pay Insurance"}
              className={"w-[100%] my-[15px] mt-[30px]"}
            ></Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div
        className={`px-[10%] flex items-center py-[20px]  ${styles.Shadow1}`}
      >
        <div className="flex  items-center">
          <LeftArrow></LeftArrow>
          <p
            onClick={() => {
              section > 1 ? setSection(section - 1) : "";
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-[#6A7A92] cursor-pointer opacity-[0.33] px-[3px] text-[16px]"
          >
            Back
          </p>
        </div>
        <div className="flex ml-[40%] border border-[#D3D8DF] px-[20px]  rounded-[30px] items-center transform translate-x-[-50%]">
          <div className="flex items-center text-major  text-[15px]">
            <p className="mr-[8px] border border-major rounded-[50%] py-[7px] px-[15px]">
              1
            </p>
            <p>Proposal form</p>
            <GreaterThan></GreaterThan>
          </div>
          <div
            className={`flex ${
              section >= 2 ? "text-major" : "text-[#D3D8DF] "
            } items-center text-[15px]`}
          >
            <p
              className={`mx-[8px] border  ${
                section >= 2 ? "border-major" : "border-[#D3D8DF]"
              } rounded-[50%] py-[7px] px-[14px]`}
            >
              2
            </p>
            <p>Document</p>
            <GreaterThan></GreaterThan>
          </div>
          <div
            className={`flex ${
              section == 3 ? "text-major" : "text-[#D3D8DF] "
            } items-center text-[15px]`}
          >
            <p
              className={`mx-[8px] border  ${
                section == 3 ? "border-major" : "border-[#D3D8DF]"
              } rounded-[50%] py-[7px] px-[14px]`}
            >
              3
            </p>
            <p className="ml-[8px] text-[15px]">Payment</p>
          </div>
        </div>
      </div>
      {sectionDisplayed}
    </div>
  );
};

export default HealthForm;
