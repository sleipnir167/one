
const hello = (name = "Tom") => {
    console.log('hello' + name)
}

hello('code mafia');


var arry = [11,22,33,44];

// arry.forEach(value => console.log(value));

arry.forEach(function(value){
    console.log("aa");
})

arry.forEach(value => console.log("value"));

arry.forEach(function(value){
    console.log("AA");
    console.log('BB');
}) 