import styles from "./UploadCard.module.css";

import { Camera, File, Upload } from "../SVG/Small";
const UploadCard = ({ name, setName, identity ,fill}) => {
  return (
    <div className="w-[250px]">
      <div
        className={`${styles.BorderDashed} w-[250px] flex flex-col py-[50px] items-center px-[25px] `}
      >
        <span className={`${styles.Shadow3}  rounded-[6px] p-[15px]`}>
          <File fill={fill}></File>
        </span>
        <p className="text-[#6C829B] my-[15px] text-[14px] leading-[25px]">
          {name}
        </p>
        <div className="flex justify-between">
          <div
            className={`${styles.Shadow3} mr-[20px] px-[15px] py-[5px] bg-[#fffff] flex`}
          >
            <Camera></Camera>
            <p className="pl-[10px] text-[#6C829B] text-[13px]">Camera</p>
          </div>

          <div
            className={`${styles.Shadow3} relative px-[15px] py-[5px] bg-[#fffff] flex`}
          >
            <Upload></Upload>
            <label
              htmlFor=""
              className="pl-[10px] cursor-pointer text-[#6C829B] text-[13px]"
            >
              Upload
            </label>
            <input
              type="file"
              onChange={(e) => {
                setName(e.target.files[0].name);
              }}
              className=" absolute opacity-0 top-0 left-0 w-[100%] h-[100%] cursor-pointer"
            />
          </div>
        </div>
      </div>
      <p className="text-[#0F4A6B] mt-[10px] opacity-[0.65] text-center text-[14px]">
        {identity}
      </p>
    </div>
  );
};

export default UploadCard;
