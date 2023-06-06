import { useForm } from "react-hook-form";

export const TextInput1 = ({
  className,
  label,
  labelClass,
  inputClass,
  Formvals,
  formError,
  value,
  onChange,
  id,
}) => {
  return (
    <div className={className}>
      <label className={`text-[#77869B]  text-[16px] ${labelClass}`} htmlFor="">
        {label}
      </label>
      <input
        id={id}
        className={`w-[100%] pl-[10px] border text-[14px] my-[7px] outline-0 py-[10px] text-[#6C829B] border-[#E0E0E0] rounded-[5px] ${inputClass}`}
        type="text"
        value={value}
        {...Formvals}
        onChange={onChange}
      />
      {formError && <span className="text-major">This field is required</span>}
    </div>
  );
};
export const NumberInput = ({
  className,
  label,
  labelClass,
  inputClass,
  Formvals,
  formError,
  placeholder,
  value,
  onChange,
  id,
}) => {
  return (
    <div className={className}>
      <label className={`text-[#77869B]  text-[16px] ${labelClass}`} htmlFor="">
        {label}
      </label>
      <input
        id={id}
        className={`w-[100%] pl-[10px] border text-[14px] my-[7px] outline-0 py-[10px] text-[#6C829B] border-[#E0E0E0] rounded-[5px] ${inputClass}`}
        type="number"
        min="1900"
        max="2099"
        placeholder={placeholder}
        value={value}
        {...Formvals}
        onChange={onChange}
      />
      {formError && <span className="text-major">This field is required</span>}
    </div>
  );
};

export const DateInput = ({
  className,
  label,
  labelClass,
  inputClass,
  Formvals,
  formError,
  value,
  onChange,
  id,
}) => {
  return (
    <div className={className}>
      <label className={`text-[#77869B]  text-[16px] ${labelClass}`} htmlFor="">
        {label}
      </label>
      <input
        id={id}
        className={`w-[100%] pl-[10px] border text-[14px] my-[7px] outline-0 py-[10px] text-[#6C829B] border-[#E0E0E0] rounded-[5px] ${inputClass}`}
        type="date"
        value={value}
        {...Formvals}
        onChange={onChange}
      />
      {formError && <span className="text-major">This field is required</span>}
    </div>
  );
};

export const SelectInput = ({ label, options, selectClass, Formprops }) => {
  return (
    <div className="">
      <label className="text-[#77869B]  text-[16px]" htmlFor="">
        {label}
      </label>
      <select
        className={`w-[100%] border outline-0 text-[14px] my-[7px] py-[10px] text-[#6C829B] border-[#E0E0E0] rounded-[5px] ${selectClass} `}
        name=""
        {...Formprops}
        id=""
      >
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export const TextInput2 = ({ className, label, value, inputClass }) => {
  return (
    <div>
      <div className={className}>
        <label className="text-confirmlabel text-[16px]" htmlFor="">
          {label}
        </label>
        <input
          className={`w-[100%] border bg-[#FFF9F4] text-[14px] outline-0 px-[10px] my-[7px] py-[10px] text-[#6C829B] border-input1 rounded-[5px] ${inputClass}`}
          type="text"
          value={value}
        />
      </div>
    </div>
  );
};
