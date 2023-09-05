//Ordene los elementos de un arreglo
let numbers = [0, 5, 3, 2, 19, 1];

numbers.sort(function(a,b){
    return a - b;
});
console.log(numbers);