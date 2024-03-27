export default function Log({turnsLog}) {
  return (
    <ol id="log">
      {turnsLog.map(({square, player}) => <li>{player} selected {square.row}, {square.col}</li>)}
    </ol>
  );
}