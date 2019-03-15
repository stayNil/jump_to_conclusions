window.onload = function onLoad() {
    clickStart();
};

// DOM ID selector shorthand
function getDoc(param) {
    return document.getElementById(param);
}

// onclick event handler for #start
function clickStart() {
    return getDoc('start').onclick = function start() {
        var img = document.createElement('img');
        img.src = 'assets/img/feet.png';
        var src = getDoc(getRandomId());
        return src.appendChild(img);
    }
}

// Return one random grid Id
function getRandomId() {
    var gridIds = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
    var randomId = gridIds[Math.floor(Math.random() * gridIds.length)]
    return randomId;
}

// Refresh the Page IIFE
(function clickRefresh() {
    return getDoc('refresh').onclick = function refresh() {
        return window.location.reload(true);
    }
})();
