class LinkedList {
    constructor () {
        let Node = function (element) {
            this.element = element;
            this.next = null;
        } 
        let lenght = 0;
        let head = null;
        
        //向链表尾部插入元素
        this.append = function (element) {
            let node = new Node(element),current;
            if (head == null) {
                head = node;
            } else {
                current = head;
                while (current.next){
                    current = current.next;
                }
                current.next = node;
            }
            lenght++;
        };
        // 往链表的任意位置插入元素
        this.insert = function (position, element) {
            if(position >=0 && position <=lenght) {
                let node = new Node(element), current = head, previous, index=0;
                if (position === 0) {
                   node.next = current;
                   head = node;
                } else {
                    while (index++ < position) {
                        previous = current;
                        current = current.next;
                    }
                    previous.next = node;
                    node.next = current;
                }
                lenght++;
                return true;
            } else {
                return fasle;
            }
        };
        // 按照位置移除元素
        this.removeAt = function (position) {
            if(position >-1 && position <= lenght){
                let current = head, previous, index = 0;
                if (position === 0) {
                    head = current.next;
                } else {
                    while (index++ < position) {
                        previous = current;
                        current = current.next;
                    }
                    previous.next = current.next;
                }
                lenght--; 
                return current.element;
            } else {
                return null;
            }
        };
        // 按照元素值删除元素
        this.remove = function (element) {
            let index = this.indexOf(element);
            this.removeAt(index);
        };
        // 判断链表是否包含某元素
        this.indexOf = function (element) {
            let current = head, index = 0;
            while (current) {
                if(element === current.element){
                    return index;
                }
                index++;
                current = current.next;
            }
            return -1;
        };
        // 判断链表是否为空
        this.isEmpty = function () {
            return lenght === 0;
        };
        // 获取链表长度
        this.size = function () {
            return lenght;
        };
        // 获取链表首个元素
        this.getHead = function () {
            return head;
        };
        // 将链表转换为字符串
        this.toString = function () {
            let current = head,string = '';
            while (current) {
                string += current.element + (current.next ? ',' : '');
                current = current.next;
            }
            return string
        };
        // 打印链表元素
        this.print = function () {
            console.log(this.toString());
        };

    }
}