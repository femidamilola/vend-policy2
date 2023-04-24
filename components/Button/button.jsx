import styles from "./Button.module.css";

export const Button = ({ text,className }) => {
  return (
    <div>
      <button className={`bg-[#FF7C03] font-semibold text-[14px] px-[20px] py-[7px] text-white ${styles.Button} ${className}`}>{text}</button>
    </div>
  );
};


