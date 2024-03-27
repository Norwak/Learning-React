import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <div id="user-input">
        <div className="input-group">
          <div>
            <label htmlFor="initial">Initial Investment, $</label>
            <input id="initial" type="number" />
          </div>
          <div>
            <label htmlFor="annual">Annual Investment, $</label>
            <input id="annual" type="number" />
          </div>
        </div>
        <div className="input-group">
          <div>
            <label htmlFor="expected">Expected Return, %</label>
            <input id="expected" type="number" />
          </div>
          <div>
            <label htmlFor="years">Duration, years</label>
            <input id="years" type="number" />
          </div>
        </div>
      </div>

      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>$16,725</td>
            <td>$825</td>
            <td>$825</td>
            <td>$15,900</td>
          </tr>
          <tr>
            <td>2</td>
            <td>$18,545</td>
            <td>$920</td>
            <td>$1,745</td>
            <td>$16,800</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
