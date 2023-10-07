import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/Store";
import { useParams } from "react-router-dom";

interface Props {
  style: string;
  placeHolder?: string;
  id?: string;
  type: string;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input: React.FC<Props> = ({
  id,
  style,
  placeHolder,
  type,
  onChange,
  name,
  value,
}: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { cat } = useParams();
  const selectedRadioValue = useSelector(
    (state: RootState) => state.Radio.selectedValue
  );

  const handleOnChange = () => {
    if (onChange) {
      onChange(selectedRadioValue || "");
    }
  };

  useEffect(() => {
    // Set the defaultChecked value based on the Redux state
    setIsChecked(value === cat);
  }, [value, cat]);
  return (
    <label htmlFor={id} key={value}>
      <input
        defaultChecked={isChecked}
        id={id}
        placeholder={placeHolder}
        className={style}
        type={type}
        name={name}
        value={value}
        onChange={handleOnChange}
      />
      {value}
    </label>
  );
};

export default Input;
