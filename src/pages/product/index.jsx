import { ProductCard,ProductCard1 } from "../../../components/Cards/card";
import styles from "./Product.module.css";
import { CarModal,HealthModal,TravelModal } from "../../../components/Modals/Modals";
import { useDispatch, useSelector } from "react-redux";
import { showPackageModal } from "../../store/slices";
import { useEffect } from "react";
const Product = () => {
  const packageModal = useSelector(({ state }) => state.showPackageModal);
  useEffect(() => {
    console.log(packageModal);
  }, [packageModal]);
  const dispatch = useDispatch();
  return (
    <div className="relative">
      <CarModal></CarModal>
      <HealthModal></HealthModal>
      <TravelModal></TravelModal>
      <div
        className={`${styles.Main} flex flex-col justify-center items-center py-[15rem] w-[100%] text-white`}
      >
        <div className="w-[30%] ">
          <h1 className="text-[48px]  text-center leading-[60px]">
            Get Started Now, Select a Package
          </h1>
          <p className="text-[16px] py-[20px] leading-[25px] text-center px-[30px]">
            Select the type of insurance policy which you will be buying today
            to start your protection
          </p>
        </div>
      </div>
      <div className="px-[10%] mt-[-50px]  flex justify-between">
        <ProductCard1
          head={"Motor Package"}
          subhead={"Get your vehicle the best safety"}
          dropClass={styles.DropClass}
          drop={true}
          className={`${styles.Productcard} bg-white`}
        ></ProductCard1>
        <ProductCard
          head={"Health Package"}
          subhead={"Health is sincerely the best wealth"}
          className={`${styles.Healthcard}`}
          onClick={() => dispatch(showPackageModal("health"))}
        ></ProductCard>
        <ProductCard
          head={"Travel Package"}
          subhead={"Move around the world with no issue"}
          orange={true}
          onClick={() => dispatch(showPackageModal("travel"))}
          className={`${styles.Travelcard}`}
        ></ProductCard>
      </div>
    </div>
  );
};

export default Product;
