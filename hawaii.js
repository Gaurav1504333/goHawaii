// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const htmlFilePath = path.join(__dirname, 'hawaii.html');
// const cssFilePath = path.join(__dirname, 'css.css');
// const logoImageFilePath = path.join(__dirname, 'logo.png'); // Adding the logo image file
// const fontFilePath1 = path.join(__dirname, 'Displace20-Black.ttf'); // Assuming the font file is named "Displace20-Black.ttf"
// const fontFilePath2 = path.join(__dirname, 'AlohaDemo-ya0V.ttf'); // Assuming the font file is named "AlohaDemo-ya0V.ttf"
// const logohImageFilePath = path.join(__dirname, 'logoh.png');
// const fontFilePath3 = path.join(__dirname, 'OpenSans-Bold.ttf'); // Adding the OpenSans-Bold font file
// const fontFilePath4 = path.join(__dirname, 'OpenSans_Condensed-Light.ttf'); // Adding the OpenSans_Condensed-Light font file
// const fontFilePath5 = path.join(__dirname, 'OpenSans_Condensed-Bold.ttf'); // Adding the OpenSans_Condensed-Bold font file
// const fontFilePath6 = path.join(__dirname, 'OpenSans_SemiCondensed-Bold.ttf'); // Adding the OpenSans_SemiCondensed-Bold font file
// const fontFilePath7 = path.join(__dirname, 'OpenSans_Condensed-SemiBoldItalic.ttf'); // Adding the OpenSans_Condensed-SemiBoldItalic font file
// const fontFilePath8 = path.join(__dirname, 'OpenSans_Condensed-SemiBold.ttf'); // Adding the OpenSans_Condensed-SemiBold font file
// const fontFilePath9 = path.join(__dirname, 'OpenSans_Condensed-Regular.ttf'); // Adding the OpenSans_Condensed-Regular font file
// const fontFilePath10 = path.join(__dirname, 'OpenSans_Condensed-Light.ttf'); // Adding the OpenSans_Condensed-Light font file
// const fontFilePath11 = path.join(__dirname, 'OpenSans_SemiCondensed-Light.ttf'); // Adding the OpenSans_SemiCondensed-Light font file
// const fontFilePath12 = path.join(__dirname, 'OpenSans_SemiCondensed-Regular.ttf');
// // Array to hold the image file names
// const imageFileNames = ['main.jpg','family.jpg','foodie.jpg','ft.jpg','culture.jpg','nature.jpg','rs.jpg','page2.jpg','arrow.png','arrowr.png','border.jpg','mapf.jpeg', '4b.jpg', 'mx1.jpg','mx2.jpg','mx3.jpg','mx4.jpg','blank.jpg','p6bg.jpg','hotel.jpg','boat.jpg','shop.jpg','last.jpg','appstore.png','playstore.png', 'a1.png', 'a2.png', 'a3.png','a4.png','a5.png','a6.png','acc1.png','acc2.png','acc3.png','acc4.png','acc4.png','acc5.png','acc6.png','accbg.png','accbg2.png',
// 'c1.png','c2.png','c3.png','c4.png','c5.png','c6.png','c7.png','c8.png','c9.png','c10.png','cl1.png','cl2.png','cl3.png','cl4.png','cl5.png','cl6.png','cl7.png','cl8.png','familybg.png','fd1.png','fd2.png','fd3.png','fd4.png','fd5.png','fd6.png','fd7.png','fd8.png','fd9.png','fd10.png','festivalsbg.png','cl2.png','ff1.png','ff2.png','ff3.png','ff4.png','ff5.png','ff6.png','ff7.png','ff8.png','ff9.png','ff10.png','fod1.png','fod2.png','fod3.png','fod4.png','fod5.png','fod6.png','foodculture.png',
// 'fs1.png','fs2.png','fs3.png','fs4.png','fs5.png','fs6.png','ftbg.png','ft1.png','ft2.png','ft3.png','ft4.png','ft5.png','ft6.png','ft7.png','ft8.png','ft9.png','ft10.png','fts1.png','fts2.png','fts3.png','fts4.png','fts5.png','fts6.png','n1.png','n2.png','n3.png','n4.png','n5.png','n6.png','n7.png','n8.png','n9.png','n10.png','naturebg.png','nl1.png','nl2.png','nl3.png','nl4.png','nl5.png','nl6.png','oa.jpg','rs1.png','rs2.png','rs3.png','rs4.png','rs5.png','rs6.png','rs7.png','rs8.png','rs9.png','rs10.png',
// 'rsbg.png','rss1.png','rss2.png','rss3.png','scroll1.png','scroll2.png','scroll3.png','scroll4.png','scroll5.png','scroll6.png','ss1.png','ss2.png','ss3.png','ss4.png','ss5.png','ss6.png','ss7.png','ss8.png','ss9.png','ss10.png','twitter.png','meta.png','ioh.jpg','lanai.jpg','maui.jpg','subm.jpg','o.jpg','activitiesbg.png','activitiesbg2.png','culturebg.png'];

