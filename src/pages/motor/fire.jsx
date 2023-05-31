import { CarModal } from "../../../components/Modals/Modals";
import ProductTemplate from "../../../components/ProductTemplate/productTemplate";
const Fire = () => {
  return (
    <div>
      <ProductTemplate
        productType={"Motor Insurance"}
        description={
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        }
        typeClass={"Third Party/Fire Insurance"}
        secimg={"/assets/motorpic.png"}
        modal={<CarModal></CarModal>}
      ></ProductTemplate>
    </div>
  );
};

export default Fire;
