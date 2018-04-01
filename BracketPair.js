/*
    괄호 쌍 검사 하는 문제
    스택을 활용하여 풀어낸다.
 */

function bracketPairCheck(element) {
    const stack = [];
    for (let i = 0, max = element.length; i < max; i++) {
        switch (element[i]) {
            case '(':
            case '{':
            case '[':
                stack.push(element[i])
                break;
            case ')':
            case '}':
            case ']':
                let open_ch = stack.pop();
                if (open_ch === '(' && element[i] !==')'||
                    open_ch === '{' && element[i] !=='}'||
                    open_ch === '[' && element[i] !==']'){
                    return false
                }
                break;
            default:
                break;
        }
    }

    return (stack.length !== 0)? false : true;
}

console.log(bracketPairCheck('()()'));
console.log(bracketPairCheck('({[}])'));
console.log(bracketPairCheck('({}[(){}])'));
console.log(bracketPairCheck('(){}()[][}'));
console.log(bracketPairCheck("(hello)()"))
console.log(bracketPairCheck(")("))