// // Array to hold the HTML file names
// const htmlFileNames = ['acc.html', 'activities.html', 'culture.html', 'family.html', 'foodie.html', 'ft.html', 'nature.html', 'readmore.html', 'rs.html', 'subioh.html', 'subk.html', 'subl.html', 'subm.html', 'submaui.html', 'subo.html'];

// // Array to hold the CSS file names
// const cssFileNames = ['acc.css', 'activities.css', 'culture.css', 'family.css', 'foodie.css', 'ft.css', 'nature.css', 'readmore.css', 'rs.css', 'cssioh.css', 'cssk.css', 'cssl.css', 'cssm.css', 'cssmaui.css', 'csso.css'];

// const hostname = '127.0.0.1';
// const port = 80;

// const server = http.createServer((req, res) => {
//     let filePath;
//     // Handle requests for HTML, CSS, logo, and font files
//     if (req.url === '/') {
//         filePath = htmlFilePath;
//     } else if (req.url === '/css.css') {
//         filePath = cssFilePath;
//     } else if (req.url === '/logo.png') {
//         filePath = logoImageFilePath;
//     } else if (req.url === '/logoh.png') { // Handle request for logoh image
//         filePath = logohImageFilePath;
//     }else if (req.url === '/Displace20-Black.ttf') {
//         filePath = fontFilePath1;
//     } else if (req.url === '/AlohaDemo-ya0V.ttf') {
//         filePath = fontFilePath2;
//     } else if (req.url === '/OpenSans-Bold.ttf') {
//         filePath = fontFilePath3;
//     } else if (req.url === '/OpenSans_Condensed-Light.ttf') {
//         filePath = fontFilePath4;
//     } else if (req.url === '/OpenSans_Condensed-Bold.ttf') {
//         filePath = fontFilePath5;
//     } else if (req.url === '/OpenSans_SemiCondensed-Bold.ttf') {
//         filePath = fontFilePath6;
//     } else if (req.url === '/OpenSans_Condensed-SemiBoldItalic.ttf') {
//         filePath = fontFilePath7;
//     } else if (req.url === '/OpenSans_Condensed-SemiBold.ttf') {
//         filePath = fontFilePath8;
//     } else if (req.url === '/OpenSans_Condensed-Regular.ttf') {
//         filePath = fontFilePath9;
//     } else if (req.url === '/OpenSans_Condensed-Light.ttf') {
//         filePath = fontFilePath10;
//     } else if (req.url === '/OpenSans_SemiCondensed-Light.ttf') {
//         filePath = fontFilePath11;
//     }else if (req.url === '/OpenSans_SemiCondensed-Regular.ttf') {
//         filePath = fontFilePath12;
//     }
//     // Handle requests for image files
//     else if (imageFileNames.includes(path.basename(req.url))) {
//         filePath = path.join(__dirname, req.url);
//     }
//     // Handle requests for HTML files
//     else if (htmlFileNames.includes(path.basename(req.url))) {
//         filePath = path.join(__dirname, req.url);
//     }
//     // Handle requests for css files
//     else if (cssFileNames.includes(path.basename(req.url))) {
//         filePath = path.join(__dirname, req.url);
//     }
//     else {
//         res.statusCode = 404;
//         res.end('404 Not Found');
//         return;
//     }

//     // Read and serve the requested file
//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             res.statusCode = 500;
//             res.end('Internal Server Error');
//             return;
//         }

//         let contentType = 'text/html';
//         if (filePath.endsWith('.css')) {
//             contentType = 'text/css';
//         } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
//             contentType = 'image/jpeg';
//         } else if (filePath.endsWith('.png')) {
//             contentType = 'image/png';
//         } else if (filePath.endsWith('.ttf')) {
//             contentType = 'font/ttf';
//         }

//         res.setHeader('Content-Type', contentType);
//         res.statusCode = 200;
//         res.end(data);
//     });
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });




const express = require('express');
const fs = require('fs');
const path = require('path');
// const bodyparser = require("body-parser");

// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://localhost/hotel1.html');
// }

// const h1infoSchema = new mongoose.Schema({
//     fullname: String,
//     phone: String,
//     arival_date: String,
//     leaving_date: String
// });

// const booking = mongoose.model('booking', h1infoSchema);


const app = express();
const htmlFilePath = path.join(__dirname, 'hawaii.html');

