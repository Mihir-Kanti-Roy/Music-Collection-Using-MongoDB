const fs = require("fs")
const cors = require("cors")
//user add
//user delete

// from users.js 
const express = require("express")
const app = express() //name of the variable
app.use(cors())

app.use(express.json()) 

app.get("/", function(req,res){
    res.sendFile("C:/Users/mihir/OneDrive/Desktop/Classes/Backend Elite 2.0/Backend With File System DB/fe.html")
})

app.post("/favSongs", function(req,res){
    console.log(req.body)
    var usernameInput = req.body.username
    var songsInput = req.body.songs.split(",")
    // var databaseFile = JSON.parse(fs.readFileSync(databasePath, "utf-8")) //string to json
    // console.log(databaseFile)
    // var keyFound = false
    // for(var key in databaseFile){
    //     if(key == usernameInput){
    //         keyFound = true
    //         break
    //     }
    // }
    // if(keyFound == true){
    //     var oldSongsSaved = databaseFile[usernameInput]
    //     for(i=0;i<oldSongsSaved.length;i++){
    //         songsInput.push(oldSongsSaved[i])
    //     }
    // }
    
    // databaseFile[usernameInput] = songsInput
    
    // fs.writeFileSync(databasePath, JSON.stringify(databaseFile))
    //ultimately save in database(files for now)
})

app.post("/api/sendUserSongs", function(req, res){
    var username = req.body.username
    // var songs =  JSON.parse(fs.readFileSync(databasePath, "utf-8"))
    // var keyFound = false
    // for(var key in songs){
    //     if(key == username){
    //         keyFound = true
    //         break
    //     }
    // }
    // var songsForUser
    // if(keyFound == true){
    //     songsForUser = songs[username]
    // }
    // else{
    //     songsForUser = "No songs found"
    // }

    res.json({"response":songsForUser})
    
})

app.post("/api/deleteUserSongs", function(req, res){
    var username = req.body.username
    var songsToDelete = req.body.deleteSongs
    // var songs =  JSON.parse(fs.readFileSync(databasePath, "utf-8"))
    // var keyFound = false
    // var userSongs = []
    // for(var key in songs){
    //     if(key == username){
    //         keyFound = true
    //         userSongs = songs[key]
    //         break
    //     }
    // }

    // var songsDeletionArr = songsToDelete.split(",")
    
    // if(keyFound == true){
    //     for(i=0;i<songsDeletionArr.length;i++){
    //        var index = userSongs.indexOf(songsDeletionArr[i])
    //        if(index<0){
    //          continue
    //        }
    //        userSongs.splice(index,1)
    //     }
    //     songs[username] = userSongs
    // }
    // fs.writeFileSync(databasePath, JSON.stringify(songs))
    
})

app.listen(5000,function(){
    console.log("Server has started")
})


// End to end encryption