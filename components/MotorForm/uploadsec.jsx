import { useDispatch, useSelector } from "react-redux";
import { useReducer, useState } from "react";
import { Button } from "../Button/button";
import {
  useUploadMotorDocumentMutation,
  useUploadComprehensiveDocumentMutation,
} from "../../src/api/apiSlice";
import styles from "../ProposalForm/Proposal.module.css";
import { UploadCard2, UploadCard } from "../UploadCard";
import { setUploadSection } from "../../src/store/slices";
const initialState = {
  driverLicense: null,
  vehicleLicense: null,
  proofOfOwnership: null,
  proofOfAddress: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "set/driverLicense": {
      return { ...state, driverLicense: action.payload };
    }
    case "set/vehicleLicense": {
      return { ...state, vehicleLicense: action.payload };
    }
    case "set/proofOfOwnership": {
      return { ...state, proofOfOwnership: action.payload };
    }
    case "set/proofOfAddress": {
      return { ...state, proofOfAddress: action.payload };
    }
    default: {
      return state;
    }
  }
}

const UploadSection = () => {
  const [id, setId] = useState("");
  const [licenseName, setLicenseName] = useState("");
  const [idSize, setIdSize] = useState(null);
  const [licenseSize, setLicenseSize] = useState(null);
  const [error, showError] = useState(false);
  const [idCard, setIdCard] = useState(null);
  const [licenseFile, setLicenseFile] = useState(null);
  const id1 = useSelector(
    ({ purchaseState }) => purchaseState.proposalBody.formId
  );
  const packageType = useSelector(
    ({ purchaseState }) => purchaseState.proposalBody.typeOfPackage
  );
  const globaldispatch = useDispatch();
  const [uploadMotorDocument] = useUploadMotorDocumentMutation();
  const [uploadComprehensive] = useUploadComprehensiveDocumentMutation();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { driverLicense, vehicleLicense, proofOfOwnership, proofOfAddress } =
    state;
  return (
    <div>
      <div className="px-[10%]">
        <p className="text-[#374453] text-[23px] leading-[53px] font-bold my-[20px]">
          Please upload document
        </p>
        <div className={`${styles.Shadow2} bg-white px-[5%]  py-[50px]`}>
          <p
            className={`text-[16px] text-[#FF7777] py-[20px] ${
              error == true ? "block" : "hidden"
            }`}
          >
            File greter than 2mb cannot be uploaded, Please check file sizes and
            try again
          </p>
          {!packageType.includes("Comprehensive") ? (
            <div className="flex">
              <div className="mr-[40px]">
                <UploadCard
                  name={id}
                  fill={"#321C77"}
                  setName={setId}
                  setValue={setIdCard}
                  identity={"ID verification"}
                  setSize={setIdSize}
                ></UploadCard>
              </div>
              <UploadCard
                name={licenseName}
                setName={setLicenseName}
                setValue={setLicenseFile}
                fill={"#FF7C03"}
                identity={"Vehicle License"}
                setSize={setLicenseSize}
              ></UploadCard>
            </div>
          ) : (
            <div className="flex flex-wrap">
              <div className="mr-[40px] mb-[20px]">
                <UploadCard2
                  name={driverLicense?.name}
                  identity={"Valid driver’s license"}
                  fill={"#321C77"}
                  onChange={(e) => {
                    dispatch({
                      type: "set/driverLicense",
                      payload: e?.target?.files[0],
                    });
                  }}
                ></UploadCard2>
              </div>
              <div className="mr-[40px]">
                <UploadCard2
                  name={vehicleLicense?.name}
                  identity={"Vehicle License"}
                  fill={"#33D1B5"}
                  onChange={(e) => {
                    dispatch({
                      type: "set/vehicleLicense",
                      payload: e?.target?.files[0],
                    });
                  }}
                ></UploadCard2>
              </div>
              <div className="mr-[40px]">
                <UploadCard2
                  name={proofOfOwnership?.name}
                  identity={"Proof Of Ownership"}
                  fill={"#77869B"}
                  onChange={(e) => {
                    dispatch({
                      type: "set/proofOfOwnership",
                      payload: e?.target?.files[0],
                    });
                  }}
                ></UploadCard2>
              </div>
              <div className="mr-[40px] ">
                <UploadCard2
                  name={proofOfAddress?.name}
                  identity={"Proof of Address"}
                  fill={"#FF7C03"}
                  onChange={(e) => {
                    dispatch({
                      type: "set/proofOfAddress",
                      payload: e?.target?.files[0],
                    });
                  }}
                ></UploadCard2>
              </div>
            </div>
          )}

          <div className="mt-[30px] flex items-center">
            <Button
              onClick={() => {
                if (
                  idSize > 2100000 ||
                  licenseSize > 2100000 ||
                  driverLicense?.size > 2100000 ||
                  vehicleLicense?.size > 2100000 ||
                  proofOfOwnership?.size > 2100000 ||
                  proofOfAddress?.size > 2100000
                ) {
                  showError(true);
                } else {
                  if (!packageType.includes("Comprehensive")) {
                    const formData = new FormData();
                    formData.append("id_card", idCard);
                    formData.append("licence", licenseFile);
                    formData.append("form_id", id1);
                    uploadMotorDocument(formData)
                      .unwrap()
                      .then((payload) => {
                        console.log(payload);
                        globaldispatch(setUploadSection(3));
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  } else {
                    const formData = new FormData();
                    formData.append("vehicle_licence", vehicleLicense);
                    formData.append("licence", driverLicense);
                    formData.append("ownership", proofOfOwnership);
                    formData.append("address", proofOfAddress);
                    formData.append("form_id", id1);
                    uploadComprehensive(formData)
                      .unwrap()
                      .then((payload) => {
                        console.log(payload);
                        globaldispatch(setUploadSection(3));
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }
                }
              }}
              text={"Proceed to payment"}
            ></Button>
            <p className="text-[#F5564C] ml-[50px] text-[14px]">Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSection;
