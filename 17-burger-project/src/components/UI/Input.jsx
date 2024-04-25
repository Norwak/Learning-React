export default function Input({label, name, type, ...props}) {
  return (
    <p className="control">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} required {...props} />
    </p>
  );
}