const cssFilePath = path.join(__dirname, 'css.css');
const logoImageFilePath = path.join(__dirname, 'logo.png'); // Adding the logo image file
const fontFilePath1 = path.join(__dirname, 'Displace20-Black.ttf'); // Assuming the font file is named "Displace20-Black.ttf"
const fontFilePath2 = path.join(__dirname, 'AlohaDemo-ya0V.ttf'); // Assuming the font file is named "AlohaDemo-ya0V.ttf"
const logohImageFilePath = path.join(__dirname, 'logoh.png');
const fontFilePath3 = path.join(__dirname, 'OpenSans-Bold.ttf'); // Adding the OpenSans-Bold font file
const fontFilePath4 = path.join(__dirname, 'OpenSans_Condensed-Light.ttf'); // Adding the OpenSans_Condensed-Light font file
const fontFilePath5 = path.join(__dirname, 'OpenSans_Condensed-Bold.ttf'); // Adding the OpenSans_Condensed-Bold font file
const fontFilePath6 = path.join(__dirname, 'OpenSans_SemiCondensed-Bold.ttf'); // Adding the OpenSans_SemiCondensed-Bold font file
const fontFilePath7 = path.join(__dirname, 'OpenSans_Condensed-SemiBoldItalic.ttf'); // Adding the OpenSans_Condensed-SemiBoldItalic font file
const fontFilePath8 = path.join(__dirname, 'OpenSans_Condensed-SemiBold.ttf'); // Adding the OpenSans_Condensed-SemiBold font file
const fontFilePath9 = path.join(__dirname, 'OpenSans_Condensed-Regular.ttf'); // Adding the OpenSans_Condensed-Regular font file
const fontFilePath10 = path.join(__dirname, 'OpenSans_Condensed-Light.ttf'); // Adding the OpenSans_Condensed-Light font file
const fontFilePath11 = path.join(__dirname, 'OpenSans_SemiCondensed-Light.ttf'); // Adding the OpenSans_SemiCondensed-Light font file
const fontFilePath12 = path.join(__dirname, 'OpenSans_SemiCondensed-Regular.ttf');
// Array to hold the image file names
const imageFileNames = ['main.jpg','family.jpg','foodie.jpg','ft.jpg','culture.jpg','nature.jpg','rs.jpg','page2.jpg','arrow.png','arrowr.png','border.jpg','mapf.jpeg', '4b.jpg', 'mx1.jpg','mx2.jpg','mx3.jpg','mx4.jpg','blank.jpg','p6bg.jpg','hotel.jpg','boat.jpg','shop.jpg','last.jpg','appstore.png','playstore.png', 'a1.png', 'a2.png', 'a3.png','a4.png','a5.png','a6.png','acc1.png','acc2.png','acc3.png','acc4.png','acc4.png','acc5.png','acc6.png','accbg.png','accbg2.png',
'c1.png','c2.png','c3.png','c4.png','c5.png','c6.png','c7.png','c8.png','c9.png','c10.png','cl1.png','cl2.png','cl3.png','cl4.png','cl5.png','cl6.png','cl7.png','cl8.png','familybg.png','fd1.png','fd2.png','fd3.png','fd4.png','fd5.png','fd6.png','fd7.png','fd8.png','fd9.png','fd10.png','festivalsbg.png','cl2.png','ff1.png','ff2.png','ff3.png','ff4.png','ff5.png','ff6.png','ff7.png','ff8.png','ff9.png','ff10.png','fod1.png','fod2.png','fod3.png','fod4.png','fod5.png','fod6.png','foodculture.png',
'fs1.png','fs2.png','fs3.png','fs4.png','fs5.png','fs6.png','ftbg.png','ft1.png','ft2.png','ft3.png','ft4.png','ft5.png','ft6.png','ft7.png','ft8.png','ft9.png','ft10.png','fts1.png','fts2.png','fts3.png','fts4.png','fts5.png','fts6.png','n1.png','n2.png','n3.png','n4.png','n5.png','n6.png','n7.png','n8.png','n9.png','n10.png','naturebg.png','nl1.png','nl2.png','nl3.png','nl4.png','nl5.png','nl6.png','oa.jpg','rs1.png','rs2.png','rs3.png','rs4.png','rs5.png','rs6.png','rs7.png','rs8.png','rs9.png','rs10.png',
'rsbg.png','rss1.png','rss2.png','rss3.png','scroll1.png','scroll2.png','scroll3.png','scroll4.png','scroll5.png','scroll6.png','ss1.png','ss2.png','ss3.png','ss4.png','ss5.png','ss6.png','ss7.png','ss8.png','ss9.png','ss10.png','twitter.png','meta.png','ioh.jpg','lanai.jpg','maui.jpg','subm.jpg','o.jpg','activitiesbg.png','activitiesbg2.png','culturebg.png'];

// Array to hold the HTML file names
const htmlFileNames = ['acc.html', 'activities.html', 'culture.html', 'family.html', 'foodie.html', 'ft.html', 'nature.html', 'readmore.html', 'rs.html', 'subioh.html', 'subk.html', 'subl.html', 'subm.html', 'submaui.html', 'subo.html'];

// Array to hold the CSS file names
const cssFileNames = ['acc.css', 'activities.css', 'culture.css', 'family.css', 'foodie.css', 'ft.css', 'nature.css', 'readmore.css', 'rs.css', 'cssioh.css', 'cssk.css', 'cssl.css', 'cssm.css', 'cssmaui.css', 'csso.css'];;

app.get('/', (req, res) => {
    res.sendFile(htmlFilePath);
});
app.get('/css.css', (req, res) => {
    res.sendFile(cssFilePath);
});

app.get('/logo.png', (req, res) => {
    res.sendFile(logoImageFilePath);
});

// Add routes for other static files...

app.use(express.static(__dirname)); // Serve static files from the current directory

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

const port = 80;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});