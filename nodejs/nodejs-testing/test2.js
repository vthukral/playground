// const myname = "hello2"
// console.log(myname)

// const greet = (name) => {
//     console.log(`hello ${name}`);
// }

// greet("siree");
// greet("yosh");

// //Global object
// console.log(globalThis)

// globalThis.setTimeout(() => {
//     console.log("hello");
// }, 3000);


// setInterval(() => {
//     console.log("timer");
// }, 3000);

// const { name, list } = require('./test')
// const os = require('os')

// console.log(__dirname);
// console.log(__filename);
// // console.log(xyz);
// // console.log(xyz.list);
// console.log(list);
// console.log(`Dirname = ${os.arch}`);
// console.log(os.homedir());
// console.log(os.platform());

// const fs = require('fs');
// fs.readFile('test.js', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data.toString());
//         console.log(data);
//     }
// });

// fs.writeFile('out.txt', 'hello, world', () => {
//     console.log('file was written');
//     setTimeout(() => {
//         fs.unlink('out.txt', (err) => {(err)});
//     }, 1000);
// });

// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log('folder created');
//         }
//     });
// }
// else {
//     fs.rmdir('./assets', (err) => {
//         console.log('folder deleted');
//     });
// }

