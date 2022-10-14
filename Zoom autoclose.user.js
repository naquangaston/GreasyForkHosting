// ==UserScript==
// @name         Zoom autoclose
// @namespace    http://tampermonkey.net/
// @version      0.32
// @description  Autoclose the zoom page when zoom in launched
// @author       You
// @match        *://zoom.us/*
// @match        *://*/*
// @match        https://zoom.us/
// @grant        none
// ==/UserScript==
if(document.domain.includes('zoom'))window.onhashchange=function(e){window.close();}
locaction.hash.includes('suc')&&(window.close())