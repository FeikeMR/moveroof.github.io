import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import validator from 'validator';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Re-create __filename and __dirname since they're not available in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// ──────────────────────────────────────────────
//               MIDDLEWARE
// ──────────────────────────────────────────────

// Parse form data (URL-encoded + JSON)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS config
const allowedOrigins = [
  'https://www.moveroof.com',
  'https://moveroof.com',
  'https://feikemr.github.io',
  'https://moveroofgithubio-production.up.railway.app',
  'http://127.0.0.1:5500',
  'http://localhost:8080',
  'http://localhost:5173'
];

app.use(
  cors({
    origin: (origin, callback) => {
      console.log('CORS got origin:', origin);
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`Not allowed by CORS for origin: ${origin}`));
      }
    }
  })
);

// Serve static files (if needed)
app.use(express.static(path.join(__dirname)));

// Rate limiter: for example, max 10 requests per 30 minutes per IP
const contactFormLimiter = rateLimit({
  windowMs: 30 * 60 * 1000,
  max: 10,
  message:
    'Te veel aanvragen vanaf dit IP. Probeer het opnieuw in 30 minuten.'
});

// Basic test route
app.get('/health', (req, res) => {
  res.send('Hello from Express! The server is up and responding.');
});

// Root route (if you have an index.html locally)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// ──────────────────────────────────────────────
//          FEEDBACK FORM: POST /submit-feedback
// ──────────────────────────────────────────────
app.post('/submit-feedback', contactFormLimiter, (req, res) => {
  const { naam, email, bericht } = req.body;
  console.log('Feedback request received:', req.body);

  if (!naam || typeof naam !== 'string' || naam.trim().length < 2) {
    return res.status(400).json({ error: 'Voer een geldige naam in.' });
  }
  if (email && !validator.isEmail(email)) {
    return res.status(400).json({ error: 'Ongeldig e-mailadres.' });
  }

  const cleanedMessage = bericht ? bericht.trim() : '';

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Feedback from ${naam}`,
    text: `Naam: ${naam}\nEmail: ${email || 'Not provided'}\nFeedback: ${cleanedMessage || 'No message'}`
  };

  transporter
    .sendMail(mailOptions)
    .then(() => {
      console.log('Feedback email sent successfully');
      res.status(200).json({ message: 'Feedback submitted successfully' });
    })
    .catch((error) => {
      console.error('Error sending feedback email:', error);
      res.status(500).json({ error: 'Error sending feedback email' });
    });
});

// ──────────────────────────────────────────────
//       Listing Request Form: POST /submit-listing-request
// ──────────────────────────────────────────────
app.post('/submit-listing-request', contactFormLimiter, (req, res) => {
  const { naam, email, telefoon, adres } = req.body;
  console.log('Listing request received:', req.body);

  if (!naam || typeof naam !== 'string' || naam.trim().length < 2) {
    return res.status(400).json({ error: 'Voer een geldige naam in.' });
  }
  if (!email || !validator.isEmail(email)) {
    return res.status(400).json({ error: 'Voer een geldig e-mailadres in.' });
  }
  if (!adres || typeof adres !== 'string' || adres.trim().length < 5) {
    return res.status(400).json({ error: 'Voer een geldig adres in.' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Listing Request from ${naam}`,
    text: `Naam: ${naam}\nEmail: ${email}\nTelefoon: ${telefoon || 'Not provided'}\nAdres: ${adres}`
  };

  transporter
    .sendMail(mailOptions)
    .then(() => {
      console.log('Listing request email sent successfully');
      res.status(200).json({ message: 'Listing request submitted successfully' });
    })
    .catch((error) => {
      console.error('Error sending listing request email:', error);
      res.status(500).json({ error: 'Error sending listing request email' });
    });
});

// ──────────────────────────────────────────────
//      Listing Interest Form: POST /submit-interest
// ──────────────────────────────────────────────
app.post('/submit-interest', contactFormLimiter, (req, res) => {
  const { naam, email, telefoon, bericht, listingInfo } = req.body;
  console.log('Listing interest inquiry received:', req.body);

  if (!naam || typeof naam !== 'string' || naam.trim().length < 2) {
    return res.status(400).json({ error: 'Voer een geldige naam in.' });
  }
  if (!email || !validator.isEmail(email)) {
    return res.status(400).json({ error: 'Voer een geldig e-mailadres in.' });
  }
  const cleanedMessage = bericht ? bericht.trim() : '';

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Listing Interest Inquiry: ${listingInfo || 'No listing info'}`,
    text: `
      Listing: ${listingInfo || 'Not provided'}
      Naam: ${naam}
      Email: ${email}
      Telefoon: ${telefoon || 'Not provided'}
      Bericht: ${cleanedMessage || 'No message'}
    `
  };

  transporter
    .sendMail(mailOptions)
    .then(() => {
      console.log('Listing interest email sent successfully');
      res.status(200).json({ message: 'Listing interest inquiry submitted successfully' });
    })
    .catch((error) => {
      console.error('Error sending listing interest email:', error);
      res.status(500).json({ error: 'Error sending listing interest email' });
    });
});

// ──────────────────────────────────────────────
//                START SERVER
// ──────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
