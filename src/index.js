class Sorter {
  constructor() {
    this.arr = [];
    this.compareFunction = (a, b) => a - b;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    indices.sort((a, b) => a - b);
    let temp = [];
    for (let i = 0; i < indices.length; i++) {
      temp.push(this.arr[indices[i]]);
    }
    temp.sort(this.compareFunction);
    for (let i = 0; i < indices.length; i++) {
      this.arr[indices[i]] = temp[i];
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;