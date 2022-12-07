class Pair {
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

  _doesOneWrapTwo() {
    const [oneStart, oneEnd] = this.one;
    const [twoStart, twoEnd] = this.two;

    return oneStart <= twoStart && oneEnd >= twoEnd;
  }

  _doesTwoWrapOne() {
    const [oneStart, oneEnd] = this.one;
    const [twoStart, twoEnd] = this.two;

    return twoStart <= oneStart && twoEnd >= oneEnd;
  }

  doesOnePairWrapOther() {
    return this._doesOneWrapTwo() || this._doesTwoWrapOne();
  }
}

module.exports = Pair;
