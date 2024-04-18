import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import Grid from "gridfs-stream";
import bodyParser from "body-parser";
import path from "path";
// import Pusher from "pusher";
import Post from "./models/Post.js"; // Import the Post model

Grid.mongo = mongoose.mongo;

// App config
const app = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// DB config
const mongoURI =
  "mongodb+srv://usernew:YwpmyXKhmZwNSdBn@cluster0.bjoteml.mongodb.net/facebook-clone";

const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let gfs;

conn.once("open", () => {
  console.log("DB connected");

  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("images");
});

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = `image-${Date.now()}${path.extname(file.originalname)}`;
      const fileInfo = {
        filename: filename,
        bucketName: "images",
      };
      resolve(fileInfo);
    });
  },
});

const upload = multer({ storage });

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a route to retrieve posts from the database
app.get("/retrieve/posts", async (req, res) => {
  try {
    // Fetch posts from the database
    const posts = await Post.find().sort({ timestamp: -1 });

    // Send the retrieved posts as a response
    res.status(200).json(posts);
  } catch (error) {
    // Handle errors
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Define a route to upload an image
app.post("/upload/image", upload.single("file"), (req, res) => {
  res.status(201).send(req.file);
});

// Define a route to upload a post
app.post("/upload/post", (req, res) => {
  const dbPost = req.body;
  console.log(dbPost);
  Post.create(dbPost, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// Define a route to retrieve a single image
app.get("/retrieve/images/single", (req, res) => {
  gfs.files.findOne({ filename: req.query.name }, (err, file) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (!file || file.length === 0) {
        res.status(404).json({ err: "file not found" });
      } else {
        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);
      }
    }
  });
});

// Listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
