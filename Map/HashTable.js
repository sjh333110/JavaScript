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
                console.log(position + '-' + key);
                table[position] = value;
            };
            // 获取元素
            this.get = function (key) {
                return table[loseloseHashCode(key)];
            };
            // 删除元素
            this.remove = function (key) {
                table[loseloseHashCode(key)] = undefined;
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