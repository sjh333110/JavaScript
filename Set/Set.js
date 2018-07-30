class Set {
    constructor() {
        let items = {};
        // 判断时候包含某元素
        this.has = function (value) {
            return value in items;
        };
        // 添加元素
        this.add = function (value) {
            if (!this.has(value)) {
                items[value] = value;
                return true;
            }
            return false;
        };
        // 删除元素
        this.remove = function (value) {
            if (this.has(value)) {
                delete items[value];
                return true;
            }
            return false;
        };
        // 清空元素
        this.clear = function () {
            items = {};
        };
        // 获取长度
        this.size = function () {
            return Object.keys(items).length;
        };
        // 获取值
        this.values = function () {
            let values = [];
            for (let key in items) {
                if (items.hasOwnProperty(key)) {
                    values.push(items[key]);
                }
            }
            return values;
        };
        // 求两个集合的并集
        this.union = function (otherSet) {
            let unionSet = new Set();
            let values = this.values();
            for (let i = 0; i < values.length; i++) {
                unionSet.add(values[i]);
            }
            values = otherSet.values();
            for (let i = 0; i < values.length; i++) {
                unionSet.add(values[i]);
            }
            return unionSet;
        };
        // 求两个集合的交集
        this.intersection = function (otherSet) {
            let intersectionSet = new Set();
            let values = this.values();
            for (let i=0; i<values.length; i++) {
                if (otherSet.has(values[i])) {
                    intersectionSet.add(values[i]);
                }
            }
            return intersectionSet;
        }
        // 求两个集合的差集
        this.difference = function (otherSet) {
            let differenceSet = new Set();
            let values = this.values();
            for (let i=0; i<values.length; i++) {
                if (!otherSet.has(values[i])) {
                    differenceSet.add(values[i]);
                }
            }
            return differenceSet;
        };
        // 判断是否为子集
        this.subset = function (otherSet) {
            if (this.size() > otherSet.size) {
                return false;
            } else {
                let values = this.values();
                for (let i=0; i<values.length; i++) {
                    if (!otherSet.has(values[i])){
                        return false;
                    }
                }
                return true;
            }
        }
    }
}
