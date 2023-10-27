import { calculateInvestmentResults, formatter } from "../util/investment";

function Result({ resultInput }) {
  const results = calculateInvestmentResults(resultInput);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;
  console.log(results.length);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Nilai Investasi</th>
          <th>Bunga</th>
          <th>Total Bunga</th>
          <th>Investasi Kapital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((data) => {
          const totalInterest =
            data.valueEndOfYear -
            data.annualInvestment * data.year -
            initialInvestment;

          const totalAmountInvested = data.valueEndOfYear - totalInterest;

          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Result;
