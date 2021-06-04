const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('./dist/angular-demo'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', {root: 'dist/angular-demo/'}
  );
});

app.listen(port, () => {
  console.log('app is listening on port ' + port)
});
