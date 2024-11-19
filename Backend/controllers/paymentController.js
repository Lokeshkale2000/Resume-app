const Payment = require('../models/paymentModel');
const nodemailer = require('nodemailer');

// POST: Save Payment Data
const savePaymentData = async (req, res) => {
  try {
    const { cardNumber, cardHolder, expiry, cvv,plan,amount } = req.body;

    const payment = new Payment({
      cardNumber,
      cardHolder,
      expiry,
      cvv,
      plan,
      amount,
    });

    await payment.save();

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'Pranavjii123@gmail.com', // Replace with your email
        pass: 'Pranav&123', // Replace with your app password or use environment variables
      },
    });

    const mailOptions = {
      from: 'Pranavjii123@gmail.com',
      to: mail, // Use 'mail' instead of 'email'
      subject: 'Payment Successful',
      text: `Your payment for the ${plan} plan of $${amount} was successful!`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Payment successful and saved to the database' });
  } catch (error) {
    console.error('Error processing payment:', error.message);
    res.status(500).json({ message: 'Error processing payment', error: error.message });
  }
};

// GET: Retrieve All Payments
const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (error) {
    console.error('Error retrieving payments:', error.message);
    res.status(500).json({ message: 'Error retrieving payments', error: error.message });
  }
};

module.exports = { savePaymentData, getAllPayments };
