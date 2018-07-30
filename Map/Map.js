class Dictionary {
    constructor () {
        var items = {};
        // 判断时候存在元素
        this.has = function (key) {
            return key in items;
        };
        // 添加元素
        this.set = function (key, value) {
            items[key] = value;
        };
        // 删除元素
        this.delete = function (key) {
            if (this.has(key)) {
                delete items[key];
                return true;
            }
            return false;
        };
        // 获取具体项的值
        this.get = function (key) {
            return this.has(key) ? items[key] : undefined;
        };
        // 获取全部值
        this.values = function () {
            var values = [];
            for (var k in items) {
                if (this.has(k)) {
                    values.push(items[k]);
                }
            }
            return values;
        };
        // 获取键值
        this.keys = function () {
            return Object.keys(items);
        }
        // 获取值
        this.getItems = function () {
            return items;
        }
    }
}