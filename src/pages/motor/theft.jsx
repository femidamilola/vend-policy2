import { CarModal } from "../../../components/Modals/Modals";
import ProductTemplate from "../../../components/ProductTemplate/productTemplate";
const Theft = () => {
  return (
    <div>
      <ProductTemplate
        productType={"Motor Insurance"}
        description={
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        }
        typeClass={"Third Party/Theft Insurance"}
        secimg={"/assets/motorpic.png"}
        modal={<CarModal></CarModal>}
      ></ProductTemplate>
    </div>
  );
};

export default Theft;
