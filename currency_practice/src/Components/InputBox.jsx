import { useId } from "react";

function InputBox({
  label, // Ensure this matches with the parent component
  onAmountChange,
  amount,
  onCurrencyChange,
  currencyOptions = [], // Ensure this matches with the parent component
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const inputId = useId(); // Use a more descriptive variable name

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={inputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={inputId}
          className="outline-none w-full bg-transparent py-1.5"
          disabled={amountDisable}
          value={amount} // Ensure this updates correctly
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          type="number"
          placeholder="Amount"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency} // Ensure this updates correctly
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
