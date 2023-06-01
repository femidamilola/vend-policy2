import { useState } from "react";
import UploadCard from "../../../components/UploadCard";
import { Button } from "../../../components/Button/button";
const MotorClaim = () => {
  const [completedFormName, setCompletedFormName] = useState("");
  const [completedFormValue, setCompletedFormValue] = useState(null);
  const [damageName, setDamageName] = useState("");
  const [damageValue, setDamageValue] = useState("");
  const [repairName, setRepairName] = useState("");
  const [repairValue, setRepairValue] = useState("");
  const [policeName, setPoliceName] = useState("");
  const [policeValue, setPoliceValue] = useState("");
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
        <div className="flex justify-between py-[20px]">
          <div className="">
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
              name={damageName}
              setName={setDamageName}
              setValue={setDamageValue}
              fill={"#FF7C03"}
              identity={"Pictures of damage"}
            ></UploadCard>
          </div>
          <div className="">
            <UploadCard
              name={repairName}
              setName={setRepairName}
              setValue={setRepairValue}
              fill={"#482CA1"}
              identity={"Repair Estimate"}
            ></UploadCard>
          </div>
          <div>
            {" "}
            <UploadCard
              name={policeName}
              setName={setPoliceName}
              setValue={setPoliceValue}
              fill={"#435D7B"}
              identity={"Police Report"}
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

export default MotorClaim;
