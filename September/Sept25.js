//Write a generator function that returns a generator object which yields the fibonacci sequence.

var fibGenerator = function*(a = 0, b=1) {
    yield a;
    yield* fibGenerator(b, a+b);
};
