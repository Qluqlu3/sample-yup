"use strict";
var deleteVowels = function (value) {
    var result = '';
    var target = value.split('');
    for (var i = 0; i < value.length; i++) {
        result += value[i].replace(/[aiueoAIUEO]/, '');
    }
    return result;
};
deleteVowels('experience');
