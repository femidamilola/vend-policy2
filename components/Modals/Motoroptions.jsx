import styles from "./Modals.module.css";
import { Party, Theft, Comprehensive, Fire } from "../SVG/Svg";
import { useState } from "react";
import { useRouter } from "next/router";
import { showPackageModal } from "@/store/slices";
import { useSelector, useDispatch } from "react-redux";
export const Motoroptions = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const router = useRouter();

  const toggle = useSelector(({ state }) => state?.showPackageModal);

  const Motorcard = ({ className, img, policyclass, border, textcolor }) => {
    return (
      <div className={`flex flex-col items-center cursor-pointer ${className}`}>
        <div
          className={`w-[112px] border  flex justify-center items-center h-[122px] ${border}`}
        >
          {img}
        </div>
        <p className={`${textcolor} py-[5px] text-[14px]`}>{policyclass}</p>
      </div>
    );
  };
  const dispatch = useDispatch();
  return (
    <div
      className={`w-[100%]   fixed top-0 z-[300] left-0  h-[100vh] ${
        toggle ? "block" : "hidden"
      }`}
    >
      <div
        className={`w-[100%] h-[100%] absolute top-0 left-0 ${styles.MotorModal}`}
      ></div>
      <div
        className={`bg-white absolute top-[30%] left-[50%] py-[30px] transform translate-x-[-50%] px-[30px] rounded-[10px] w-[50%]`}
      >
        <p className="text-center text-[#374453] text-[20px] font-[800]">
          Select Motor package
        </p>
        <div
          onClick={() => dispatch(showPackageModal())}
          className="absolute right-[15px] top-[16px] cursor-pointer"
        >
          <img src="/assets/ex.png" alt="" />
        </div>
        <div className="flex mt-[30px] justify-between">
          <div
            onMouseEnter={() => setHovered1(true)}
            onMouseLeave={() => setHovered1(false)}
            onClick={() => router.push("/motor/thirdparty")}
          >
            <Motorcard
              policyclass={"Third Party"}
              textcolor={hovered1 == false ? "text-[#506176]" : "text-major"}
              border={hovered1 == true ? styles.BorderHover : styles.Border}
              img={
                <Party
                  fill={`${hovered1 == false ? "#ADB9C7" : "#FF7C03"}`}
                ></Party>
              }
            ></Motorcard>
          </div>
          <div
            onMouseEnter={() => setHovered2(true)}
            onMouseLeave={() => setHovered2(false)}
            onClick={() => router.push("/motor/fire")}
          >
            <Motorcard
              policyclass={"Third Party/Fire"}
              textcolor={hovered2 == false ? "text-[#506176]" : "text-major"}
              border={hovered2 == true ? styles.BorderHover : styles.Border}
              img={
                <Fire
                  fill={`${hovered2 == false ? "#ADB9C7" : "#FF7C03"}`}
                ></Fire>
              }
            ></Motorcard>
          </div>
          <div
            onMouseEnter={() => setHovered3(true)}
            onMouseLeave={() => setHovered3(false)}
            onClick={() => router.push("/motor/theft")}
          >
            <Motorcard
              policyclass={"Third Party/Theft"}
              textcolor={hovered3 == false ? "text-[#506176]" : "text-major"}
              border={hovered3 == true ? styles.BorderHover : styles.Border}
              img={
                <Theft
                  fill={`${hovered3 == false ? "#ADB9C7" : "#FF7C03"}`}
                ></Theft>
              }
            ></Motorcard>
          </div>
          <div
            onMouseEnter={() => setHovered4(true)}
            onMouseLeave={() => setHovered4(false)}
            onClick={() => router.push("/motor/comprehensive")}
          >
            <Motorcard
              policyclass={"Comprehensive"}
              textcolor={hovered4 == false ? "text-[#506176]" : "text-major"}
              border={hovered4 == true ? styles.BorderHover : styles.Border}
              img={
                <Comprehensive
                  fill={`${hovered4 == false ? "#ADB9C7" : "#FF7C03"}`}
                ></Comprehensive>
              }
            ></Motorcard>
          </div>
        </div>
      </div>
    </div>
  );
};