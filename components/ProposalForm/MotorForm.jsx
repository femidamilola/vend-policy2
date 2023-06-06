import styles from "./Proposal.module.css";
import { GreaterThan, LeftArrow } from "../SVG/Small";
import UploadCard from "../UploadCard";
import { TextInput1 } from "../Forms/form";
import { Button } from "../Button/button";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PayLock, Paycard, Paypal } from "../SVG/Svg";
import Image from "next/image";

import { useForm } from "react-hook-form";
import {
  useSubmitMotorFormMutation,
  useUploadMotorDocumentMutation,
  usePayMutation,
} from "../../src/api/apiSlice";
import { showPaymentModal } from "../../src/store/slices";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import { setPurchaseProps } from "../../src/store/purchaseSlice";
const MotorForm = () => {
  const [section, setSection] = useState(1);
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [util, setUtil] = useState("");
  const data1 = useSelector(({ purchaseState }) => purchaseState.proposalBody);
  const router = useRouter();

  const [idCard, setIdCard] = useState(null);
  const [utilFile, setUtilFile] = useState(null);
  let sectionDisplayed = <div></div>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitMotorForm] = useSubmitMotorFormMutation();
  const [uploadMotorDocument] = useUploadMotorDocumentMutation();

  if (section === 1) {
    sectionDisplayed = (
      <div className="px-[10%] ">
        <div>
          <p className="text-[#374453] text-[23px] leading-[53px] font-bold my-[20px]">
            We need more details
          </p>
          <div className={`${styles.Shadow2} bg-white px-[5%] py-[50px]`}>
            <div className="flex justify-between mb-[20px]">
              <TextInput1
                className={"w-[47%]"}
                label={"Name of Proposer (Mr/Mrs/Ms)"}
                Formvals={{ ...register("nameOfProposer", { required: true }) }}
                formError={errors.nameOfProposer}
              ></TextInput1>
              <TextInput1
                className={"w-[47%]"}
                label={"E-mail Address"}
                Formvals={{ ...register("emailAddress", { required: true }) }}
                formError={errors.emailAddress}
              ></TextInput1>
            </div>
            <div className="flex justify-between mb-[20px]">
              <TextInput1
                className={"w-[28%]"}
                label={"Date Of Birth"}
                Formvals={{ ...register("dateOfBirth", { required: true }) }}
                formError={errors.dateOfBirth}
              ></TextInput1>
              <TextInput1
                className={"w-[67%]"}
                label={"Home Address (Full)"}
                Formvals={{ ...register("homeAddress", { required: true }) }}
                formError={errors.homeAddress}
              ></TextInput1>
            </div>
            <div className="flex justify-between mb-[20px]">
              <TextInput1
                label={"City"}
                className={"w-[35%]"}
                Formvals={{ ...register("city", { required: true }) }}
                formError={errors.city}
              ></TextInput1>

              <div className="w-[35%]">
                <label
                  className="text-[#77869B] py-[10px] text-[16px]"
                  htmlFor=""
                >
                  Contact Phone No
                </label>
                <input
                  className={`w-[100%] pl-[10px] border text-[14px] my-[7px] outline-0 py-[10px] text-[#6C829B] border-[#E0E0E0] rounded-[5px]`}
                  type="tel"
                  {...register("phoneNumber", { required: true })}
                />
                {errors.phoneNumber && (
                  <span className="text-major">This field is required</span>
                )}
              </div>

              <TextInput1
                label={"Marital Status"}
                className={"w-[25%]"}
                Formvals={{ ...register("maritalStatus", { required: true }) }}
                formError={errors.maritalStatus}
              ></TextInput1>
            </div>
            <div className="flex mb-[20px] justify-between">
              <TextInput1
                className={"w-[35%]"}
                label={"Driver’s license No"}
                Formvals={{
                  ...register("driverLicenseNumber", { required: true }),
                }}
                formError={errors.driverLicenseNumber}
              ></TextInput1>
              <TextInput1
                className={"w-[35%]"}
                label={"Date Issued"}
                Formvals={{ ...register("dateIssued", { required: true }) }}
                formError={errors.dateIssued}
              ></TextInput1>
              <TextInput1
                className={"w-[25%]"}
                label={"Class(es)"}
                Formvals={{ ...register("classes", { required: true }) }}
                formError={errors.classes}
              ></TextInput1>
            </div>
            <div className="flex mb-[20px] justify-between">
              <TextInput1
                className={"w-[47%]"}
                label={"Mailing Address (Optional)"}
                Formvals={{ ...register("mailingAdress") }}
              ></TextInput1>
              <TextInput1
                className={"w-[47%]"}
                label={"Trade/Occupation"}
                Formvals={{ ...register("occupation", { required: true }) }}
                formError={errors.occupation}
              ></TextInput1>
            </div>
            <div className="flex mb-[20px] justify-between">
              <TextInput1
                className={"w-[47%]"}
                label={"Name of Employer"}
                Formvals={{ ...register("nameOfEmployer", { required: true }) }}
                formError={errors.nameOfEmployer}
              ></TextInput1>
              <TextInput1
                className={"w-[47%]"}
                label={"Employment E-mail Address"}
                Formvals={{
                  ...register("employmentEmailAddress", { required: true }),
                }}
                formError={errors.employmentEmailAddress}
              ></TextInput1>
            </div>
            <div className="flex mb-[20px] justify-between">
              <TextInput1
                className={"w-[47%]"}
                label={"Do you have any other insurance with this company?"}
                Formvals={{
                  ...register("existingInsurance", { required: true }),
                }}
                formError={errors.existingInsurance}
              ></TextInput1>
              <TextInput1
                className={"w-[47%]"}
                label={"If yes, give particulars"}
              ></TextInput1>
            </div>
            <div className="mt-[30px] flex items-center">
              <Button
                onClick={handleSubmit((data) => {
                  let motorDetails = {};
                  if (data1.typeOfPackage === "Comprehensive Insurance") {
                    motorDetails = {
                      productType: data1.productType,
                      typeOfPackage: data1.typeOfPackage,
                      vehicleRegistrationNumber:
                        data1.vehicleRegistrationNumber,
                      vehicleMake: data1.vehicleMake,
                      vehicleModel: data1.vehicleModel,
                      vehicleYear: data1.vehicleYear,
                      vehicleValue: data1.vehicleValue,
                      nameOfPackage: data1.nameOfPackage,
                      location: data1.location,
                      nicRegulated: data1.nicRegulated,
                      proposalForm: data,
                    };
                  } else
                    motorDetails = {
                      productType: data1.productType,
                      typeOfPackage: data1.typeOfPackage,
                      vehicleRegistrationNumber:
                        data1.vehicleRegistrationNumber,
                      vehicleMake: data1.vehicleMake,
                      vehicleModel: data1.vehicleModel,
                      vehicleYear: data1.vehicleYear,
                      nameOfPackage: data1.nameOfPackage,
                      location: data1.location,
                      nicRegulated: data1.nicRegulated,
                      proposalForm: data,
                    };

                  submitMotorForm(motorDetails)
                    .unwrap()
                    .then((payload) => {
                      console.log(payload);
                      dispatch(
                        setPurchaseProps({ formId: payload.packageDetails._id })
                      );
                      setSection(2);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    })
                    .catch((error) => {
                      console.log(error);
                      if (
                        error.data.message ==
                        "You have already created this package Kindly proceed to upload document"
                      ) {
                        setSection(2);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else if (
                        error?.data?.message?.name == "TokenExpiredError"
                      ) {
                        setCookie("token", null, {
                          path: "/",
                          secure: true,
                        });
                        router.push("/");
                      } else "";
                    });
                })}
                text={"Upload Documents"}
              ></Button>
              <p className="text-[#F5564C] ml-[50px] text-[14px]">Cancel</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  const id1 = useSelector(
    ({ purchaseState }) => purchaseState.proposalBody.formId
  );
  const [idSize, setIdSize] = useState(null);
  const [utilSize, setutilSize] = useState(null);
  const [error, showError] = useState(false);
  if (section == 2) {
    sectionDisplayed = (
      <div className="px-[10%]">
        <p className="text-[#374453] text-[23px] leading-[53px] font-bold my-[20px]">
          Please upload document
        </p>
        <div className={`${styles.Shadow2} bg-white px-[5%]  py-[50px]`}>
          <p
            className={`text-[16px] text-[#FF7777] py-[20px] ${
              error == true ? "block" : "hidden"
            }`}
          >
            File greter than 2mb cannot be uploaded, Please check file sizes and
            try again
          </p>
          <div className="flex">
            <div className="mr-[40px]">
              <UploadCard
                name={id}
                fill={"#321C77"}
                setName={setId}
                setValue={setIdCard}
                identity={"Who are you? (ID verification)"}
                setSize={setIdSize}
              ></UploadCard>
            </div>
            <UploadCard
              name={util}
              setName={setUtil}
              setValue={setUtilFile}
              fill={"#FF7C03"}
              identity={"Vehicle License"}
              setSize={setutilSize}
            ></UploadCard>
          </div>

          <div className="mt-[30px] flex items-center">
            <Button
              onClick={() => {
                if (idSize > 2100000 || utilSize > 2100000) {
                  showError(true);
                } else {
                  const formData = new FormData();
                  formData.append("id_card", idCard);
                  formData.append("licence", utilFile);
                  formData.append("form_id", id1);
                  uploadMotorDocument(formData)
                    .unwrap()
                    .then((payload) => {
                      console.log(payload);
                      setSection(3);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }
              }}
              text={"Proceed to payment"}
            ></Button>
            <p className="text-[#F5564C] ml-[50px] text-[14px]">Cancel</p>
          </div>
        </div>
      </div>
    );
  }

  const [pay] = usePayMutation();
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
              <div className="w-[47%]">
                <TextInput1
                  className={"w-[100%] "}
                  label={"First Name"}
                  Formvals={{ ...register("payFirstName", { required: true }) }}
                ></TextInput1>
                {errors.payFirstName && (
                  <p className="text-[#FF7777]">This field cannot be empty</p>
                )}
              </div>
              <div className="w-[47%]">
                <TextInput1
                  className={"w-[100%] "}
                  label={"Last Name"}
                  Formvals={{ ...register("payLastName", { required: true }) }}
                ></TextInput1>
                {errors.payLastName && (
                  <p className="text-[#FF7777]">This field cannot be empty</p>
                )}
              </div>
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
              onClick={handleSubmit((data) => {
                dispatch(showPaymentModal());
              })}
              className={"w-[100%] my-[15px] mt-[30px]"}
            ></Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative">
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

export default MotorForm;
