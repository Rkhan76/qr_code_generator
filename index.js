import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";


inquirer.prompt([
    {
        message: "Type the URL:",
        name: "URL",
    },
  ])
  .then((answers) => {
     const url = answers.URL;
     var qr_svg = qr.image(url);
     qr_svg.pipe(fs.createWriteStream('qr_image.png'));
     
     fs.writeFile('url.txt', url,"utf8",(err) => {
      if (err) throw err;
    }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

