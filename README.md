📘 WasteWise – Smart Waste Management Tracker

WasteWise is a full-stack ready (currently front-end functional) smart waste management web application designed to help citizens report waste issues, track garbage pickup schedules, and view cleanliness analytics.

The project aims to bridge the gap between residents and municipal waste authorities by creating a transparent, easy-to-use reporting and tracking interface.

🚀 Features
✔ User Authentication

Register & Login (LocalStorage based)

User-specific dashboard

Auto redirect for unauthorized users

✔ Report Waste Issues (Dynamic)

Submit issues with category, location & description

Data saved dynamically in LocalStorage

Dashboard stats update automatically

View all your reports in My Reports page

✔ Garbage Pickup Schedules

Beautiful card UI

Search by area

Icons + color-coded tags

✔ Dashboard Analytics (Dynamic)

Total Reports

Pending Reports

Resolved Reports

User Welcome Banner

✔ My Reports Page (Premium UI)

Card view

Status badge (Pending/Resolved)

Icons + responsive grid

✔ Fixed Footer

Stays at bottom of screen on all devices

🛠 Tech Stack
Layer	Technologies
Frontend	HTML, CSS, JavaScript
Icons	PNG Icons / Custom UI
State Mgmt	LocalStorage
Version Control	Git & GitHub
📂 Project Structure
WasteWise/
│── index.html
│── login.html
│── register.html
│── dashboard.html
│── report.html
│── schedule.html
│── myreports.html
│── style.css
│── login.js
│── register.js
│── report.js
│── schedule.js
│── logout.js
│── /icons
│── README.md

🖼 Screenshots

👉 Replace each image placeholder with your screenshot!

🏠 Home Page


![Home Page]<img width="1919" height="928" alt="image" src="https://github.com/user-attachments/assets/f33f90e0-a399-4605-bb15-e077b434efdf" />


Description:
Simple landing page with navigation bar and clean green theme representing an eco-friendly interface.

🔐 Login Page

<img width="1919" height="929" alt="image" src="https://github.com/user-attachments/assets/40e38c85-40e5-47e8-b043-d2f89b5b957b" />

Description:
Modern login UI with validation and LocalStorage authentication.

📝 Register Page

<img width="1919" height="935" alt="image" src="https://github.com/user-attachments/assets/ea824dc5-9884-40a3-9faf-2807a43a1974" />


Description:
Creates a new WasteWise account and stores user details.

📊 User Dashboard

<img width="1918" height="930" alt="image" src="https://github.com/user-attachments/assets/4beb5297-3833-4ccb-8ffc-040c6b0bfff7" />


Description:
Dynamic dashboard showing:

Total Reports

Pending Reports

Resolved Reports

Personalized welcome message

Quick navigation to My Reports

🚮 Report Waste Page

<img width="1919" height="931" alt="image" src="https://github.com/user-attachments/assets/cb4ea10a-f525-4774-9b1b-8bcad02cfa40" />


Description:
Users can submit waste issues with:

Category

Location

Description

Data is dynamically saved.

📋 My Reports Page

<img width="1919" height="931" alt="image" src="https://github.com/user-attachments/assets/a8c48ccb-d661-4f14-90a0-fc9791e7ced4" />


Description:
Shows all submitted reports in a card layout with:

Icons

Category

Location

Description

Status badge (Pending/Resolved)

🗓️ Schedule Page

<img width="1919" height="926" alt="image" src="https://github.com/user-attachments/assets/987abf74-0a9d-445f-ba1b-0503d93ca2a6" />


Description:
Pickup timing cards with:

Icons

Area

Day

Timing

Waste type tags

Search functionality

⚙️ How It Works
🔹 1. User registers → Data saved to LocalStorage
🔹 2. User login → Validates email/password
🔹 3. Dashboard → Pulls localStorage data & updates stats
🔹 4. Report Issue → Adds new report to wasteReports[] array
🔹 5. My Reports → Reads from wasteReports[] and displays cards
🔹 6. Logout → Clears session

No backend required.

📈 Future Enhancements

Admin dashboard

Resolve/Delete reports

Real-time analytics (Chart.js)

Backend API using Node.js + MongoDB

File uploads (photos of waste)

Location-based auto-detection

👩‍💻 Developer

Dipali Kunwar
B.Tech CSE | Full Stack Developer in Making
💚 Passionate about building meaningful projects with clean UI & real-world impact.

⭐ How to Run the Project
1. Clone the repository
2. Open index.html in browser
3. Explore different pages
4. Register → Login → Dashboard → Report → View Reports
