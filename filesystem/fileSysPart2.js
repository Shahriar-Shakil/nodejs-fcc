const fs = require("fs");
//1. //make folder and delete
// fs.mkdir("newFolder", (err) => {
//   if (err) console.log(err);
//   else {
//     fs.writeFile("./newFolder/example.txt", "123", (err) => {
//       if (err) console.log(err);
//       else {
//         console.log("successfully created file");
//       }
//     });
//     // fs.rmdir("newFolder", (err) => {
//     //   if (err) console.log(err);
//     //   else {
//     //     console.log("successfully deleted ");
//     //   }
//     // });
//     // console.log("folder successfully created");
//   }
// });

//2. //delete files with folder
// fs.unlink("./newFolder/example.txt", (err) => {
//   if (err) console.log(err);
//   else {
//     fs.rmdir("newFolder", (err) => {
//       if (err) console.log(err);
//       else {
//         console.log("successfully remove file and folder");
//       }
//     });
//   }
// });

//3 delete multiple file with folder
fs.readdir("testing", (err, files) => {
  if (err) console.log(err);
  else {
    for (let file of files) {
      fs.unlink(`./testing/${file}`, (err) => {
        if (err) console.log(err);
        else {
          fs.rmdir("testing", (err) => {
            if (err) console.log(err);
            else {
              console.log("remove multiple files with folder");
            }
          });
        }
      });
    }
  }
});
