//stream
const fs = require("fs");
const zlib = require("zlib");
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream("./example2.txt.gz", "utf8");
const writeStream = fs.createWriteStream("uncompressed.txt");

readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});

//pipes and pipe chaining
readStream.pipe(gunzip).pipe(writeStream);
