// function nom(son) {
//   let sum = 0;
//   if (typeof son == "number") {
//     for (let i = 0; i <= son; i++) {
//       sum += i;
//     }
//   } else {
//     for (let i = 0; i < son.length; i++) {
//       sum += son[i];
//     }
//   }
//   return sum;
// }

// console.log(nom([1, 2, 3, 4, 5, 6, 7, 8]));

// function findson(a, b) {
//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(findson(4, 7));
// console.log(findson(7, 7));
// console.log(findson(1, 10));

// function matin(a) {
//   let sum = 0;
//   for (let i = 0; i <= a.length; i++) {
//     if (a[i] == "a") {
//       sum++;
//     }
//   }
//   return sum;
// }
// console.log(matin("salom aaa bb sss ddWEWEQaasd"));
// console.log(matin("salom aaa"));
// console.log(matin("salom a"));
// console.log(matin("salom"));

function summ(a) {
  let sum = 0;

  for (let i = 0; i <= a; i++) {    
    if (sum > [i]) {
        sum += i;
    } else {
      console.log("salom");
    }
  }

  return sum;
}
console.log(summ(10));
