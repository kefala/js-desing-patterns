define(['cats'], function(cats) {
    return {
        init: function() {
            console.log("Cat", cats);
            cats.forEach(function(cat) {
                cat.nodeCat = (cat.nodeCat) ? cat.nodeCat : document.getElementById(cat.nodeCatId);
                cat.node = (cat.node) ? cat.node : document.getElementById(cat.nodeId);
                cat.node.innerText = cat.counterClicks.toString();
                
                cat.nodeCat.innerText += " " + cat.name;
                cat.nodeCat.addEventListener('click', function() {
                    cat.counterClicks++;
                    cat.node.innerText = cat.counterClicks.toString();
                }, false);
            });
        }
    }
});
