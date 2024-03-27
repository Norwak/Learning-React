export default function Form({data, changedEvent}) {
  function handleInput(e) {
    const id = e.target.id;
    data[id] = parseFloat(e.target.value);
    changedEvent(data);
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial">Initial Investment, $</label>
          <input id="initial" type="number" value={data.initial} onChange={handleInput}/>
        </div>
        <div>
          <label htmlFor="annual">Annual Investment, $</label>
          <input id="annual" type="number" value={data.annual} onChange={handleInput}/>
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expected">Expected Return, %</label>
          <input id="expected" type="number" value={data.expected} onChange={handleInput}/>
        </div>
        <div>
          <label htmlFor="years">Duration, years</label>
          <input id="years" type="number" value={data.years} onChange={handleInput}/>
        </div>
      </div>
    </div>
  );
}