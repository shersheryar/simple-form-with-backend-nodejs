const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API endpoint to handle form submission
app.post("/api/data", (req, res) => {
  const formData = req.body;
  // Process the form data as needed
  console.log(formData);
  // You can perform additional operations here, such as saving the data to a database

  const response = {
    message: "Data submitted successfully",
    name: formData.name,
    email: formData.email,
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
