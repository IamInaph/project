import { useState, useRef, useEffect } from 'react';

export default function Select({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-[44px] px-4 bg-white border border-[#e6e6e6] flex items-center justify-between stext-104 text-[#333] trans-04 hover:border-[#333]"
      >
        <span className={selectedOption ? 'text-[#333]' : 'text-[#999]'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <i className={`zmdi zmdi-chevron-down trans-04 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white border border-[#e6e6e6] border-t-0 z-10 max-h-[200px] overflow-y-auto shadow-md">
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left stext-104 trans-04 hover:bg-[#f7f7f7] ${
                  option.value === value ? 'text-primary bg-[#f7f7f7]' : 'text-[#666]'
                }`}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
