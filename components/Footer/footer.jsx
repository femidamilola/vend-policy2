import { Button } from "components/Button/button";
import styles from "./Footer.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
const Footer = () => {
  const router = useRouter();
  return (
    <div
      className={`w-[100%] relative pb-[5rem] mt-[20rem] bg-[#321C77] ${
        router.route.includes("sign") ? "hidden" : "block"
      }`}
    >
      <div
        className={`w-[80%]  absolute left-[50%] transform translate-x-[-50%] top-[-140px] rounded-[18px] grid m-auto bg-[#6243D3] ${
          router.route.includes("product") ? "hidden" : "block"
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
            router.route.includes("product") ? "mt-[5rem]" : "mt-[15rem]"
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
            <p>Contact Us</p>
            <div className="flex">
              <Image
                src={"/assets/mail.svg"}
                width={20}
                height={20}
                alt={""}
                className="mr-[7px]"
              ></Image>
              <p>Help.vendpolicy@yahoo.com</p>
            </div>
            <p
              style={{ fontWeight: "700", fontSize: "16px" }}
              className={`font-bold text-[16px] ${styles.Location}`}
            >
              Location
            </p>
            <div>
              <div className="flex">
                <Image
                  src={"/assets/location.svg"}
                  width={20}
                  height={20}
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
