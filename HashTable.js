/* 
  HashTable ( HashMap )
  Map(딕셔너리)로 만든다.

  해시함수(hash function)란 데이터의 효율적 관리를 목적으로 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수입니다. 
  이 때 매핑 전 원래 데이터의 값을 키(key), 매핑 후 데이터의 값을 해시값(hash value), 매핑하는 과정 자체를 해싱(hashing)라고 합니다.
*/

function HashTable() {
  var table = [];

  this.put = function (key, value) {
    var position = djb2HashCode(key);

    if (table[position] === undefined) {
      table[position] = [];
    }
    table[position].push([key, value]);
  };


  this.get = function (key) {
    var position = djb2HashCode(key);

    if (table[position] !== undefined) {
      for (var i = 0; i < table[position].length; i++) {
        if (table[position][i][0] === key) {
          return table[position][i][1];
        }
      }
    }
    return undefined;
  };

  this.remove = function (key) {
    var position = djb2HashCode(key);

    if (table[position] !== undefined) {
      for (var i = 0; i < table[position].length; i++) {
        if (table[position][i][0] === key) {
          table[position].splice(i, 1);
        }

        if (table[position].length === 0) {
          table[position] = undefined;
          break;
        }
      }
      return true;
    }
    return false;
  }

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


// function loseloseHashCode(key) {
//   var hash = 0;
//   for (var i = 0; i < key.length; i++) {
//     hash += key.charCodeAt(i);
//   }
//   return hash % 37;
// }

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