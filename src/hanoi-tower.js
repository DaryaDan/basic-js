module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    // throw 'Not implemented';
    // remove line with error and write your code here
    a = {};
    a.turns = Math.pow(2, disksNumber) - 1;
    a.seconds= a.turns/(turnsSpeed/3600);
    return a;
}
