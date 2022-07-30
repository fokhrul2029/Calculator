function deleteData(){
    document.getElementById("result").value = "" ; 
}
function calculator(newData){
    document.getElementById("result").value += newData ;
}
function Result(){
    let i = document.getElementById("result").value ; 
    i = eval(i) ; 
    document.getElementById("result").value = i ;
}