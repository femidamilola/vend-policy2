import { Button } from "../Button/button";
import { TextInput1, SelectInput, NumberInput, DateInput } from "../Forms/form";
import { useDispatch, useSelector } from "react-redux";
import { showPackageModal, setDisplayedProposal } from "../../src/store/slices";
import { setPurchaseProps } from "../../src/store/purchaseSlice";
import { Location, Round, Date } from "../SVG/Small";
import { useRouter } from "next/router";
import styles from "./Modals.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const CarModal = ({ comprehensive }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [regNo, setRegNo] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [vehicleValue, setVehicleValue] = useState("");
  const showModal = useSelector(({ state }) => state.showPackageModal);
  return (
    <div className={`w-[100%] flex justify-center items-center `}>
      <div className="px-[40px] py-[30px] z-[300] bg-[#ffffff] rounded-[15px]">
        <div className="flex justify-between">
          <TextInput1
            label={"Vehicle Registration Number"}
            inputClass={"outline-0 pl-[20px]"}
            onChange={(e) => {
              setRegNo(e.target.value);
            }}
            className={"w-[45%]"}
          ></TextInput1>
          <TextInput1
            label={"Vehicle make"}
            inputClass={"outline-0 pl-[20px]"}
            className={"w-[45%]"}
            onChange={(e) => {
              setVehicleMake(e.target.value);
            }}
          ></TextInput1>
        </div>
        <div className="flex justify-between mt-[20px]">
          <TextInput1
            label={"Vehicle model"}
            inputClass={"outline-0 pl-[20px]"}
            className={`${comprehensive ? "w-[40%]" : "w-[45%]"}`}
            onChange={(e) => {
              setVehicleModel(e.target.value);
            }}
          ></TextInput1>
          <NumberInput
            label={"Vehicle year"}
            placeholder={"YYYY"}
            inputClass={"outline-0 pl-[20px]"}
            className={`${comprehensive ? "w-[30%]" : "w-[45%]"}`}
            onChange={(e) => {
              setVehicleYear(e.target.value);
            }}
          ></NumberInput>
          <div className={`${comprehensive ? "block" : "hidden"} w-[25%]`}>
            <TextInput1
              label={"Vehicle value"}
              inputClass={"outline-0 pl-[20px]"}
              className={"w-[100%] "}
              onChange={(e) => {
                setVehicleValue(e.target.value);
              }}
            ></TextInput1>
          </div>
        </div>

        <Button
          text={"Proceed"}
          className={
            "w-[167px] mt-[30px]  h-[48px] disabled:opacity-50 rounded-[6px]"
          }
          disable={regNo.length === 0 ? true : false}
          onClick={() => {
            dispatch(setDisplayedProposal("motor"));
            console.log(vehicleYear);
            dispatch(
              setPurchaseProps({
                productType: "Motor Insurance",
                vehicleRegistrationNumber: regNo,
                vehicleMake: vehicleMake,
                vehicleModel: vehicleModel,
                vehicleYear: vehicleYear,
                vehicleValue: vehicleValue,
              })
            );
            dispatch(showPackageModal(""));
            router.push("/companies");
          }}
        ></Button>
      </div>
    </div>
  );
};
export const CarTermsModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(({ state }) => state.showPackageModal);
  return (
    <div
      className={`w-[100%] ${
        showModal == "carterms" ? "block" : "hidden"
      } flex justify-center items-center fixed  top-0 left-0 z-[200] h-[100vh]`}
    >
      <div
        onClick={() => {
          dispatch(showPackageModal(""));
        }}
        className="absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-[0.63]"
      ></div>
      <div className="w-[40%] px-[40px] py-[30px] z-[300] bg-[#ffffff] rounded-[15px]">
        <p className="text-[#33496A] text-[20px] text-center font-bold leading-[53px]">
          Third Party Fire Insurance
        </p>
        <div>
          <p
            className={`${styles.scrollbarhide} text-[#77869B] text-[14px] leading-[30px] h-[250px] overflow-y-scroll`}
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar. The Big Oxmox advised her not to do so, because
            there were thousands of bad Commas, wild Question Marks and devious
            Semikoli, but the Little Blind Text didn’t listen. She packed her
            seven versalia, put her initial into the belt and made herself on
            the way. When she reached the first hills of the Italic Mountains,
            she had a last view back on the skyline of her hometown
            Bookmarksgrove, the headline{" "}
          </p>
        </div>

        <Button
          text={"Proceed"}
          className={"w-[100%] mt-[30px] py-[30px] rounded-[6px]"}
          onClick={() => dispatch(showPackageModal("car"))}
        ></Button>
      </div>
    </div>
  );
};

