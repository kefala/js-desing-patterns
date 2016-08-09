define(function() {
    return {
        init: function() {
            console.log("Cat");
            var elem = document.querySelector('#title'),
                number = 0;
                counter = document.querySelector('#counter');

            counter.innerText = number.toString();
            elem.addEventListener('click', function() {
                number++;
                counter.innerText = number.toString();
            }, false);

        }
    }
});
