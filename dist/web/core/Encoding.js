/* globals $ */

$.alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

$.encoding = {};

$.encode = function(type, what){
    var encoding = $.encoding[type];
    if (typeof encoding == 'object') 
        return encoding.encode(what);
    else {
        throw Error('Encoding type "' + type + '" is not supported.');   
    }
};
$.decode = function(type, what){
    var encoding = $.encoding[type];
    if (typeof encoding == 'object') 
        return encoding.decode(what);
    else {
        throw Error('Encoding type "' + type + '" is not supported.');   
    }
};

$.encoding.A100 = {

};