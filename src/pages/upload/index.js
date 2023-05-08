import styles from "./Upload.module.css";

import "react-phone-input-2/lib/style.css";
import TravelForm from "../../../components/ProposalForm/TravelForm";
import { useSelector } from "react-redux";
import MotorForm from "../../../components/ProposalForm/MotorForm";
import HealthForm from "../../../components/ProposalForm/HealthForm";
const FileUpload = () => {
  const displayedModal = useSelector(
    ({ proposalState }) => proposalState.displayedProposal
  );
  console.log(displayedModal);
  let sectionDisplayed = <div></div>;
  if (displayedModal === "motor") {
    sectionDisplayed = <MotorForm></MotorForm>;
  } else if (displayedModal === "travel") {
    sectionDisplayed = <TravelForm></TravelForm>;
  } else if (displayedModal === "health") {
    sectionDisplayed = <HealthForm></HealthForm>;
  }

  return (
    <div>
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
