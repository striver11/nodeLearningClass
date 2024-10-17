//1.create directory
//2.write a file with contents in the Dir
//3.Read the file from the directory
//4.Diaplay contents on console
//5.Remove the file from the directory



const fs=require('fs')

fs.mkdir("dir4",err=>{
    if(err)
        console.log('Error creating directory')
    else
    {
        console.log('1.Directory created')
        fs.writeFile("./dir4/file.txt","Welcome to the fs module writing in file.txt",err=>{
            if(err)
                console.log('Error in  reading file')
            else
            {
                console.log("2.File is written")
            }
        })
    }
})