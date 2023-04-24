import { Button } from "../../components/Button/button";
import Image from "next/image";
const Nav = () => {
  return (
    <div className="absolute top-0 left-0 w-[100%] px-[100px]">
      <div className="flex pt-[20px]">
        <Image
          src={"/assets/logo.svg"}
          width={150}
          height={30}
          alt="img"
          className="mr-[30px]"
        ></Image>
        <Button text={"Download app"} className={"mr-[10px]"}></Button>
        <Button
          text={"Sign in"}
          className={
            "bg-transparent text-[#FF7C03] border border-[#FF7C03]  px-[3rem] "
          }
        ></Button>
        <ul className="text-[15px] text-medium text-white flex ml-auto">
          <li className="mr-[20px]">About us</li>
          <li className="mr-[20px]">Policy Library</li>
          <li className="mr-[20px]">FAQ</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
