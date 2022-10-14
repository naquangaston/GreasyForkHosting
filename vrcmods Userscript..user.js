// ==UserScript==
// @name         vrcmods Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  d
// @author       You
// @match        /https?:\/{2}vrcmods\.net\/item\/\d/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vrcmods.com
// @grant        none
// ==/UserScript==
function tF(f,{callback,int}){
    !callback&&(callback=function(){});!int&&(int=100)
    console.log({f,callback,int})
    var a
    try{a=f();callback(a);return}catch(err){}
    var _=setInterval(()=>{try{a=f();callback(a);clearInterval(_)}catch(err){}},int||100)
    return _
}
var parts='https://vrcmods.com/download/direct/0'.split('/')
var p=location.href.split('/');
var setInstant=false
if(p[3]==parts[3]&&p[4]!=parts[4]){
    setInstant=true
}
tF(function(){
    var a=Array(...document.getElementsByTagName('a')).map(a=>[a.classList,Array(...a.classList),a]).filter(e=>{var cont=true;'btn btn-primary btn-lg btn-block'.split(' ').forEach(b=>{if(!e[1].includes(b))cont=false;});return cont;})[0][2]
    if(a){
        a.innerText='Instant Download'
    }
    else throw "s";
},
    {int:100,callback:function(){console.log('D')}})
