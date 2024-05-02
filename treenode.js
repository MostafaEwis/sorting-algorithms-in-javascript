export default class node {
  constructor(value = 0) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  setLeft(left) {
    this.left = left;
  }
  setRight(right) {
    this.right = right;
  }
  setValue(value) {
    this.value = value;
  }
  getLeft() {
    return this.left;
  }
  getRight() {
    return this.right;
  }
  getValue() {
    return this.value;
  }
}
