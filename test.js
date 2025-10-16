import { HashMap } from "./index.js";

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')
test.set('sky', 'skyblue')
test.set('river', 'water')
test.set('notebook', 'write')


test.set('apple', 'dark red'); // overwrite existing
console.log(test.get('apple')); // "dark red"

console.log(test.length());
console.log(test.capacity);

console.log(test.get('river'));
console.log(test.has('jacket'));
console.log(test.remove('moon'));

console.log(test.keys());
console.log(test.values());
console.log(test.entries());

test.clear();
console.log(test.buckets);
