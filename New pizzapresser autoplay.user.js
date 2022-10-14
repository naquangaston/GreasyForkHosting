// ==UserScript==
// @name         New pizzapresser autoplay
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  This mod and game is basicly the same at cookie clicker mod. auto clicks pizza auto upgrade and auto buying.
// @author       You
// @match        http://pizzapresser.com/
// @grant        none
// ==/UserScript==

pizzapic=pizzapic;
buy=function(e,num){e.click()}
var a;
clearInterval(a);
tobuy=[mybox18,mybox19,mybox20,mybox21,mybox22,mybox23,mybox24,mybox25,mybox26,mybox27,mybox28];
a=setInterval(function(){
    item=[
        {it:mybox15,max:2,count:spaceElevator},
        {it:mybox16,max:2,count:moonBase},
        {
            it:mybox5,max:20,count:astronaut,f:buyThousandAstronaut
        }
        ,{
            it:smallbox1000,count:slave,max:100
        }
        ,{
            it:mybox6,count:cart,max:100
        }
        ,{
            it:mybox7,count:van,max:10
        }
        ,{
            it:document.getElementById('2smallbox1000'),count:manager,max:100
        }
        ,{
            it:mybox8,count:parlour,max:10
        },{
            it:mybox14,count:superDrill,max:2
        },
        ,{
        it:mybox44,count:autoClicker,max:1
        }
        ,{
        it:mybox41,count:convenienceBought,max:3
        }
        ,{
        it:document.getElementById('1smallbox1000'),count:cleaner,max:100
        }
        ,{
        it:mybox9,count:restaurant,max:10
        }
        ,{
        it:mybox10,count:palace,max:10
        }
        ,{
        it:mybox11,count:factory,max:10
        }
        ,{
        it:document.getElementById('3smallbox1000'),count:operator,max:100
        }
        ,{
        it:mybox12,count:converter,max:20
        }
        ,{
        it:mybox17,count:scrapMetal,max:20,f:buyThousandScrapMetal
        }
        ,{
        it:mybox42,count:convenience2Bought,max:2
        }
        ,{
        it:mybox33,count:clickUpgradeBought,max:2
        }
        ,{
        it:mybox37,count:upgradePepperoniBought,max:10
        }
        ,{
        it:document.getElementById('4smallbox1000'),count:scientist,max:10
        }
        ,{
        it:mybox13,count:weatherMachine,max:3
        }
        ,{
        it:mybox34,count:upgradeThirdBought,max:3
        }
        ,{
        it:mybox38,count:upgradeChickenBought,max:1
        }

    ]
},0);
setInterval(function(){tobuy.forEach(e=>{buy(e)});},0);
setInterval(function(){item.forEach(e=>{var m=e.count<e.max;if(m){e.f&&(e.f());!e.f&&(buy(e.it));e.f&&(e.f());!e.f&&(buy(e.it))}});},0);
setInterval(function(){sellClick(1)},0);
setInterval(function(){buy(pizzapic);},0);
eval(localStorage.getItem('i'))?true:(function(){localStorage.setItem('i','true');money=10e10})();