function Chain(items) {
    "use strict";

    var _index = 0;

    var _items = items.slice(0) || [];

    //Wraping all arrays at items into chain
    for (var index in _items) {

        for (var i in _items[index]) {
            if (Array.isArray(_items[index][i])) {
                _items[index][i] = Chain(_items[index][i]);
            }
        }
    }

     function log(message, arg_2, arg_3, arg_n) {
        if (Chain.debug) {
            console && console.debug(message, arguments);
        }
     }

    function _next() {
        _index++;

        _index = _index > _items.length - 1 ? 0 : _index;

        return _items[_index];
    }

    function _prev() {

        _index--;

        _index = _index < 0 ? _items.length - 1 : _index;

        return _items[_index];
    }

    function _first(item) {

        if (item) {
            _items[0] = item;
        }

        return _items[0] || undefined;
    }

    function _last(item) {
        if (item) {
            _items[_items.length - 1] = item;
        }

        return _items[_items.length - 1];
    }

    function _reset() {
        _index = 0;
        return _current();
    }

    function _isBegin() {
        return _index === 0;
    }

    function _isEnd() {
        return _index == (_items.length - 1);
    }

    function _current() {
        return _items[_index];
    }

    function _beginFrom(index) {
        var newArray = _items.slice(index);

        for (var i = index; i < _items.length; i++) {
            newArray.push(_items[i]);
        }
        return Chain(newArray);
    }

    function _getIndex() {
        return _index;
    }

    function _getItems() {
        return _items;
    }

    function _count() {
        var length = 0;
        for (var i in _items) {
            length++;
        }
        return length;
    }

    function _goTo(index) {
        index = parseInt(index);
        _index = index < 0 ? _items.length - 1 : index;
        return _items[_index];
    }

    function _goToEnd() {
        _index = _items.length - 1;
        return _current();
    }

    function _slice(start, length) {
        var out = [];
        length = length || Number.POSITIVE_INFINITY;
        for (var i in _items) {
            if (i >= start && i <= length) {
                out.push(_items[i]);
            }
        }
        return new Chain(out);
    }

    function _except(itemIndex) {
        var out = [];

        itemIndex = Array.isArray(itemIndex) ? itemIndex : [itemIndex];

        for (var i in itemIndex) {

            log("Excepting index: ", i);

            for (var j in _items) {

                log("Item index: ", j);

                if (j != itemIndex[i]) {

                    log("Compare: ", j != itemIndex[i]);

                    out.push(_items[j]);
                }
            }
        }

        log("Result", out);

        return new Chain(out);
    }

    var instance = {
        next     : _next,
        prev     : _prev,
        current  : _current,
        first    : _first,
        last     : _last,
        reset    : _reset,
        isEnd    : _isEnd,
        isBegin  : _isBegin,
        goTo     : _goTo,
        goToEnd  : _goToEnd,
        getItems : _getItems,
        beginFrom: _beginFrom,
        getIndex : _getIndex,
        slice    : _slice,
        count    : _count,
        except   : _except
    };

    return instance;
}