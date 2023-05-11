import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

// Routes
import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Routes applying to app
app.use("/posts", postRoutes);

//MongoDB connection via driver url.
const CONNECTION_URL =
  "mongodb+srv://surajgadkar:d6D24yBYNkiFfdlg@memories.w392d0h.mongodb.net/?retryWrites=true&w=majority";

//Connection port
const PORT = process.env.PORT || 5000;

//monoogse connection
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//mongoose.set('useFindAndModify', false)
