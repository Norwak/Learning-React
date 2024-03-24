import './TabButton.css';

export default function TabButton({children, isActive, onClick}) {
  const className = (isActive) ? 'active' : '';

  return (
    <li>
      <button className={className} onClick={onClick}>{children}</button>
    </li>
  );
}