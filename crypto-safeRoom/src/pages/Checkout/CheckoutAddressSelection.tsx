import { IUserAddress } from "@/Interfaces/Interfaces";

const CheckoutAddressSelection = ({
  firstname,
  lastname,
  phone,
  city,
  town,
  address,
  index,
  selectedAddress,
  setSelectedAddress,
}: IUserAddress & {
  index: number;
  selectedAddress: number | null;
  setSelectedAddress: (index: number) => void;
}) => {
  const handleAddressSelection = () => {
    setSelectedAddress(index);
  };

  return (
    <div className="flex items-center w-full">
      <input
        type="radio"
        id={`address-${index}`}
        name="addressType"
        value={index}
        className="accent-orange-400"
        checked={selectedAddress === index}
        onChange={handleAddressSelection}
      />
      <label htmlFor={`address-${index}`} className="mr-2 w-[90%] text-sm">
        <div
          className={`p-5 text-sm cursor-pointer border-l-2 ${
            index === selectedAddress ? "border-orange-400" : "border-base-100"
          }`}
        >
          <div>
            گیرنده: {firstname} {lastname}
          </div>
          <div>تماس: {phone}</div>
          <div>
            آدرس: {city} {town} {address}
          </div>
        </div>
      </label>
    </div>
  );
};

export default CheckoutAddressSelection;
