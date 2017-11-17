function Set(){
    var items = {};

    this.add = function(value){
        if(!this.has(value)){
            items[value] = value;
            return true;
        }
        return false;
    }

    this.has = function(value){
        return items.hasOwnProperty(value);
    }

    this.remove = function(value){
        if(this.has(value)){
            delete items[value];
            return true;
        }
        return false;
    }

    this.size = function(){
        return Object.keys(items).length;
    }

    this.values = function(){
         return Object.keys(items)
     }
}

var set = new Set();
set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());

set.add(2);
console.log(set.values());
console.log(set.has(2));
console.log(set.size());

set.add(1);
console.log(set.values());

set.add(2);
set.add(3);
set.remove(2);

console.log(set.values());
