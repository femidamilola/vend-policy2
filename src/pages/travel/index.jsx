import styles from "../../styles/Home.module.css";
import { TravelModal } from "../../../components/Modals/Modals";
import ProductTemplate from "../../../components/ProductTemplate/productTemplate";
const Travel = () => {
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
    <div>
      <ProductTemplate
        productType={"Travel Insurance"}
        description={
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        }
        typeClass={"Travel Insurance"}
        secimg={"/assets/travelpic.png"}
        modal={<TravelModal></TravelModal>}
      ></ProductTemplate>
    </div>
  );
};

export default Travel;
