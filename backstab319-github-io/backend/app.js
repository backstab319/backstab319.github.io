const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: 'false'}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );

  next();
});

app.get('/api/fix/', (req, res, next) => {
  const fixData = [
    {
      personName: 'siddhartha',
      personEmail: 'siddhartha@gmail',
      projectIssue: 'not working'
    },
    {
      personName: 'siddhartha2',
      personEmail: 'siddhartha@gmail2',
      projectIssue: 'not working2'
    }
  ];
  res.status(200).json({
    message: 'Data sent to angular successfully',
    data: fixData
  });
});

app.post('/api/fix', (req, res, next) => {
  const fixData = req.body;
  console.log(fixData);
  res.json({message: 'Data passed succesfully'});
});

app.get('/api/',(req, res, next) => {
  const data = [
    {
      personName: 'sid',
      personEmail: 'sid@gmail',
      personProject: 'mean'
    },
    {
      personName: 'tdawd',
      personEmail: 'adawdwdwad',
      personProject: 'awda'
    }
  ];
  res.status(200).json({
    message: 'Data sent succesfully',
    data: data
  });
});

app.post('/api/', (req, res, next) => {
  const data = req.body;
  console.log(data);
  res.json({message: 'Data received successfully!'});
});

module.exports = app;
