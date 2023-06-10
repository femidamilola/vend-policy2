import styles from "../ProposalForm/Proposal.module.css";
import { GreaterThan, LeftArrow } from "../SVG/Small";
import {UploadCard} from "../UploadCard";
import { TextInput1 } from "../Forms/form";
import PhoneInput from "react-phone-input-2";
import { Button } from "../Button/button";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCookie } from "cookies-next";
import Payment from "./payment";
import {
  setPurchaseProps,
  clearPurchaseProps,
} from "../../src/store/purchaseSlice";
import { setProposalForm } from "../../src/store/slices";
import axios from "axios";
import {
  usePostFormMutation,
  useUploadDocumentMutation,
} from "../../src/api/apiSlice";
import { showPaymentModal } from "../../src/store/slices";
import { useForm } from "react-hook-form";
import { PayLock, Paycard, Paypal } from "../SVG/Svg";
import { useRouter } from "next/router";
const HealthForm = () => {
  const router = useRouter();
  const [section, setSection] = useState(1);
  const [id, setId] = useState("");
  let sectionDisplayed = <div></div>;
  const [employmentData, setEmploymentData] = useState({});
  const [postForm, { isLoading: formLoading }] = usePostFormMutation();
  const [uploadDocument, { isLoading: uploadLoading }] =
    useUploadDocumentMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [planSelection, setPlanSelection] = useState("");

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
  const dispatch = useDispatch();

  const proposalTest = useSelector(({ state }) => state.proposalForm);
  const purchasedState = useSelector(
    ({ purchaseState }) => purchaseState.proposalBody
  );

  console.log(proposalTest);
  const CheckComp = ({ name, onChange, checked, register }) => {
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
            checked={checked}
            {...register}
            className={`${styles.DefaultCheckbox}`}
            onChange={onChange}
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
                Formvals={{ ...register("mailingAdress", { required: true }) }}
                formError={errors.mailingAdress}
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
            <div className={`flex items-center py-[25px] ${styles.Line}`}>
              <p className="text-[#77869B] text-[13px] mt-[30px] mr-[20px]">
                Plan Selection(Tick the box)
              </p>
              <div className="flex">
                {plans.map((data) => (
                  <CheckComp
                    key={data}
                    onChange={() => {
                      setPlanSelection(() => data);
                    }}
                    checked={planSelection ? planSelection === data : false}
                    name={data}
                  ></CheckComp>
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
                Formvals={{ ...register("nameOfCompany", { required: true }) }}
                formError={errors.nameOfCompany}
              ></TextInput1>
              <TextInput1
                className={"w-[35%]"}
                label={"Name Of Hospital"}
                Formvals={{ ...register("nameOfHospital", { required: true }) }}
                formError={errors.nameOfHospital}
              ></TextInput1>
            </div>
            <div className="flex  mb-[20px]">
              <TextInput1
                className={"w-[35%] mr-[40px]"}
                label={"Residential Address"}
                Formvals={{
                  ...register("residentialAddress", { required: true }),
                }}
                formError={errors.residentialAddress}
              ></TextInput1>
              <TextInput1
                className={"w-[35%]"}
                label={"Address Of Hospital"}
                Formvals={{
                  ...register("choiceOfHospital", { required: true }),
                }}
                formError={errors.choiceOfHospital}
              ></TextInput1>
            </div>

            <div className="flex mb-[20px]">
              <TextInput1
                className={"w-[35%] mr-[40px]"}
                label={"LGA"}
                Formvals={{
                  ...register("lga", { required: true }),
                }}
                formError={errors.lga}
                onChange={(e) => {
                  setEmploymentData(() => ({
                    ...employmentData,
                    lga: e.target.value,
                  }));
                }}
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
                Formvals={{
                  ...register("spouse", { required: true }),
                }}
                formError={errors.spouse}
              ></TextInput1>
              <TextInput1
                className={"w-[35%]"}
                label={"Children"}
                Formvals={{
                  ...register("children", { required: true }),
                }}
                formError={errors.children}
              ></TextInput1>
            </div>
            <div className="flex  mb-[20px]">
              <TextInput1
                className={"w-[25%] mr-[40px]"}
                label={"Date Of Birth"}
                Formvals={{
                  ...register("dob", { required: true }),
                }}
                formError={errors.dob}
              ></TextInput1>
              <TextInput1
                className={"w-[10%] mr-[40px]"}
                label={"Gender"}
                Formvals={{
                  ...register("sex", { required: true }),
                }}
                formError={errors.sex}
              ></TextInput1>
              <TextInput1
                className={"w-[20%] mr-[40px]"}
                label={"Medical Conditions"}
                Formvals={{
                  ...register("medicalCondition", { required: true }),
                }}
                formError={errors.medicalCondition}
              ></TextInput1>
            </div>
            <div className="mt-[30px] flex items-center">
              <Button
                onClick={handleSubmit((data) => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  const healthDetails = {
                    productType: purchasedState.productType,
                    gender: purchasedState.gender,
                    age: purchasedState.age,
                    nameOfPackage: purchasedState.nameOfPackage,
                    location: purchasedState.location,
                    nicRegulated: purchasedState.nicRegulated,
                    proposalForm: {
                      personalData: {
                        nameOfProposer: data.nameOfProposer,
                        emailAddress: data.emailAddress,
                        dateOfBirth: data.dateOfBirth,
                        homeAddress: data.homeAddress,
                        mailingAdress: data.mailingAdress,
                        phoneNumber: data.phoneNumber,
                        maritalStatus: data.maritalStatus,
                        planSelection: planSelection,
                      },
                      employmentData: {
                        nameOfCompany: data.nameOfCompany,
                        residentialAddress: data.residentialAddress,
                        lga: data.lga,
                      },
                      choiceOfHospital: {
                        nameOfHospital: data.nameOfHospital,
                        address: data.choiceOfHospital,
                      },
                      dependant: {
                        spouse: data.spouse,
                        children: data.children,
                        dob: data.dob,
                        sex: data.sex,
                        medicalCondition: data.medicalCondition,
                      },
                    },
                  };

                  postForm(healthDetails)
                    .unwrap()
                    .then((payload) => {
                      console.log(payload);
                      dispatch(
                        setPurchaseProps({
                          formId: payload.packageDetails._id,
                        })
                      );

                      setSection(() => 2);
                    })
                    .catch((error) => {
                      console.log(error);
                      if (
                        error.data.message ==
                        "You have already created this package Kindly proceed to upload document"
                      )
                        setSection(2);
                      else if (
                        error?.data?.message?.name?.includes("TokenError")
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
              <p
                className="text-[#F5564C] ml-[50px] text-[14px]"
                onClick={() => {
                  dispatch(clearPurchaseProps());
                }}
              >
                Cancel
              </p>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
  const [file, setFile] = useState("");
  const [idSize, setIdSize] = useState(null);
  const [addressName, setAddressName] = useState("");
  const [addressValue, setAddressValue] = useState(null);
  const [addressSize, setAddressSize] = useState(null);
  const [error, showError] = useState(false);
  const id1 = useSelector(
    ({ purchaseState }) => purchaseState.proposalBody.formId
  );

  if (section == 2) {
    sectionDisplayed = (
      <div className="px-[10%]">
        <p className="text-[#374453] text-[23px] leading-[53px] font-bold my-[20px]">
          Please upload document
        </p>
        <div className={`${styles.Shadow2}  bg-white px-[5%]  py-[50px]`}>
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
                setName={setId}
                identity={"Who are you? (ID verification)"}
                setSize={setIdSize}
                setValue={setFile}
                fill={"#321C77"}
              ></UploadCard>
            </div>
            <div>
              <UploadCard
                name={addressName}
                setName={setAddressName}
                identity={"Proof of Address"}
                setValue={setAddressValue}
                setSize={setAddressSize}
                fill={"#33D1B5"}
              ></UploadCard>
            </div>
          </div>

          <div className="mt-[30px] flex items-center">
            <Button
              onClick={() => {
                if (idSize > 2100000 || addressSize > 2100000) {
                  showError(true);
                } else {
                  const formData = new FormData();
                  formData.append("id_card", file);
                  formData.append("form_id", id1);
                  formData.append("address", addressValue);
                  uploadDocument(formData)
                    .unwrap()
                    .then((payload) => {
                      console.log(payload);
                      setSection(3);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    })
                    .catch((error) => {
                      console.log(error);
                      console.log(formData.has("id_card"));
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
  if (section == 3) {
    sectionDisplayed = <Payment></Payment>;
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
