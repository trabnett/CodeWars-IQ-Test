let num = "2 2 8 7 10 70"

function iqTest(numbers){
    nums = numbers.split(" ")
    resArray = []
  nums.forEach(function(i,idx) {
      if (i % 2 === 0) {
        resArray.push(2)
      } else {
        resArray.push(1)
      }
})
console.log(resArray)
}
console.log(iqTest(num))