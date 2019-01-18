'use strict';

const template = (function ($) {

    let dom = {}, //Елементы для рендеринга (#id: <html>{what}</html>)
        methods = {}, //Мотоды подготовки блока при рендере (#id: function(data){return data})
        params = {}, //Контент для замены (#id: [{what: 'to this'}])
        getAjax = {}; //Что нужно получить ajax (#id: [{url: '/', method: 'post/get'}])

function _init(){
    console.log('template is init');
    _updateData();
}

function _updateData() {
    console.log('updating');
    dom = template.dom || {};
    methods = template.methods || {};
    params = template.params || {};
    getAjax = template.getAjax || {};
}

function _contentToData(string, j){
    let result = [];
    for (let i in params[j]) {
        let str = string;
        for (let v in params[j][i]) {
    str = str.replace('{'+v+'}', params[j][i][v]);
    }
    result.push(str);
    }
    return result;
    }
    
    function prepareElement(el){
    return methods[el](dom[el]);
    }
    
    function _getByAjax(){
    for(let get in getAjax){
    let settings = {
    url: getAjax[get][url],
    method: getAjax[get][method],
    success: function(data){params[get] = data;},
    error: function(data){console.log(data)}
    }
    $.ajax(settings);
    }
    }
    
    function _render(){
    for(let el in dom){
    $('#'+el).html(prepareElement(el));
    }
    }

        // Экспортируем наружу
    return {
        initTemplate: _init,
        renderTemplate: _render,
        getByAjax: _getByAjax,
        contentToData: _contentToData,
        dom: dom,
        methods: methods,
        params: params,
        getAjax: getAjax
    }
})(jQuery);