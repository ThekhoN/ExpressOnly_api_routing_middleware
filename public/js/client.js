var _getNumbers = document.getElementById('getNumbers');
var _getLetters = document.getElementById('getLetters');
var _getAll = document.getElementById('getAll');
var _numbersContainer = document.querySelector('.numbersContainer');
var _lettersContainer = document.querySelector('.lettersContainer');

_getNumbers.addEventListener('click', function() {
    //console.clear();
    XHR_req('/numbers', function(data) {
        //console.log('data: ', data);
        data.map(function(e) {
            var newLi = document.createElement('LI');
            newLi.setAttribute('class', 'dataItem');
            _numbersContainer.appendChild(newLi);
            newLi.innerHTML = e;
        });
    });
});

_getLetters.addEventListener('click', function() {
    //console.clear();
    XHR_req('/letters', function(data) {
        //console.log('data: ', data);
        data.map(function(e) {
            var newLi = document.createElement('li');
            newLi.setAttribute('class', 'dataItem');
            _lettersContainer.appendChild(newLi);
            newLi.innerHTML = e;
        });
    });
});

_getAll.addEventListener('click', function() {
    //console.clear();
    XHR_req('/numbers', function(data) {
        //console.log('data: ', data);
        data.map(function(e) {
            var newLi = document.createElement('LI');
            newLi.setAttribute('class', 'dataItem');
            _numbersContainer.appendChild(newLi);
            newLi.innerHTML = e;
        });
    });
    XHR_req('/letters', function(data) {
        //console.log('data: ', data);
        data.map(function(e) {
            var newLi = document.createElement('li');
            newLi.setAttribute('class', 'dataItem');
            _lettersContainer.appendChild(newLi);
            newLi.innerHTML = e;
        });
    });
});
