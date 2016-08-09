define(function() {
    function Cat(name, nodeCatId, nodeId) {
        this.name = name;
        this.counterClicks = 0;
        this.nodeCatId = nodeCatId;
        this.nodeId = nodeId;
        this.nodeCat = null;
        this.node = null;
    }
    return [new Cat("bob", "title", "counter"), new Cat("carl", "subTitle", "counter-two")]
});
