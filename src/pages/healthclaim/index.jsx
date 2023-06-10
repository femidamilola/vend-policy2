import { useState } from "react";
import {UploadCard} from "../../../components/UploadCard";
import { Button } from "../../../components/Button/button";
import { useUploadClaimsDocumentMutation } from "../../api/apiSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const HealthClaim = () => {
  const [completedFormName, setCompletedFormName] = useState("");
  const [completedFormValue, setCompletedFormValue] = useState(null);
  const [billsName, setBillsName] = useState("");
  const [billsValue, setBillsValue] = useState("");
  const [uploadDoc] = useUploadClaimsDocumentMutation();
  const [size1, setSize1] = useState(null);
  const [size2, setSize2] = useState(null);
  const [disableBtn, setDisableBtn] = useState(false);
  const id1 = useSelector(
    ({ purchaseState }) => purchaseState.proposalBody.claimsId
  );
  const router = useRouter();
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
              setSize={setSize1}
              identity={"Completed form"}
            ></UploadCard>
          </div>
          <div className="">
            <UploadCard
              name={billsName}
              setName={setBillsName}
              setValue={setBillsValue}
              setSize={setSize2}
              fill={"#FF7C03"}
              identity={"Hospital Bills/receipts"}
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
              formData.append("bills", billsValue);
              formData.append("insuranceType", "Health Insurance");
              formData.append("formId", id1);
              uploadDoc(formData)
                .unwrap()
                .then((payload) => {
                  setDisableBtn(false);
                  router.push("/dashboard");
                })
                .catch((error) => {
                  setDisableBtn(false);
                  console.log(error);
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

export default HealthClaim;
