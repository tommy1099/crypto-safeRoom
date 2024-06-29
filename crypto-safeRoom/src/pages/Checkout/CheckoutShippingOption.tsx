import React from "react";

interface ShippingOption {
  id: string;
  label: string;
  name: string;
  defaultChecked: boolean;
  onChange: () => void;
}

interface ShippingSectionProps {
  selectedShipping: string;
  handleSelectShipping: (shipping: string) => void;
}

const CheckoutShippingOption: React.FC<ShippingSectionProps> = ({
  selectedShipping,
  handleSelectShipping,
}) => {
  const shippingOptions: ShippingOption[] = [
    {
      id: "pishtaz",
      label: "ارسال پست پیشتاز | هزینه ارسال: رایگان",
      name: "shipping",
      defaultChecked: selectedShipping === "pishtaz",
      onChange: () => handleSelectShipping("pishtaz"),
    },
    {
      id: "tipax",
      label:
        "ارسال تیپاکس همه شهرها | هزینه ارسال بصورت پسکرایه و برعهده مشتری می باشد. قبل از انتخاب این گزینه از داشتن دفتر شرکت در شهر خود مطمئن شوید",
      name: "shipping",
      defaultChecked: selectedShipping === "tipax",
      onChange: () => handleSelectShipping("tipax"),
    },
  ];

  return (
    <div className="shipping-section border-b border-grey-300 py-5 flex justify-end gap-5  w-[500px]">
      <div className="shipping-options">
        {shippingOptions.map((option) => (
          <div dir="rtl" key={option.id} className="shipping-option ">
            <input
              dir="rtl"
              id={option.id}
              type="radio"
              name={option.name}
              className="shipping-input"
              defaultChecked={option.defaultChecked}
              onChange={option.onChange}
              required={false}
            />
            <label
              dir=""
              htmlFor={option.id}
              className="shipping-label text-sm mr-2"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
      <p className="shipping-title flex w-[420px] items-center text-center justify-center border-l-8 border-orange-500">
        روش پرداخت
      </p>
    </div>
  );
};

export default CheckoutShippingOption;
