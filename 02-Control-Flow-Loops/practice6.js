var arr = [1,2,3,4];
var i;
var sum = 0;

for (i of arr) {
    sum = sum + i;
}
console.log(sum);