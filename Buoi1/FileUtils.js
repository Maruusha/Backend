var  fs = require('fs');
var file_in = 'FileUtils.txt';
var file ='text.txt';
let a[];
fs.readFile(file_in, callback (err, data) => {
  while (not(err)) {
    let a = data.toString();
  }
});
fs. writefile(file, data, callback) => {
  // forEach(fs.appendFileSync(file, a.toString()"\n"),a);
  for (let i=0;i<a.length;i++){
    fs.appendFileSync(file, a[i].toString()"\n");
  }
});
