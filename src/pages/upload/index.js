import styles from "./Upload.module.css";
import { useRouter } from "next/router";
import "react-phone-input-2/lib/style.css";
import TravelForm from "../../../components/ProposalForm/TravelForm";
import { useSelector, useDispatch } from "react-redux";
import MotorForm from "../../../components/ProposalForm/MotorForm";
import HealthForm from "../../../components/ProposalForm/HealthForm";
import Image from "next/image";
import { showPaymentModal } from "../../store/slices";

const FileUpload = () => {
  const router = useRouter();
  const displayedModal = useSelector(
    ({ purchaseState }) => purchaseState.proposalBody
  );
  console.log(displayedModal);
  let sectionDisplayed = <div></div>;
  if (displayedModal?.productType?.includes("Motor")) {
    sectionDisplayed = <MotorForm></MotorForm>;
  } else if (displayedModal?.productType?.includes("Travel")) {
    sectionDisplayed = <TravelForm></TravelForm>;
  } else if (displayedModal?.productType?.includes("Health")) {
    sectionDisplayed = <HealthForm></HealthForm>;
  } else {
    router.push("/");
  }
  const showPay = useSelector(({ state }) => state);
  const dispatch = useDispatch();
  return (
    <div className="relative">
      <div
        className={`${
          showPay.showPaymentModal ? "block" : "hidden"
        } fixed z-[300] w-[100%] h-[100vh] `}
      >
        <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-black opacity-70"></div>
        <div className="w-[40%] ml-[50%] flex flex-col justify-center items-center mt-[200px] transform translate-x-[-50%] py-[30px] bg-white">
          <Image
            src={"/assets/paysuccess.png"}
            width={39}
            height={39}
            alt=""
          ></Image>
          <p className="text-center text-[28px] font-bold">
            Payment successful
          </p>
          <p
            onClick={() => {
                router.push("/");
              dispatch(showPaymentModal());
            
            }}
            className="text-[16px] font-semibold text-major border border-major px-[10px] mt-[10px] cursor-pointer"
          >
            Proceed to home
          </p>
        </div>
      </div>
      <div
        className={`pl-[10%] ${styles.Background} text-white pt-[20rem] pb-[5rem]`}
      >
        <h1 className="text-[48px] leading-[69px]">Proposal Form</h1>
        <p className="opacity-90 text-[16px]">
          Please fill up the proposal form for your Travel insurance
        </p>
      </div>

      {sectionDisplayed}
    </div>
  );
};

export default FileUpload;
