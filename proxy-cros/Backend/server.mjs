import express from "express";
// import cors from"cors";
const app = express();
const port = process.env.PORT || 3000;
// app.use(cors());
// app.use(express.static("dist"));
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/name", (req, res) => {
  res.send("i name is moin uddin");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why don't scientists trust atoms? Because they make up everything!",
      author: "Anonymous",
    },
    {
      id: 2,
      joke: "Parallel lines have so much in common. It's a shame they'll never meet.",
      author: "Anonymous",
    },
    {
      id: 3,
      joke: "I told my wife she should embrace her mistakes. She gave me a hug.",
      author: "Anonymous",
    },
    {
      id: 4,
      joke: "I'm reading a book on the history of glue. I just can't seem to put it down.",
      author: "Anonymous",
    },
    {
      id: 5,
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
      author: "Anonymous",
    },
  ];

  res.json(jokes);
});

app.listen(port, () => {
 console.log(`server res at http://localhost:${port}`);
});
