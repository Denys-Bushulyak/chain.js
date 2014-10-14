describe("Testing suite", function () {

    var arr = ['a', 1, 3, -2, null];

    describe("Testing items", function () {

        var chain = Chain(arr);

        it("contains items as expected", function () {
            expect(arr.length).toBe(chain.items.length);
        });

        it("item returned from object Chain equal the item from array with the same index", function () {
            var looped_count = 1;

            do {
                var item = chain.current();

                expect(item).toBe(arr[chain.getIndex()]);

                console.log(item);

                chain.next();

                looped_count++;

            } while (!chain.isEnd());

            expect(looped_count).toBe(arr.length);
        });
    });

    describe("Testing moving by chain", function () {

        var chain = null;
        beforeEach(function () {
            chain = Chain(arr);
        });

        it("expecting return the first element of array", function () {
            expect(arr[0]).toBe(chain.first());
        });

        it("expecting return the last element of array", function () {
            expect(arr[arr.length - 1]).toBe(chain.last());
        });

        it("expecting no changing index on tacking first element of chain", function () {

            chain.last();
            expect(0).toBe(chain.getIndex());

            chain.next();
            expect(chain.getIndex()).not.toBe(0);
            expect(chain.getIndex()).toBe(1);

            chain.last();
            expect(chain.getIndex()).not.toBe(arr.length - 1);
        });

        it("expecting moving down index after prev()", function () {
            chain.next();

            expect(chain.getIndex()).toBe(1);

            chain.next();

            expect(chain.getIndex()).toBe(2);

            chain.prev();

            expect(chain.getIndex()).toBe(1);

        });

        it("expecting to take last index of chain after prev after init", function () {
            var item = chain.prev();
            var lastIndexOfArray = arr.length - 1;

            expect(item).toBe(chain.last());
            expect(chain.getIndex()).toBe(lastIndexOfArray);
        });

        it("expecting to take first index of chain after next after last() after init", function () {
            var lastIndexOfArray = arr.length - 1;
            for (var i = 1; i <= lastIndexOfArray; i++) {
                chain.next();
            }
            var item = chain.next();
            expect(item).toBe(chain.first());
            expect(chain.getIndex()).toBe(0);
        });
    });

    describe("Testing CRUD", function () {
        var chain = new Chain(arr);

        it("adding one", function () {
            expect(chain.items.length).toBe(arr.length);

            chain.push('Test');

            expect(chain.items.length).not.toBe(arr.length);
        });
    });
});