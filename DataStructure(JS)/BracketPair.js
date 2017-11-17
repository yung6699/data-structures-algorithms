/*
    괄호 쌍 검사 하는 문제
    스택을 활용하여 풀어낸다.
 */

function bracketPairCheck(element) {
    var stack = [];
    for (var i = 0, max = element.length; i < max; i++) {
        switch (element[i]) {
            case '(':
            case '{':
            case '[':
                stack.push(element[i])
                break;
            case ')':
                if (stack.pop() != '(')
                    return false
                break;
            case '}':
                if (stack.pop() != '{')
                    return false
                break;
            case ']':
                if (stack.pop() != '[')
                    return false
                break;
        }
    }

    if (stack.length == 0)
        return true;
    else
        return false;
}

console.log(bracketPairCheck('()()'));
console.log(bracketPairCheck('({[}])'));
console.log(bracketPairCheck('({}[(){}])'));
console.log(bracketPairCheck('(){}()[][}'));
console.log(bracketPairCheck("(hello)()"))
console.log(bracketPairCheck(")("))
