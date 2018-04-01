const Stack = require('./Stack').Stack

/*
    후위 표기식으로 변환시 스택을 활용한다.
    계산시 스택을 활용한다.

    1. 연산자 우선순위를 정한다.
    2. 중위식을 후위식으로 만든다.
    3. 후위식을 계산한다.
 */

function calculator(element) {
    var result = postfixChange(element);
    console.log(result);
    return evalRPNExp(result);
}


function evalRPNExp(postfixStr) {
    var stack = new Stack(),
        size = postfixStr.length,
        tok, op1, op2;

    for (var i = 0; i < size; i++) {
        tok = postfixStr[i];

        if (isNumber(tok)) {
            stack.push(tok);
        } else {
            op2 = parseInt(stack.pop());
            op1 = parseInt(stack.pop());
            // console.log(op2, op1);
            switch (tok) {
                case '+':
                    stack.push(op1 + op2);
                    break;
                case '-':
                    stack.push(op1 - op2);
                    break;
                case '*':
                    stack.push(op1 * op2);
                    break;
                case '/':
                    stack.push(op1 / op2);
                    break;
            }
        }
    }

    return stack.pop();
}



// 후위 표기식으로 변환한다.
function postfixChange(element) {
    var stack = new Stack(),
        size = element.length,
        str = '',
        tok, popOp;


    for (var i = 0; i < size; i++) {
        tok = element[i];

        if (isNumber(tok)) {
            str += tok;
        } else {
            switch (tok) {
                case '(':
                    stack.push(tok);
                    break;
                case ')':
                    while (1) {
                        popOp = stack.pop();
                        if (popOp == '(')
                            break;
                        str += popOp;
                    }
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                    while (stack.isEmpty() === false && whoPrecOp(stack.peek(), tok) >= 0)
                        str += stack.pop();
                    stack.push(tok);
                    break;
            }
        }
    }

    while (!stack.isEmpty())
        str += stack.pop().toString()

    return str;
}

function isNumber(s) {
    s = s.replace(/^\s*|\s*$/g, ''); // 좌우 공백 제거
    if (s == '' || isNaN(s)) return false;
    return true;
}


function getOpPrec(op) {
    switch (op) {
        case '(':
            return 1;
        case '+':
        case '-':
            return 3;
        case '*':
        case '/':
            return 5;
    }
    return -1;
}

function whoPrecOp(op1, op2) {
    var op1Prec = getOpPrec(op1);
    var op2Prec = getOpPrec(op2);

    if (op1Prec > op2Prec)
        return 1;
    else if (op1Prec < op2Prec)
        return -1;
    else
        return 0;
}

console.log(postfixChange('1+5+4*2'));
console.log(calculator('1+5+4*2'));

console.log(postfixChange('1+(5+4)*2'));
console.log(calculator('1+(5+4)*2'));

console.log(postfixChange('(((5*2)+(7/7))-2)'));
console.log(calculator('(((5*2)+(7/7))-2)'));
