let Queue = (function () {
	const items = new WeakMap();
	class Queue {
		constructor() {
			items.set(this, []);
		};
		isEmpty() {
			let q = items.get(this);
			return q.length == 0;
		};
		enqueue(element) {
			let q = items.get(this);
			q.push(element);
		};
		dequeue() {
			let q = items.get(this);
			let r = q.shift();
			return r;
		};
		front() {
			let q = items.get(this);
			let r = q[0];
		};
		print() {
			let q = items.get(this);
			let r = q.toString();
			return r;
		};

	}
	return Queue;
})();