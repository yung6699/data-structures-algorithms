function BinarySearchTree(){
    
    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }

    var root = null;

    this.insert = function(key){
        var newNode = new Node(key);
        if(root == null){
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    var insertNode = function(node, newNode){
        if(node.key > newNode.key){
            if(node.left == null){
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if(node.right == null){
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    // 중위 순회
    this.inOrderTraverse = function(){
        return inOrderTraverseNode(root, []);
    };

    var inOrderTraverseNode = function(node, resultArray){
        if(node !== null){
            inOrderTraverseNode(node.left, resultArray);
            resultArray.push(node.key);
            inOrderTraverseNode(node.right, resultArray);
        }
        return resultArray
    }

        // 전위 순회
    this.preOrderTraverse = function(resultArray){
        return preOrderTraverseNode(root, []);
    };

    var preOrderTraverseNode = function(node, resultArray){
        if(node !== null){
            resultArray.push(node.key);
            preOrderTraverseNode(node.left, resultArray);
            preOrderTraverseNode(node.right, resultArray);
        }
        return resultArray;
    }

    // 후위 순회
    this.postOrderTraverse = function(resultArray){
        return postOrderTraverseNode(root, []);
    };

    var postOrderTraverseNode = function(node, resultArray){
        if(node !== null){
            postOrderTraverseNode(node.left, resultArray);
            postOrderTraverseNode(node.right, resultArray);
            resultArray.push(node.key);
        }
        return resultArray;
    }

        
    // 트리의 최소값 찾기
    this.min = function(){
        return minNode(root);
    }

    var minNode = function(node){
        if(node){
            while(node && node.left !== null){
                node = node.left;
            }
            return node.key;
        };
        return null;
    }
        
    // 트리의 최대값 찾기
    this.max = function(){
        return maxNode(root)
    }

    var maxNode = function(node){
        if(node){
            while(node && node.right !== null){
                node = node.right;
            }
            return node.key;
        };
        return null;
    }

    this.search = function(key){
        return searchNode(root, key) ? console.log('트리에 있음') : console.log('트리에 값이 없음');
    }

    var searchNode = function(node, key){
        if(node === null){
            return false;
        }
        
        if(node.key > key){
            return searchNode(node.left, key)
        } else if(node.key < key){
            return searchNode(node.right, key);
        } else {
            return true;
        }
    };

    this.remove = function(key){
        root = removeNode(root, key);
    }

    var removeNode = function(node, key){
        if(node === null){
            return null;
        }

        if(key < node.key){
            node.left = removeNode(node.left, key);
            return node;
        } else if(key > node.key){
            node.right = removeNode(node.right, key);
            return node;
        } else {
            
            // 리프 노드
            if(node.left === null && node.right === null){
                node = null;
                return node;
            } else if(node.left === null){
                node = node.right;
                return node;
            } else if(node.right === null){
                node = node.left;
                return node;
            } else if(node.left !== null && node.right !== null){
                // 이진 트리일 경우 
                // 삭제한 노드의 하위 노드 중 최소값을 찾아 바꾼다.
                // 그리고 최소값 노드를 삭제한다.
                var aux = findMinNode(node.right);
                node.key = aux.key;
                node.right = removeNode(node.right, aux.key);
                return node;
            }
        }
    }

    var findMinNode = function(node){
        if(node){
            while(node && node.left !== null){
                node = node.left;
            }
            return node;
        };
        return null;
    }
}

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

tree.remove(11);
tree.remove(3);

console.log(tree.inOrderTraverse());  // 중위 순회
console.log(tree.preOrderTraverse()); // 전위 순회
console.log(tree.postOrderTraverse()); // 후위 순회

tree.search(8);
tree.search(1);
