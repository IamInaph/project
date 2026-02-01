import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-primary text-white border-primary hov-btn1',
  secondary: 'bg-[#333] text-white border-[#333] hover:bg-primary hover:border-primary',
  outline: 'bg-transparent text-[#333] border-[#333] hov-btn3',
  light: 'bg-white text-[#333] border-[#e6e6e6] hov-btn3',
};

const sizes = {
  sm: 'size-104 stext-101',
  md: 'size-101 stext-101',
  lg: 'size-116 stext-101',
  full: 'w-full h-[50px] stext-101',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className = '',
  ...props
}) {
  const baseClasses = 'flex-c-m border trans-04';
  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.md;
  const allClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={allClasses} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={allClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={allClasses} {...props}>
      {children}
    </button>
  );
}
