import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import { Button } from "components/Button/button";
import { showPackageModal } from "@/store/slices";

import {
  Health,
  Travel,
  ReviewPolicy,
  Motor,
  Lock,
  QuoteMain,
  CheckMain,
  World,
  Star,
  Twist,
} from "../..//components/SVG/Small";
import {
  PackageCard,
  InsureCard,
  CarouselCard,
  CommentCard,
} from "../../components/Cards/card";
import { Motoroptions } from "../../components/Modals/Motoroptions";
import { useDispatch, useSelector } from "react-redux";
import { setPurchaseProps, clearPurchaseProps } from "@/store/purchaseSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
export default function Home() {
  const packages = [
    {
      text: "Motor",
      img: <Motor></Motor>,
      productType: "Motor Insurance",
      route: "/motor/fire",
    },
    {
      img: <Health></Health>,
      text: "Health",
      productType: "Health Insurance",
      route: "/health",
    },
    {
      img: <Travel></Travel>,
      text: "Travel",
      productType: "Travel Insurance",
      route: "travel",
    },
    { img: <ReviewPolicy></ReviewPolicy>, text: "Review your policy" },
  ];

  const insureSec = [
    {
      head: "Buy Insurance in 2mins",
      text: "Make buying decisions based on full policy information and from the comfort of your home",
    },
    {
      head: "Get Quotes from different issuers",
      text: "We give you the best quotes for all classes of insurance available on our platform",
    },
    {
      head: "Compare prices from the best issuers",
      text: "Compare quotes across your favorite insurers before buying your preferred policy",
    },
  ];
  const carousel = [
    {
      img: "star",
      head: "More than just price comparison",
      text: "We know that different insurance carriers offer different rates and varying coverage. We give you access to real, accurate quotes from top insurance companies in the country.",
    },
    {
      img: "check",
      head: "100% Independent",
      text: "We are 100% independent and provide unbiased and impartial Insurance quotes",
    },
    {
      img: "world",
      head: "Information at your finger tips",
      text: "We provide information on all our covered policies and insurers in the simplest language for everyone to understand",
    },
  ];

  const dispatch = useDispatch();
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true, // enable vertical scrolling
    verticalSwiping: true, // enable vertical swiping
    centerMode: true,
    centerPadding: "0px",
    initialSlide: 1,
    arrows: true,
    focusOnSelect: true,
    prevArrow: (
      <Image
        width={20}
        height={20}
        src={"/assets/arrow-down.svg"}
        alt="img"
      ></Image>
    ),
    nextArrow: (
      <Image
        width={20}
        height={20}
        src={"/assets/arrow-up.svg"}
        alt="img"
      ></Image>
    ),
    infinite: true,
  };
  const router = useRouter();
  useEffect(() => {
    dispatch(clearPurchaseProps());
  }, []);
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
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <Motoroptions></Motoroptions>
        <div
          className={`${styles.Firstsection}  relative  z-50 flex justify-between items-center h-[700px] px-[5%]`}
        >
          <div className="text-white w-[50%]">
            <h1 className="text-[48px] leading-[69px]">
              What <span className="text-[#FF9E44]">policy</span> will you be
              buying today?
            </h1>
            <p className="text-[18px] pt-[25px] mb-[30px] w-[70%] leading-[25px] tracking-[1%]">
              Access some of the industry’s best insurance providers using
              VendPolicies
            </p>
            <div className="flex mt-[50px] items-center relative">
              <Button
                text={"Get a Quote"}
                onClick={() => router.push("/product")}
                className={"mr-[10px]"}
              ></Button>
              <p className="text-[16px] ml-[20px]">or</p>
              <div className="absolute right-[15%] top-[-40px]">
                <Twist></Twist>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0px]  right-[5%]  ">
            <div className=" absolute right-[60px] bottom-[60px] w-[210px]  bg-white rounded-[12px] py-[10px] px-[10px]">
              <div className="absolute top-[-10px] left-[-10px] ">
                <QuoteMain></QuoteMain>
              </div>

              <p className="text-[14px] text-center font-semibold ">
                Quick, easy and convenient insurance access
              </p>
            </div>
            <div className="absolute top-[65%] left-[-60px]  flex px-[10px]  items-center py-[8px] rounded-[12px] bg-white">
              <CheckMain></CheckMain>
              <p className="text-[14px] text-center font-semibold">
                NAICOM Licensed
              </p>
            </div>
            <div className="absolute top-[45px] left-[20%]">
              <World></World>
            </div>
            <div className="absolute top-0 right-[30px] top-[30%]">
              <Star></Star>
            </div>

            <Image
              alt={""}
              width={31}
              height={31}
              src={"/assets/lock.jpg"}
              className="absolute top-[40%] left-[-30px] rounded-[50%]"
            ></Image>
            <Image
              priority={true}
              src="/assets/mainimg.png"
              width={404}
              height={605}
              loading="eager"
              className="mr-[50px]"
              alt="img"
            />
          </div>
        </div>
        <div
          className={`${styles.Secondsection} bg-white relative z-[100] mt-[-40px] grid m-auto  w-[80%] rounded-[24px]`}
        >
          <p className="text-[#1B283B] text-[20px] font-semibold text-center py-[20px]">
            Select package
          </p>
          <div className="flex justify-around pb-[2rem]">
            {packages.map((data) => (
              <div key={data.img} className="w-[20%]">
                <PackageCard
                  onClick={() => {
                    if (data.text == "Motor") dispatch(showPackageModal());
                    else if (
                      data.text !== "Motor" &&
                      !data.text.includes("Review")
                    )
                      router.push(data.route);
                    else "";
                  }}
                  img={data.img}
                  text={data.text}
                ></PackageCard>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-[10rem]  px-[5%]">
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
              src={"/assets/smile.png"}
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
              One dashboard, Full Visibility
            </h1>
            <p className="text-[16px] text-[#627284] leading-[30px] py-[3rem] pt-[2rem] tracking-[0.03em]">
              Using our unified user dashboard, we aggregate insurances across
              insurers and policies. Our users have full visibility on all of
              the purchased insurances from motor to travel to health, from
              every insurer.
            </p>
            <Button
              text={"Get started"}
              onClick={() => router.push("/product")}
              className={""}
            ></Button>
          </div>
        </div>
        <div className="w-[90%] relative ml-[50%] mt-[15rem] transform translate-x-[-50%] flex justify-between">
          <Image
            width={133}
            height={125}
            src={"/assets/pluscombined.svg"}
            alt="img"
            className="absolute top-[-40px] right-0"
          ></Image>
          {insureSec.map((data, i) => (
            <div key={i} className="w-[32%]">
              <InsureCard
                img={`/assets/sub${i + 1}.svg`}
                head={data.head}
                text={data.text}
              ></InsureCard>
            </div>
          ))}
        </div>
        <div
          className={`${styles.Thirdsection} relative mt-[7rem] py-[15rem]  w-[100%] flex justify-between px-[5%] items-center`}
        >
          <Image
            alt=""
            src={"/assets/poly3.svg"}
            width={110}
            height={110}
            className="absolute top-[40%] left-[40%]"
          ></Image>
          <Image
            alt=""
            src={"/assets/poly3.svg"}
            width={110}
            height={110}
            className="absolute top-[50%] left-[40%]"
          ></Image>

          <div className="h-[100%] absolute top-0 left-0 w-[80%]">
            <Image fill alt="" src={"/assets/slant.svg"}></Image>
          </div>
          <div className="w-[46%]">
            <h1 className="text-white my-[3rem]  text-[30px] leading-[53px] font-semibold">
              What makes VendInsurance Policy different?
            </h1>
            <p className="text-[15px] text-white leading-[30px]  tracking-[0.02em]">
              What makes VendPolicies different? Vendpolices is more than just
              an aggregator/broker. We provide you with as much information as
              we can, as clearly as possible to guide decision making.
            </p>
            <p className="text-[15px] text-white leading-[30px] py-[15px]  tracking-[0.02em]">
              {`We know what's important is different for everyone, so we give you
              options to choose and make the right decision for you.`}
            </p>
            <p className="text-[15px] text-white leading-[30px]  tracking-[0.02em]">
              {`
              You can trust us to keep an eye on the insurance providers we work
              with to make sure they're keeping up their end of the deal and
              providing you with a good service. Our pledge is never to let our
              customers down.`}
            </p>
            <Button
              text={"Get a Quote"}
              onClick={() => router.push("/product")}
              className={"mt-[3rem] relative z-[300]"}
            ></Button>
          </div>
          <div className="w-[45%] h-[130%]">
            <Slider {...settings}>
              {carousel.map((data) => (
                <div key={data.head} className="">
                  <CarouselCard
                    img={`/assets/${data.img}.svg`}
                    head={data.head}
                    text={data.text}
                  ></CarouselCard>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div
          className={`${styles.Fourthsection} px-[5%] py-[4rem] mt-[8rem] flex justify-between`}
        >
          <div className="w-[40%]">
            <h1 className="text-[#1B283B] text-[30px] font-semibold leading-[50px]">
              We priortize service and satisfaction
            </h1>
            <p className="text-[15px] leading-[26px] text-[#657587] tracking-[2%] pt-[3rem]">
              At VendPolicies, we ensure that all our partners are held to very
              high standard terms of service especially in terms of claims
              processing.
            </p>{" "}
            <p className="text-[15px] leading-[26px]  text-[#657587] tracking-[2%] py-[5px]">
              We are constantly seeking the feedback of our customers to improve
              quality of service across all our partners.The satisfaction of our
              client is our utmost priority
            </p>
            <div className="flex mt-[15px]">
              {[1, 2, 3, 4, 5].map((data) => (
                <Image
                  key={data}
                  src={"/assets/rating.svg"}
                  width={22}
                  height={22}
                  alt=""
                  className="mr-[3px]"
                ></Image>
              ))}
            </div>
          </div>
          <div className="w-[40%]">
            <CommentCard
              comment={
                "“The service was fast and I was issued my insurance certificate almost instantly”"
              }
              img={"/assets/user2.svg"}
              name={"Kehinde Ogunsanya"}
              className={"mb-[15px]"}
            ></CommentCard>
            <CommentCard
              comment={
                "“Great customer service, I got stuck during onboarding but was quickly unblocked by the team”"
              }
              className={""}
              img={"/assets/user1.svg"}
              name={"Kevin Akpederi"}
            ></CommentCard>
            <p className="text-end text-[14px] mt-[4rem] text-[#3E96FC]">
              View more
            </p>
          </div>
        </div>
        <div className="px-[5%] flex flex-col py-[2.5rem]">
          <h1 className="text-[#1B283B] text-center py-[5rem] text-[30px] leading-[50px] font-semibold">
            Our Partners
          </h1>
          <div className="grid grid-cols-6 justify-between">
            {Array(12)
              .fill(1)
              .map((data, i) => (
                <div className="grid m-auto" key={i}>
                  <Image
                    className="mb-[20px]"
                    src={`/assets/partner${i + 1}.png`}
                    width={130}
                    height={100}
                    alt=""
                  ></Image>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
