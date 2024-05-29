// Create web server using express
const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error');
      return;
    }
    res.send(data);
  });
});

app.post('/comments', (req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error');
      return;
    }
    const comments = JSON.parse(data);
    const newComment = req.body;
    comments.push(newComment);
    fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
      if (err) {
        res.status(500).send('Error');
        return;
      }
      res.send('Comment added');
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});