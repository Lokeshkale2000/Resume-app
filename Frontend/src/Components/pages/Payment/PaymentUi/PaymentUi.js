import React, { useState } from 'react';

const PaymentUi = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiry: '',
    cvv: '',
    plan: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://zety-backend.onrender.com/api/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (response.ok) {
        alert('Payment successful!');
        setPaymentData({
          cardNumber: '',
          cardHolder: '',
          expiry: '',
          cvv: '',
          plan: '',
          amount: '',
        });
      } else {
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', background: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center' }}>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentData.cardNumber}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Card Holder</label>
          <input
            type="text"
            name="cardHolder"
            value={paymentData.cardHolder}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Expiry (MM/YY)</label>
          <input
            type="text"
            name="expiry"
            value={paymentData.expiry}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>CVV</label>
          <input
            type="password"
            name="cvv"
            value={paymentData.cvv}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Plan</label>
          <select
            name="plan"
            value={paymentData.plan}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '5px' }}
          >
            <option value="">Select Plan</option>
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="pro">Pro</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={paymentData.amount}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentUi;