export const TravelModal = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const showModal = useSelector(({ state }) => state.showPackageModal);
  const [travelType, setTravelType] = useState(null);
  return (
    <div className={`flex justify-center  items-center `}>
      <div className=" px-[20px] py-[30px] z-[300] bg-[#ffffff] rounded-[15px]">
        <div className="flex justify-between items-center">
          <div className="relative w-[45%]">
            <Round className={"absolute top-[42px] left-[10px]"}></Round>
            <TextInput1
              label={"Origin"}
              inputClass={"outline-0 pl-[40px]"}
              className={" "}
              Formvals={{ ...register("origin", { required: true }) }}
              formError={errors.origin}
            ></TextInput1>
          </div>
          <div className="w-[45%] relative">
            <Location className={"absolute top-[42px] left-[10px]"}></Location>
            <TextInput1
              label={"Destination"}
              inputClass={"outline-0 pl-[40px]"}
              Formvals={{ ...register("destination", { required: true }) }}
              formError={errors.destination}
              className={" "}
            ></TextInput1>
          </div>
        </div>
        <div className="flex justify-between mt-[2rem] items-center">
          <div className="w-[45%] relative">
            {/* <Date className={"absolute top-[42px] left-[10px]"}></Date> */}
            <DateInput
              label={"Departure"}
              inputClass={"outline-0 px-[5px]"}
              className={" "}
              Formvals={{ ...register("departure", { required: true }) }}
              formError={errors.departure}
            ></DateInput>
          </div>
          <div className="w-[45%] relative">
            {/* <Date className={"absolute top-[42px] left-[10px]"}></Date> */}
            <DateInput
              label={"Return"}
              inputClass={"outline-0 px-[5px]"}
              className={" "}
              Formvals={{ ...register("returnTrip", { required: true }) }}
              formError={errors.return}
            ></DateInput>
          </div>
        </div>
        <div className="flex mt-[2rem]">
          <div className="mr-[30px]">
            <input
              className="border border-[#77869B]"
              value={"one-way trip"}
              type="checkbox"
              onChange={(e) => {
                setTravelType(e.target.value);
              }}
            />
            <label className="text-[#77869B] ml-[5px] text-[13px]" htmlFor="">
              One-Way Trip
            </label>
          </div>
          <div>
            <input
              className="border border-[#77869B]"
              value={"low emmissions"}
              type="checkbox"
              onChange={(e) => {
                setTravelType(e.target.value);
              }}
            />
            <label className="text-[#77869B] ml-[5px] text-[13px]" htmlFor="">
              Low Emissions
            </label>
          </div>
        </div>
        <Button
          text={"Proceed"}
          disable={travelType == null ? true : false}
          className={
            "w-[167px] mt-[30px]  h-[48px] disabled:opacity-50 rounded-[6px]"
          }
          onClick={handleSubmit((data) => {
            dispatch(setDisplayedProposal("travel"));
            dispatch(showPackageModal(""));

            dispatch(
              setPurchaseProps({
                productType: "Travel Insurance",
                travelInsuranceType: travelType,
                location: "Lagos",
                ...data,
              })
            );
            router.push("/companies");
          })}
        ></Button>
      </div>
    </div>
  );
};
export const HealthModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const showModal = useSelector(({ state }) => state.showPackageModal);
  const checkPurchase = useSelector((state) => state);
  const router = useRouter();
  return (
    <div className=" px-[40px]  py-[30px] z-[300] bg-[#ffffff] rounded-[15px]">
      <div className="flex justify-between items-center">
        <div className="w-[47%]">
          {" "}
          <SelectInput
            label={"Gender"}
            options={["Male", "Female"]}
            selectClass={"outline-0"}
            Formprops={{ ...register("gender") }}
          ></SelectInput>
        </div>
        <div className="w-[47%]">
          <TextInput1
            label={"Age"}
            inputClass={"outline-0 pl-[20px]"}
            className={" "}
            Formvals={{ ...register("age") }}
          ></TextInput1>
        </div>
      </div>

      <Button
        text={"Proceed"}
        className={
          "w-[167px] mt-[30px]  h-[48px] disabled:opacity-50 rounded-[6px]"
        }
        onClick={handleSubmit((data) => {
          dispatch(setDisplayedProposal("health"));
          dispatch(showPackageModal(""));
          dispatch(
            setPurchaseProps({ productType: "Health Insurance", ...data })
          );

          router.push("/companies");
        })}
      ></Button>
    </div>
  );
};
