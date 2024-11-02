export const UserInput = ({ onChange,userInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) =>
              onChange("initialInvestment", Number(e.target.value))
            }
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) =>
              onChange("annualInvestment", Number(e.target.value))
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) =>
              onChange("expectedReturn", Number(e.target.value))
            }
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            onChange={(e) => onChange("duration", Number(e.target.value))}
            value={userInput.duration}
            required
          />
        </p>
      </div>
    </section>
  );
};
