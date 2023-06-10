import { TextInput1 } from "../Forms/form";
import { Paypal, PayLock } from "../SVG/Svg";
import { useVerifyPaymentMutation } from "../../src/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { usePayMutation } from "../../src/api/apiSlice";
import { PaystackButton } from "react-paystack";
import { useReducer } from "react";
import styles from "../ProposalForm/Proposal.module.css";
import { Paycard } from "../SVG/Svg";
import { useRouter } from "next/router";
const initialState = {
  payFirstName: "",
  payLastName: "",
  email: "",
  phoneNumber: "",
};
function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "set/firstname":
      return { ...state, payFirstName: action.payload };
    case "set/lastname":
      return { ...state, payLastName: action.payload };
    case "set/email":
      return { ...state, email: action.payload };
    case "set/phonenumber":
      return { ...state, phoneNumber: action.payload };
    default:
      return state;
  }
}
const Payment = () => {
  const router = useRouter();
  const [verifyPayment] = useVerifyPaymentMutation();
  const globaldispatch = useDispatch();
  const [state, dispatch] = useReducer(reducer, initialState);
  const packageDetails = useSelector(
    ({ purchaseState }) => purchaseState.proposalBody
  );
  const { payFirstName, payLastName, email, phoneNumber } = state;
  const publicKey = "pk_test_58e3af697a6b63e0d029781c132472a2d04efe94";
  const amount = 2300000;
  const componentProps = {
    email,
    amount,
    metadata: {
      firstName: payFirstName,
      lastName: payLastName,
      phoneNumber: phoneNumber,
      email: email,
    },
    publicKey,
    text: "Pay Premium",
    onSuccess: (response) => {
      const date = new Date();
      console.log(response);
      const data = {
        paymentReference: response.reference,
        paymentStatus: response.status,
        paymentDate: date.toISOString(),
        paymentGatewayResponse: "Successful",
        paymentAmount: amount,
        data: {
          packageId: packageDetails.formId,
          insuranceType: packageDetails.productType,
          packageType: packageDetails.typeOfPackage,
        },
      };
      verifyPayment(data)
        .unwrap()
        .then((response) => {
          console.log(response);
          router.push("/dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
      // resetForm();
      // window.location.href = "/";
    },
    onClose: () => {
      console.log("closed");
    },
  };

  return (
    <div className="px-[10%]">
      <p className="text-[#374453] text-[23px] leading-[53px] font-bold my-[20px]">
        Checkout
      </p>
      <div className="flex justify-between items-stretch">
        <div
          className={`${styles.Shadow2} bg-white px-[5%] w-[60%]   py-[50px]`}
        >
          <div className="flex justify-between  mb-[20px]">
            <div className="w-[47%]">
              <TextInput1
                className={"w-[100%] "}
                label={"First Name"}
                onChange={(e) => {
                  dispatch({ type: "set/firstname", payload: e.target.value });
                }}
              ></TextInput1>
            </div>
            <div className="w-[47%]">
              <TextInput1
                className={"w-[100%] "}
                label={"Last Name"}
                onChange={(e) => {
                  dispatch({ type: "set/lastname", payload: e.target.value });
                }}
              ></TextInput1>
            </div>
          </div>
          {/* <div className="flex justify-between mb-[20px]">
              <TextInput1
                className={"w-[40%] "}
                label={"Card Number"}
              ></TextInput1>
              <TextInput1
                className={"w-[30%] "}
                label={"Expiry Date"}
              ></TextInput1>
              <TextInput1 className={"w-[20%] "} label={"CVV"}></TextInput1>
            </div> */}
          <div className="flex justify-between  mb-[20px]">
            <TextInput1
              className={"w-[47%] "}
              label={"Phone Number"}
              onChange={(e) => {
                dispatch({ type: "set/phonenumber", payload: e.target.value });
              }}
            ></TextInput1>

            <TextInput1
              className={"w-[47%] "}
              label={"E-mail Address"}
              onChange={(e) => {
                dispatch({ type: "set/email", payload: e.target.value });
              }}
            ></TextInput1>
          </div>
          <div className="flex mt-[30px]">
            <div className="flex items-center h-[43px] mr-[40px] border border-[#E0E0E0] px-[15px] rounded-[5px]">
              <Paycard></Paycard>
              <p className="text-[#535D6C] text-[15px] tracking-[1px] font-bold px-[20px]">
                Debit card
              </p>
              <div className="w-[20px] h-[20px] rounded-[50%] flex justify-center items-center border border-[#E0E0E0]">
                <div className="w-[12px] h-[12px] rounded-[50%] bg-[#E0E0E0]"></div>
              </div>
            </div>
            <div className="flex items-center h-[43px] border border-[#E0E0E0] px-[15px] rounded-[5px]">
              <Paypal></Paypal>
              <p className="text-[#535D6C] text-[15px] tracking-[1px] font-bold px-[20px]">
                Paypal
              </p>
              <div className="w-[20px] h-[20px] rounded-[50%] flex justify-center items-center border border-[#E0E0E0]">
                <div className="w-[12px] h-[12px] rounded-[50%] bg-[#E0E0E0]"></div>
              </div>
            </div>
          </div>
          <div className="flex mt-[25px]">
            <PayLock></PayLock>
            <p className="text-[#77869B] ml-[15px] text-[12px]">
              Your transaction is secure with SSL encryption
            </p>
          </div>
        </div>
        <div
          className={`${styles.Shadow2} bg-white px-[10px] py-[15px] pb-[100px] w-[30%]`}
        >
          <div className={`${styles.CheckoutBg} w-[100%] h-[40%]`}></div>
          <p
            className={`${styles.Line} mt-[20px] grid m-auto w-[80%] tracking-[1px] text-[#77869B] text-[15px] font-bold text-center px-[20px] py-[13px]`}
          >
            Third Party Fire Insurance
          </p>
          <div className="px-[15px] pt-[30px]">
            <div className="flex justify-between mb-[20px]">
              <p className="text-[15px] text-[#77869B]">Subtotal</p>
              <p className="text-[15px] font-bold text-[#77869B]">₦23,000.00</p>
            </div>
            <div className="flex justify-between mb-[20px]">
              <p className="text-[15px] text-[#77869B]">Discount</p>
              <p className="text-[15px] font-bold text-[#77869B]">₦0.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[15px] text-[#77869B]">Service Fee</p>
              <p className="text-[15px] font-bold text-[#77869B]">₦0.00</p>
            </div>
          </div>
          <PaystackButton
            className={
              "w-[100%] bg-[#FF7C03] text-[14px] rounded-[11px]  text-white py-[8px] my-[15px] mt-[30px]"
            }
            {...componentProps}
          ></PaystackButton>
        </div>
      </div>
    </div>
  );
};

export default Payment;
