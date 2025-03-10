function reverse(string) {
    let newarr = ""
    for(let i = string.length-1; i >= 0; i--){
        newarr.push(string[i])
    }
    return console.log(newarr);
}
reverse("cat")