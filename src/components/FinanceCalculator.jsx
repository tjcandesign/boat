import React, { useState, useEffect } from 'react';

const FinanceCalculator = ({ boatPrice }) => {
  const [downPaymentPercent, setDownPaymentPercent] = useState(20); // Default 20% down
  const [downPaymentPercentInput, setDownPaymentPercentInput] = useState('20.00');
  const [downPaymentAmount, setDownPaymentAmount] = useState(boatPrice * 0.2); // Default amount based on 20%
  const [loanTerm, setLoanTerm] = useState(180); // Total loan term in months
  const [termType, setTermType] = useState('years'); // 'years' or 'months'
  const [totalCost, setTotalCost] = useState(0);
  const [interestRate, setInterestRate] = useState(7.99); // Default rate
  const [interestRateInput, setInterestRateInput] = useState('7.99');
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const handlePercentChange = (input) => {
    const cleanInput = input.replace(/[^0-9.]/g, '');
    setDownPaymentPercentInput(cleanInput);
    const newPercent = Number(cleanInput);
    if (!isNaN(newPercent) && newPercent >= 0 && newPercent <= 100) {
      setDownPaymentPercent(newPercent);
      setDownPaymentAmount(boatPrice * (newPercent / 100));
    }
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

  const formatDecimal = (value, decimals = 2) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  };

  const calculatePayment = () => {
    try {
      const principal = boatPrice - downPaymentAmount;
      const monthlyRate = (interestRate / 100) / 12;
      const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / 
                     (Math.pow(1 + monthlyRate, loanTerm) - 1);
      
      if (isNaN(payment) || !isFinite(payment)) {
        setMonthlyPayment(0);
        setTotalCost(0);
      } else {
        setMonthlyPayment(payment);
        setTotalCost(payment * loanTerm + downPaymentAmount);
      }
    } catch (error) {
      setMonthlyPayment(0);
      setTotalCost(0);
    }
  };

  useEffect(() => {
    calculatePayment();
  }, [downPaymentAmount, downPaymentPercent, loanTerm, interestRate, boatPrice]);

  return (
    <div className="finance-calculator">
      <h3>Estimate Your Monthly Payments</h3>
      <div className="calculator-grid">
        <div className="calculator-input">
          <label>Down Payment</label>
          <div className="down-payment-inputs">
            <div className="input-group">
              <input
                type="text"
                value={formatCurrency(downPaymentAmount)}
                onChange={(e) => handleAmountChange(e.target.value.replace(/,/g, ''))}
                className="amount-input"
              />
              <span className="currency-symbol">$</span>
            </div>
            <span className="input-separator">or</span>
            <div className="input-group">
              <input
                type="text"
                value={downPaymentPercentInput}
                onChange={(e) => handlePercentChange(e.target.value)}
                onBlur={() => {
                  const value = Number(downPaymentPercentInput);
                  if (!isNaN(value) && value >= 0 && value <= 100) {
                    setDownPaymentPercentInput(value.toFixed(2));
                  } else {
                    // Reset to current percent if invalid
                    setDownPaymentPercentInput(downPaymentPercent.toFixed(2));
                  }
                }}
                className="percent-input"
              />
              <span className="percent-symbol">%</span>
            </div>
          </div>
        </div>

        <div className="calculator-input loan-term-input">
          <label>Loan Term</label>
          <div className="term-inputs">
            <select 
              value={loanTerm} 
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="term-select"
            >
              <option value={60}>5 Years</option>
              <option value={84}>7 Years</option>
              <option value={120}>10 Years</option>
              <option value={180}>15 Years</option>
              <option value={240}>20 Years</option>
            </select>
          </div>
        </div>

        <div className="calculator-input interest-rate-input">
          <label>Interest Rate</label>
          <div className="input-group">
            <input
              type="text"
              value={interestRateInput}
              onChange={(e) => {
                const input = e.target.value.replace(/[^0-9.]/g, '');
                setInterestRateInput(input);
                const value = Number(input);
                if (!isNaN(value) && value >= 0 && value <= 100) {
                  setInterestRate(value || 7.99); // Use default if value is 0
                }
              }}
              onBlur={() => {
                const value = Number(interestRateInput);
                if (!isNaN(value) && value > 0 && value <= 100) {
                  setInterestRateInput(value.toFixed(2));
                } else {
                  // Reset to default rate if invalid
                  setInterestRate(7.99);
                  setInterestRateInput('7.99');
                }
              }}
              className="percent-input"
            />
            <span className="percent-symbol">%</span>
          </div>
        </div>
      </div>

      <div className="payment-result">
        <div className="payment-details">
          <div className="monthly-payment">
            <span>Estimated Monthly Payment:</span>
            <span className="amount">${formatDecimal(monthlyPayment)}</span>
          </div>
          <div className="total-cost">
            <span>Total Cost of Loan:</span>
            <span className="amount">${formatDecimal(totalCost)}</span>
          </div>
        </div>
        <p className="finance-disclaimer">
          *Estimated payments are for illustration purposes only. Actual terms and rates may vary based on credit approval and other factors. Contact us for detailed financing options.
        </p>
      </div>
    </div>
  );
};

export default FinanceCalculator;
