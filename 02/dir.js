const fs = require("fs");

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Director created");
  });
}

if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Director removed");
  });
}

// https://youtu.be/f2EqECiTBL8?si=11ZXuOhfbj1-X3pe&t=2719

