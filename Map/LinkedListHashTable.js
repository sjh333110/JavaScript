class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;

        this.toString = function () {
            return '[' + this.key + '-' + this.value +']';
        }
    }
}

class HashTable {
    constructor() {
        // 计算哈希值
        var loseloseHashCode = function (key) {
            var hash = 0;
            for (var i=0; i<key.length; i++) {
                hash += key.charCodeAt(i);
            }
            return hash % 37;
        };
        var table = [];
            // 添加元素
            this.put = function (key, value) {
                var position = loseloseHashCode(key);
                if (table[position] == undefined) {
                    table[position] = new LinkedList();
                }
                table[position].append(new ValuePair(key, value));
            };
            // 获取元素
            this.get = function (key) {
                var position = loseloseHashCode(key);
                if(table[position] !== undefined) {
                    var current = table[position].getHead();
                    while(current.next) {
                        if(current.element.key === key) {
                            return current.element.value;
                        }
                    }

                    if(current.element.key === key) {
                        return current.element.value;
                    }
                }
                return undefined;
            };
            // 删除元素
            this.remove = function (key) {
                var position = loseloseHashCode(key);

                if(table[position] !== undefined) {
                    var current = table[position].getHead();
                    while(current.next) {
                        if(current.element.key === key) {
                            table[position].remove(current.element);
                            if(table[position].isEmpty()) {
                                table[position] = undefined;
                            }
                            return false;
                        }
                        current = current.next;
                    }
                    if(current.element.key === key) {
                        table[position].remove(current.element);
                        if(table[position].isEmpty()) {
                            table[position] = undefined;
                        }
                        return false;
                    }
                }
                return false;
            }
            // 打印HashCode
            this.print = function () {
                for (var i=0; i<table.length; i++) {
                    if (table[i] !== undefined) {
                        console.log(i + '-' + table[i]);
                    }
                }
            }
    }
}