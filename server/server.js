const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const enquiryRoutes = require("./routes/enquiryRoutes");


// Environment variables
dotenv.config();


// App initialization
const app = express();


// Middlewares
app.use(cors());
app.use(express.json());


// Routes
app.use("/api", enquiryRoutes);


// Testing route
app.get("/", (req, res) => {
  res.send("Kidrove Workshop API is running");
});


// PORT
const PORT = process.env.PORT || 5000;


// Server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
