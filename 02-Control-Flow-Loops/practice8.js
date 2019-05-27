var arr = [1,2,3,4];
var i;
var sum = 0;

for (i of arr) {
    if(i % 2 == 0 && i > 3 && i != 0) {
        sum = sum + i;
    }
}
console.log(sum);