let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somatoria = 0;

for (i=0; i<numbers.length; i+=1){
    somatoria += numbers[i];
}

let media = somatoria/numbers.length;

if (media>20){
    console.log("media maior que 20");
} else{
    console.log("media menor ou igual a 20");
}
