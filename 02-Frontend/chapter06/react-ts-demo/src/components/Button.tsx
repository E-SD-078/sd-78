type ButtonProps = {
  label: string;
  color?: string;
};

const Button = ({ label, color = 'blue' }: ButtonProps) => {
  return <button style={{ backgroundColor: color }}>{label}</button>;
};

export default Button;
