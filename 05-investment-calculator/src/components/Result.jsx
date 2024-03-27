export default function Result({results}) {
  console.log(results);
  return (
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
        {results.map(result => (
          <tr>
            <td>{result.year}</td>
            <td>{result.valueEndOfYear}</td>
            <td>{result.interest}</td>
            <td>??</td>
            <td>{result.annualInvestment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}