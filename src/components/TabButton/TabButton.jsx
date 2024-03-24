import './TabButton.css';

export default function TabButton({children, className, onClick}) {

  return (
    <li>
      <button className={className} onClick={onClick}>{children}</button>
    </li>
  );
}