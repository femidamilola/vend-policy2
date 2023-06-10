import styles from "../../src/pages/signup/Signup.module.css";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../Button/button";
import { TextInput1, TextInput2 } from "../Forms/form";
import { setChecked } from "../../src/store/slices";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/router";
import { useSignUpMutation } from "../../src/api/apiSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { setCookie } from "cookies-next";
import {
  setSignUpSection,
  setUserDetails,
  setEmail,
} from "../../src/store/slices";
import { useDispatch } from "react-redux";
export const RegisterSection = () => {
  const [signUp] = useSignUpMutation();
  const router = useRouter();
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    fullName: yup.string().required("Fullname is required"),
    email: yup.string().required("Email address is required"),
    bvnData: yup.string().required("BVN is required").length(11),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="my-[50px]">
      <h1 className="text-[#0F4A6B] text-[30px] leading-[53px] font-bold">
        Bank Verification
      </h1>
      <p className="text-[#77869B] text-[15px] leading-[25px]">
        Enter your details to proceed to the next process
      </p>
      <TextInput1
        inputClass={"outline-0 px-[10px bg-[#FFF9F4] border-[#FFB672]"}
        label={"Full Name"}
        className={"mt-[50px] mb-[20px] w-[500px]  text-[15px]"}
        Formvals={{ ...register("fullName", { required: true }) }}
        formError={
          errors.fullName && (
            <span className="text-major">This field is required</span>
          )
        }
      ></TextInput1>
      <TextInput1
        inputClass={
          "outline-0 w-[500px] px-[10px] bg-[#FFF9F4] border-[#FFB672]"
        }
        label={"Email Address"}
        className={"my-[20px] text-[15px] w-[500px]"}
        Formvals={{ ...register("email", { required: true }) }}
        formError={
          errors.email && (
            <span className="text-major text-[15px]">
              This field is required
            </span>
          )
        }
      ></TextInput1>

      <TextInput1
        inputClass={
          "outline-0 w-[500px] px-[10px] bg-[#FFF9F4] border-[#FFB672]"
        }
        label={"Bank verification number"}
        className={"mt-[1rem] w-[500px] text-[15px]"}
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
          const details = {
            fullName: data.fullName,
            email: data.email,
            bvnData: data.bvnData,
          };
          dispatch(setEmail(data.email));
          signUp(details)
            .unwrap()
            .then((payload) => {
              console.log(payload);
              setCookie("token", payload?.token, {
                path: "/",
                secure: true,
              });

              dispatch(setUserDetails(payload.bvnData));
              dispatch(setSignUpSection("confirm"));
              dispatch(setChecked([1, 2, 0]));
            })
            .catch((error) => {
              console.error("rejected", error);
              if (error.data.message === "Email exists already") {
                router.push("/signin");
              } else if (
                error.data.message ===
                "Email already exists, proceed to set password"
              ) {
                setCookie("token", error.data?.token, {
                  path: "/",
                  secure: true,
                });

                dispatch(setSignUpSection("password"));
                dispatch(setChecked([1, 2, 3]));
              } else "";
            });
        })}
        className={`w-[500px] mt-[50px] rounded-[5px] ${styles.Button}`}
      ></Button>
    </div>
  );
};
