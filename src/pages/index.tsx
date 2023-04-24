import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "components/Button/button";
import { PackageCard } from "../../components/Cards/card";

export default function Home() {
  const pacakages = [
    { img: "motor", text: "Motor" },
    { img: "health", text: "Health" },
    { img: "travel", text: "Travel" },
    { img: "policy", text: "Review your policy" },
  ];

  return (
    <div>
      <Head>
        <title>Vend Policy App</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <div
          className={`${styles.Firstsection} z-50 flex justify-between items-center pt-[90px] px-[100px]`}
        >
          <div className="text-white w-[40%] ">
            <h1 className="text-[48px] leading-[69px]">
              What policy will you be buying today?
            </h1>
            <p className="text-[17px] pt-[25px] pb-[35px] leading-[29px] tracking-[1%]">
              We work with some of the leading insurance companies to develop
              the best insurance tailored to meet your needs
            </p>
            <div className="flex justify-between items-center">
              <Button text={"Get a Quote"} className={""}></Button>
              <p className="text-[16px]">or</p>
              <img src="/assets/twist.svg" alt="" />
            </div>
          </div>
          <div className="relative mt-[60px]">
            <div className="w-[250px] absolute right-[-90px] bottom-[25%]  bg-white rounded-[12px] py-[20px] px-[20px]">
              <div className="w-[41px] absolute top-[-20px] left-[-20px]  flex justify-center items-start bg-[#FF7C03] h-[41px] rounded-[50%]">
                <img
                  className="mt-[50%] transform translate-y-[-50%]"
                  src="/assets/quote.svg"
                  alt=""
                />
              </div>
              <p className="text-[16px] font-semibold leading-[25px]">
                After using VendPolicy, life has been easy for us
              </p>
            </div>
            <div className="absolute top-[60%] left-[-150px]  flex px-[10px] items-center py-[4px] rounded-[12px] bg-white">
              <Image
                alt={""}
                width={41}
                height={41}
                src={"/assets/check.svg"}
                className=" px-[3px]"
              ></Image>
              <p className="text-[17px] font-semibold">Officially verified</p>
            </div>
            <Image
              alt={""}
              width={41}
              height={41}
              src={"/assets/world.svg"}
              className="absolute top-0 left-[20%]"
            ></Image>
            <Image
              alt={""}
              width={41}
              height={41}
              src={"/assets/lock.jpg"}
              className="absolute top-[40%] left-[-50px] rounded-[50%]"
            ></Image>
            <Image
              alt={""}
              width={41}
              height={41}
              src={"/assets/star.svg"}
              className="absolute top-0 right-[30px] top-[25%]"
            ></Image>
            {/* <Image
              alt={""}
              width={30}
              height={30}
              src={"/assets/check.svg"}
            ></Image> */}
            <Image
              width={403}
              height={605}
              src="/assets/mainbg.svg"
              alt="img"
            />
          </div>
        </div>
        <div
          className={`${styles.Secondsection} bg-white relative z-[100] mt-[-100px] grid m-auto py-[15px] w-[80%] rounded-[24px]`}
        >
          <p className="text-[#1B283B] text-[20px] font-semibold text-center py-[20px]">
            Select package
          </p>
          <div className="flex justify-around pb-[2rem]">
            {pacakages.map((data) => (
              <div key={data.img} className="w-[20%]">
                <PackageCard
                  img={`/assets/${data.img}.svg`}
                  text={data.text}
                ></PackageCard>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-[10rem]  px-[10%]">
          <div className="relative">
            <Image
              width={194}
              height={146}
              src={"/assets/combined.svg"}
              alt="img"
              className="absolute top-[30px] right-[-90px]"
            ></Image>
            <Image
              width={414}
              height={358}
              src={"/assets/smile.svg"}
              alt="img"
            ></Image>
            <div className="flex absolute bottom-[-40px] left-[30px] z-[-30]">
              <img src="/assets/poly1.svg" alt="img" />
              <img
                className="absolute left-[40px]"
                src="/assets/poly2.svg"
                alt="img"
              />
            </div>
          </div>
          <div className="w-[40%] relative">
            <img
              src="/assets/elipse.svg"
              className="absolute top-0 right-0"
              alt=""
            />
            <h1 className="text-[35px] leading=[35px] text-semibold text-[#1B283B]">
              Manage your insurances from one dashboard
            </h1>
            <p className="text-[16px] text-[#627284] leading-[30px] py-[3rem] pt-[2rem] tracking-[0.03em]">
              Odio morbi pharetra vulpultate varius facillisi ridiculus a
              viverra enim faucibus liscipit dicttumst. Odio morbi pharetra
              vulpultate varius facillisi ridiculus a viverra enim faucibus
              liscipit dicttumst
            </p>
            <Button text={"Get started"} className={""}></Button>
          </div>
        </div>
      </main>
    </div>
  );
}
