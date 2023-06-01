import { useState } from "react";
import UploadCard from "../../../components/UploadCard";
import { Button } from "../../../components/Button/button";
const HealthClaim = () => {
  const [completedFormName, setCompletedFormName] = useState("");
  const [completedFormValue, setCompletedFormValue] = useState(null);
  const [billsName, setBillsName] = useState("");
  const [billsValue, setBillsValue] = useState("");
  
  return (
    <div>
      <div className="h-[343px] bg-[#3a2087]">
        <div className="text-white pt-[20rem] pb-[5rem] pl-[10%]">
          <h1 className="text-[48px]">Report a claim</h1>
          <p className="text-[1.6rem] opacity-90">
            Please fill up the claims form for your insurance
          </p>
        </div>
      </div>
      <div className="bg-white px-[10%] mt-[5rem] ">
        <p className="text-[#374453] text-[20px] mb-[15px]">Upload documents</p>
        <div className="flex  py-[20px]">
          <div className="mr-[40px]">
            <UploadCard
              name={completedFormName}
              fill={"#33D1B5"}
              setName={setCompletedFormName}
              setValue={setCompletedFormValue}
              identity={"Completed form"}
            ></UploadCard>
          </div>
          <div className="">
            <UploadCard
              name={billsName}
              setName={setBillsName}
              setValue={setBillsValue}
              fill={"#FF7C03"}
              identity={"Hospital Bills/receipts"}
            ></UploadCard>
          </div>
        </div>

        <div className="py-[30px] mb-[30px]  flex items-center">
          <Button
            className={"w-[180px] h-[56px] rounded-[6px]"}
            //   onClick={() => {
            //     const formData = new FormData();
            //     formData.append("id_card", idCard);
            //     formData.append("utility_bill", utilFile);
            //     formData.append("form_id", id1);
            //     uploadMotorDocument(formData)
            //       .unwrap()
            //       .then((payload) => {
            //         setSection(3);
            //         window.scrollTo({ top: 0, behavior: "smooth" });
            //       })
            //       .catch((error) => {
            //         console.log(error);
            //       });
            //   }}
            text={"Submit"}
          ></Button>
          <p className="text-[#F5564C] ml-[50px] text-[14px]">Cancel</p>
        </div>
      </div>
    </div>
  );
};

export default HealthClaim;
