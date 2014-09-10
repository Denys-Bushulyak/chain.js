function Chain(items) {

    var index = 0;

    var _items = items || [];

    function _next() {
        index++;

        index = index > _items.length - 1 ? 0 : index;

        return  _items[index];
    }

    function _prev() {

        index--;

        index = index < 0 ? _items.length - 1 : index;

        return  _items[index];
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

        return _items[_items.length - 1] || undefined;
    }

    function _reset() {
        index = 0;
        return  _current();
    }

    function _isFirst() {
        return index === 0;
    }

    function _isEnd() {
        return index === (_items.length);
    }

    function _current() {
        return _items[index] || undefined;
    }

    function _beginFrom(index) {
        return new Chain(_.union(_items.slice(index), _items.slice(0, index)));
    }

    return {
        next     : _next,
        prev     : _prev,
        current  : _current,
        push     : _push,
        first    : _first,
        last     : _last,
        reset    : _reset,
        isEnd    : _isEnd,
        isFirst  : _isFirst,
        items    : _items,
        beginFrom: _beginFrom,
        getIndex : function () { return index; }
    };
}