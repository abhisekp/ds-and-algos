import debug from "debug";

Array.prototype.toString = function () {
  return `[${this.join(', ')}]`;
}

const d = debug("lib");

export const dAlgo = d.extend("algo");

export const dDS = d.extend("ds");
