export default function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
  className = '',
}) {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className={`flex items-center border border-[#e6e6e6] ${className}`}>
      <button
        type="button"
        onClick={handleDecrease}
        className="w-10 h-10 flex-c-m text-[#666] hover:text-[#333] trans-04 disabled:opacity-50"
        disabled={value <= min}
      >
        <i className="zmdi zmdi-minus"></i>
      </button>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        className="w-12 h-10 text-center text-[#333] border-l border-r border-[#e6e6e6] outline-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <button
        type="button"
        onClick={handleIncrease}
        className="w-10 h-10 flex-c-m text-[#666] hover:text-[#333] trans-04 disabled:opacity-50"
        disabled={value >= max}
      >
        <i className="zmdi zmdi-plus"></i>
      </button>
    </div>
  );
}
