import PaymentRequest from "./PaymentRequest/PaymentRequest.tsx";
import GetQrCode from "./GetQrCode/GetQrCode.tsx";
import ConfirmationOfPayment from "./ConfirmationOfPayment/ConfirmationOfPayment.tsx";

export const useStepItems = () => {
  return [
    {
      title: "Payment request",
      description: "Create a payment request",
      content: PaymentRequest,
    },
    {
      title: "Generate QR code",
      description: "Receive generated QR code",
      content: GetQrCode,
    },
    {
      title: "Confirmation of payment",
      description: "Get confirmation of successfully payment",
      content: ConfirmationOfPayment,
    },
  ];
};
