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
  let status = "";
  if (signLoad) {
    status = "Signing in...";
  } else if (error?.status) {
    status = "Invalid username or password";
  }
  return (
    <div className="h-[140vh] relative flex w-[100%]">
      <Image
        src={"/assets/elipse.svg"}
        className="absolute left-[50%] top-[20px]"
        width={350}
        height={350}
        alt=""
      ></Image>
      <div
        className={`flex flex-col pt-[10rem]  overflow-y-scroll items-center w-[65%] ${styles.Firstsection}`}
      >
        <div className="w-[60%]">
          <h1 className="text-[#0F4A6B] text-[30px] leading-[53px] font-bold">
            Sign In
          </h1>
          <p className="text-[#77869B] text-[16px] leading-[25px]">
            Login to start managing your account today
          </p>

          <p
            className={` text-center text-[#FF7C03] text-[16px] px-[20px] py-[5px] bg-white border-[#B10808] `}
          >
            {status}
          </p>

          <div className="mt-[50px]">
            <label className="text-[#77869B] py-[15px] text-[15px]" htmlFor="">
              Email address
            </label>
            <input
              className="w-[500px] outline-0 bg-[#FFF9F4] focus:outline-[.5px] focus:outline-[#FF7C03]/[35%]  px-[10px] text-[14px] py-[10px] my-[15px] mb-[30px] text-[#6C829B] border border-[#FF7C03]/[30%] rounded-[5px]"
              {...register("email", { register: true })}
            />
          </div>
          <div>
            <label className="text-[#77869B] text-[15px]" htmlFor="">
              Password
            </label>
            <div className="relative w-[500px]">
              <input
                className="w-[500px] outline-0 px-[10px] bg-[#FFF9F4] text-[14px] focus:outline-[.5px] focus:outline-[#FF7C03]/[35%] py-[10px] my-[15px] mb-[30px] text-[#6C829B] border border-[#FF7C03]/[30%] rounded-[5px]"
                type={`${passType === false ? "password" : "text"}`}
                {...register("password", { register: true })}
                id={"password"}
              />
              <Image
                width={15}
                height={10}
                className="absolute top-[35px] right-[5px] transform translate-y-[-50%]"
                onClick={() => setPasType(!passType)}
                src={"/assets/eye.svg"}
              ></Image>
            </div>
          </div>
          <Button
            text={"Sign in"}
            className={`w-[500px] my-[2rem] rounded-[5px] ${styles.Button}`}
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
          <div className="my-[15px] mt-[30px] w-[500px] flex justify-between">
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
          {/* <div className="border border-[#E0E0E0] mt-[2rem] mb-[1rem] w-[500px] rounded-[5px] flex justify-center">
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
          </div> */}
          <p
            className={`text-center my-[10px] mt-[30px] text-[#8A859C] text-[14px] ${
              nextRoute == "" ? "hidden" : "block"
            }`}
          >
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
        className={`relative p-[30px]  w-[35%] self-stretch ${styles.Secondsection}`}
      >
        <Image
          width={150}
          height={30}
          onClick={() => {
            router.push("/");
          }}
          className="cursor-pointer"
          src={"/assets/logo.png"}
        ></Image>
        <div className="mt-[80px]">
          <p className="font-bold text-[44px] leading-[50px] text-white">
            Be Safe.
          </p>
          <p className="font-bold text-[44px] py-[10px] leading-[50px] text-white">
            Be Calm.
          </p>
          <p className="font-bold text-[44px] leading-[50px] text-white">
            Be Insured.
          </p>
          <p className="text-white opacity-90 text-[16px] mt-[50px] leading-[25px] w-[80%]">
            We work with some of the leading insurance companies to develop the
            best insurance tailored to meet your needs
          </p>
        </div>
        <Image
          width={270}
          height={350}
          src={"/assets/signbg.png"}
          className={`absolute bottom-0 right-[10px]`}
        ></Image>
      </div>
    </div>
  );
};

export default Signin;
