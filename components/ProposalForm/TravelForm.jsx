import styles from "./Proposal.module.css";
import { GreaterThan, LeftArrow } from "../SVG/Small";
import UploadCard from "../UploadCard";
import { TextInput1 } from "../Forms/form";
import { useForm } from "react-hook-form";
import { Button } from "../Button/button";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import { PayLock, Paycard, Paypal } from "../SVG/Svg";
import { useDispatch, useSelector } from "react-redux";
import { showPaymentModal } from "../../src/store/slices";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import {
  useSubmitTravelFormMutation,
  useUploadTravelDocumentMutation,
} from "../../src/api/apiSlice";
const TravelForm = () => {
  const [section, setSection] = useState(1);
  const [id, setId] = useState("");
  const [id1, setId1] = useState("");
  const [idCard, setIdCard] = useState(null);
  const [submitTravelForm] = useSubmitTravelFormMutation();
  const [uploadTravelDocument] = useUploadTravelDocumentMutation();
  let sectionDisplayed = <div></div>;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    setId1(JSON.parse(localStorage.getItem("id")));
  }, []);
  const data1 = useSelector(({ purchaseState }) => purchaseState.proposalBody);
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
                Formvals={{ ...register("city", { required: true }) }}
                formError={errors.city}
                className={"w-[35%]"}
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
            <div className="flex mb-[20px]">
              <TextInput1
                className={"w-[35%] mr-[40px]"}
                label={"Nationality"}
                Formvals={{ ...register("nationality", { required: true }) }}
                formError={errors.nationality}
              ></TextInput1>
              <TextInput1
                className={"w-[35%]"}
                label={"Occupation"}
                Formvals={{ ...register("occupation", { required: true }) }}
                formError={errors.occupation}
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
                Formvals={{ ...register("type", { required: true }) }}
                formError={errors.type}
              ></TextInput1>
              <TextInput1
                className={"w-[35%]"}
                label={"Geography"}
                Formvals={{ ...register("geography", { required: true }) }}
                formError={errors.geography}
              ></TextInput1>
            </div>
            <div className="flex  mb-[20px]">
              <TextInput1
                className={"w-[35%] mr-[40px]"}
                label={"Proposed Policy Period"}
                Formvals={{
                  ...register("proposedPolicyPeriod", { required: true }),
                }}
                formError={errors.proposedPolicyPeriod}
              ></TextInput1>
              <TextInput1
                className={"w-[35%]"}
                Formvals={{ ...register("to", { required: true }) }}
                formError={errors.to}
                label={"To"}
              ></TextInput1>
            </div>

            <div className="flex mb-[20px]">
              <TextInput1
                className={"w-[35%] mr-[40px]"}
                label={"Passport Number"}
                Formvals={{ ...register("passportNumber", { required: true }) }}
                formError={errors.passportNumber}
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
                Formvals={{
                  ...register("amountOfPersonInsured", { required: true }),
                }}
                formError={errors.amountOfPersonInsured}
              ></TextInput1>
              <TextInput1
                className={"w-[40%]"}
                label={"Person to be Insured"}
                Formvals={{
                  ...register("personToBeInsured", { required: true }),
                }}
                formError={errors.personToBeInsured}
              ></TextInput1>
              <TextInput1
                className={"w-[10%]"}
                Formvals={{ ...register("gender", { required: true }) }}
                formError={errors.gender}
                label={"Gender"}
              ></TextInput1>
              <TextInput1
                className={"w-[20%]"}
                label={"Date OF Birth"}
                Formvals={{ ...register("dob", { required: true }) }}
                formError={errors.dob}
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
              Formvals={{ ...register("yesOrNo", { required: true }) }}
              formError={errors.yesOrNo}
            ></TextInput1>
            <div className="mt-[30px] flex items-center">
              <Button
                onClick={handleSubmit((data) => {
                  const travelDetails = {
                    productType: data1.productType,
                    nameOfPackage: data1.nameOfPackage,
                    location: data1.location,
                    nicRegulated: true,
                    origin: data1.origin,
                    destination: data1.destination,
                    departure: data1.departure,
                    returnTrip: data1.returnTrip,
                    travelInsuranceType: data1.travelInsuranceType,
                    age: "25",
                    proposalForm: {
                      personalData: {
                        nameOfProposer: data.nameOfProposer,
                        emailAddress: data.emailAddress,
                        dateOfBirth: data.dateOfBirth,
                        homeAddress: data.homeAddress,
                        city: data.city,
                        phoneNumber: data.phoneNumber,
                        maritalStatus: data.maritalStatus,
                        nationality: data.nationality,
                        occupation: data.occupation,
                      },
                      travelDetails: {
                        type: data.type,
                        geography: data.geography,
                        proposedPolicyPeriod: data.proposedPolicyPeriod,
                        to: data.to,
                        passportNumber: data.passportNumber,
                      },
                      proposedInsuranceDetails: {
                        amountOfPersonInsured: data.amountOfPersonInsured,
                        personToBeInsured: data.personToBeInsured,
                        gender: data.gender,
                        dob: data.dob,
                      },
                      medicalLifestyle: {
                        yesOrNo: data.yesOrNo,
                      },
                    },
                  };
                  submitTravelForm(travelDetails)
                    .unwrap()
                    .then((payload) => {
                      setSection(2);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    })
                    .catch((error) => {
                      console.log(error);
                      if (error.data.message.name == "TokenExpiredError") {
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
    sectionDisplayed = (
      <div className="px-[10%]">
        <p className="text-[#374453] text-[23px] leading-[53px] font-bold my-[20px]">
          Please upload document
        </p>
        <div className={`${styles.Shadow2} bg-white px-[5%]  py-[50px]`}>
          <UploadCard
            name={id}
            fill={"#321C77"}
            setName={setId}
            setValue={setIdCard}
            identity={"Who are you? (ID verification)"}
          ></UploadCard>
          <div className="mt-[30px] flex items-center">
            <Button
              onClick={() => {
                const formData = new FormData();
                formData.append("id_card", idCard);
                formData.append("form_id", id1);
                uploadTravelDocument(formData)
                  .unwrap()
                  .then((payload) => {
                    setSection(3);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  })
                  .catch((error) => {
                    console.log(error);
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
              onClick={() => {
                dispatch(showPaymentModal());
              }}
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

export default TravelForm;
