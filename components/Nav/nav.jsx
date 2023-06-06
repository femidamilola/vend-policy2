import { Button, SigninButton } from "../../components/Button/button";
import Image from "next/image";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
const Nav = () => {
  const router = useRouter();

  const token = getCookie("token") || "";

  return (
    <div
      className={`absolute z-[200] top-0 ${
        router.route !== "/companies/details" ? "bg-[#3A2087]" : ""
      }  pb-[20px] left-0 w-[100%]  px-[100px] ${
        router.route.includes("sign") || router.route.includes("dashboard")
          ? "hidden"
          : "block"
      }`}
    >
      <div className="flex items-center pt-[20px]">
        <Image
          src={"/assets/logo.png"}
          width={150}
          height={30}
          alt="img"
          className="mr-[30px] cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        ></Image>
        <div className="flex h-[40px] items-center">
          <Button
            text={"Download app"}
            className={"mr-[10px] tracking-[0.05em] h-[100%]"}
          ></Button>
          {token?.length < 1 ? (
            <SigninButton
              text={"Sign in"}
              className={"h-[100%] tracking-[0.05em]"}
              onClick={() => router.push("/signin")}
            ></SigninButton>
          ) : (
            <p
              onClick={() => router.push("/dashboard")}
              className="text-[15px] cursor-pointer text-medium text-white"
            >
              Dashboard
            </p>
          )}
        </div>

        <ul className="text-[15px] text-medium text-white flex ml-auto">
          <li
            className="mr-[20px] cursor-pointer"
            onClick={() => router.push("/about")}
          >
            About us
          </li>
          <li className="mr-[20px]">Policy Library</li>
          <li className="mr-[20px]">FAQ</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
