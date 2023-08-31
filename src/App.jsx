// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var verticalOrder = function(root) {
    if (!root) return [];
    
    const map = new Map();
    const queue = [[root, 0]];
    let min = 0, max = 0;
    
    while (queue.length) {
        const [node, col] = queue.shift();
        if (!map.has(col)) map.set(col, []);
        map.get(col).push(node.val);
        if (node.left) queue.push([node.left, col - 1]);
        if (node.right) queue.push([node.right, col + 1]);
        min = Math.min(min, col);
        max = Math.max(max, col);
    }
    
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(...map.get(i));
    }
    
    return result;
};
// Driver code
const root1 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: {
                val: 8,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: {
                val: 9,
                left: null,
                right: null
            }
        }
    }
};
const root2 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: {
            val: 6,
            left: null,
            right: null
        }
    }
};

function App() {
  // const [count, setCount] = useState(0)

console.log(verticalOrder(root1)); // Output: [4, 2, 1, 5, 6, 3, 8, 7, 9]
console.log(verticalOrder(root2)); // Output: [4, 2, 1, 5, 3, 6]
}

export default App
