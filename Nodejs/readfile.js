const fs = require('fs');

// Read file asynchronously with callback
fs.readFile('message.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:' + err);
    return;
  }
  console.log('File content:' + data);
});