/*
    최소동전 교환
    1. 최소 동전 교환 알고리즘
    2. 욕심쟁이 알고리즘
 */

function MinCoinChanage(coins) {
    var coins = coins;
    this.greedy = function(amount) {
        var change = [],
            total = 0;
        for (var i = coins.length; i >= 0; i--) {
            var coin = coins[i];
            while (total + coin <= amount) {
                change.push(coin);
                total += coin;
            }
        }
        return change;
    }
}

var coins = [1, 3, 4];
var minChangeCoin = new MinCoinChanage(coins);
console.log(minChangeCoin.greedy(6));
