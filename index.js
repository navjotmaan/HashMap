export class HashMap {
    constructor(loadFactor = 0.75, capacity = 16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.capacity;
        }

        return hashCode;
    }

    _resize() {
        const oldBuckets = this.buckets;
        this.capacity *= 2;
        this.buckets = new Array(this.capacity);
        this.size = 0;

        for (let bucket of oldBuckets) {
            if (bucket) {
                for (let [k, v] of bucket) {
                    this.set(k, v); // rehash all items
                }
            }
        }
    } 

    set(key, value) {
        const index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        
        if (!this.buckets[index]) this.buckets[index] = [];

        for (let pair of this.buckets[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        this.buckets[index].push([key, value]);
        this.size++;

        if (this.size / this.capacity > this.loadFactor) {
            this._resize();
        }
    }

    get(key) {
        const index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if (!this.buckets[index]) return null;

        for (let pair of this.buckets[index]) {
            if (pair[0] === key) return pair[1];
        }
        return null;
    }

    has(key) {
        const index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if (!this.buckets[index]) return false;

        for (let pair of this.buckets[index]) {
            if (pair[0] === key) return true;
        }
        return false;
    }

    remove(key) {
        const index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];
        if (!bucket) return false;

        const originalLength = bucket.length;

        this.buckets[index] = bucket.filter(([k, v]) => k !== key);
        
        if (this.buckets[index].length < originalLength) {
            this.size--;
            return true;
        }
        return false;
    }
    
    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }

    keys() {
        let allKeys = [];
        this.buckets.forEach(bucket => {
            if (!bucket) return;
            bucket.forEach(([k, v]) => allKeys.push(k));
        });
        return allKeys;
    }

    values() {
        let allValues = [];
        this.buckets.forEach(bucket => {
            if (!bucket) return;
            bucket.forEach(([k, v]) => allValues.push(v));
        });
        return allValues;
    }

    entries() {
        let allPairs = [];
        this.buckets.forEach(bucket => {
            if (!bucket) return;
            bucket.forEach(([k, v]) => allPairs.push([k, v]));
        });
        return allPairs;
    }
}

