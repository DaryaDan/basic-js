module.exports = class DepthCalculator {
    calculateDepth(arr) {
        // throw 'Not implemented';
        // // remove line with error and write your code here
        var a = 1;
        for (let i = 0; i<arr.length; i++)
        {
        if (Array.isArray(arr[i]))
        {
        arr = arr.flat(1);
        return a = a + this.calculateDepth(arr);
        }
        }
        return a;
    }
};
