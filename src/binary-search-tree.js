const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){ 
    this.mainHeadElement = null; 
  }
  root() {
    return this.mainHeadElement
  }

  add(data) { 
    this.mainHeadElement = addWithIn(this.mainHeadElement, data); 
    function addWithIn(node, data) { 
      if (!node) return new Node(data); 
      if (node.data === data) return node; 
      if (data < node.data) { 
        node.left = addWithIn(node.left, data); 
      } else { 
        node.right = addWithIn(node.right, data); 
      } 
      return node; 
    } 
  } 
 
  has(data) { 
    return searchWithIn(this.mainHeadElement, data); 
 
    function searchWithIn(node, data) { 
      if (!node) return false; 
      if (node.data === data) return true; 
      return data < node.data ? searchWithIn(node.left, data) : searchWithIn(node.right, data); 
    } 
  } 
 
  find(data) { 
    return findWithIn(this.mainHeadElement, data); 
    function findWithIn(node, data) { 
      if (!node) return null; 
      if (node.data === data) return node; 
      return data < node.data ? findWithIn(node.left, data) : findWithIn(node.right, data); 
    } 
  } 

  remove(data) {
    this.mainHeadElement = removeNode(this.mainHeadElement, data);
    function removeNode(node, data){
      if(!node) return null;
      
      if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      } else if(node.data < data){
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right){
          return null;
        }
        if(!node.left) {
          node = node.right;
          return node; 
        }
        if(!node.right){
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while(minRight.left){
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if(!this.mainHeadElement) return;
    let node = this.mainHeadElement;
    while(node.left) {
      node = node.left;
    }
    return node.data
  }

  max() {
    if(!this.mainHeadElement) return;
    let node = this.mainHeadElement;
    while(node.right) {
      node = node.right;
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};