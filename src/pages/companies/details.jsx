import Image from "next/image";
import styles from "./Company.module.css";
import { Location, Check } from "../../../components/SVG/Small";
import { Button } from "../../../components/Button/button";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
const Details = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const toks = getCookie("token");
    setToken(toks);
  }, [token]);
  const router = useRouter();
  return (
    <div className="px-[5%]">
      <div className="w-[100%] h-[300px] absolute z-[-10] top-0 left-0">
        <Image src={"/assets/cdetails.jpg"} fill></Image>
      </div>
      <div className={`mt-[250px] flex   `}>
        <div
          className={`${styles.Filter} bg-white px-[15px] justify-self-start py-[10px] rounded-[5px]`}
        >
          <Image width={133} height={52} src={"/assets/partner3.png"}></Image>
        </div>
      </div>
      <div className="mt-[3rem]">
        <p className="text-[#5D636A] text-[1.6rem] leading-[25px]">
          NEM Insurance PLC
        </p>
        <h1 className="text-[#33496A] font-bold text-[3rem] py-[10px] leading-[5.3rem]">
          Health Insurance
        </h1>
        <div className="flex mr-[15px] text-[#374453] text-[14px] ">
          <div className="flex items-center px-[20px] mr-[25px] py-[5px] rounded-[7px] bg-[#F5F5F5]">
            <Location></Location>
            <p className="pl-[5px] opacity-[0.79] ">Lagos,Nigeria</p>
          </div>
          <div className="flex items-center px-[20px] py-[5px] rounded-[7px] bg-[#F5F5F5]">
            <Check></Check>
            <p className="pl-[5px] opacity-[0.79]">NIC regulated</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#50565F] text-[19px] font-bold tracking-[1px] pt-[5rem] pb-[3rem]">
          About this policy
        </p>
        <p className="text-[#5F6975] text-[16px] leading-[30px]">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth. Even
          the all-powerful Pointing has no control about the blind texts it is
          an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar. The Big Oxmox advised her not to do so, because there were
          thousands of bad Commas, wild Question Marks and devious Semikoli, but
          the Little Blind Text didn’t listen. She packed her seven versalia,
          put her initial into the belt and made herself on the way. When she
          reached the first hills of the Italic Mountains, she had a last view
          back on the skyline of her hometown Bookmarksgrove, the headline{" "}
        </p>
      </div>
      <div>
        <p className="text-[#50565F] text-[19px] font-bold tracking-[1px]  py-[3rem]">
          Terms and Conditions
        </p>
        <p className="text-[#5F6975] text-[16px] leading-[30px]">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth. Even
          the all-powerful Pointing has no control about the blind texts it is
          an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar. The Big Oxmox advised her not to do so, because there were
          thousands of bad Commas, wild Question Marks and devious Semikoli, but
          the Little Blind Text didn’t listen. She packed her seven versalia,
          put her initial into the belt and made herself on the way. When she
          reached the first hills of the Italic Mountains, she had a last view
          back on the skyline of her hometown Bookmarksgrove, the headline{" "}
        </p>
      </div>
      <div>
        <p className="text-[#50565F] text-[19px] font-bold tracking-[1px]  py-[3rem]">
          About company
        </p>
        <p className="text-[#5F6975] text-[16px] leading-[30px]">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth. Even
          the all-powerful Pointing has no control about the blind texts it is
          an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar. The Big Oxmox advised her not to do so, because there were
          thousands of bad Commas, wild Question Marks and devious Semikoli, but
          the Little Blind Text didn’t listen. She packed her seven versalia,
          put her initial into the belt and made herself on the way. When she
          reached the first hills of the Italic Mountains, she had a last view
          back on the skyline of her hometown Bookmarksgrove, the headline{" "}
        </p>
      </div>
      <Button
        className={"mt-[4rem]"}
        onClick={() => {
          token ? router.push("/upload") : router.push("/signin");
        }}
        text={"Buy Insurance (N33,000.00)"}
      ></Button>
    </div>
  );
};

export default Details;
