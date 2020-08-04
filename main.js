// 1 .С помощью цикла while вывести все простые числа в промежутке от 0 до 100
var digit = 2; // начинаем с 2 т.к. 1 не простое число (хотя кто-то утверждает обратное)
var massdigit = [];
while (digit <= 100) {
    var i = 2;      // счетчик так же начинаем с 2
    while (digit % i !== 0 ){  
// ищем число i, которое разделится на потенциально простое число без остатка... 
        i += 1;
    } 
//и если найденное число i равно потенциально простому числу, то это число истино простое, записываем в массив  
    if (i == digit) {
        massdigit.push(i);
    }
// проверяем следующее потенциально простое число        
digit += 1;
}

console.log(massdigit);

//3 Решение через массивы + Объекты(Иммитация баззы данных)

var Basket = [];
var shirt = {name:'shirt', price:1000 };  // Иммитация баззы данных
var shoes = {name:'shoes', price:2000 };
var jeans = {name:'jeans', price:3000 };

Basket.push (shirt,shoes,jeans); // Организовал массив для хранения товаров в корзине

alert("Ассортимент нашего магазина рубашка - 1000р, обувь - 2000р, джинсы - 3000р");
var countshirt = parseInt(prompt('Сколько купите рубашек?'));
var countshoes = parseInt(prompt('Сколько купите пар обуви?'));
var countjeans = parseInt(prompt('Сколько купите джинс?'));

var i  = 0
function countBasketPrice(countshirt,countshoes,countjeans){
    for (i; i<Basket.length; i++) {
        
        var clothes = Basket[i]
         
        for (var j in clothes){
            
                if (clothes[j] == 'shirt'){
                var shirtcost = clothes.price * countshirt;
                console.log("цена всех рубашек" + shirtcost);
                }
                if (clothes[j] == 'shoes'){
                    var shoescost = clothes.price * countshoes;
                    console.log("цена всей обуви" + shoescost);
                }
                if (clothes[j] == 'jeans'){
                    var jeanscost = clothes.price * countjeans;
                    console.log("цена всех джинс" + jeanscost);
                }
            
            
        }    
    }
    return shirtcost+shoescost+jeanscost
    }
    var allcost  = countBasketPrice(countshirt,countshoes,countjeans);
console.log("Сумма вашей покупки " + allcost) 
alert("Сумма вашей покупки " + allcost)   


//3 Решение только через массивы
// var Basket = [];
// var shirt = 'shirt';
// var shoes = 'shoes';
// var jeans = 'jeans';

// Basket.push(shirt,shoes,jeans);  

// alert("Ассортимент нашего магазина рубашка - 1000р, обувь - 2000р, джинсы - 3000р");
// var countshirt = parseInt(prompt('Сколько купите рубашек?'));
// var countshoes = parseInt(prompt('Сколько купите пар обуви?'));
// var countjeans = parseInt(prompt('Сколько купите джинс?'));

// var i  = 0
// function countBasketPrice(countshirt,countshoes,countjeans){
//     for (i; i<Basket.length; i++){
//         console.log()
//         if(Basket[i]== 'shirt'){
//           var shirtcost = 1000 * countshirt;         
//         }
//         else if(Basket[i]== 'shoes' ){
//             var shoescost = 2000 * countshoes;       
//         }
//         else if(Basket[i]== 'jeans'){
//             var jeanscost = 3000 * countjeans;
//         }        
//     }
//     return shirtcost+shoescost+jeanscost
// }
// var result = countBasketPrice (countshirt,countshoes,countjeans);
// alert("Общая цена покупки " + result);


//4 Задание
for (var count = 0; count <= 9; console.log(count),count++) {}



//5 Задание
var n = ' ';
var x = "x";
var i =0;

for (i;i<20;i++){
    console.log( n.repeat(20-i) + x.repeat(0+i)+x.repeat(0+i)) 
    

}