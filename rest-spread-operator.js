// ES5 
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

// ES2015
const filterOutOdds = (...arr) => arr.filter(num => num % 2 === 0)

// ================================================================

// ES5 
findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1

// ES2015
const findMin = (...arr) => Math.min(arr)

// ================================================================

//ES5
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

//ES2015
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

// ================================================================

//ES5
doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]

//ES2015
const doubleAndReturnArgs = (arr, ...args) => ([...arr, ...args.map((val) => val * 2)])

// ================================================================

//ES2015
/** remove a random element in the items array and return a new array without that item. */

function removeRandom(items) {
    const rand = Math.floor(Math.random() * items.length);
    return [...items.slice(0, rand), ...items.slice(rand + 1)];
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj, [key]: val};
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2}
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    return {...obj, [key]: val}
}
