# Contact Center Agents Listing

This project uses Create React App with TypeScript and Tailwind CSS to render a table listing of contact center agents.

## Overview

This application has a primary `AgentsList` component which fetches and displays a list of agents, allowing users to filter agents based on their online/offline status.

## Live Demo

I have uploaded a demo to Vercel which can be accessed at [DEMO](https://agents-listing.vercel.app/)

## Testing

A test has been written for the `AgentsList` component to ensure that:
- An online user is correctly rendered by their name.
- An offline user is correctly rendered by their name.

(Note: mock data was not used)

## Setting Up & Running Locally

1. **Clone the Repository:** 
   ```bash
   git clone https://github.com/anandls/agents_listing.git
   ```

2. **Navigate to the Directory:** 
   ```bash
   cd agents_listing
   ```

3. **Install Dependencies:** 
   ```bash
   npm install
   ```

4. **Set Up Environment Variables:** 
   Create an `.env` file in the root directory and add the following:
   ```
   REACT_APP_API_ENDPOINT=the_endpoint
   ```

5. **Run the App Locally:** 
   ```bash
   npm start
   ```   
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

6. **Run Tests:** 
   To ensure everything works as expected, run:
   ```bash
   npm test
   ```

7. **Run Build:** 
   Builds the app for production to the `build` folder
   ```bash
   npm run build
   ```