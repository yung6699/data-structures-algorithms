/* 
  HashTable ( HashMap )
  Map(딕셔너리)로 만든다.

  해시함수(hash function)란 데이터의 효율적 관리를 목적으로 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수입니다. 
  이 때 매핑 전 원래 데이터의 값을 키(key), 매핑 후 데이터의 값을 해시값(hash value), 매핑하는 과정 자체를 해싱(hashing)라고 합니다.

  선형 탐색법 (linear probing)

  이 방법은 새 원소 추가시 인덱스가 이미 점유된 상태라면 인덱스 +1을 찾아보고 인덱스 +1도 점유됐다면 인덱스 +2를 찾아보는 식으로
  충돌을 회피한다.
*/

function HashTable() {
  var table = [];

  this.put = function (key, value) {
    var position = djb2HashCode(key);

    if (table[position] === undefined) {
      table[position] = new ValuePair(key, value);
    } else {
      var index = ++position;
      while (table[index] != undefined) {
        index++;
      }
      table[index] = new ValuePair(key, value);
    }
  };


  this.get = function (key) {
    var position = djb2HashCode(key);

    if (table[position] !== undefined) {
      if (table[position].key === key) {
        return table[position].value;
      } else {
        var index = ++position;
        while (table[index] === undefined || table[index].key !== key) {
          index++;
        }

        if (table[index].key === key) {
          return table[index].value;
        }
      }
    }
    return undefined;
  };

  
  this.remove = function (key) {
    var position = djb2HashCode(key);

    if (table[position] !== undefined) {
      if (table[position].key === key) {
        table[position] = undefined;
        return true;
      } else {
        var index = ++position;
        while (table[index] === undefined || table[index].key !== key) {
          index++;
        }
        if (table[index].key === key) {
          table[position] = undefined;
          return true;
        }
      }
    }
    return false;
  };
  this.print = function () {
    for (var i = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        console.log(i + " : " + table[i].join(' / '));
      }
    }
  }
}


function djb2HashCode(key) {
  var hash = 5381;
  for (var i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i);
  }
  return hash % 1013;
}

function ValuePair(key, value) {
  this.key = key;
  this.value = value;

  this.toString = function () {
    return '[' + this.key + ' - ' + this.value + ']';
  }
}

var hash = new HashTable();
hash.put('Gandalf', 'gandalf@gmail.com');
hash.put('John', 'johnsnow@gmail.com');
hash.put('Tyrion', 'tyrion@gmail.com');
hash.put('Aaron', 'aaron@gmail.com');
hash.put('Donnie', 'donnie@gmail.com');
hash.put('Ana', 'ana@gmail.com');
hash.put('Jonathan', 'jonathan@gmail.com');
hash.put('Jamie', 'jamie@gmail.com');
hash.put('Sue', 'sue@gmail.com');
hash.put('Mindy', 'mindy@gmail.com');
hash.put('Paul', 'paul@gmail.com');
hash.put('Nathan', 'nathan@gmail.com');

// console.log(hash.remove('John'));
// console.log(hash.get('John'));
console.log(hash.get('Nathan'));

hash.print()