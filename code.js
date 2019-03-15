var str = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

function removeDuplicateWords (s) {
  var arr = s.split(" ")
  var res = []
  for (var item of arr) {
    for (var i = 0; i < s.length; i++)
      if (item === arr[i]){
        res.push(item)
      }
  }
  return res
}

console.log("remove duplicate words:", removeDuplicateWords(str))
// Your task is to remove all duplicate words from string, leaving only single (first) words entries.

// Example:

// Input:


// Output:

// 'alpha beta gamma delta'