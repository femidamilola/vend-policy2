import styles from "../ProposalForm/Proposal.module.css";
import { GreaterThan, LeftArrow } from "../SVG/Small";
import UploadCard from "../UploadCard";
import { TextInput1 } from "../Forms/form";
import { Button } from "../Button/button";
import "react-phone-input-2/lib/style.css";
import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Payment from "./payment";
import { useForm } from "react-hook-form";
import {
  useSubmitMotorFormMutation,
  useUploadMotorDocumentMutation,
} from "../../src/api/apiSlice";
import UploadSection from "./uploadsec";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import { setPurchaseProps } from "../../src/store/purchaseSlice";
import { setUploadSection } from "../../src/store/slices";
const MotorForm = () => {
  const section = useSelector(({ state }) => state.uploadSection);
  const dispatch = useDispatch();
  console.log(section);
  const data1 = useSelector(({ purchaseState }) => purchaseState.proposalBody);
  const router = useRouter();

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
                      dispatch(setUploadSection(2));
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

  if (section == 2) {
    sectionDisplayed = <UploadSection></UploadSection>;
  }

  if (section == 3) {
    sectionDisplayed = <Payment></Payment>;
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
