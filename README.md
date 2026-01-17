# Nss-project

<!-- Improved compatibility of back to top link -->
<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]

<br />
<div align="center">
  <h3 align="center">NGO Registration and Donation Management System</h3>

  <p align="center">
    A backend-driven system that separates user registration from donation flow,
    ensuring data integrity, transparency, and ethical handling of payments.
    <br />
    <a href="https://github.com/anime024/NGO_Registration_and_Donation_Management_System"><strong>Explore the repository »</strong></a>
    <br /><br />
    <a href="https://github.com/anime024/NGO_Registration_and_Donation_Management_System/issues">Report Bug</a>
    ·
    <a href="https://github.com/anime024/NGO_Registration_and_Donation_Management_System/issues">Request Feature</a>
  </p>
</div>

---

## Table of Contents
<details>
  <summary>Click to expand</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#environment-variables">Environment Variables</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

---

## About The Project

The **NGO Registration and Donation Management System** is a backend-focused web application designed for NGOs and college/NSS-related initiatives.

The system **clearly separates user registration from donation workflows**, preventing unethical or forced payments while maintaining transparency and accountability. It supports secure user management, event/donation tracking, and online payments via Razorpay.

This project was built as a **college/NSS-oriented system**, emphasizing ethical donation handling, clean backend architecture, and real-world payment integration.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Built With

- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **EJS (templating)**
- **Razorpay Payment Gateway**
- **JWT Authentication**
- **ExcelJS (data export)**
- **Bootstrap (UI styling)**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js (v18+ recommended)
- npm
- MongoDB (local or cloud)

```sh
npm install npm@latest -g

Installation

Clone the repository

git clone https://github.com/anime024/NGO_Registration_and_Donation_Management_System.git


Navigate to the project directory

cd NGO_Registration_and_Donation_Management_System


Install dependencies

npm install


Start the server

npm start


The server will run using nodemon for automatic reloads.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
Environment Variables

Create a .env file in the root directory and add:

MONGODB_URI=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
JWT_SECRET=your_jwt_secret_key


⚠️ Never commit your .env file to GitHub.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
Features

✅ User registration independent of donation flow

🔐 Secure authentication using JWT

💳 Online donations via Razorpay

📋 Event registration system

🧾 Transparent donation records

👨‍💼 Admin-friendly backend structure

📤 Export donation/user data to Excel

🍪 Cookie-based session handling

🏫 Suitable for NGOs, college events, and NSS activities

<p align="right">(<a href="#readme-top">back to top</a>)</p>
Usage

Users can register without being forced to donate

Donations are processed securely through Razorpay

Admins can track:

Registered users

Successful payments

Total donations

Data integrity is maintained via proper schema separation in MongoDB

This system is ideal for:

NGO donation platforms

College fest or event registrations

NSS initiatives

Ethical fundraising systems

<p align="right">(<a href="#readme-top">back to top</a>)</p>
Roadmap

 Admin dashboard UI

 Role-based access control

 Donation analytics & charts

 Email notifications

 Payment receipt generation (PDF)

See the open issues
 for planned improvements.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
Contributing

Contributions are welcome and appreciated.

Fork the repository

Create your feature branch

git checkout -b feature/YourFeature


Commit your changes

Push to the branch

Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>
License

Distributed under the ISC License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
Contact

Animesh Raj
GitHub: anime024

<p align="right">(<a href="#readme-top">back to top</a>)</p>