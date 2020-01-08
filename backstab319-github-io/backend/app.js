const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader(
    'Access-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );

  next();
});

app.use('/api/',(req, res, next) => {
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

module.exports = app;
