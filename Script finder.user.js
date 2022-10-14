// ==UserScript==
// @name         Script finder
// @namespace    http://tampermonkey.net/
// @version      1
// @description  press ctrl+shift+q to find scripts made for ther current site
// @author       You
// @match        *://*/*
// @icon         https://cdn.discordapp.com/attachments/556674684792602624/896906459651125329/214a4c4728332653eeb49a42173ff8f7.png
// @grant        none
// ==/UserScript==
onkeydown = async function (ev) {
    var is = ev.key.match(/(q)|Q/g) && ev.ctrlKey && ev.shiftKey;
    if (is) {
        const _uFD = ["\u0047\u0045\u0054", '\u0065\u0039\u0032\u0036'];
        var mywin = this.open('', '', 'width:200');
        var url = `https://greasyfork.org/en/scripts.json?page=${page}&q=${document.domain}}`
        const request = new XMLHttpRequest();
        request.open("GET", url);
        request.send();
        var scripts=[];
        await new Promise((..._) => {
            request.onload = (e) => {
                scripts = JSON.parse(request.responseText);
                _[0]()
            }
        });
        var div=document.createElement('div');
        scripts.forEach(src=>{
            let def=src;
            var p=document.createElement('p');
            var user='Script by:'+def.users[0].name+'\n'
            var h=[document.createElement('h2'),document.createElement('h3')]
            var a=document.createElement('a')
            a.href=def.users[0].url;
            a.innerText=user;
            a.target="_blank"
            a.id="user"
            p.appendChild(a);
            var a=document.createElement('a')
            a.href=def.code_url;
            a.innerText=def.name
            a.id='name'
            a.target="_blank"
            p.appendChild(a);
            var a=document.createElement('small')
            //a.href=def.url;
            a.innerText='\nTotal installs:'+def.total_installs.toString()+'\nDescription:'+def.description+'\nLast update:'+def.code_updated_at+'\nVersion:'+def.version;
            a.id='desc'
            p.appendChild(a);
            div.appendChild(p);
            div.appendChild(document.createElement('br'))
        });
        var btn=document.createElement('button')
        btn.onclick=function(){
            div.innerHTML=''
            //loadnextpage cod here
        }
        var style=this.document.createElement('style')
        style.innerHTML="body{background-color: rgb(34, 32, 32);}"+
        "body{color: white;font-size: large;}"+
        "input{"+
        "    background-color: rgba(0,0,0,0);"+
        "    outline: none;"+
        "    border: none;"+
        "    color: red;"+
        "}"+
        ".empty{"+
        "    content: attr(value);"+
        "}"+
        "select,select:focus{"+
        "    background-color: rgba(0,0,0,0);"+
        "    outline: none;"+
        "    border: none;"+
        "    color: rgb(255, 136, 0);"+
        "}"+
        "button{"+
        "    background-color: rgba(0,0,0,0);"+
        "    outline: none;"+
        "    border: 2px solid rgb(208, 255, 0);"+
        "    color: rgb(94, 255, 0);"+
        "}"+
        "button:hover,input:focus{"+
        "    background-color: rgba(0,0,0,0);"+
        "    outline: none;"+
        "    border: 2px solid rgb(255, 0, 0);"+
        "    color: rgb(0, 132, 255);"+
        "}"+
        "img,picture{"+
        "    width: 50px;"+
        "    height: auto;"+
        "    border-radius: 25px;"+
        "    border: 2px solid #2a21ad;"+
        "}"+
        "::-webkit-scrollbar{"+
        "    display:none;"+
        "}"+
        "::-webkit-resizer{"+
        "    display: block;"+
        "}"+
        "#user{color:red}"+
        "#name{color:darkred}"+
        "#desc{color:green}"
        mywin.document.head.appendChild(style)
        mywin.document.body.appendChild(div);
        onunload=function(){mywin.close()}
    }
}