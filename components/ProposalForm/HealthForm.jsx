import styles from "./Proposal.module.css";
import { GreaterThan, LeftArrow } from "../SVG/Small";
import UploadCard from "../UploadCard";
import { TextInput1 } from "../Forms/form";
import PhoneInput from "react-phone-input-2";
import { Button } from "../Button/button";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { useForm } from "react-hook-form";
import { PayLock, Paycard, Paypal } from "../SVG/Svg";

const HealthForm = () => {
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
  const [id1, setId1] = useState("");
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
  useEffect(() => {
    setId1(JSON.parse(localStorage.getItem("id")));
  }, []);
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
                formError={
                  errors.nameOfProposer && (
                    <span className="text-major">This field is required</span>
                  )
                }
              ></TextInput1>
              <TextInput1
                className={"w-[47%]"}
                label={"E-mail Address"}
                Formvals={{ ...register("emailAddress", { required: true }) }}
                formError={
                  errors.emailAddress && (
                    <span className="text-major">This field is required</span>
                  )
                }
              ></TextInput1>
            </div>
            <div className="flex justify-between mb-[20px]">
              <TextInput1
                className={"w-[28%]"}
                label={"Date Of Birth"}
                Formvals={{ ...register("dateOfBirth", { required: true }) }}
                formError={
                  errors.dateOfBirth && (
                    <span className="text-major">This field is required</span>
                  )
                }
              ></TextInput1>
              <TextInput1
                className={"w-[67%]"}
                label={"Home Address (Full)"}
                Formvals={{ ...register("homeAddress", { required: true }) }}
                formError={
                  errors.homeAddress && (
                    <span className="text-major">This field is required</span>
                  )
                }
              ></TextInput1>
            </div>
            <div className="flex justify-between mb-[20px]">
              <TextInput1
                label={"City"}
                className={"w-[35%]"}
                Formvals={{ ...register("mailingAdress", { required: true }) }}
                formError={
                  errors.mailingAdress && (
                    <span className="text-major">This field is required</span>
                  )
                }
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
                formError={
                  errors.maritalStatus && (
                    <span className="text-major">This field is required</span>
                  )
                }
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
                formError={
                  errors.nameOfCompany && (
                    <span className="text-major">This field is required</span>
                  )
                }
              ></TextInput1>
              <TextInput1
                className={"w-[35%]"}
                label={"Name Of Hospital"}
                Formvals={{ ...register("nameOfHospital", { required: true }) }}
                formError={
                  errors.nameOfHospital && (
                    <span className="text-major">This field is required</span>
                  )
                }
              ></TextInput1>
            </div>
            <div className="flex  mb-[20px]">
              <TextInput1
                className={"w-[35%] mr-[40px]"}
                label={"Residential Address"}
                Formvals={{
                  ...register("residentialAddress", { required: true }),
                }}
                formError={
                  errors.residentialAddress && (
                    <span className="text-major">This field is required</span>
                  )
                }
              ></TextInput1>
              <TextInput1
                className={"w-[35%]"}
                label={"Address Of Hospital"}
                Formvals={{
                  ...register("choiceOfHospital", { required: true }),
                }}
                formError={
                  errors.choiceOfHospital && (
                    <span className="text-major">This field is required</span>
                  )
                }
              ></TextInput1>
            </div>

            <div className="flex mb-[20px]">
              <TextInput1
                className={"w-[35%] mr-[40px]"}
                label={"LGA"}
                Formvals={{
                  ...register("lga", { required: true }),
                }}
                formError={
                  errors.lga && (
                    <span className="text-major">This field is required</span>
                  )
                }
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
                formError={
                  errors.spouse && (
                    <span className="text-major">This field is required</span>
                  )
                }
              ></TextInput1>
              <TextInput1
                className={"w-[35%]"}
                label={"Children"}
                Formvals={{
                  ...register("children", { required: true }),
                }}
                formError={
                  errors.children && (
                    <span className="text-major">This field is required</span>
                  )
                }
              ></TextInput1>
            </div>
            <div className="flex  mb-[20px]">
              <TextInput1
                className={"w-[25%] mr-[40px]"}
                label={"Date Of Birth"}
                Formvals={{
                  ...register("dob", { required: true }),
                }}
                formError={
                  errors.dob && (
                    <span className="text-major">This field is required</span>
                  )
                }
              ></TextInput1>
              <TextInput1
                className={"w-[10%] mr-[40px]"}
                label={"Gender"}
                Formvals={{
                  ...register("sex", { required: true }),
                }}
                formError={
                  errors.sex && (
                    <span className="text-major">This field is required</span>
                  )
                }
              ></TextInput1>
              <TextInput1
                className={"w-[20%] mr-[40px]"}
                label={"Medical Conditions"}
                Formvals={{
                  ...register("medicalCondition", { required: true }),
                }}
                formError={
                  errors.medicalCondition && (
                    <span className="text-major">This field is required</span>
                  )
                }
              ></TextInput1>
            </div>
            <div className="mt-[30px] flex items-center">
              <Button
                onClick={handleSubmit((data) => {
                  window.scrollTo({ top: 0, behavior: "smooth" });

                  const form = {
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
                  };
                 
                  postForm({ ...purchasedState, proposalForm: form })
                    .unwrap()
                    .then((payload) => {
                      localStorage.setItem(
                        "id",
                        JSON.stringify(payload?.packageDetails?.userId)
                      );
                      setSection(() => 2);
                    })
                    .catch((error) => {
                      console.log(error);
                      error.data.message ==
                      "You have already created this package Kindly proceed to upload document"
                        ? setSection(2)
                        : "";
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
            setValue={setFile}
            fill={"#321C77"}
          ></UploadCard>
          <div className="mt-[30px] flex items-center">
            <Button
              onClick={() => {
                const formData = new FormData();
                formData.append("id_card", file);
                formData.append("form_id", id1);
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
