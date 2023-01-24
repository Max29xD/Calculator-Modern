import { useState } from "react";
import { btns } from "./structure";

const Calculator = () => {
  const [value, setValue] = useState<string>("");
  const [equal, setEqual] = useState<string>("0");
  const handleClick = (valueInput: string) => {
    setValue(value + valueInput);
  };
  const handleEqual = () => {
    setEqual(eval(value));
    setValue(eval(value));
  };
  const handleAllClear = () => {
    setValue("");
    setEqual("0");
  };
  const handleClear = () => {
    setValue(value.slice(0, -1));
  };

  return (
    <form className="calculator">
      <div className="screen">
        <div className="old">{value}</div>
        <div className="new">{equal}</div>
      </div>
      {btns.map((btn) => ( 
        <input
          className={`btn${btn.type === "all-clear" ? " all-clear" : ""}${
            btn.type === "clear" ? " clear" : ""
          }${btn.type === "number" ? " number" : ""}${
            btn.type === "operator" ? " operator" : ""
          }${btn.type === "equal" ? " equal" : ""}`}
          type="button"
          key={btn.label}
          value={btn.label}
          onClick={() => {
            if (btn.value === "equal") {
              handleEqual();
            } else if (btn.value === "all-clear") {
              handleAllClear();
            } else if (btn.value === "clear") {
              handleClear();
            } else {
              handleClick(btn.value);
            }
          }}
        />
      ))}
    </form>
  );
};

export default Calculator;
