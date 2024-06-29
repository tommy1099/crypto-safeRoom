import React from "react";

interface PaymentOption {
  id: string;
  label: string;
  name: string;
  defaultChecked: boolean;
  onChange: () => void;
}

interface PaymentSectionProps {
  selectedPayment: string;
  handleSelectPayment: (payment: string) => void;
}

const CheckoutPeymentSelection: React.FC<PaymentSectionProps> = ({
  selectedPayment,
  handleSelectPayment,
}) => {
  const paymentOptions: PaymentOption[] = [
    {
      id: "BMTrans",
      label: "درگاه ملت",
      name: "trans",
      defaultChecked: selectedPayment === "BMTrans",
      onChange: () => handleSelectPayment("BMTrans"),
    },
    {
      id: "zarinPalTrans",
      label: "زرین پال",
      name: "trans",
      defaultChecked: selectedPayment === "zarinPalTrans",
      onChange: () => handleSelectPayment("zarinPalTrans"),
    },
  ];

  return (
    <div className="payment-section flex border-b border-grey-300 justify-end gap-5 py-5 w-[500px]">
      <div className="payment-options">
        {paymentOptions.map((option) => (
          <div dir="rtl" key={option.id} className="payment-option">
            <input
              dir="rtl"
              id={option.id}
              type="radio"
              name={option.name}
              className="payment-input"
              defaultChecked={option.defaultChecked}
              onChange={option.onChange}
              required
            />
            <label htmlFor={option.id} className="payment-label text-sm mr-2">
              {option.label}
            </label>
          </div>
        ))}
      </div>
      <p className="shipping-title flex w-[150px] items-center text-center justify-center border-l-8 border-orange-500">
        روش ارسال
      </p>
    </div>
  );
};

export default CheckoutPeymentSelection;
