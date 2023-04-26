import { Button, SigninButton } from "../../components/Button/button";
import Image from "next/image";
const Nav = () => {
  return (
    <div className="absolute top-0 left-0 w-[100%] px-[100px]">
      <div className="flex items-center pt-[20px]">
        <Image
          src={"/assets/logo.svg"}
          width={150}
          height={30}
          alt="img"
          className="mr-[30px]"
        ></Image>
        <div className="flex h-[40px] items-stretch">
          <Button text={"Download app"} className={"mr-[10px] tracking-[0.05em] h-[100%]"}></Button>
          <SigninButton text={"Sign in"} className={"h-[100%] tracking-[0.05em]"}></SigninButton>
        </div>

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
