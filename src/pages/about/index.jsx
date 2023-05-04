import {
  Line,
  CheckAbout,
  PlusCombined,
  Play,
} from "../../../components/SVG/Small";
import Image from "next/image";
import styles from "./About.module.css";
import { SigninButton } from "../../../components/Button/button";
const About = () => {
  const WatchVideo = () => (
    <div className="bg-major flex text-white self-stretch px-[10px] py-[5px] rounded-[5px]">
      <Play></Play>
      <button className="text-[14px] tracking-[1px]  font-bold px-[10px]">
        Watch video
      </button>
    </div>
  );
  return (
    <div>
      <div
        className={`flex justify-center ${styles.Background} text-white py-[150px]`}
      >
        <div className="flex flex-col text-[48px] w-[50%] leading-[69px]">
          <p className="text-center">Get to know more </p>
          <div className="flex justify-center">
            <p>
              about <span className="text-[#FF7C03]">us</span> as a
            </p>
            <div className=" ml-[8px] flex items-center">
              <p>c</p>
              <div className="mx-[-4px] mt-[7px]">
                <CheckAbout></CheckAbout>
              </div>
              <p>mpany</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[15%] flex justify-between mt-[5rem]">
        <img src={"/assets/aboutimg1.svg"} alt=""></img>
        <div className="w-[40%]">
          <p className="text-[#FF7C03] font-bold">WHAT WE DO</p>
          <div className="flex">
            <p className="text-[#33496A] text-[38px]">
              Secured place for everyone
            </p>
            <PlusCombined></PlusCombined>
          </div>
          <div className="flex ">
            <Line></Line>
            <div className="ml-[20px] text-[#5F6975] text-[15px] ">
              <p className="mt-[15px]">
                Far far away, behind the word mountains, far from the countries{" "}
              </p>
              <p className="mt-[8px]">
                The Big Oxmox advised her not to do so, because there were
                thousands.
              </p>
              <p className="mt-[10px]">
                Far far away, behind the word mountains, far from the countries{" "}
              </p>
              <p className="mt-[10px]">
                When she reached the first hills of the Italic Mountains, she
                had a last view back
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[10%] mt-[8rem]">
        <p className="text-[#FF7C03] font-bold tracking-[1px] text-center">
          OUR MISSION
        </p>
        <h1 className="text-center text-[#33496A] text-[38px]">
          Our team is on a mission
        </h1>
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
          back on the skyline of her hometown Bookmarksgrove, the headline. The
          Big Oxmox advised her not to do so, because there were thousands of
          bad Commas, wild Question Marks and devious Semikoli, but the Little
          Blind Text didn’t listen. She packed her seven versalia, put her
          initial into the belt and made herself on the way. When she reached
          the first hills of the Italic Mountains, she had a last view back on
          the skyline of her hometown Bookmarksgrove, the headline.
        </p>
      </div>
      <div className={`mt-[5rem]  px-[10%] h-[300px] ${styles.Gridcontainer}`}>
        <div className="relative">
          <Image fill src={"/assets/about.jpg"} alt=""></Image>
        </div>
        <div className="relative">
          <Image fill src={"/assets/about2.jpg"} alt=""></Image>
        </div>
        <div className="flex flex-col justify-between">
          <div className="w-[100%] relative h-[48%]">
            <Image fill src={"/assets/about3.jpg"}></Image>
          </div>

          <div className="w-[100%] relative h-[48%]">
            <Image fill alt="" src={"/assets/about4.jpg"}></Image>
          </div>
        </div>
      </div>
      <div className="px-[10%] flex justify-end">
        <p className="text-[#3E96FC] text-[14px] py-[30px]">View gallery</p>
      </div>
      <div className={`${styles.Background} py-[5rem] px-[10%]`}>
        <p className="text-[#FF7C03] font-bold tracking-[1px] py-[20px] text-center">
          OUR VALUES
        </p>
        <h1 className="text-center text-[#ffffff] pb-[20px] text-[38px]">
          Our Strategies and Values
        </h1>
        <p className="text-[#ffffff] text-[16px] leading-[30px]">
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
          back on the skyline of her hometown Bookmarksgrove, the headline. The
          Big Oxmox advised her not to do so, because there were thousands of
          bad Commas, wild Question Marks and devious Semikoli, but the Little
          Blind Text didn’t listen. She packed her seven versalia, put her
          initial into the belt and made herself on the way. When she reached
          the first hills of the Italic Mountains, she had a last view back on
          the skyline of her hometown Bookmarksgrove, the headline.
        </p>
        <div className="flex justify-center items-center mt-[2.5rem]">
          <div className="mr-[10px]">
            <WatchVideo></WatchVideo>
          </div>

          <SigninButton text={"Learn more"}></SigninButton>
        </div>
      </div>
      <div className="px-[5%] flex flex-col py-[2.5rem]">
        <p className="text-[#FF7C03] font-bold tracking-[1px] py-[20px] text-center">
          OUR PARTNERS
        </p>
        <h1 className="text-center pb-[20px] text-[#33496A] text-[38px]">
          Our Investors
        </h1>
        <div className="grid grid-cols-6 justify-between">
          {Array(12)
            .fill(1)
            .map((data, i) => (
              <div className="grid m-auto" key={i}>
                <Image
                  className="mb-[20px]"
                  src={`assets/partner${i + 1}.svg`}
                  width={130}
                  height={100}
                  alt=""
                ></Image>
              </div>
            ))}
        </div>
      </div>
      <div className="px-[5%] flex flex-col py-[2.5rem]">
        <p className="text-[#FF7C03] font-bold tracking-[1px] py-[20px] text-center">
          OUR HISTORY
        </p>
        <h1 className="text-center pb-[20px] text-[#33496A] text-[32px]">
          VendPolicy in Numbers
        </h1>
        <div className="flex justify-center">
          <div
            className={`${styles.Background} rounded-[25px] px-[60px] py-[50px] flex justify-between w-[70%]`}
          >
            <div className="flex flex-col ">
              <h1 className="text-white text-[38px] leading-[53px] font-bold">
                2022
              </h1>
              <p className="text-major text-[14px]">Year Founded</p>
            </div>
            <div className="flex flex-col ">
              <h1 className="text-white text-[38px] leading-[53px] font-bold">
                75+
              </h1>
              <p className="text-major text-[14px]">Members</p>
            </div>
            <div className="flex flex-col ">
              <h1 className="text-white text-[38px] leading-[53px] font-bold">
                10+
              </h1>
              <p className="text-major text-[14px]">Investors</p>
            </div>
            <div className="flex flex-col ">
              <h1 className="text-white text-[38px] leading-[53px] font-bold">
                <span className="text-[19px]">₦</span>
                25M
              </h1>
              <p className="text-major text-[14px]">Year Founded</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
