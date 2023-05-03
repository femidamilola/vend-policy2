import { Button } from "../Button/button";
import { TextInput1, SelectInput } from "../Foms/form";
import { useDispatch, useSelector } from "react-redux";
import { showPackageModal } from "../../src/store/slices";
import { Location, Round, Date } from "../SVG/Small";
import { useRouter } from "next/router";
export const CarModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(({ state }) => state.showPackageModal);
  return (
    <div
      className={`w-[100%] ${
        showModal ? "block" : "hidden"
      } flex justify-center items-center fixed  top-0 left-0 z-[200] h-[100vh]`}
    >
      <div
        onClick={() => {
          console.log(showModal);
          dispatch(showPackageModal(""));
        }}
        className="absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-[0.63]"
      ></div>
      <div className="w-[40%] px-[20px] py-[30px] z-[300] bg-[#ffffff] rounded-[15px]">
        <p className="text-[#33496A] text-[20px] text-center font-bold leading-[53px]">
          Vehicle Registration
        </p>
        <TextInput1
          label={"Enter your Vehicle Registration Number"}
          inputClass={"outline-0 pl-[20px]"}
          className={"mt-[5rem] "}
        ></TextInput1>
        <Button
          text={"Proceed"}
          className={"w-[100%] mt-[30px] py-[30px] rounded-[6px]"}
        ></Button>
      </div>
    </div>
  );
};

export const TravelModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const showModal = useSelector(({ state }) => state.showPackageModal);
  return (
    <div
      className={`w-[100%] 
      } flex justify-center ${
        showModal === "travel" ? "block" : "hidden"
      }  items-center fixed  top-0 left-0 z-[200] h-[100vh]`}
    >
      <div
        onClick={() => {
          dispatch(showPackageModal(""));
        }}
        className="absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-[0.63]"
      ></div>
      <div className="w-[40%] px-[20px] py-[30px] z-[300] bg-[#ffffff] rounded-[15px]">
        <p className="text-[#33496A] text-[20px] text-center font-bold leading-[53px]">
          Travel Insurance
        </p>
        <p className="text-[#77869B] text-[14px] text-center">
          Please fill in necessary information
        </p>
        <div className="flex justify-between mt-[5rem] items-center">
          <div className="w-[45%] relative">
            <Round className={"absolute top-[42px] left-[10px]"}></Round>
            <TextInput1
              label={"Origin"}
              inputClass={"outline-0 pl-[40px]"}
              className={" "}
            ></TextInput1>
          </div>
          <div className="w-[45%] relative">
            <Location className={"absolute top-[42px] left-[10px]"}></Location>
            <TextInput1
              label={"Destination"}
              inputClass={"outline-0 pl-[40px]"}
              className={" "}
            ></TextInput1>
          </div>
        </div>
        <div className="flex justify-between mt-[2rem] items-center">
          <div className="w-[45%] relative">
            <Date className={"absolute top-[42px] left-[10px]"}></Date>
            <TextInput1
              label={"Departure"}
              inputClass={"outline-0 pl-[40px]"}
              className={" "}
            ></TextInput1>
          </div>
          <div className="w-[45%] relative">
            <Date className={"absolute top-[42px] left-[10px]"}></Date>
            <TextInput1
              label={"Return"}
              inputClass={"outline-0 pl-[40px]"}
              className={" "}
            ></TextInput1>
          </div>
        </div>
        <div className="flex mt-[2rem]">
          <div className="mr-[30px]">
            <input className="border border-[#77869B]" type="checkbox" />
            <label className="text-[#77869B] ml-[5px] text-[13px]" htmlFor="">
              One-Way Trip
            </label>
          </div>
          <div>
            <input className="border border-[#77869B]" type="checkbox" />
            <label className="text-[#77869B] ml-[5px] text-[13px]" htmlFor="">
              Low Emissions
            </label>
          </div>
        </div>
        <Button
          text={"Proceed"}
          className={"w-[100%] mt-[30px] py-[30px] rounded-[6px]"}
          onClick={() => {
            router.push("/companies");
          }}
        ></Button>
      </div>
    </div>
  );
};
export const HealthModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(({ state }) => state.showPackageModal);
  const router = useRouter();
  return (
    <div
      className={`w-[100%] 
      } flex justify-center ${
        showModal == "health" ? "block" : "hidden"
      } items-center fixed  top-0 left-0 z-[200] h-[100vh]`}
    >
      <div
        onClick={() => {
          dispatch(showPackageModal(""));
        }}
        className="absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-[0.63]"
      ></div>
      <div className="w-[40%] px-[20px] py-[30px] z-[300] bg-[#ffffff] rounded-[15px]">
        <p className="text-[#33496A] text-[20px] text-center font-bold leading-[53px]">
          Health Insurance
        </p>
        <p className="text-[#77869B] text-[14px] text-center">
          Please fill in necessary information
        </p>
        <div className="flex justify-between mt-[5rem] items-center">
          <div className="w-[45%]">
            {" "}
            <SelectInput
              label={"Gender"}
              options={["Male", "Female"]}
              selectClass={"outline-0"}
            ></SelectInput>
          </div>
          <div className="w-[45%]">
            <TextInput1
              label={"Age"}
              inputClass={"outline-0 pl-[20px]"}
              className={" "}
            ></TextInput1>
          </div>
        </div>

        <Button
          text={"Proceed"}
          className={"w-[100%] mt-[30px] py-[30px] rounded-[6px]"}
          onClick={() => {
            router.push("/companies");
          }}
        ></Button>
      </div>
    </div>
  );
};
