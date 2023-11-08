new Set([1,1,2,2,3,4])
// returns: [1,2,3,4]

[...new Set("referee")].join("")
// returns: 'r' 'e' 'f'

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// returns: 
  // 0: {Array(3) => true}
  // 0: {Array(3) => false}

//hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length

//vowelCount
const vowelCount = (str) => {
    const vowels = 'aeiou';
    const arr = str.toLowerCase().split('').filter(char => vowels.includes(char))
    const map = new Map()
    for (let char of arr) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }
    return map;
}