function stringShow(){
    let str = document.getElementById("textForFunc").value;
    let array = str.split(' ');
    let results = [];
    for(let i = 0; i < array.length; i++){
        if(array[i].toLowerCase() === array[0].toLowerCase()){
            results.push(array[i]);
        }
    }
    document.getElementById("result1").value = results.join(', ') + ".";
}
