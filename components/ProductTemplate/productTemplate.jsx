import styles from "../../src/styles/Home.module.css"
const ProductTemplate = ({ productType, typeClass,secimg, description,modal }) => {
  const ads = [
    {
      img: "/assets/world1.png",
      text: "All round policy",
      background: "bg-[#FF7C03] bg-opacity-[12%]",
    },
    {
      img: "/assets/lock1.png",
      text: "Safe and Secure",
      background: "bg-[#3E96FC] bg-opacity-[12%]",
    },
    {
      img: "/assets/star1.png",
      text: "Officially verified",
      background: "bg-[#33D1B5] bg-opacity-[12%]",
    },
  ];

  return (
    <div className="px-[70px]">
      <div
        className={`flex justify-center relative mt-[80px] py-[20px] items-center ${styles.Border}`}
      >
        <div className="flex items-center absolute top-[50%] left-0 transform translate-y-[-50%]">
          <img src="/assets/larr.png" alt="" />
          <p className="text-[#FF7777] text-[16px] px-[10px]">Cancel</p>
        </div>
        <p className="text-[#1B283B] text-[25px] font-[900]">{productType}</p>
      </div>
      <div className="flex">
        <div className="w-[50%] mt-[60px] pr-[40px] border-r ">
          <p className="text-[#1B283B] text-[24px] font-[900] pb-[25px]">
            {typeClass}
          </p>
          <p className="leading-[30px] text-[16px] text-[#57606B]">
            {description}
          </p>
          <div className="flex justify-between items-center">
            <div>
              {ads.map((data,i) => (
                <div key={i} className="flex items-center py-[8px]">
                  <div
                    className={`w-[30px] h-[30px] rounded-[4px] ${data.background} flex justify-center items-center`}
                  >
                    <img src={data.img} alt="" />
                  </div>
                  <p className="text-[#57606B] ml-[20px] text-[14px] leading-[30px]">
                    {data.text}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <img src={secimg} alt="" />
            </div>
          </div>
        </div>
        <div className="w-[50%] mt-[60px]">
          <div className=" px-[40px]">
            <p className="text-[#1B283B] text-[24px] pb-[10px] font-[900] ">
              Compare Quotes
            </p>
            <p className="text-[#1B283B] opacity-[66%] text-[13px]">
              Please fill in the necessary details
            </p>
          </div>

         {modal}
        </div>
      </div>
    </div>
  );
};

export default ProductTemplate;
