function Chain(items) {

    var index = 0;

    var _items = items || [];

    function _next() {
        index = index > _items.length - 1 ? 0 : index;
        var item = _items[index];
        index++;
        return  item;
    }

    function _pref() {

        index = index < 0 ? _items.length - 1 : index;
        var item = _items[index];
        index--;
        return  item;
    }

    function _push(item) {
        _items.push(item);
    }

    function _first() {
        return _items[0] || undefined;
    }

    function _last() {
        return _items[_items.length - 1] || undefined;
    }

    function _reset() {
        index = 0;
    }

    function _isEnd() {
        return index === (_items.length);
    }

    function _current() {
        return _items[index] || undefined;
    }

    return {
        next    : _next,
        prev    : _pref,
        current : _current,
        push    : _push,
        first   : _first,
        last    : _last,
        reset   : _reset,
        isEnd   : _isEnd,
        items   : _items,
        getIndex: function () { return index; }
    };
}