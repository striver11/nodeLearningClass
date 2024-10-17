const path=require('path')

var filepath="c://files/file.txt";

var parsedfile=path.parse(filepath);
console.log(parsedfile)
console.log(parsedfile.root)
console.log(parsedfile.base)
console.log(parsedfile.dir)
console.log(parsedfile.name)
console.log(parsedfile.ext)

console.log(path.dirname(filepath))

console.log(path.extname(filepath))


console.log(__dirname)

var mypath=path.join(__dirname,"hello")
console.log(mypath)