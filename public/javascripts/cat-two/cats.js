define(function() {
    function Cat(name, nodeCatId, nodeId) {
        this.name = name;
        this.counterClicks = 0;
        this.nodeCatId = nodeCatId;
        this.nodeId = nodeId;
        this.nodeCat = null;
        this.node = null;
    }
    return [
        new Cat("bob", "title", "counter"),
        new Cat("jerry", "title-1", "counter-1"),
        new Cat("bob", "title-2", "counter-2"),
        new Cat("bob", "title-3", "counter-3"),
        new Cat("carl", "subTitle", "counter-two")
    ];
});
