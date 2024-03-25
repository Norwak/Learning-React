import './TabButton.css';

export default function TabButton({children, isActive, ...props}) {
  const className = (isActive) ? 'active' : '';

  return (
    <li>
      <button className={className} {...props}>
        {children}
      </button>
    </li>
  );
}