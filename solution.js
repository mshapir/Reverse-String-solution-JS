/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
   let current
   for(var i = s.length - 1; i >= 0; i--){
       current = s[i]
       s.splice(i, 1)
       s.push(current)

   }
};
