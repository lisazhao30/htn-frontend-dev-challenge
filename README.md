# htn-frontend-dev-challenge
 
## How to Set Up
1. Run "npm run start" in the backend and frontend folders

## Tech Stack
- React, JavaScript, TailwindCSS frontend. I specifically used DaisyUI's TailwindCSS framework as the prebuilt components were visually pleasing and has high user accessibility. Moreover, they are prebuilt to be responsive across a variety of screen sizes (both laptop and mobile). 
- MongoDB, Express, Node.js for the backend. I chose to use a MERN stack as I am most familiar with it. As someone who has upcoming midterms, I decided it would be best to use technology that I am already familiar with in order to be efficient with time.
- Lastly, I used Axios to fetch the data from the HTN API

## Areas of Development I Focused On
- Scalability: I tried to make my code as modular as possible by creating smaller, independent functions. For example, I first fetched all of the API data and from there I created functions to filter the data depending on if the user had access to private or public events. Additionally, I tried to keep my code as DRY as possible to ensure easy readability and robust code. 
- Maintainability: For maintainability, I tried to improve the readability of my code via comments. If I were creating a large component for, let's say a co-op, then I would also create documentation on the component to allow others to easily understand the new code. Moreover, I tried to keep high cohesion for all of my similar code (e.g., functions for displaying events are in one module, and my folders contained similar modules). 
- Readability: I commented relevant information concerning the various functions I had or any important components. Function and folder names were consistent (e.g., uppercase first letters for functions, lowercase letters for folder names). I kept consistent spacing for lines for the visual appeal/easy-to-read as well. 

## Development Thought Process
- To start off, I decided to build the backend first as the challenge revolves around using the API to display information. I checked the returned values from the API with Postman to see what kind of data I would need to work with. One of the things I noticed was that some events did not have all the same values as other events. For example, some events don't have speaker names or profile pictures which meant I was going to need to create edge cases for those. 
- Then, I worked on creating the user authentication via MongoDB, Express, and Node. I created routes for registering and logging into the website. User passwords are encrypted in MongoDB to ensure security and privacy. 
- For the frontend part, I first created a utility function to fetch all the data. I then checked to ensure the response was returning the same data as the one returned from Postman. From there, I created the main page, login page, register page, and navigation bar component with DaisyUI for styling. Like I mentioned before, it is currently midterm season for me so I was on a crunch for time. As a result, I feel like there are several improvements that could be done for styling. For example, the login/register page input fields could be improved so if a user enters an invalid username or password then an error message would appear notifying them. Similarly, I would hide the password with astericks when the user inputs it. 
- After, I worked on creating the events page. I first created the card component with styling from DaisyUI. Then, I worked on filtering the data from my utility function. I created a function to render the events dependent on if the user is logged in and a function to return the relevant events. I was running out of time here before the deadline, so I ended up hard coding one of the checks (if speaker does not exist). However, if I were to improve on this, I think it would be relatively simple to fix. 
- Lastly, I completed manual testing to ensure all the components were working cohesively with one another.

## Improvements
- Testing: to increase scalability and maintainability, it is very important to have tests (unit, integration, end to end) to ensure that if something in the code does break in the future then developers are notified before pushing to development. For my code, I would include integration tests for fetching the data, frontend unit tests (e.g., snapshot UI), and server-side unit tests for MongoDB. Since my code is more modular, it would be easier to create unit tests as the components do not depend on multiple other components. 
- User Accessible Design: to increase scalability for a larger audience, there are several improvements that could be done to make my website more accessible. For users with motor issues, I would implement keyboard functions to allow them to proceed to the next field in my login/register page. Not to mention, if I were to add new visual components then I would like to include visual components that can be understood cross-culturally. 
- Refactor: like I mentioned above, there is a little bit of code that is hard-coded due to time constraints. For this part, I only checked the first value of speakers to see if their name or profile pictures exists. However, if events were to include multiple speakers for future events then those names would not be included in the events card. 

