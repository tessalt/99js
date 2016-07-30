String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

class Bottles {
  verse(n) {
    return (
      `${this.quantity(n).capitalize()} ${this.container(n)} of beer on the wall, ` +
      `${this.quantity(n)} ${this.container(n)} of beer.\n` +
      `${this.action(n)}, ` +
      `${this.quantity(this.successor(n))} ${this.container(this.successor(n))} of beer on the wall.\n`
    );
  }

  successor(n) {
    if (n === 0) {
      return 99;
    } else {
      return n - 1;
    }
  }

  quantity(n) {
    if (n === 0) {
      return 'no more';
    } else {
      return n.toString();
    }
  }

  pronoun(n) {
    if (n == 1) {
      return 'it';
    } else {
      return 'one';
    }
  }

  container(n) {
    if (n === 1) {
      return 'bottle';
    } else {
      return 'bottles';
    }
  }

  action(n) {
    if (n === 0) {
      return 'Go to the store and buy some more';
    } else {
      return `Take ${this.pronoun(n)} down and pass it around`;
    }
  }

  verses(from, to) {
    let output = '';
    while (from >= to) {
      output += this.verse(from);
      from --;
    }
    return output;
  }
}

module.exports = Bottles;
