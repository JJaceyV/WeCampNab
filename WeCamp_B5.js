function twoSum(nums, target) {
    let numIndices = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (numIndices.hasOwnProperty(complement)) {
            return [numIndices[complement], i];
        }

        numIndices[nums[i]] = i;
    }

    return [];
}

function isValid(s) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (map[char]) {
            stack.push(char);
        } else {
            let topElement = stack.pop();
            if (map[topElement] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValid("()[]{}")); 
console.log(isValid("(]"));    
console.log(twoSum([2, 7, 11, 15], 9)); 