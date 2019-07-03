const Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function (value) {
  this.children.push(new Tree(value));
};

Tree.prototype.contains = function (target) {
  let found = false;

  const inner = function (child) {
    if (child.value === target) found = true;

    child.children.forEach(ch => inner(ch));
  };

  inner(this);
  return found;
};

const iroko = new Tree('Abami');
iroko.addChild('Irumole');
iroko.addChild('Ebora');
iroko.children[1].addChild('Egbere');
iroko.children[1].children[0].addChild('Ikoko');
console.log(iroko);
