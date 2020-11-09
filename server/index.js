import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"

import postRoutes from "./routes/posts.js"

const app = express();

// express middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

// Routes
app.use('/posts', postRoutes)

// MongoDB connection
const CONNECTION_URL = "mongodb+srv://peter:Pr@716729@memories-mern.hkmhf.mongodb.net/memory"
const PORT = process.env.PORT || 5001

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
	.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
	.catch((error) => console.log(error.message))
