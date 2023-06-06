import styles from "./Button.module.css";
import { useRouter } from "next/router";
export const Button = ({ text, className, onClick, disable }) => {
  return (
    <div onClick={onClick}>
      <button
        disabled={disable}
        className={`bg-[#FF7C03] whitespace-nowrap font-semibold text-[14px] tracking-[1px] rounded-[10px] px-[20px] py-[7px] text-[#ffffff] ${styles.Button} ${className}`}
      >
        {text}
      </button>
    </div>
  );
};
export const DashboardButton = ({ text, className, onClick }) => {
  return (
    <div onClick={onClick}>
      <button
        className={`bg-[#FFFFFF] whitespace-nowrap text-[14px] tracking-[1px] px-[20px] py-[7px] text-major ${styles.Dashbutton} ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export const SigninButton = ({ text, className,onClick }) => {
  const router = useRouter();
  return (
    <div onClick={onClick}>
      <button
        className={`"bg-transparent font-semibold rounded-[10px] text-[#FF7C03]  text-[14px] px-[30px] py-[6px] border border-2 border-[#FF7C03] " ${styles.Button} ${className}`}
      >
        {text}
      </button>
    </div>
  );
};
