import './Example.css';

function Example({title, description, code}) {
  if (!title) {
    return (
      <p>Please, select a topic</p>
    );
  }

  return (
    <div id="tab-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default Example;