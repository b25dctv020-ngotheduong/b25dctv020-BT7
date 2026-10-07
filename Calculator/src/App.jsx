import { useState } from 'react';
import Display from './components/Display.jsx';
import Button from './components/Button.jsx';

const buttonList = [
  { label: '7' },
  { label: '8' },
  { label: '9' },
  { label: '+' },
  { label: '4' },
  { label: '5' },
  { label: '6' },
  { label: '-' },
  { label: '1' },
  { label: '2' },
  { label: '3' },
  { label: '*' },
  { label: 'Clear', color: '#323232' },
  { label: '0' },
  { label: '=' },
  { label: '/' },
];

export default function App() {
  const [expression, setExpression] = useState('0');

  const handleButtonClick = (label) => {
    if (label === 'Clear') {
      setExpression('0');
      return;
    }

    if (label === '=') {
      try {
        const result = Function(`"use strict"; return (${expression})`)();
        setExpression(String(result));
      } catch (error) {
        setExpression('Lỗi');
      }
      return;
    }

    if (expression === '0' || expression === 'Lỗi') {
      setExpression(label);
      return;
    }

    setExpression((prev) => prev + label);
  };

  return (
    <div className="may-tinh">
      <Display value={expression} />

      <div className="ban-phim">
        {buttonList.map((button) => (
          <Button
            key={button.label}
            label={button.label}
            color={button.color || '#3b3b3b'}
            onClick={() => handleButtonClick(button.label)}
          />
        ))}
      </div>
    </div>
  );
}
