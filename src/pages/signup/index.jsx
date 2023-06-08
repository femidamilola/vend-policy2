import styles from "./Signup.module.css";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../../../components/Button/button";
import { TextInput1, TextInput2 } from "../../../components/Forms/form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/router";
import { useSignUpMutation } from "../../api/apiSlice";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RegisterSection } from "../../../components/regFeatures/RegisterSection";
import { VerificationSection } from "../../../components/regFeatures/VerificactionSection";
import { setSignUpSection, setChecked } from "../../store/slices";
import Spinner from "../../../components/Spinner/spinner";
const Signup = () => {
  const section = useSelector(({ state }) => state.signUpSection);
  const checked = useSelector(({ state }) => state.checked);
  const userDetails = useSelector(({ state }) => state.userDetails);
  const router = useRouter();

  const dispatch = useDispatch();
  let main = <div></div>;
  if (section == "verify") {
    main = <RegisterSection></RegisterSection>;
  }
  if (section == "password") {
    main = <VerificationSection></VerificationSection>;
  }

  if (section == "email") {
    main = (
      <div className="mt-[70px] flex flex-col items-center w-[500px]">
        <img src="/assets/section.png" alt="" />
        <h1 className="text-[#0F4A6B] text-[30px] text-center leading-[45px] font-bold">
          We’ve sent you verification to your email address
        </h1>

        <p className="text-[#627994] mt-[20px] text-center text-[16px] leading-[30px] ">
          Odio morbi pharetra vulpultate varius facillisi ridiculus a viverra
          enim faucibus liscipit dicttumst. Odio morbi pharetra vulpultate
          varius facillisi ridiculus a viverra enim faucibus liscipit dicttumst.
          Odio morbi pharetra vulpultate varius
        </p>
      </div>
    );
  }

  if (section == "confirm") {
    main = (
      <div className="mt-[60px] pb-[2rem]">
        <h1 className="text-[#0F4A6B] pt-[40px] text-[30px] leading-[53px] font-bold">
          Confirm details
        </h1>
        <p className="text-[#77869B] text-[16px] pb-[40px] leading-[25px]">
          The confirmation details are not editable
        </p>
        <div className="flex justify-between w-[500px] my-[3rem]">
          <div className="w-[70%]">
            {" "}
            <TextInput2
              className={""}
              label={"Full Name"}
              value={userDetails?.firstName + " " + userDetails?.lastName}
            ></TextInput2>
          </div>
          <div className="w-[25%] " label={"Date of Birth"}>
            {" "}
            <TextInput2
              label={"Date Of Birth"}
              value={userDetails?.dateOfBirth}
            ></TextInput2>
          </div>
        </div>
        <TextInput2
          label={"Residential address"}
          value={"University of Lagos, Akoka."}
          className={"w-[500px] mb-[3rem]"}
        ></TextInput2>
        <div className="flex justify-between w-[500px] mb-[3rem] items-center">
          <div className="w-[60%]">
            <label className="text-confirmlabel text-[16px]" htmlFor="">
              Phone Number
            </label>
            <PhoneInput
              country={userDetails?.country?.toLowerCase()}
              inputClass={`my-[7px] ${styles.InputClass}`}
              buttonClass={`${styles.Dropdown}`}
              value={"234" + userDetails?.mobile}
              onChange={() => {
                "";
              }}
            ></PhoneInput>
          </div>
          <div className="w-[35%]">
            <TextInput2 label={"City"} value={"Lagos"}></TextInput2>
          </div>
        </div>
        <div className="flex mb-[2rem] items-center">
          <input className="mr-[10px]" type="checkbox" />
          <p className="text-[#7B97B8] text-[15px] tracking-[2%]">
            By proceeding, you agree to the{" "}
            <span className="text-[#E9A704] font-medium">
              Terms and Conditions
            </span>{" "}
          </p>
        </div>
        <Button
          text={"Next"}
          className={"w-[500px] rounded-[5px] my-[2rem]"}
          onClick={() => {
            dispatch(setSignUpSection("password"));
            dispatch(setChecked([1, 2, 3]));
          }}
        ></Button>
      </div>
    );
  }

  return (
    <div className="h-[120vh] relative flex w-[100%]">
      <Image
        src={"/assets/elipse.svg"}
        className="absolute left-[50%] top-[20px]"
        width={350}
        height={350}
        alt=""
      ></Image>

      <div
        className={`flex flex-col pt-[20px] overflow-y-scroll items-center w-[65%] ${styles.Firstsection}`}
      >
        <div className="w-[60%]">
          <div
            className={`flex w-[100%] mt-[60px] mb-[2rem]  justify-between ${
              section == "email" ? "hidden" : "block"
            }`}
          >
            {checked.map((data, i) => (
              <p
                key={i}
                className={`w-[32%] ${
                  checked.includes(i + 1) ? "bg-major" : "bg-sign1"
                } rounded-[6px] h-[4px]`}
              >
                &nbsp;
              </p>
            ))}
          </div>
          {main}
        </div>
      </div>
      <div className={`relative p-[30px]  w-[35%]  ${styles.Secondsection}`}>
        <Image
          width={150}
          height={30}
          src={"/assets/logo.png"}
          onClick={() => router.push("/")}
        ></Image>
        {section == "registered" ? (
          <div className="flex flex-col mb-[50px] justify-center items-center mt-[10rem]">
            <Image
              width={200}
              height={200}
              alt=""
              src={"/assets/registered.svg"}
            ></Image>
            <div className="mt-[5rem]">
              <h1 className="text-white text-center text-[18px] leading-[28px]">
                Registration Successful
              </h1>
              <p className="text-white text-center opacity-80 px-[50px] leading-[28px] text-[18px]">
                You can now manage your dashboard after choosing your package
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center mt-[6rem]">
            <p className="text-center text-white text-[16px] py-[4rem] mb-[50px] tracking-wider px-[30px]">
              Complete basic information to proceed to the next sign up process
            </p>
            <img src={"/assets/question.png"} alt=""></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
