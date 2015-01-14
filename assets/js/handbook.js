// ie8 polyfill for addEventListener
function addEventListener(el, eventName, handler) {
    if(el.addEventListener) {
        el.addEventListener(eventName, handler);
    } else {
        el.attachEvent('on' + eventName, function() {
            handler.call(el);
        });
    }
}

function addOnLoad(func) {
    var oldOnLoad = window.onload;

    window.onload = function() {
        func();
        if (oldOnLoad) {
            oldOnLoad();
        }
    }
}

function toggleMenu() {
    toggleClass(document.getElementById('site-nav'), 'active');
}

function toggleClass(el, className) {
    if (el.classList) {
        el.classList.toggle(className);
    } else {
        var classes = el.className.split(' ');
        var existingIndex = -1;
        for (var i = classes.length; i--;) {
            if (classes[i] === className)
                existingIndex = i;
        }

        if (existingIndex >= 0)
            classes.splice(existingIndex, 1);
        else
            classes.push(className);

        el.className = classes.join(' ');
    }
}

addOnLoad(function(){
    // hamburger menu
    addEventListener(document.getElementById('site-nav-toggler'), 'click', toggleMenu);
});


