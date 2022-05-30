class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
  setName(newName) {
    this.name = newName.toString();
  }
  setWeight(newWeight) {
    this.weight = newWeight.toString();
  }
  getName() {
    return this.name;
  }
  getWeight() {
    return this.weight;
  }
}
