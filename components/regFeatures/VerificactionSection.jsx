import { useState } from "react";
import { Button } from "../Button/button";
import { TextInput1, TextInput2 } from "..//Forms/form";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { setCookie } from "cookies-next";
import { useDispatch } from "react-redux";
import { setSignUpSection } from "../../src/store/slices";
export const VerificationSection = () => {
  const [checked, setChecked] = useState([1, 0, 0]);
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "Password must contain a capital letter and a special character"
      ),
    password1: yup
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
  return (
    <div className="mt-[60px] pb-[2rem]">
      <h1 className="text-[#0F4A6B] pt-[40px] text-[30px] leading-[53px] font-bold">
        Choose Password
      </h1>
      <p className="text-[#77869B] text-[16px] pb-[40px] leading-[25px]">
        The confirmation details are editable
      </p>
      <div className="w-[500px] my-[3rem]">
        <div className="w-[100%]">
          <TextInput1
            className={""}
            Formvals={{ ...register("password", { required: true }) }}
            inputClass={
              "outline-0 w-[500px] px-[10px] bg-[#FFF9F4] border-[#FFB672]"
            }
            label={"Password"}
          ></TextInput1>
          {errors.password && (
            <span className="text-major text-[15px]">
              {errors.password.message}
            </span>
          )}
        </div>
      </div>
      <div className="mb-[3rem] w-[500px]">
        <TextInput1
          label={"Confirm password"}
          className={"w-[500px] "}
          Formvals={{ ...register("password1", { required: true }) }}
          inputClass={
            "outline-0 w-[500px] px-[10px] bg-[#FFF9F4] border-[#FFB672]"
          }
        ></TextInput1>
        {errors.password1 && (
          <span className="text-major text-[15px]">
            {errors.password1.message}
          </span>
        )}
      </div>

      <Button
        text={"Next"}
        className={"w-[500px] rounded-[5px] my-[2rem]"}
        onClick={handleSubmit((data) => {
          dispatch(setSignUpSection("email"));
        })}
      ></Button>
    </div>
  );
};
