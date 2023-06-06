import styles from "./Signin.module.css";
import Image from "next/image";
import { Button } from "../../../components/Button/button";
import { TextInput1 } from "../../../components/Forms/form";
import { useRouter } from "next/router";
import { useSignInMutation } from "../../api/apiSlice";
import { set, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { setCookie } from "cookies-next";
import { useSelector, useDispatch } from "react-redux";
import { setPurchaseProps } from "../../store/purchaseSlice";

const Signin = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState({});
  const [error, setError] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const nextRoute = useSelector(({ state }) => state.nextRoute);
  const [passType, setPasType] = useState(false);
  const [signIn, { isLoading: signLoad }] = useSignInMutation();
  const dispatch = useDispatch();
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
        className={`flex flex-col pt-[8rem] pb-[2rem] overflow-y-scroll items-center w-[65%] ${styles.Firstsection}`}
      >
        <div className="w-[60%]">
          <h1 className="text-[#0F4A6B] text-[30px] leading-[53px] font-bold">
            Sign In
          </h1>
          <p className="text-[#77869B] text-[16px] leading-[25px]">
            Login to start managing your account today
          </p>
          {signLoad ? (
            <p
              className={`text-center  text-[16px] px-[20px] py-[5px] bg-white border-[#B10808] `}
            >
              Signing in.....
            </p>
          ) : (
            ""
          )}
          <p
            className={`${
              error?.status ? "block" : "hidden"
            } text-center text-[#B10808] text-[16px] px-[20px] py-[5px] bg-white border-[#B10808] `}
          >
            Invalid username or password
          </p>

          <TextInput1
            inputClass={"outline-0 px-[10px]"}
            Formvals={{ ...register("email", { required: true }) }}
            label={"Email address"}
            className={"mt-[3rem]"}
            id={"email"}
          ></TextInput1>
          <div>
            <label className="text-[#77869B] text-[16px]" htmlFor="">
              Password
            </label>
            <div className="relative">
              <input
                className="w-[100%] outline-0 px-[10px] text-[14px] py-[10px] my-[7px] text-[#6C829B] border border-[#E0E0E0] rounded-[5px]"
                type={`${passType === false ? "password" : "text"}`}
                {...register("password", { register: true })}
                id={"password"}
              />
              <Image
                width={15}
                height={10}
                className="absolute top-[50%] right-[5px] transform translate-y-[-50%]"
                onClick={() => setPasType(!passType)}
                src={"/assets/eye.svg"}
              ></Image>
            </div>
          </div>
          <Button
            text={"Sign in"}
            className={`w-[100%] my-[2rem] rounded-[5px] ${styles.Button}`}
            onClick={handleSubmit((data) => {
              signIn(data)
                .unwrap()
                .then((payload) => {
                  setCookie("token", payload?.token, {
                    path: "/",
                    secure: true,
                  });
                 
                  dispatch(setPurchaseProps({ id: payload.userId }));
                  setUserDetails(payload?.data);
                  nextRoute == "details"
                    ? router.push("/companies/details")
                    : router.push("/dashboard");
                })
                .catch((error) => {
                  setError(error?.data);
                  console.log(error);
                });
            })}
          ></Button>
          <div className="flex justify-between">
            <div className="flex items-center">
              <label className="text-[#7B97B8] mr-[5px] text-[15px]" htmlFor="">
                Remember me
              </label>
              <input type="checkbox" />
            </div>
            <p className="text-[#FF7C03] text-[15px] font-bold">
              Reset password
            </p>
          </div>
          <div className="border border-[#E0E0E0] mt-[2rem] mb-[1rem] w-[100%] rounded-[5px] flex justify-center">
            <Image
              src={"/assets/Google.svg"}
              width={20}
              height={20}
              alt=""
              className="mr-[5px]"
            ></Image>
            <p className="py-[7px] text-[16px] text-[#2D4565] font-bold tracking-[1%]">
              Sign in with Google
            </p>
          </div>
          <p className="text-center text-[#8A859C] text-[16px]">
            {"Don't have an account?"}
            <span
              onClick={() => router.push("/signup")}
              className="text-[#FF7C03] ml-[4px] cursor-pointer font-bold"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
      <div
        className={`relative p-[30px] w-[35%] self-stretch ${styles.Secondsection}`}
      >
        <Image
          width={270}
          height={350}
          src={"/assets/signbg.png"}
          className={`absolute right-0 bottom-[0]`}
        ></Image>
        <Image
          width={150}
          height={30}
          onClick={() => {
            router.push("/");
          }}
          className="cursor-pointer"
          src={"/assets/logo.svg"}
        ></Image>
        <div className="mt-[2rem]">
          <p className="font-bold text-[44px] leading-[50px] text-white">
            Be Safe.
          </p>
          <p className="font-bold text-[44px] leading-[50px] text-white">
            Be Calm.
          </p>
          <p className="font-bold text-[44px] leading-[50px] text-white">
            Be Insured.
          </p>
          <p className="text-white opacity-90 text-[16px] mt-[2rem] leading-[25px] w-[80%]">
            We work with some of the leading insurance companies to develop the
            best insurance tailored to meet your needs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
