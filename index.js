const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse form data (URL encoded and JSON)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Serve CSS and JS files
app.use('/resources/css', express.static(path.join(__dirname, 'resources/CSS')));
app.use('/resources/js', express.static(path.join(__dirname, 'resources/js')));

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle POST request for feedback form submission
app.post('/submit-feedback', (req, res) => {
    const { naam, email, bericht } = req.body;
    console.log('Feedback request received:', req.body);

    // Respond to the client immediately
    res.status(200).json({ message: 'Feedback submitted successfully' });

    // Send email asynchronously
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'feikeleemkuil@gmail.com',
            pass: 'pide cjyl xkwd vekg',
        },
    });

    const mailOptions = {
        from: 'feikeleemkuil@gmail.com',
        to: 'feikeleemkuil@gmail.com',
        subject: `Feedback from ${naam || 'Anonymous'}`,
        text: `Naam: ${naam || 'Not provided'}\nEmail: ${email || 'Not provided'}\nFeedback: ${bericht || 'No message'}`,
    };

    transporter.sendMail(mailOptions).catch((error) => {
        console.error('Error sending feedback email:', error);
    });
});

// Handle POST request for request listing form submission
app.post('/submit-request', (req, res) => {
    const { naam, email, telefoon, adres } = req.body;
    console.log('Request listing request received:', req.body);

    // Respond to the client immediately
    res.status(200).json({ message: 'Listing request submitted successfully' });

    // Send email asynchronously
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'feikeleemkuil@gmail.com',
            pass: 'pide cjyl xkwd vekg',
        },
    });

    const mailOptions = {
        from: 'feikeleemkuil@gmail.com',
        to: 'feikeleemkuil@gmail.com',
        subject: `Listing Request from ${naam || 'Anonymous'}`,
        text: `Naam: ${naam || 'Not provided'}\nEmail: ${email || 'Not provided'}\nTelefoon: ${telefoon || 'Not provided'}\nAdres: ${adres || 'Not provided'}`,
    };

    transporter.sendMail(mailOptions).catch((error) => {
        console.error('Error sending listing request email:', error);
    });
});


// Handle POST request for listing interest form submission
app.post('/submit-interest', (req, res) => {
    const { naam, email, telefoon, bericht, listingInfo } = req.body;

    console.log('Listing interest inquiry received:', req.body);

    // Respond to the client immediately
    res.status(200).json({ message: 'Listing interest inquiry submitted successfully' });

    // Send email asynchronously
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'feikeleemkuil@gmail.com',
            pass: 'pide cjyl xkwd vekg',
        },
    });

    const mailOptions = {
        from: 'feikeleemkuil@gmail.com',
        to: 'feikeleemkuil@gmail.com',
        subject: `Listing interest inquiry ${listingInfo}`,
        text: `Listing: ${listingInfo}\nNaam: ${naam || 'Not provided'}\nEmail: ${email || 'Not provided'}\nTelefoon: ${telefoon || 'Not provided'}\nBericht: ${bericht || 'No message'}`,
    };

    transporter.sendMail(mailOptions).catch((error) => {
        console.error('Error sending listing interest inquiry email:', error);
    });
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});