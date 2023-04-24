import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "components/Button/button";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        <div className={`${styles.Firstsection} flex justify-between items-center pt-[90px] px-[60px]`}>
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
          <div>
            <img src="/assets/mainbg.svg" alt="img" />
          </div>
        </div>
      </main>
    </div>
  );
}
