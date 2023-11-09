import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
    .prompt([
        {
            "message": "Type in your URL: ",
            "name": "URL"
        }
    ])
    .then((answers) => {
        const url = answers.URL;
        let qr_png = qr.image(url);
        qr_png.pipe(fs.createWriteStream('qr_img.png'));

        fs.writeFile('url.txt', url, (err)=>{
            if(err) throw err;
            console.log("QR Code has been generated!");
        })
        
    })
    .catch((error) => {
        console.log(`Sorry! Cannot serve your request at the moment: ${error}`)
    });