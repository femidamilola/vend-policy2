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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { data } from "autoprefixer";
import { redirect } from "next/dist/server/api-utils";
const Signin = () => {
  const [section, setSection] = useState("verification");
  const [checked, setChecked] = useState([1, 0, 0]);
  const [userDetails, setUserDetails] = useState({});
  const router = useRouter();
  const [signUp] = useSignUpMutation();
  const schema = yup.object().shape({
    fullName: yup.string().required("Fullname is required"),
    email: yup.string().required("Email address is required"),
    bvnData: yup.string().required("BVN is required").length(11),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "Password must contain a capital letter and a special character"
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let main = <div></div>;

  if (section == "registered") {
    main = (
      <div>
        <h1 className="text-[#0F4A6B] text-[30px] leading-[53px] font-bold">
          Welcome On Board
        </h1>
        <div className="pt-[4rem] pb-[3rem]">
          <p className="text-[19px] leading-[27px] text-major">
            We are excited to have you here!
          </p>
          <p className="text-[#627994] text-[15px] opacity-[0.76]">
            Let’s get to business with you
          </p>
        </div>
        <p className="text-[#627994] text-[16px] leading-[30px] ">
          Odio morbi pharetra vulpultate varius facillisi ridiculus a viverra
          enim faucibus liscipit dicttumst. Odio morbi pharetra vulpultate
          varius facillisi ridiculus a viverra enim faucibus liscipit dicttumst.
          Odio morbi pharetra vulpultate varius
        </p>
        <Button
          text={"Proceed to Product"}
          className={"w-[100%] rounded-[5px] my-[5rem]"}
        ></Button>
      </div>
    );
  }

  if (section == "verification") {
    main = (
      <div>
        <h1 className="text-[#0F4A6B] text-[30px] leading-[53px] font-bold">
          Bank Verification
        </h1>
        <p className="text-[#77869B] text-[16px] leading-[25px]">
          Enter your details to proceed to the next process
        </p>
        <TextInput1
          inputClass={"outline-0 px-[10px]"}
          label={"Full Name"}
          className={"mt-[3rem]"}
          Formvals={{ ...register("fullName", { required: true }) }}
          formError={
            errors.fullName && (
              <span className="text-major">This field is required</span>
            )
          }
        ></TextInput1>
        <TextInput1
          inputClass={"outline-0 px-[10px]"}
          label={"Email Address"}
          className={"mt-[10px]"}
          Formvals={{ ...register("email", { required: true }) }}
          formError={
            errors.email && (
              <span className="text-major">This field is required</span>
            )
          }
        ></TextInput1>
        <TextInput1
          inputClass={"outline-0 px-[10px]"}
          label={"Password"}
          className={"mt-[1rem]"}
          Formvals={{
            ...register("password", { required: true, minLength: 8 }),
          }}
          formError={
            errors.password && (
              <span className="text-major">{errors.password.message}</span>
            )
          }
        ></TextInput1>

        <TextInput1
          inputClass={"outline-0 px-[10px]"}
          label={"Bank verification number"}
          className={"mt-[1rem]"}
          Formvals={{
            ...register("bvnData", {
              required: true,
              minLength: 11,
              maxLength: 11,
            }),
          }}
          formError={
            errors.bvnData && (
              <span className="text-major">This field is required</span>
            )
          }
        ></TextInput1>
        <Button
          text={"Next"}
          onClick={handleSubmit((data) => {
            signUp(data)
              .unwrap()
              .then((payload) => {
                console.log("fulfilled", payload);
                setUserDetails(payload.bvnData);
                setSection("confirm");
                setChecked([1, 2, 0]);
              })
              .catch((error) => {
                console.error("rejected", error);
                if (error.data.message === "email exists already") {
                  router.push("/signin");
                } else {
                  ("");
                }
              });
          })}
          className={`w-[100%] my-[2rem] rounded-[5px] ${styles.Button}`}
        ></Button>
      </div>
    );
  }
  if (section == "confirm") {
    main = (
      <div>
        <h1 className="text-[#0F4A6B] text-[30px] leading-[53px] font-bold">
          Confirm details
        </h1>
        <p className="text-[#77869B] text-[16px] leading-[25px]">
          The confirmation details are not editable
        </p>
        <div className="flex justify-between mt-[3rem]">
          <div className="w-[70%]">
            {" "}
            <TextInput2
              className={""}
              label={"Full Name"}
              value={userDetails?.firstName + " " + userDetails?.lastName}
            ></TextInput2>
          </div>
          <div className="w-[25%]" label={"Date of Birth"}>
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
        ></TextInput2>
        <div className="flex justify-between items-center">
          <div className="w-[60%]">
            <label className="text-confirmlabel text-[16px]" htmlFor="">
              Phone Number
            </label>
            <PhoneInput
              country={userDetails?.country.toLowerCase()}
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
        <div className="flex mt-[2rem] items-center">
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
          className={"w-[100%] rounded-[5px] mt-[2rem]"}
          onClick={() => {
            setSection("registered");
            setChecked([1, 2, 3]);
          }}
        ></Button>
      </div>
    );
  }

  return (
    <div className="h-[100vh] overflow-y-hidden relative flex w-[100%]">
      <Image
        src={"/assets/elipse.svg"}
        className="absolute left-[50%] top-[20px]"
        width={350}
        height={350}
        alt=""
      ></Image>
      <div
        className={`flex flex-col pt-[20px] items-center w-[65%] ${styles.Firstsection}`}
      >
        <div className="w-[60%]">
          <div className="flex w-[100%] mb-[2rem]  justify-between">
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
      <div
        className={`relative p-[30px] w-[35%] self-stretch ${styles.Secondsection}`}
      >
        <Image
          width={150}
          height={30}
          src={"/assets/logo.svg"}
          onClick={() => router.push("/")}
        ></Image>
        {section == "registered" ? (
          <div className="flex flex-col justify-center items-center mt-[6rem]">
            <Image
              width={200}
              height={200}
              alt=""
              src={"/assets/registered.svg"}
            ></Image>
            <div className="mt-[2rem]">
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
            <p className="text-center text-white text-[18px] py-[4rem] opacity-90 tracking-wider px-[30px]">
              Complete basic information to proceed to the next sign up process
            </p>
            <Image
              width={396}
              height={258}
              src={"/assets/question.svg"}
            ></Image>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signin;
