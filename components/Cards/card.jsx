import Image from "next/image";

export const PackageCard = ({ img, text }) => {
  return (
    <div
      style={{ border: "1px solid rgba(119, 134, 155, 0.23) " }}
      className="flex flex-col rounded-[17px] w-[20%] justify-center items-center py-[20px]"
    >
      <Image width={50} className="mb-[20px]" height={50} src={img}></Image>
      <p className="text-[16px] text-[#2D4565] leading-[27px]">{text}</p>
    </div>
  );
};
