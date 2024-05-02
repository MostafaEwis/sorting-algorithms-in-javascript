import node from "./treenode.js";

let root = new node(1);
const fillTree = (root) => {
  if (root.getValue() < 5) {
    root.setLeft(new node(root.getValue() + 1));
    root.setRight(new node(root.getValue() + 2));
    fillTree(root.getLeft());
    fillTree(root.getRight());
  }
};
const printTree = (root, level) => {
  let indent = "";
  for (let i = 0; i < level; i++) {
    indent += "-";
  }
  console.log(indent, root.getValue());
  if (root.getLeft() != null) {
    printTree(root.getLeft(), level + 1);
  }
  if (root.getRight() != null) {
    printTree(root.getRight(), level + 1);
  }
};

fillTree(root);
printTree(root, 0);
