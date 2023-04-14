const user = localStorage.getItem('user')

fs.writeFile("./json.json", user, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 