require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/recipes", require("./routes/recipeRoutes"));

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
