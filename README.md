# Food-Delivery-Website
First Git Repository
My-first website semi finished 

This project uses the MERN Stack:

MongoDB – database (NoSQL)

Express.js – backend framework

React.js – frontend library

Node.js – server environment

Also uses:

Bootstrap – for styling (e.g., dark background support)
use below link in index .html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

CSS – custom styling

React Context API – for state management (used in ContextReducer.js)

🧠 Project Structure Overview
📁 Backend/
Contains all server-side logic.

🔹 models/
Contains MongoDB Mongoose models:

Orders.js: Defines schema for customer orders.

User.js: Defines schema for users (like name, email, password).

🔹 Routes/
Defines Express API routes:

CUser.js: Likely for user-related routes (login/signup).

OrderData.js: May handle placing or viewing orders.

DisplayData.js: For sending frontend category/food data.

🔹 Other backend files:
Db.js: Handles MongoDB connection.

index.js: Entry point for your backend server (app.listen, routes mount, etc.).

package.json: Lists dependencies (express, mongoose, cors, etc.).

📁 my-app/
Main frontend folder created by Create React App.

📁 public/
Contains static assets (favicon, icons, index.html).

💡 You added Bootstrap dark mode in index.html using:
📁 src/
Contains all React code.

🔹 components/
Card.js: UI for food items.

Carousal.js: Bootstrap carousel for images.

ContextReducer.js: Manages global state (cart, orders).

Footer.js, Navbar.js: Reusable layout components.

images1/: Folder for food images.

🔹 screens/
React pages:

Cart.js: Shows selected food items.

Home.js: Landing page.

Login.js, Signup.js: Auth forms.

MyOrder.js: Displays user’s previous orders.

🔹 Other frontend files:
App.js: Routes and layout logic.

Model.js: Possibly a client-side model or helper (unclear without code).

foodData2.json, foodCategory.json: Static data if backend not available.

index.js: Renders React app.
#🏃‍♂️ How to Run the Project on a New Device
✅ 1. Prerequisites
Node.js installed

MongoDB connection string (Atlas or local)

✅ 2. Setup Backend
bash
Copy
Edit
cd Backend
npm install
node index.js   # or use nodemon if installed
🧠 You may need to create a .env file (if not hardcoded):
env
Copy
Edit
MONGO_URL = mongodb+srv://your_url
PORT = 5000
✅ 3. Setup Frontend
bash
Copy
Edit
cd my-app
npm install
npm start
This runs the frontend on http://localhost:3000/

🧩 Notes:
React Bootstrap CDN used in public/index.html for layout and dark theme.

Backend uses cors middleware to allow React frontend to communicate.

React app likely uses fetch or axios to call Express API endpoints.
