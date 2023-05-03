export const TextInput1 = ({ className, label, inputClass }) => {
  return (
    <div>
      <div className={className}>
        <label className="text-[#77869B]  text-[16px]" htmlFor="">
          {label}
        </label>
        <input
          className={`w-[100%] border text-[14px] my-[7px] py-[10px] text-[#6C829B] border-[#E0E0E0] rounded-[5px] ${inputClass}`}
          type="text"
        />
      </div>
    </div>
  );
};
export const SelectInput = ({ label, options,selectClass }) => {
  return (
    <div className="">
      <label className="text-[#77869B]  text-[16px]" htmlFor="">
        {label}
      </label>
      <select
        className={`w-[100%] border text-[14px] my-[7px] py-[10px] text-[#6C829B] border-[#E0E0E0] rounded-[5px] ${selectClass} `}
        name=""
        id=""
      >
        {options.map((option,i) => (
          <option key={i} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
export const TextInput2 = ({ className, label, inputClass }) => {
  return (
    <div>
      <div className={className}>
        <label className="text-confirmlabel text-[16px]" htmlFor="">
          {label}
        </label>
        <input
          className={`w-[100%] border bg-[#FFF9F4] text-[14px] outline-0 px-[10px] my-[7px] py-[10px] text-[#6C829B] border-input1 rounded-[5px] ${inputClass}`}
          type="text"
        />
      </div>
    </div>
  );
};
