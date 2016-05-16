//======================================================//
// Project: enum-js                                     //
// Creator: Stuart Howieson <stuart@stuarthowieson.com> //
// Updated: 16 May 2016                                 //
//======================================================//

function Enum(szArrayValues) {
    this._szArrayValues = [];

    this.addValue("NOT_SET");

    for (var i = 0; i < szArrayValues.length; i++) {
        this.addValue(szArrayValues[i]);
    }
}

Enum.prototype.stringify = function(eValue) {
    if (this.isValid(eValue)) {
        return this._szArrayValues[eValue];
    }

    return null;
}

Enum.prototype.isValid = function(eValue) {
    return ((typeof eValue === "number") && (eValue < this._szArrayValues.length));
}

Enum.prototype.addValue = function(szValue) {
    this[szValue] = this._szArrayValues.length;
    this._szArrayValues.push(szValue);
}

module.exports = Enum;
