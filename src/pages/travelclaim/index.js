import { useState } from "react";
import {UploadCard} from "../../../components/UploadCard";
import { Button } from "../../../components/Button/button";
import { useUploadClaimsDocumentMutation } from "../../api/apiSlice";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const TravelClaim = () => {
  const [completedFormName, setCompletedFormName] = useState("");
  const [completedFormValue, setCompletedFormValue] = useState(null);
  const [damageName, setDamageName] = useState("");
  const [damageValue, setDamageValue] = useState("");
  const [repairName, setRepairName] = useState("");
  const [repairValue, setRepairValue] = useState("");
  const [policeName, setPoliceName] = useState("");
  const [policeValue, setPoliceValue] = useState("");
  const [uploadDoc] = useUploadClaimsDocumentMutation();
  const [size1, setSize1] = useState(null);
  const [size2, setSize2] = useState(null);
  const [size3, setSize3] = useState(null);
  const [size4, setSize4] = useState(null);
  const router = useRouter();
  const id1 = useSelector(
    ({ purchaseState }) => purchaseState.proposalBody.claimsId
  );
  
  const [disableBtn, setDisableBtn] = useState(false);
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
              setSize={setSize1}
              setValue={setCompletedFormValue}
              identity={"Completed form"}
            ></UploadCard>
          </div>
          <div className="">
            <UploadCard
              name={damageName}
              setSize={setSize2}
              setName={setDamageName}
              setValue={setDamageValue}
              fill={"#FF7C03"}
              identity={"Pictures of damage"}
            ></UploadCard>
          </div>
          <div className="">
            <UploadCard
              name={repairName}
              setSize={setSize3}
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
              setSize={setSize4}
              setName={setPoliceName}
              setValue={setPoliceValue}
              fill={"#435D7B"}
              identity={"Police Report"}
            ></UploadCard>
          </div>
        </div>

        <div className="py-[30px] mb-[30px]  flex items-center">
          <Button
          disable={disableBtn}
            className={"w-[180px] disabled:opacity-50 h-[56px] rounded-[6px]"}
            onClick={() => {
              setDisableBtn(true);
              const formData = new FormData();
              formData.append("form", completedFormValue);
              formData.append("damage", damageValue);
              formData.append("police", policeValue);
              formData.append("repair", repairValue);
              formData.append("insuranceType", "Travel Insurance");
              formData.append("formId", id1);
              uploadDoc(formData)
                .unwrap()
                .then((payload) => {
                  console.log(payload);
                  setDisableBtn(false);
                  router.push("/dashboard");
                })
                .catch((error) => {
                  console.log(error);
                  setDisableBtn(false);
                });
            }}
            text={"Submit"}
          ></Button>
          <p className="text-[#F5564C] ml-[50px] text-[14px]">Cancel</p>
        </div>
      </div>
    </div>
  );
};

export default TravelClaim;
