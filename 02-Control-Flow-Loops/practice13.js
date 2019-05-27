var arr = [-3,-2,-1,0,1,2,3]
var sum = 0

for (i of arr) {
    if (i > 0) {
        sum = sum + i;
    }
}
console.log(sum)