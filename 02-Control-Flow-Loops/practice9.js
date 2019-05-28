nextPrime: for (var i = 0; i <= 10; i++) {
    if (i == 0 || i == 1) continue
  for (var j = 2; j <= i/2; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i)
}