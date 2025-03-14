import React, { useState, useEffect } from 'react';

const FinanceCalculator = ({ boatPrice }) => {
  const [downPaymentPercent, setDownPaymentPercent] = useState(20); // Default 20% down
  const [downPaymentAmount, setDownPaymentAmount] = useState(boatPrice * 0.2); // Default amount based on 20%
  const [loanTerm, setLoanTerm] = useState(180); // Default 15 years (180 months)
  const [interestRate, setInterestRate] = useState(7.99); // Default rate
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const handlePercentChange = (percent) => {
    const newPercent = Number(percent);
    setDownPaymentPercent(newPercent);
    setDownPaymentAmount(boatPrice * (newPercent / 100));
  };

  const handleAmountChange = (amount) => {
    const newAmount = Number(amount);
    setDownPaymentAmount(newAmount);
    setDownPaymentPercent((newAmount / boatPrice) * 100);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const calculatePayment = () => {
    const principal = boatPrice - downPaymentAmount;
    const monthlyRate = (interestRate / 100) / 12;
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / 
                   (Math.pow(1 + monthlyRate, loanTerm) - 1);
    setMonthlyPayment(payment);
  };

  useEffect(() => {
    calculatePayment();
  }, [downPayment, loanTerm, interestRate, boatPrice]);

  return (
    <div className="finance-calculator">
      <h3>Estimate Your Monthly Payments</h3>
      <div className="calculator-grid">
        <div className="calculator-input">
          <label>Down Payment</label>
          <div className="down-payment-inputs">
            <div className="input-group">
              <input
                type="number"
                value={downPaymentAmount}
                onChange={(e) => handleAmountChange(e.target.value)}
                min="0"
                max={boatPrice}
                step="1000"
                className="amount-input"
              />
              <span className="currency-symbol">$</span>
            </div>
            <div className="input-group">
              <input
                type="number"
                value={Math.round(downPaymentPercent * 100) / 100}
                onChange={(e) => handlePercentChange(e.target.value)}
                min="0"
                max="100"
                step="0.1"
                className="percent-input"
              />
              <span className="percent-symbol">%</span>
            </div>
          </div>
        </div>

        <div className="calculator-input">
          <label>Loan Term</label>
          <select 
            value={loanTerm} 
            onChange={(e) => setLoanTerm(Number(e.target.value))}
          >
            <option value={120}>10 Years</option>
            <option value={180}>15 Years</option>
            <option value={240}>20 Years</option>
          </select>
        </div>

        <div className="calculator-input">
          <label>Interest Rate (%)</label>
          <select 
            value={interestRate} 
            onChange={(e) => setInterestRate(Number(e.target.value))}
          >
            <option value={6.99}>6.99%</option>
            <option value={7.99}>7.99%</option>
            <option value={8.99}>8.99%</option>
          </select>
        </div>
      </div>

      <div className="payment-result">
        <div className="monthly-payment">
          <span>Estimated Monthly Payment:</span>
          <span className="amount">${monthlyPayment.toFixed(2)}</span>
        </div>
        <p className="finance-disclaimer">
          *Estimated payments are for illustration purposes only. Actual terms and rates may vary based on credit approval and other factors. Contact us for detailed financing options.
        </p>
      </div>
    </div>
  );
};

export default FinanceCalculator;
