export default function Button({ label, color, onClick }) {
  const isOperator = ['+', '-', '*', '/', '='].includes(label);
  const isClear = label === 'Clear';

  return (
    <button
      type="button"
      className={['nut', isOperator ? 'phep-tinh' : '', isClear ? 'clear' : ''].join(' ').trim()}
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {label}
    </button>
  );
}
