const os = require('os');
const fs = require('fs');

const osMethod1 = os.platform();
const osModule2 = os.homedir();

// Reading File
// fs.readFile('./Files/readme.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// Writing Files
// fs.writeFile('./Files/readme.txt', 'hello world', () => {
//   console.log('file changed');
// });

// fs.writeFile('./Files/readme2.txt', 'hello world 2', () => {
//   console.log('file changed');
// });

// Directories
// if (!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('file created');
//   });
// } else {
//   fs.rmdir('./assets', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('file deleted');
//   });
// }

// Deleting Files
if (fs.existsSync('./Files/deleteme.txt')) {
  fs.unlink('./Files/deleteme.txt', () => {
    console.log('file deleted');
  });
}
