# HashMap

A hash map is a data-structure that stores data in key-value pairs. It uses a hash function to map keys to an index in an array.
A hash function takes a key (usually a string) and convert it into an integer called hash code, which is then used to represent index in an array.

Hash map can be imagined as a combination of array and linked lists, where array is a normal array with indexes (buckets) and each bucket contain key-value pair in arrays. To put it more simply, each bucket (index) contain a linked list. In this list key-value pair are stored in arrays. [ [key1, value1], [key2, value2], [ [key3, value3], [key4, value4] ] ]. Here outermost array represent hash map array which contain three buckets. First and second buckets contain only one key-value pair, and third bucket contain two key-value pairs. So basically it's arrays within array.

Collision: When two different keys produce the same index, a collision occurs. In above example key3 and key4 has same index, that's why they are stored in same bucket. Our goal should always be to prevent collision. Because if too many keys collide in the same bucket, you have to loop through the bucket to find a key. This lower the efficiency. In worst case if all keys stored in same bucket, time complexity become O(n) instead of O(1).

Capacity and Load Factor: Capacity is the number of buckets hash map array contains (key-value arrays within array don't included). Load factor is the measure of how full the hash map is allowed to get before its capacity is increased (resized). It is defined as the ratio of the number of elements (entries) in the hash map to the number of buckets (capacity) it currently has.

When load factor is reached, we double the capacity of hash map array and rehash all keys into bigger array.
