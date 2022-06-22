require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;

app.use(cors({
  origin: '*'
}));
app.use(express.json());

app.use("/recipes", require("./routes/recipeRoutes"));
app.use("/user", require("./routes/userRoutes"));
app.use("/likes", require("./routes/likeRoutes"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  console.error(err.name);
  console.error(err.message);

  res.status(500).json({
    message: "Something went wrong",
  });
});

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
