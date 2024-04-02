export default function NoProject({changeModeEvent}) {
  return (
    <section className="no-project" id="no-project">
      <img src="/logo.png" alt="Logo" className="no-project__logo" />

      <h1 className="no-project__title">No Project Selected</h1>

      <p className="no-project__description">Select a project or get started with a new one</p>

      <button className="no-project__new" type="button" onClick={() => changeModeEvent('new')}>Create new project</button>
    </section>
  );
}