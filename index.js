require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse form data (URL encoded and JSON)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Email transporter configuration
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Handle POST request for feedback form submission
app.post('/submit-feedback', (req, res) => {
    const { naam, email, bericht } = req.body;

    console.log('Feedback request received:', req.body);

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Feedback from ${naam || 'Anonymous'}`,
        text: `Naam: ${naam || 'Not provided'}\nEmail: ${email || 'Not provided'}\nFeedback: ${bericht || 'No message'}`,
    };

    transporter.sendMail(mailOptions)
        .then(() => console.log('Feedback email sent successfully'))
        .catch((error) => console.error('Error sending feedback email:', error));

    res.status(200).json({ message: 'Feedback submitted successfully' });
});

// Handle POST request for listing request form submission
app.post('/submit-request', (req, res) => {
    const { naam, email, telefoon, adres } = req.body;

    console.log('Request listing request received:', req.body);

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Listing Request from ${naam || 'Anonymous'}`,
        text: `Naam: ${naam || 'Not provided'}\nEmail: ${email || 'Not provided'}\nTelefoon: ${telefoon || 'Not provided'}\nAdres: ${adres || 'Not provided'}`,
    };

    transporter.sendMail(mailOptions)
        .then(() => console.log('Listing request email sent successfully'))
        .catch((error) => console.error('Error sending listing request email:', error));

    res.status(200).json({ message: 'Listing request submitted successfully' });
});

// Handle POST request for listing interest form submission
app.post('/submit-interest', (req, res) => {
    const { naam, email, telefoon, bericht, listingInfo } = req.body;

    console.log('Listing interest inquiry received:', req.body);

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Listing Interest Inquiry: ${listingInfo}`,
        text: `Listing: ${listingInfo}\nNaam: ${naam || 'Not provided'}\nEmail: ${email || 'Not provided'}\nTelefoon: ${telefoon || 'Not provided'}\nBericht: ${bericht || 'No message'}`,
    };

    transporter.sendMail(mailOptions)
        .then(() => console.log('Listing interest email sent successfully'))
        .catch((error) => console.error('Error sending listing interest email:', error));

    res.status(200).json({ message: 'Listing interest inquiry submitted successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
