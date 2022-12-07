class PairTwo {
  one;
  two;

  constructor(pairString) {
    const [one, two] = pairString.split(",");
    this.one = one
      .split("-")
      .map((stringifiedNumber) => Number(stringifiedNumber));
    this.two = two
      .split("-")
      .map((stringifiedNumber) => Number(stringifiedNumber));
  }

  _range([start, end]) {
    let range = new Set();
    for (let i = start; i <= end; i++) {
      range.add(i);
    }
    return range;
  }

  doesAnyPartOfPairOverlap() {
    const rangeForFirstPair = this._range(this.one);
    const rangeForSecondPair = this._range(this.two);

    return Array.from(rangeForSecondPair).some((itemInTwo) =>
      rangeForFirstPair.has(itemInTwo)
    );
  }
}

module.exports = PairTwo;
