const nodeTree = {
  type: 'div',
  children: [{
    type: 'span',
    children: 'item 1'
  }, {
    type: 'span',
    children: [{
      type: 'div',
      children: 'this is nested div'
    }]
  }]
};

function getTextNode(node) {
  return document.createTextNode(node);
}

function createEle(type) {
  return document.createElement(type);
}

function getDOM(nodeTree, rootElement) {
    const node = createEle(nodeTree.type);
    const children = nodeTree.children;

    switch (typeof children) {
      case 'string':
        node.appendChild(getTextNode(nodeTree.children));
        return node;
    }

    for (let i = 0; i < children.length; i++) {
       node.appendChild(getDOM(children[i]));
    }

    return node;
}

let rootElement = document.getElementById('root');
rootElement.appendChild(getDOM(nodeTree));
