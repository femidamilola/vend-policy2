import { Button } from "components/Button/button";
import styles from "./Footer.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const Footer = () => {
  const router = useRouter();
  const [hideSub, setHideSub] = useState(false);
  useEffect(() => {
    router.route.includes("product") ||
    router.route.includes("companies") ||
    router.route.includes("upload")
      ? setHideSub(true)
      : "";
  }, [router.route]);
  return (
    <div
      className={`${
        hideSub ? "mt-[10rem]" : " mt-[20rem]"
      } w-[100%] relative pb-[5rem] bg-[#321C77] ${
        router.route.includes("sign") || router.route.includes("dashboard")
          ? "hidden"
          : "block"
      }`}
    >
      <div
        className={`w-[80%]  absolute left-[50%] transform translate-x-[-50%] top-[-140px] rounded-[18px] grid m-auto bg-[#6243D3] ${
          hideSub ? "hidden" : "block"
        }`}
      >
        <div className="flex justify-around items-center text-white py-[50px]">
          <div className="w-[40%]">
            <h1 className="text-[30px] leading-[50px]">
              Ready? Get started with your Insurance now
            </h1>
            <p className="text-[15px] leading-[30px]">
              Odio morbi pharetra vulpultate varius facillisi ridiculus a
              viverra enim faucibus liscipit dicttumst.
            </p>
          </div>
          <div className="w-[20%]">
            <Button text={"Get a Quote"}></Button>
            <div className="flex py-[15px]">
              <Image src={"/assets/user2.svg"} width={22} height={22}></Image>
              <Image src={"/assets/user1.svg"} width={22} height={22}></Image>
            </div>
            <p className="text-[14px] leading-[22px]">
              Join Kehinde and millions of people to have a peaceful life
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] grid m-auto ">
        <div
          className={`flex text-white w-[100%] px-[20px] ${
            hideSub ? "mt-[5rem]" : "mt-[15rem]"
          } justify-between`}
        >
          <div className={`${styles.Listcontainer}`}>
            <p>Navigation</p>
            <p>About us</p>
            <p>Policy Library</p>
          </div>
          <div className={`${styles.Listcontainer}`}>
            <p>Integrations</p>
            <p>Download app below</p>
            <div>
              <Button text={"Download app"}></Button>
            </div>
          </div>
          <div className={`${styles.Listcontainer}`}>
            <p>Insurance package</p>
            {[
              "Buy an Insurance",
              "Personal Health",
              "Insurance Products",
              "Renew Policy",
            ].map((data) => (
              <p key={data}>{data}</p>
            ))}
          </div>
          <div className={`${styles.Listcontainer}`}>
            <p className="tracking-[1px]">Contact Us</p>
            <div className="flex">
              <Image
                src={"/assets/mail.svg"}
                width={14}
                height={14}
                alt={""}
                className="mr-[7px]"
              ></Image>
              <p>Help.vendpolicy@yahoo.com</p>
            </div>
            <p
              style={{ fontWeight: "700", fontSize: "16px" }}
              className={`font-bold text-[16px] tracking-[1px] ${styles.Location}`}
            >
              Location
            </p>
            <div>
              <div className="flex">
                <Image
                  src={"/assets/location.svg"}
                  width={12}
                  height={12}
                  alt={""}
                  className="mr-[7px]"
                ></Image>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
