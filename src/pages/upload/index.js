import styles from "./Upload.module.css";
import { GreaterThan, LeftArrow } from "../../../components/SVG/Small";
import UploadCard from "../../../components/UploadCard";
import { TextInput1 } from "../../../components/Foms/form";
import PhoneInput from "react-phone-input-2";
import { Button } from "../../../components/Button/button";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
const FileUpload = () => {
  const [section, setSection] = useState(2);
  const [id, setId] = useState("");
  let sectionDisplayed = <div></div>;

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
            <div className="flex mb-[20px]">
              <TextInput1
                className={"w-[35%] mr-[40px]"}
                label={"Nationality"}
              ></TextInput1>
              <TextInput1
                className={"w-[35%]"}
                label={"Occupation"}
              ></TextInput1>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#374453] text-[23px] leading-[53px] font-bold my-[20px]">
            Travel Details
          </p>
          <div className={`${styles.Shadow2} bg-white px-[5%] py-[50px]`}>
            <div className="flex  mb-[20px]">
              <TextInput1
                className={"w-[35%] mr-[40px]"}
                label={"Type"}
              ></TextInput1>
              <TextInput1
                className={"w-[35%]"}
                label={"Geography"}
              ></TextInput1>
            </div>
            <div className="flex  mb-[20px]">
              <TextInput1
                className={"w-[35%] mr-[40px]"}
                label={"Proposed Policy Period"}
              ></TextInput1>
              <TextInput1 className={"w-[35%]"} label={"To"}></TextInput1>
            </div>

            <div className="flex mb-[20px]">
              <TextInput1
                className={"w-[35%] mr-[40px]"}
                label={"Passport Number"}
              ></TextInput1>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#374453] text-[23px] leading-[53px] font-bold my-[20px]">
            Proposed Insured Details
          </p>
          <div className={`${styles.Shadow2} bg-white px-[5%] py-[50px]`}>
            <div className="flex justify-between mb-[20px]">
              <TextInput1
                className={"w-[20%]"}
                label={"Amount of Person insured"}
              ></TextInput1>
              <TextInput1
                className={"w-[40%]"}
                label={"Person to be Insured"}
              ></TextInput1>
              <TextInput1 className={"w-[10%]"} label={"Gender"}></TextInput1>
              <TextInput1
                className={"w-[20%]"}
                label={"Date OF Birth"}
              ></TextInput1>
            </div>
            <div className="flex  mb-[20px]">
              <TextInput1
                className={"w-[40%] mr-[40px]"}
                label={"Person to be Insured 2"}
              ></TextInput1>
              <TextInput1
                className={"w-[10%] mr-[40px]"}
                label={"Gender"}
              ></TextInput1>
              <TextInput1
                className={"w-[20%] "}
                label={"Date OF Birth"}
              ></TextInput1>
            </div>
            <div className="flex  mb-[20px]">
              <TextInput1
                className={"w-[40%] mr-[40px]"}
                label={"Person to be Insured 2"}
              ></TextInput1>
              <TextInput1
                className={"w-[10%] mr-[40px]"}
                label={"Gender"}
              ></TextInput1>
              <TextInput1
                className={"w-[20%] "}
                label={"Date OF Birth"}
              ></TextInput1>
            </div>
          </div>
        </div>{" "}
        <div>
          <p className="text-[#374453] text-[23px] leading-[53px] font-bold my-[20px]">
            Medical and Lifestyle Information
          </p>
          <div className={`${styles.Shadow2} bg-white px-[5%] py-[50px]`}>
            <p className="text-[16px] text-[#5F6975] opacity-[0.79] leading-[30px] mb-[25px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. There live the blind texts. Separated they
              live in Bookmarksgrove right at the coast{" "}
            </p>
            <TextInput1
              className={"w-[100%] "}
              labelClass={"text-[14px]"}
              label={"If yes, Provide details"}
            ></TextInput1>
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
        </div>
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
          ></UploadCard>
          <div className="mt-[30px] flex items-center">
            <Button
              onClick={() => setSection(3)}
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
        <div className="flex justify-between">
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
          </div>
          <div
            className={`${styles.Shadow2} bg-white px-[5%] w-[30%]  py-[50px]`}
          >
          
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div
        className={`pl-[10%] ${styles.Background} text-white pt-[20rem] pb-[5rem]`}
      >
        <h1 className="text-[48px] leading-[69px]">Proposal Form</h1>
        <p className="opacity-90 text-[16px]">
          Please fill up the proposal form for your Travel insurance
        </p>
      </div>
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
          <p className="text-[#D3D8DF] ml-[8px] text-[15px]">Payment</p>
        </div>
      </div>
      {sectionDisplayed}
    </div>
  );
};

export default FileUpload;
