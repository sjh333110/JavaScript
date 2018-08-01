class BinarySearchTree{
    constructor () {
        // 插入节点辅助函数
        var insertNode = function (node, newNode) {
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, newNode);
                }
            }
        }
        // 中序遍历辅助函数
        var inOrderTraverseNode = function (node, callback) {
            if (node !== null) {
                inOrderTraverseNode(node.left, callback);
                callback(node.key);
                inOrderTraverseNode(node.right, callback);
            }
        }

        class Node {
            constructor(key) {
                this.key = key;
                this.left = null;
                this.right = null;
            }
        }

        var root = null;
        // 插入元素
        this.insert = function (key) {
            var newNode = new Node(key);

            if (root === null) {
                root = newNode;
            } else {
                insertNode(root, newNode);
            }
        };
        // 中序遍历
        this.inOrderTraverse = function () {
            inOrderTraverseNode(root, callback)
        }
    }
}