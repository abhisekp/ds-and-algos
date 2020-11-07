"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dDS = exports.dAlgo = void 0;
const tslib_1 = require("tslib");
const debug_1 = tslib_1.__importDefault(require("debug"));
Array.prototype.toString = function () {
    return `[${this.join(', ')}]`;
};
const d = debug_1.default("lib");
exports.dAlgo = d.extend("algo");
exports.dDS = d.extend("ds");
//# sourceMappingURL=logger.js.map