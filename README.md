# Express.js Route Parameter Handling Error

This repository demonstrates a common error in Express.js route parameter handling and provides a solution.

## Bug
The provided `bug.js` file contains an Express.js route that attempts to retrieve user data based on a user ID passed as a route parameter. However, there's a potential issue in how the route parameter is handled, leading to errors or unexpected behavior if the user ID is not found.

## Solution
The `bugSolution.js` file demonstrates a corrected approach to handle the route parameter and gracefully handle cases where the user is not found, providing a clear 404 response.