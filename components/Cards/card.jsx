import Image from "next/image";

export const PackageCard = ({ img, text }) => {
  return (
    <div
      style={{ border: "1px solid rgba(119, 134, 155, 0.23) " }}
      className="flex flex-col rounded-[17px] w-[100%] justify-center items-center py-[20px]"
    >
      <Image width={50} className="mb-[20px]" height={50} src={img}></Image>
      <p className="text-[16px] text-[#2D4565] leading-[27px]">{text}</p>
    </div>
  );
};
export const InsureCard = ({ img, head, text }) => {
  return (
    <div className="flex flex-col w-[100%]">
      <Image width={55} className="mb-[20px]" height={55} src={img}></Image>
      <p className="text-[18px] font-semibold py-[2rem] text-[#2D4565] leading-[27px]">
        {head}
      </p>
      <p className="text-[16px] leading-[30px] text-[#627284] tracking-[0.02em]">
        {text}
      </p>
    </div>
  );
};

export const CarouselCard = ({ img, head, text }) => {
  return (
    <div className="w-[400px] ml-[15%] mb-[30px]   flex relative flex-col px-[10px] rounded-[15px] rounded-l-0 py-[30px] bg-white">
      <Image
        width={55}
        className="absolute left-[-22px] top-[-22px] outline-4 outline-white "
        height={55}
        src={img}
      ></Image>
      <p className="text-[17px] font-semibold py-[7px] text-[#2D4565] leading-[27px]">
        {head}
      </p>
      <p className="text-[15px] leading-[25px] text-[#627284] tracking-[0.02em]">
        {text}
      </p>
    </div>
  );
};
export const CommentCard = ({img,name,comment,className}) => {
  return (
    <div
      style={{ border: "1px solid rgba(119, 134, 155, 0.22) " }}
      className={`flex items-start px-[10px] py-[15px] bg-white rounded-[15px] ${className}`}
    >
      <Image src={img} className="mr-[7px]" width={59} height={59} alt=""></Image>
      <div>
        <h1 className="text-[#0E3163] font-semibold text-[15px]  leading-[30px]">
          {name}
        </h1>
        <p className="text-[#657587] text-[15px] leading-[26px]">{comment}</p>
      </div>
    </div>
  );
};
