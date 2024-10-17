const fs=require('fs').promises;

fs.writeFile("file2.txt","This is text add using promise into the file file2.txt")
.then(()=>{             // this we wrote in else block
    console.log('file is written')
    fs.readFile('file2.txt','utf-8')
    .then(data=>{
        console.log(data)
        fs.writeFile('file3.txt',data+'-->taken from file2.txt and added to ')
        .then(()=>{
            console.log("file2.txt copied to file3.txt")
        })
    })
    .catch(err=>{
        console.log(err)
    })
})
.catch(err=>{
    console.log(err)
})