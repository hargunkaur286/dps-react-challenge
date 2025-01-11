# DPS Frontend Coding Challenge

## Overview

This repository contains a very basic web application based on Typescript and React. Main application file is `App.tsx`. Node and npm are required.

## Environment Setup

Ensure you have Node.js (v14.x or later) and npm (v6.x or later) installed.  
To set up and run the application, execute the following commands:

```
npm install
npm run dev
```

The application will then be accessible at http://localhost:3000.

## Project Context

You will be enhancing a new CRM (Customer Relationship Management) software aimed at managing customer data efficiently. Your task is to develop a feature that displays a searchable list of customers.

Refer to the attached mockup image to guide your UI development 👇

![Mockup](images/mockup.png)

## Challenge Tasks

-   **Fork this project:** Start by forking this repository
-   **UI Implementation:** Implement the user interface according to the provided design mockup.
-   **Data Integration:** Utilize the endpoint https://dummyjson.com/users to fetch user data. If no filter is applied all data is displayed.
-   **Client-side Filtering:** Implement the following filters:
    -   **Name Filter:** An input field that dynamically filters by `firstName` or `lastName` as you type.
    -   **City Filter:** A dropdown that lists all cities present in the data. Users can select a city to filter the list accordingly.
    -   **Highlight Feature:** A checkbox that when checked, highlights the oldest users within each city (use data field `city`)
    -   **Optional:** Implement a 1-second debounce on the Name Filter input. This means the application should delay the filter action until 1 second has passed without any further input from the user. This optimization helps reduce the number of processing calls, enhancing performance.
-   **Submission:** After completing the challenge, email us the URL of your GitHub repository.
-   **Further information:**
    -   If there is anything unclear regarding requirements, contact us by replying to our email.
    -   Use small commits, we want to see your progress towards the solution.
    -   Code clean and follow the best practices.

\
Happy coding!

--- 

## Overview

This project is a frontend application built as part of the DPS Coding Challenge, focusing on implementing a searchable and interactive user table. It incorporates modern web technologies to ensure a clean, efficient, and responsive user experience.

## Live Preview

https://dps-react-challenge-hargun.vercel.app/ 

---

## Technologies Utilized

- **Framework**: Built with ReactJS and TypeScript for type-safe, scalable, and efficient development.
- **UI Components**: Styled using Material UI (MUI), delivering a professional and accessible design.
- **Data Handling**: Managed HTTP requests with Axios for seamless data fetching.
- **Build System**: Powered by Vite for ultra-fast development and optimized builds.
- **Dependency Management**: Utilized NPM for streamlined package installations and updates.

---

## Features Implemented

### Core Features
- **Dynamic User Interface**: Built an intuitive UI closely aligned with the provided mockup design.
- **User Data Integration**: Fetched and displayed user data from the API endpoint `https://dummyjson.com/users`.

### Filters and Search
- **Name Filter**: An input field that dynamically searches and filters users by their first or last names.
- **City Filter**: A dropdown menu listing all cities present in the data, enabling city-specific filtering.
- **Highlight Oldest User**: A checkbox that, when selected, highlights the oldest user in each city.
- **Debounced Search**: Implemented a 1-second debounce for the name filter input, optimizing performance by reducing unnecessary calls.

### Additional Enhancements
- **Customizable Theme Colors**: Introduced radio buttons to dynamically switch table header colors (Pink, Yellow, Purple, and Blue) i.e. **DPS colors**.
- **Responsive Design**: Ensured the application looks great and functions seamlessly across devices.
- **Total User Count**: Displayed the total number of users dynamically below the table.
- **Clear Search Field**: Added a button to clear the name search input easily.

---

## Folder Structure

```
├── src
│   ├── api        # API request logic
│   ├── components # Reusable UI components
│   ├── hooks      # Custom React hooks
│   ├── models     # TypeScript models and types
│   ├── assets     # Static assets like images
│   └── App.tsx    # Main application entry point
```

---
## Screenshots

### With Pink Header
<img width="600" alt="Screenshot 2025-01-11 at 3 52 47 PM" src="https://github.com/user-attachments/assets/92845ff4-455e-4c96-a062-b637f789a059" />


### With Yellow Header
<img width="600" alt="Screenshot 2025-01-11 at 3 53 29 PM" src="https://github.com/user-attachments/assets/5d4111ab-10b5-4cfb-9a2b-dfb3e2a539db" />

### With Blue Header
<img width="600" alt="Screenshot 2025-01-11 at 3 55 44 PM" src="https://github.com/user-attachments/assets/4060bbda-56ab-41c8-9da3-ade770b0bcec" />


### With Purple Header
<img width="600" alt="Screenshot 2025-01-11 at 3 54 38 PM" src="https://github.com/user-attachments/assets/941db651-f11b-452f-a8e7-94e9ffef5914" />

---

