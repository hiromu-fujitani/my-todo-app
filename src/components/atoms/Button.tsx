interface ButtonProps {
  onClick: () => void;
  label: string;
  className?: string; // この行を追加、classNameはオプショナルとして扱う
}

const Button: React.FC<ButtonProps> = ({ onClick, label, className = '' }) => (
  <button onClick={onClick} className={`btn ${className}`}>{label}</button>
);

export default Button;
