const MAX_INT32 = 2147483647;

// minimal implementation of the dotnet Random class, only using what we need from it
class DotNetRandom {

  constructor(seed) {
    this._inext = 0;
    this._inextp = 21;
    this._seedArray = new Array(56);

    let mj = 161803398 - Math.abs(seed);
    let mk = 1;

    for (let i = 1; i < 55; i++) {
      let ii = (21 * i) % 55;
      this._seedArray[ii] = mk;
      mk = mj - mk;
      if (mk < 0)
        mk += MAX_INT32;
      mj = this._seedArray[ii];
    }

    for (let k = 0; k < 4; k++) {
      for (let i = 1; i < 56; i++) {
        this._seedArray[i] -= this._seedArray[1 + (i + 30) % 55];
        if (this._seedArray[i] < 0)
          this._seedArray[i] += MAX_INT32;
      }
    }
  }

  _internalSample() {
    let locINext = this._inext + 1;
    if (locINext >= 56) locINext = 1;
    let locINextp = this._inextp + 1;
    if (locINextp >= 56) locINextp = 1;

    let retVal = this._seedArray[locINext] - this._seedArray[locINextp];
    if (retVal < 0) retVal += MAX_INT32;

    this._seedArray[locINext] = retVal;

    this._inext = locINext;
    this._inextp = locINextp;

    return retVal;
  }

  sample() {
    return this._internalSample() / MAX_INT32;
  }

  next(minValue, maxValue) {
    if (minValue > maxValue) {
      return null;
    }
    let range = maxValue - minValue;
    return Math.floor(this.sample() * range + minValue);
  }
}

function GETBEEVALUE(seed, numBees) {
  let beeValue;
  let random = new DotNetRandom(seed + 1314 + numBees);
  for (i = 0; i < 4; i++) {
    beeValue = random.next(50, 150);
  }
  return beeValue;
}
