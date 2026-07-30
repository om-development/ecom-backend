require("dotenv").config();

const app = require("./app.js");
const dbconnection = require("./src/db/dbconnection.js");
const port = process.env.PORT || 5000;

// Start server after connecting to database
async function startServer() {
  try {
    await dbconnection();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log("Database connection error", error.message);
    process.exit(1);
  }
}

startServer();
