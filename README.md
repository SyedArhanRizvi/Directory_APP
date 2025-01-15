# Directory App

A React-based application for managing a user directory with the ability to add, edit, and retrieve user information. The app features a dynamic theme, real-time user data validation, and a responsive design.

## Features

- Add, edit, and retrieve user details.
- Real-time form validation for all input fields.
- Dynamic theme selection:
  - Default
  - Dark
  - Contrast
  - Rainbow
- Font style customization with preset options.
- Persistent storage of user data in `localStorage`.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Storage**: LocalStorage for saving user data.

## Installation

1. Clone this repository:
   ```bash
   git clone <repository_url>
Navigate to the project directory:
bash
Copy code
cd directory-app
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm start
Components
Home
Manages the main functionality of the app.
Displays the user directory and a form for adding/editing user details.
UserCard
Displays individual user details with options to edit or delete users.
Screenshots
Navbar and Theme Selection
The app includes a navbar with a theme selection dropdown, providing options like dark mode and high-contrast mode.


Add/Edit User Form
A responsive and intuitive form for adding or editing user details. Validation ensures no field is left empty.


User Directory
Displays all users in a tabular format with options to edit or delete entries.


How to Use
Add User: Click the "Add New User" button to open the form. Fill in the details and submit.
Edit User: Click the "Edit" button on a user entry to modify their details.
Retrieve User Info: Use the "Retrieve User Info" button to navigate to the user search page.
Change Theme: Select a theme from the dropdown to change the app’s appearance.
Customize Font: Use the font buttons to change the text style.
Validation Rules
Name: Cannot be empty.
Date of Birth: Must be a valid date.
Aadhar Number: Must be filled (add additional validation as needed).
Mobile Number: Cannot be empty.
Future Enhancements
Integration with a backend API for data persistence.
Advanced validation for Aadhar and Mobile numbers.
Search and filter functionality for the user directory.
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature/your-feature
Commit your changes:
bash
Copy code
git commit -m "Add your feature"
Push to your branch:
bash
Copy code
git push origin feature/your-feature
Submit a pull request.
License
This project is licensed under the MIT License.

Contact
For any inquiries, please contact Your Name.

markdown
Copy code

### Note:
- Replace `<repository_url>` with your GitHub repository URL.
- Update `path/to/screenshot/...` with actual screenshot paths or remove the screenshot section if not applicable.
- Customize the contact email as needed.
