import styles from "./Button.module.css";

export const Button = ({ text,className }) => {
  return (
    <div>
      <button className={`bg-[#FF7C03] font-semibold text-[14px] px-[20px] py-[7px] text-[#ffffff] ${styles.Button} ${className}`}>{text}</button>
    </div>
  );
};


export const SigninButton = ({ text, className }) => {
  return (
    <div>
      <button
        className={`"bg-transparent font-semibold  text-[#FF7C03]  text-[14px] px-[30px] py-[6px] border border-2 border-[#FF7C03] " ${styles.Button} ${className}`}
      >
        {text}
      </button>
    </div>
  );
};
