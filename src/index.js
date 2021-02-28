module.exports = function reverse (n) {
    let kString = n.toString();
    let mArray = [];
    mArray = kString.split('');
    let mArray2 = mArray.reverse();
    kString = mArray2.join('');
    return parseInt(kString);
}
