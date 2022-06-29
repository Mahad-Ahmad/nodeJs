const fs = require('fs');

const readStream = fs.createReadStream('./assets/readStream.txt', {
  encoding: 'utf8',
});
const writeStream = fs.createWriteStream('./assets/writeStream.txt');

readStream.on('data', (chunk) => {
  console.log('---------- new chunk -------------');
  console.log(chunk);
  writeStream.write('\n-----new chunk------\n');
  writeStream.write(chunk);
});

readStream.pipe(writeStream);
