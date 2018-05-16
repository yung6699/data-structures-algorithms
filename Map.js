function Map() {
    var items = {};
    this.set = function(key, value) {
        items[key] = value;
    }

    this.remove = function(key) {
        if (this.has(key)) {
            delete items[key]
            return true;
        }
        return false;
    }

    this.has = function(key) {
        return key in items;
    }

    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    }

    this.keys = function() {
        var keys = [];
        for (var k in items) {
            if (this.has(k)) {
                keys.push(k);
            }
        }

        return keys;
    }

    this.values = function() {
        var values = [];
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }

        return values;
    }

    this.getItems = function() {
        return items;
    }
}

// exports.Map = Map;
var map = new Map();
map.set('yoon', 'yoon@gmail.com');
map.set('yoon01', 'yoon02@gmail.com');
map.set('yoon02', 'yoon03@gmail.com');

console.log(map.keys());
console.log(map.values());
console.log(map.get('yoon01'));
console.log(map.getItems());
