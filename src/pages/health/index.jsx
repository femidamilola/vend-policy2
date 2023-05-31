import styles from "../../styles/Home.module.css";
import { HealthModal } from "../../../components/Modals/Modals";
import ProductTemplate from "../../../components/ProductTemplate/productTemplate";
const Health = () => {
  return (
    <div>
      <ProductTemplate
        productType={"Health Insurance"}
        description={
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        }
        typeClass={"Health Insurance"}
        secimg={"/assets/healthpic.png"}
        modal={<HealthModal></HealthModal>}
      ></ProductTemplate>
    </div>
  );
};

export default Health;
