var arr = [1, 2, 5, 9, 4, 13, 4, 10];

for (var i = 1; i < arr.length; i++) {
    for (var a = 0; a < i; a++) {
        if (arr[i] < arr[a]) {
            var x = arr[i];
            arr[i] = arr[a];
            arr[a] = x;
        }
    }
}
console.log(arr);