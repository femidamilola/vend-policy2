import styles from "./Signin.module.css";
import Image from "next/image";
import { Button } from "../../../components/Button/button";
import { TextInput1 } from "../../../components/Foms/form";
import { useRouter } from "next/router";

const Signin = () => {
  const router = useRouter();
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
        className={`flex flex-col pt-[10rem] items-center w-[65%] ${styles.Firstsection}`}
      >
        <div className="w-[60%]">
          <h1 className="text-[#0F4A6B] text-[30px] leading-[53px] font-bold">
            Sign In
          </h1>
          <p className="text-[#77869B] text-[16px] leading-[25px]">
            Login to start managing your account today
          </p>
          <TextInput1
            inputClass={"outline-0 px-[10px]"}
            label={"Email address"}
            className={"mt-[3rem]"}
          ></TextInput1>
          <div>
            <label className="text-[#77869B] text-[16px]" htmlFor="">
              Password
            </label>
            <div className="relative">
              <input
                className="w-[100%] outline-0 px-[10px] text-[14px] py-[10px] my-[7px] text-[#6C829B] border border-[#E0E0E0] rounded-[5px]"
                type="text"
              />
              <Image
                width={15}
                height={10}
                className="absolute top-[50%] right-[5px] transform translate-y-[-50%]"
                src={"/assets/eye.svg"}
              ></Image>
            </div>
          </div>
          <Button
            text={"Sign in"}
            className={`w-[100%] my-[2rem] rounded-[5px] ${styles.Button}`}
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
          src={"/assets/signbg.svg"}
          className={`absolute right-0 bottom-[-100px]`}
        ></Image>
        <Image width={150} height={30} src={"/assets/logo.svg"}></Image>
        <div className="mt-[6rem]">
          <p className="font-bold text-[44px] leading-[55px] text-white">
            Be Safe.
          </p>
          <p className="font-bold text-[44px] leading-[55px] text-white">
            Be Calm.
          </p>
          <p className="font-bold text-[44px] leading-[55px] text-white">
            Be Insured.
          </p>
          <p className="text-white opacity-90 text-[16px] mt-[3rem] leading-[25px] w-[80%]">
            We work with some of the leading insurance companies to develop the
            best insurance tailored to meet your needs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
