module.exports = function check(str, bracketsConfig) {
  var stack = [];
  if (str.length % 2 != 0) {
    return false;
  }

  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < bracketsConfig.length; j++) {
      
      if (bracketsConfig[j][0] != bracketsConfig[j][1]) { // brackets are not the same
        if(str[i] == bracketsConfig[j][0]) {
          stack.push(str[i]);  
        }
        
        else if(str[i] == bracketsConfig[j][1]) {
          if (stack[stack.length-1] == bracketsConfig[j][0]) {
            stack.pop();
          }
        }
      }

      else if (bracketsConfig[j][0] == bracketsConfig[j][1]) { // brackets are the same
        if(str[i] == bracketsConfig[j][0]) {
          if (!stack.length || stack[stack.length-1] != bracketsConfig[j][0]) {
            stack.push(str[i]);
          }
          
          else if (stack[stack.length-1] == bracketsConfig[j][0]) {
            stack.pop();
          }
        }
      }
    }
  }

  if(stack.length) return false;

  return true;
};