class Rucksack {
  firstCompartment;
  secondCompartment;

  constructor(contents) {
    const { first, second } = this._getRucksackFromContents(contents);

    this.firstCompartment = first;
    this.secondCompartment = second;
  }

  _getRucksackFromContents(contents) {
    const first = contents.substr(0, contents.length / 2);

    const second = contents.substr(contents.length / 2, contents.length);

    return { first, second };
  }
}

module.exports = Rucksack;
