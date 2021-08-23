module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for(let i = 0; i < str.length; i++){
    for (let pairBracket of bracketsConfig) {
      if (str[i] == pairBracket[0]  && pairBracket[0] == pairBracket[1]  && pairBracket[0] == stack[stack.length - 1]){
        stack.pop();
        break;
        }
        if (str[i] == pairBracket[0]){
          stack.push(str[i]);
          break;
          }
          if (str[i] == pairBracket[1]){
            if(pairBracket[0] != stack.pop()){
              return false;
              }
          }
      }
  }
  if (stack.length) return false;
  return true;
}
