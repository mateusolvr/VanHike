# Getting Started with VanHike (academic project)

This page will help you get started with the Single Page Application VanHike.

# Overview

As a single-page application, VanHike is a website that allows hiking enthusiasts to view and search for their favorite trails. The application has the following main features:

**Home Page:** The home page displays a search system for users to search for trails. It also shows a list of trails with their basic information, such as trail name, location, and altitude level.

**Trail Details Page:** When a user clicks on a trail from the list on the home page, they are taken to the trail details page. This page displays detailed information about the selected trail, including its description, weather information obtained from an external API, and some pictures of the trail.

**Admin Pages (Admin-list, Create Article, Edit Article):** The application also has admin pages that require authentication. These pages allow authenticated users to add, delete, or update trails.

**Backend Api:** The backend API was developed using Nodejs and its libraries, it provides 5 endpoints for managing hikes data using CRUD.

**External Api:** Weather API was our choice for external API to provide a range of data for realtime and weather forecast.

# Tools and Dependencies

The frontend of the Application was developed using React v.18.2.0 and the backend was developed using Nodejs v.19.3.0, it uses some tools and several dependencies to implement the required functionality.

-- Tools:

- **Weather API:** WeatherAPI.com is a powerful fully managed weather and geolocation API provider that provides extensive APIs that range from the realtime and weather forecast, historical weather, Air Quality Data, Bulk Request, IP lookup, and astronomy through to sports, time zone, and geolocation.

- **Cloudinary:** Cloudinary is a cloud-based media management platform that provides a range of services for managing and optimizing digital media assets, such as images, videos, and audio files, for use in web and mobile applications.

- **Adobe XD** Adobe XD is a popular design software developed by Adobe Systems that allows designers to create interactive prototypes, wireframes, and user interface (UI) designs for websites, mobile apps, and other digital products.

--Dependencies:

**@emotion/react and @emotion/styled:** These libraries provide a way to write CSS in JavaScript for styling the components in the application.

**@mui/icons-material and @mui/material:** These libraries provide pre-designed Material-UI components that are used to build the user interface of the application.

**axios:** This library is used to make HTTP requests to an external API to fetch weather information for trails.

**dotenv:** This library is used to load environment variables from a .env file, which is used to store sensitive information such as API keys.

**react and react-dom:** These libraries are the core dependencies for building a React application.

**react-icons:** This library provides a collection of popular icons that can be used in the application.

**react-router-dom:** This library is used to implement client-side routing for the application, allowing users to navigate between different pages without triggering a full page reload.

**react-scripts:** This is a set of scripts and configuration used for building, testing, and running the application.

**web-vitals:** This library is used to measure and report real user website performance metrics.

**bcrypt:** This library provides functions for hashing and salting passwords, which helps to securely store and verify user passwords in a database.

**body-parser:** This library is used for parsing incoming request bodies in Express, allowing access to the data sent by clients in the request body.

**cors:** This library is used to enable Cross-Origin Resource Sharing (CORS) in Express, allowing for controlled access to API resources from different origins or domains.

**dotenv:** This library is used to load environment variables from a .env file, allowing for easy configuration of sensitive data such as API keys and database connection strings in a Node.js application.

**express**: This is a popular web framework for Node.js that provides a set of features for building web applications, including handling HTTP requests and responses, routing, and middleware support.

**jsonwebtoken:** This library is used for generating and verifying JSON Web Tokens (JWT) for implementing authentication and authorization in a Node.js application.

**mongoose:** This is an Object Data Modeling (ODM) library for MongoDB, providing a higher-level abstraction for interacting with MongoDB databases in a Node.js application.

**nodemon:** This is a development tool that helps in automatically restarting the Node.js server during development.

# External API

- **WeatherAPI:** WeatherAPI.com is a powerful fully managed weather and geolocation API provider that provides extensive APIs that range from the realtime and weather forecast, historical weather, Air Quality Data, Bulk Request, IP lookup, and astronomy through to sports, time zone, and geolocation.

# How to run the application

**Backend**

1. Install the required dependencies using npm by running the command npm install.
2. Create a .env file in the backend directory, and configure the necessary environment variables 
3. Start the backend server by running the command npm run start or npm run dev for development mode.

**Frontend**

4. Navigate to the frontend directory in project folder.
5. Install the required dependencies using npm by running the command npm install.
6. Create a .env file in the frontend directory, and configure the necessary environment variables 
7. Start the frontend development server by running the command npm run start.
