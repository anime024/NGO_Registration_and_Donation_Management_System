# Nss-project

The **NGO Registration and Donation Management System** is a backend-focused web application designed for NGOs and college/NSS-related initiatives.

The system **clearly separates user registration from donation workflows**, preventing unethical or forced payments while maintaining transparency and accountability. It supports secure user management, event/donation tracking, and online payments via Razorpay.

This project was built as a **college/NSS-oriented system**, emphasizing ethical donation handling, clean backend architecture, and real-world payment integration.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Table of Contents
<details>
  <summary>Click to expand</summary>
  <ol>
    <li><a href="#project-overview">Project Overview</a></li>
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
    <li><a href="#authors">Authors</a></li>
  </ol>
</details>

---

## Project Overview

This system allows organizations to:

- Register users independently from donation flows

- Manage donations securely using Razorpay

- Maintain transparency between registered users and payment records

- Export donation data for reporting and auditing

- Support college/NSS-style donation and event registration use cases

The architecture emphasizes clean backend logic, secure payment handling, and scalability.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## Built With

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Gateway**: Razorpay
- **Template Engine**: EJS + HTML + CSS
- **Utilities**:
   - ExcelJS (export donation records)
  - Cookie Parser
- **Dev Tools**:
  - Nodemom
  - Prettier

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
   ```
### Installation
1. Clone the repository
```sh
git clone https://github.com/anime024/NGO_Registration_and_Donation_Management_System.git
```

2. Navigate to the project directory
```sh
cd NGO_Registration_and_Donation_Management_System
```

3. Install dependencies
```sh
npm install
   ```

4. Start the server

```sh
npm start
```

The server will run using nodemon for automatic reloads.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Environment Variables

Create a .env file in the root directory and add:
```sh
PORT=8000
CORS_ORIGIN=* #http://localhost:5173,http://example.com
MONGODB_URI=your_mongodb_connection_string
KEYID=your_razorpay_key_id
KEYSECRET=your_razorpay_key_secret
SECRET=your_jwt_secret_key
```

⚠️ Never commit your .env file to GitHub.

⚠️ Use Razorpay Test Keys during development

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
### Features

- ✅ User registration independent of donation flow

- 🔐 Secure authentication using JWT

- 💳 Online donations via Razorpay

- 📋 Event registration system

- 🧾 Transparent donation records

- 👨‍💼 Admin-friendly backend structure

- 📤 Export donation/user data to Excel

- 🍪 Cookie-based session handling

- 🏫 Suitable for NGOs, college events, and NSS activities

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
### Usage

- Users can register without being forced to donate

- Donations are processed securely through Razorpay

- Admins can track:
   - Registered users
   - Successful payments
   - Total donations

- Data integrity is maintained via proper schema separation in MongoDB

This system is ideal for:

- NGO donation platforms

- College fest or event registrations

- NSS initiatives

- Ethical fundraising systems

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
### Roadmap

 - Admin dashboard UI

 - Role-based access control

 - Donation analytics & charts

 - Email notifications

 - Payment receipt generation (PDF)

- See the open issues for planned improvements.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
### Contributing

Contributions are welcome and appreciated.

1. Fork the repository

2. Create your feature branch
```sh
git checkout -b feature/YourFeature
```

3. Commit your changes

4. Push to the branch

5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
### Authors
**Name:** Animesh Raj
 
- 🎓 B.Tech Student, IIT Roorkee 
- **Email:** animeshraj1618@gmail.com
- GitHub: <a href="https://github.com/anime024">anime024</a>

**Name:** Manish Kumar Gupta

- 🎓 B.Tech Student, IIT Roorkee 
- **Email:** manishkumarguptamns5@gmail.com
- GitHub: <a href="https://github.com/manishkg27">manishkg27</a>
**Name:** ASHISH KUMAR

- 🎓 B.Tech Student, IIT Roorkee 
- **Email:** ashishk7.ak7@gmail.com
- GitHub: <a href="https://github.com/ARC-FROST">ARC-FROST</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

