function DoubleLinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
        this.pre = null;
    };

    let lenght = 0;
    let head = null;
    let tail = null;
    // 插入元素
    this.insert = function (position, element) {
        if(position >= 0 && position <= lenght){
            let node = new Node(element),
            current = head,
            precious,
            index = 0;
            if(position === 0) {
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.pre = node;
                    head = node;
                }
            } else if (position === lenght) {
                current = tail;
                current.next = node;
                node.pre = current;
                tail = node;
            } else {
                while (index++ < position) {
                    precious = current;
                    current = current.next; 
                }
                node.next = current;
                precious.next = node;
                current.pre = node;
                node.prev = precious;
            }
            lenght++;
            return true;
        } else {
            return false;
        }
    };
    // 转换为字符串
    this.toString = function () {
        let current = head, string = '';
        while (current) {
            string += current.element + (current.next ? ',' : '');
            current = current.next;
        }
        return string;
    }
    // 打印元素
    this.print = function () {
        console.log( this.toString() );
    }
    
}