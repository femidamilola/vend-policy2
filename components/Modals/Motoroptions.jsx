import styles from "./Modals.module.css";
import { Party, Theft, Comprehensive, Fire } from "../SVG/Svg";
import { useState } from "react";
import { useRouter } from "next/router";
import { showPackageModal, showClaimsModal } from "@/store/slices";
import { setPurchaseProps } from "@/store/purchaseSlice";
import { useSelector, useDispatch } from "react-redux";
import { TextInput1, SelectInput } from "../Forms/form";
import { Button } from "components/Button/button";
import { useForm } from "react-hook-form";
import { useSubmitClaimsFormMutation } from "@/api/apiSlice";
export const Motoroptions = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const router = useRouter();

  const toggle = useSelector(({ state }) => state?.showPackageModal);

  const Motorcard = ({ className, img, policyclass, border, textcolor }) => {
    return (
      <div className={`flex flex-col items-center cursor-pointer ${className}`}>
        <div
          className={`w-[112px] border  flex justify-center items-center h-[122px] ${border}`}
        >
          {img}
        </div>
        <p className={`${textcolor} py-[5px] text-[14px]`}>{policyclass}</p>
      </div>
    );
  };
  const dispatch = useDispatch();
  return (
    <div
      className={`w-[100%]   fixed top-0 z-[300] left-0  h-[100vh] ${
        toggle == true ? "block" : "hidden"
      }`}
    >
      <div
        className={`w-[100%] h-[100%] absolute top-0 left-0 ${styles.MotorModal}`}
      ></div>
      <div
        className={`bg-white absolute top-[30%] left-[50%] py-[30px] transform translate-x-[-50%] px-[30px] rounded-[10px] w-[50%]`}
      >
        <p className="text-center text-[#374453] text-[20px] font-[800]">
          Select Motor package
        </p>
        <div
          onClick={() => dispatch(showPackageModal())}
          className="absolute right-[15px] top-[16px] cursor-pointer"
        >
          <img src="/assets/ex.png" alt="" />
        </div>
        <div className="flex mt-[30px] justify-between">
          <div
            onMouseEnter={() => setHovered1(true)}
            onMouseLeave={() => setHovered1(false)}
            onClick={() => {
              dispatch(
                setPurchaseProps({ typeOfPackage: "Third Party Insurance" })
              );
              router.push("/motor/thirdparty");
            }}
          >
            <Motorcard
              policyclass={"Third Party"}
              textcolor={hovered1 == false ? "text-[#506176]" : "text-major"}
              border={hovered1 == true ? styles.BorderHover : styles.Border}
              img={
                <Party
                  fill={`${hovered1 == false ? "#ADB9C7" : "#FF7C03"}`}
                ></Party>
              }
            ></Motorcard>
          </div>
          <div
            onMouseEnter={() => setHovered2(true)}
            onMouseLeave={() => setHovered2(false)}
            onClick={() => {
              dispatch(
                setPurchaseProps({
                  typeOfPackage: "Third Party/Fire Insurance",
                })
              );
              router.push("/motor/fire");
            }}
          >
            <Motorcard
              policyclass={"Third Party/Fire"}
              textcolor={hovered2 == false ? "text-[#506176]" : "text-major"}
              border={hovered2 == true ? styles.BorderHover : styles.Border}
              img={
                <Fire
                  fill={`${hovered2 == false ? "#ADB9C7" : "#FF7C03"}`}
                ></Fire>
              }
            ></Motorcard>
          </div>
          <div
            onMouseEnter={() => setHovered3(true)}
            onMouseLeave={() => setHovered3(false)}
            onClick={() => {
              dispatch(
                setPurchaseProps({
                  typeOfPackage: "Third Party/Theft Insurance",
                })
              );
              router.push("/motor/theft");
            }}
          >
            <Motorcard
              policyclass={"Third Party/Theft"}
              textcolor={hovered3 == false ? "text-[#506176]" : "text-major"}
              border={hovered3 == true ? styles.BorderHover : styles.Border}
              img={
                <Theft
                  fill={`${hovered3 == false ? "#ADB9C7" : "#FF7C03"}`}
                ></Theft>
              }
            ></Motorcard>
          </div>
          <div
            onMouseEnter={() => setHovered4(true)}
            onMouseLeave={() => setHovered4(false)}
            onClick={() => {
              dispatch(
                setPurchaseProps({ typeOfPackage: "Comprehensive Insurance" })
              );
              router.push("/motor/comprehensive");
            }}
          >
            <Motorcard
              policyclass={"Comprehensive"}
              textcolor={hovered4 == false ? "text-[#506176]" : "text-major"}
              border={hovered4 == true ? styles.BorderHover : styles.Border}
              img={
                <Comprehensive
                  fill={`${hovered4 == false ? "#ADB9C7" : "#FF7C03"}`}
                ></Comprehensive>
              }
            ></Motorcard>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ClaimModal = () => {
  const router = useRouter();

  const toggle = useSelector(({ state }) => state.showClaimsModal);
  const dispatch = useDispatch();
  const [claimsDetails] = useSubmitClaimsFormMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div
      className={`w-[100%] h-[100vh] fixed top-0 left-0 z-[300] ${
        toggle ? "block" : "hidden"
      }`}
    >
      <div
        className={`w-[100%] h-[100%] absolute top-0 left-0 ${styles.MotorModal}`}
      ></div>
      <div
        className={`bg-white absolute top-[40px] left-[50%] py-[30px] transform translate-x-[-50%] px-[30px] rounded-[10px] w-[500px]`}
      >
        <div
          onClick={() => dispatch(showClaimsModal())}
          className="absolute right-[15px] top-[16px] cursor-pointer"
        >
          <img src="/assets/ex.png" alt="" />
        </div>
        <div className="text-center pb-[30px]">
          <p className="text-[#33496A] text-[20px]">Report a Claim</p>
          <p className="text-[14px] py-[8px] text-[#77869B]">
            Select the type of insurance
          </p>
        </div>
        <div>
          <SelectInput
            options={[
              "Motor Insurance",
              "Travel Insurance",
              "Health Insurance",
            ]}
            label={"Insurance Package"}
            Formprops={{ ...register("type") }}
          ></SelectInput>
        </div>
        <div>
          <TextInput1
            Formvals={{ ...register("amount", { required: true }) }}
            label={"Amount"}
          ></TextInput1>
          {errors.amount && (
            <p className="mb-[3px] text-[#FF7777]">This field is required</p>
          )}
        </div>
        <div>
          <textarea
            name=""
            className={`border  border-[#E0E0E0] text-[#77869B] rounded-[7px] w-[100%] p-[20px] text-[15px] outline-0  ${styles.TextArea}`}
            placeholder="Description"
            id=""
            cols="30"
            rows="5"
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && (
            <p className="mb-[3px] text-[#FF7777]">This field is required</p>
          )}
        </div>
        <Button
          text={"Report Claim"}
          className={"w-[100%] mt-[10px]"}
          onClick={handleSubmit((data) => {
            const claimsData = {
              insurancePackage: data.type,
              amount: data.amount,
              description: data.description,
            };
            claimsDetails(claimsData)
              .unwrap()
              .then((payload) => {
                console.log(payload);
                 dispatch(showClaimsModal());
                if (payload.claims.insurancePackage.includes("Motor")) {
                  dispatch(setPurchaseProps({ claimsId: payload.claims._id }));
                  router.push("/motorclaim");
                } else if (payload.claims.insurancePackage.includes("Travel")) {
                  dispatch(setPurchaseProps({ claimsId: payload.claims._id }));
                  router.push("/travelclaim");
                } else if (payload.claims.insurancePackage.includes("Health")) {
                  dispatch(setPurchaseProps({ claimsId: payload.claims._id }));
                  router.push("/healthclaim");
                } else "";
              })
              .catch((error) => {
                
                console.log(error);
              });
          })}
        ></Button>
      </div>
    </div>
  );
};
