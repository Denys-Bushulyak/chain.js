describe("Testing Chain", function () {

    var arr = ['a', 1, 3, -2, null];

    describe("Shift of begin", function () {

        var chain = (new Chain(arr)).beginFrom(3);

        it("expecting shift to -2", function () {
            expect(-2).toBe(chain.current());
            expect(0).toBe(chain.getIndex());
        });
    });

    describe("Items equality", function () {

        var chain = new Chain(arr);

        it("contains items as expected", function () {
            expect(arr.length).toBe(chain.getItems().length);
        });

        it("item returned from object Chain equal the item from array with the same index", function () {
            var looped_count = 1;

            do {
                var item = chain.current();

                expect(arr[chain.getIndex()]).toBe(item);

                chain.next();

                looped_count++;

            } while (!chain.isBegin());
        });
    });

    describe("moving by chain", function () {

        var chain = null;

        beforeEach(function () {
            chain = new Chain(arr);
        });

        it("expecting return the first element of array", function () {
            expect(chain.first()).toBe(arr[0])
        });

        it("expecting return the last element of array", function () {
            expect(chain.last()).toBe(arr[arr.length - 1])
        });

        it("expecting no changing index on tacking first element of chain", function () {
            chain.last();
            expect(chain.getIndex()).toBe(0);
            chain.next();
            expect(chain.getIndex()).not.toBe(0);
            expect(1).toBe(chain.getIndex());
            chain.last();
            expect(chain.getIndex()).not.toBe(arr.length - 1);
        });

        it("expecting moving down index after prev()", function () {
            chain.next();

            expect(1).toBe(chain.getIndex());
            chain.next();

            expect(2).toBe(chain.getIndex());
            chain.prev();

            expect(1).toBe(chain.getIndex());
        });

        it("expecting to take last index of chain after prev after init", function () {
            var item = chain.prev();
            var lastIndexOfArray = arr.length - 1;

            expect(chain.last()).toBe(item)
            expect(chain.getIndex()).toBe(lastIndexOfArray);
        });

        it("expecting to take first index of chain after next after last() after init", function () {
            var lastIndexOfArray = arr.length - 1;

            for (var i = 1; i <= lastIndexOfArray; i++) {
                chain.next();
            }

            var item = chain.next();

            expect(chain.first()).toBe(item)
            expect(chain.getIndex()).toBe(0);
        });

        it("expecting going to set index", function () {
            chain.goTo(2);
            expect(chain.current()).toBe(3);
        })
    });

    describe("scope of chain", function () {
        var chain = new Chain(arr);

        it("expecting True from isBegin()", function () {
            expect(chain.isBegin()).toBe(true);
            expect(chain.isEnd()).not.toBe(true);
        });

        it("expecting False from isBegin() after next() ", function () {
            chain.next();
            expect(chain.isBegin()).toBe(false);
            expect(chain.isEnd()).not.toBe(true);
        });

        it("expecting True from isEnd after next() ", function () {

            var item = chain.goTo(chain.getItems().length - 1);

            expect(item).toBe(null);
            expect(chain.isBegin()).toBe(false);
            expect(chain.isEnd()).toBe(true);
        });
    })
});

describe("Testing hash table", function () {
    var arr = [
        {
            name: "Jack", age: 20, portfolio: [
            {year: 2000, skills: ['php', 'js', 'html']},
            {year: 2010, skills: ['java', 'c++', 'iOS']}
        ]
        },
        {
            name: "Sally", age: 24, portfolio: [
            {years: 2003, skills: ['iOS', 'Android', 'yaml']},
            {years: 2004, skills: ['WP', 'Windows', 'MacOS']},
            {years: 2005, skills: ['python', 'Bash', 'Linux']}
        ]
        }
    ];

    describe("Wraping all arrays", function () {

        it('expecting than first brand has 2 collections', function () {
            var chain = new Chain(arr);
            expect(chain.getItems().length).toBe(2);
            expect(chain.first().name).toBe(arr[0].name);
            expect(chain.last().name).toBe(arr[1].name);
            expect(chain.next().name).toBe(arr[1].name);
            expect(chain.reset().name).toBe(arr[0].name);
            expect(chain.first().portfolio.first().year).toBe(2000);
            expect(chain.first().portfolio.next().year).toBe(2010);
            expect(chain.first().portfolio.next().year).toBe(2000);
            expect(chain.first().portfolio.first().skills.goTo(1)).toBe('js');
            expect(chain.first().portfolio.first().skills.goTo(0)).toBe('php');
            expect(chain.next().name).toBe('Sally');
            expect(chain.next().name).toBe('Jack');
            expect(chain.next().age).toBe(24);
            expect(chain.current().portfolio.getItems().length).toBe(3);
        });


    });


});