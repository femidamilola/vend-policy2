import Image from "next/image";
import styles from "../signup/Signup.module.css";
import { Button } from "../../../components/Button/button";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/router";

import Spinner from "../../../components/Spinner/spinner";
const Signin = () => {
  const router = useRouter();

  let main = (
    <div className="mt-[100px] w-[500px]">
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
        Odio morbi pharetra vulpultate varius facillisi ridiculus a viverra enim
        faucibus liscipit dicttumst. Odio morbi pharetra vulpultate varius
        facillisi ridiculus a viverra enim faucibus liscipit dicttumst. Odio
        morbi pharetra vulpultate varius
      </p>
      <Button
        text={"Proceed to Product"}
        onClick={() => router.push("/companies/details")}
        className={"w-[100%] rounded-[5px] my-[5rem]"}
      ></Button>
    </div>
  );

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
        <div className="w-[60%]">{main}</div>
      </div>
      <div className={`relative p-[30px]  w-[35%]  ${styles.Secondsection}`}>
        <Image
          width={150}
          height={30}
          src={"/assets/logo.png"}
          onClick={() => router.push("/")}
        ></Image>

        <div className="flex flex-col mb-[50px] justify-center items-center mt-[10rem]">
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
      </div>
    </div>
  );
};

export default Signin;
