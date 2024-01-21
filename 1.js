//console.log("My name is Julia");
//console.log(2+2);
//console.log('hello world');
//console.log(2);
//console.log("Добро"+"пожаловать"+"на курс"+"Юлия");
// alert('13 января 2024')
//let number = prompt ("Выберите число", "");
   //if (number < 100 ) {
   //     console.log("меньше ста");
  //  } else if (number > 100){
    //    alert("Больше ста");       
   // }
  
  //let num = prompt ("сумма a+b")
 // if(num > 15){
   //console.log('ДА');
  // }else if(num <= 15){
  //console.log('НЕТ');
 // } // задание 1
  //let a = 10
  //var e = "зима"
 // if(e === a){
  //console.log(true);
 // }
  //else{
  //console.log(false);
  
 // } // задание 2

 //for (let a = 1; a <51; a++) {
  // console.log(a);
  //  } // задание 1
  
  // for (let a = 50; a > 24; a--) {
  //   console.log(a);
  //     } // задание 2
  // for (let a = 2501; a < 3000; a+=2) {
  //    console.log(a);
  //   } // задание 3

  let number = prompt("Введи число от 1 до 5");
  let a = 3;
switch (number) {
  case '3':
  case "3":
    alert( 'Да' );
    break;

  case "1":
   alert( 'Нет' );
   break;
  case "2":
   alert( 'Нет' );
    break;
  case "4":
    alert( 'Нет' );
   break;
 case "5":
   alert( 'Нет' );
    break;

  default:
   alert( 'Не сработало' );
} // Задание 1

let table = prompt("Введи число от 1 до 12");

switch (table) {
  case "1":
 case "2":
 case "3":
   alert( 'зима' );
    break;

  case "4":
  case "5":
  case "6": 
    alert( "весна" );
    break;
case "7":
  case "8":
  case "9":  
   alert( 'лето' );
  break;
  case "10":
  case "11":
  case "12":
   alert( 'осень' );
    break;

  default:
   alert( 'ошибка' );
} // Задание 2

let digit = 1;
let user = null
let word = "привет"
console.log(digit ?? user ?? word ?? "аноним"); //Задание 3