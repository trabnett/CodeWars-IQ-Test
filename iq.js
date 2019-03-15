let num = "1 2 4 2 10 2"

function iqTest(numbers){
    let nums = numbers.split(" ")
    let resArray = []
    let res = 0
    nums.forEach(function(i) {
        if (i % 2 === 0) {
        resArray.push(2)
        } else {
        resArray.push(1)
        }
    })
    resArray.forEach(function(j, idx){
        if (j === resArray[0]) {
        } else {
            res = (idx + 1)
        }
    })
    if (resArray[resArray.length - 1] === resArray[0]) {
        return res
    } else if (resArray[0] === resArray[1]){
        return resArray.length
    } else {
        return 1
    }

}
console.log(iqTest(num))