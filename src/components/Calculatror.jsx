import "./Calculator.css";

function Calculator({ userInput, onChangeProps }) {
  return (
    <form action="" id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial invesation</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) => onChangeProps("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Annual invesation</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) => onChangeProps("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected return </label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => onChangeProps("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => onChangeProps("duration", e.target.value)}
          />
        </p>
      </div>
    </form>
  );
}

export default Calculator;
