function Chain(items) {

    var index = 0;

    var _items = items.slice(0) || [];

    function _next() {
        index++;

        index = index > _items.length - 1 ? 0 : index;

        return _items[index];
    }

    function _prev() {

        index--;

        index = index < 0 ? _items.length - 1 : index;

        return _items[index];
    }

    function _push(item) {
        _items.push(item);
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
        index = 0;
        return _current();
    }

    function _isFirst() {
        return index === 0;
    }

    function _isEnd() {
        return index == (_items.length - 1);
    }

    function _current() {
        return _items[index] || undefined;
    }

    function _beginFrom(index) {
        var newArray = _items.slice(index);

        for (var i = index; i < _items.length; i++) {
            newArray.push(_items[i]);
        }
        return Chain(newArray);
    }

    function _getIndex() {
        return index;
    }

    function _getItems() {
        return _items;
    }

    return {
        next: _next,
        prev: _prev,
        current: _current,
        push: _push,
        first: _first,
        last: _last,
        reset: _reset,
        isEnd: _isEnd,
        isFirst: _isFirst,
        getItems: _getItems,
        beginFrom: _beginFrom,
        getIndex: _getIndex
    };
}