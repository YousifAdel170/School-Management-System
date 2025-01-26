# School Management System

The **School Management System** is a comprehensive web application built with **React** for the frontend, **Redux** for global state management, and **React Router** for routing. This system is designed to manage various aspects of a school, including student and teacher management, course scheduling, and role-based access control. Users are assigned roles with specific permissions, ensuring a tailored experience for **Admins**, **Teachers**, **Students**, and **Parents**.

## Features

### User Roles

- **Admin**: Full administrative control, including managing students, teachers, courses, and school statistics. Admins can also view and manage admissions.
- **Teacher**: Teachers can access and manage their assigned courses, view student data, and interact with other teachers.
- **Student**: Students can view available courses and access information about their teachers.
- **Parent**: Parents can monitor their child's courses and teachers, providing an overview of their academic progress.

### Authentication & Authorization

- **Login/Registration**: Secure user authentication for Admins, Teachers, Students, and Parents.
- **Role-based Access Control**: Uses a `ProtectedRoute` component to restrict access to certain pages based on the user’s role. Unauthorized users are redirected to the login page.

### Responsive Design

- The app is designed using **React Bootstrap** and custom CSS to ensure a responsive and modern user interface that adapts to all screen sizes.

### State Management

- **Redux**: The application uses Redux for global state management, allowing for efficient handling of data across different components.

## Installation

### Prerequisites

Before setting up the project, ensure that you have the following software installed:

- **Node.js** and **npm**: Download from [here](https://nodejs.org/).
- **React**: The project is built using React, so make sure you have the necessary setup.

### Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/YousifAdel170/Smart-School-Management-System.git

   ```

2. Navigate into the project directory:

   ```bash
   cd smart-school-management-system
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the app in your browser at `http://localhost:3000`.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **React Router**: For handling routing and navigation.
- **Redux**: For state management across the app.
- **React Hooks**: For managing state and side effects.
- **React-Bootstrap**: Bootstrap components for React (optional).
- **CSS**: For custom styling and layout design.
- **Bootstrap**: For responsive layout and styling.

## User Roles & Routes

### 1. Admin

- Can view, add, update, and delete students, teachers, and courses.
- Can view statistics about the school.
- Can view Admission Students to the school.

### 2. Teacher

- Can view students, courses, and other teachers.

### 3. Student

- Can view courses and teachers.

### 4. Parent

- Can view courses and teachers.

## Protected Routes

Some routes are protected based on the user's role. The ProtectedRoute component ensures that only users with the correct roles can access specific pages. If a user tries to access a page that they are not authorized to view, they will be redirected to the login page.

## Future Improvements

- Add user authentication with JWT tokens for secure login.
- Improve error handling and display messages.
- Implement search functionality for students, teachers, and courses.
- Enhance UI/UX design for better user experience.

## Contributing

Feel free to fork the repository and submit pull requests. If you encounter any issues or have suggestions, please open an issue.

## License

This project is licensed under the MIT License.
