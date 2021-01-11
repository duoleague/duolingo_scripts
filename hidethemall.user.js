// ==UserScript==
// @name         Duolingo Hide Them All
// @namespace    http://tampermonkey.net/
// @homepageURL  https://github.com/duoleague/duolingo_scripts
// @supportURL   https://github.com/duoleague/duolingo_scripts/issues
// @updateURL    https://github.com/duoleague/duolingo_scripts/hidethemall.user.js
// @version      2021.1.13
// @description  Make league, advert and friends invisible on /learn page etc.
// @author       cansado_sin_sol
// @license      agpl3
// @include      htt*://*.duolingo.com/*
// ==/UserScript==

(function() {
    // Enable global CSS adding
    function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
    }

    // Add CSS
    addGlobalStyle(
        ' dummy /* div._3W86r learn page only, not shop */ '
        + ', div._3W86r div > div._1_p4S._3Gj5_ /* no duo legaue only */ '
        + ', #div._3W86r div._2O43A._3ZuGY /* no weekly progress */ '
        + ', div._3W86r div.XPBox /* no XPBreakdown */ '
        + ', div._3W86r div#languagesBox /* no languages info */ '
        + ', div._3W86r div._3ZuGY.sidebarCrownsInfoContainer /* no crowns info */ '
        + ', div._3W86r div._1UOwI._3bfsh /* no advert framed area */ '
        + ', div.iLgf- div._1UOwI._3bfsh /* no advert in shop */ '
        + ', div._3W86r div.Yth9H._3ZuGY /* no next achievement */ '
        + ', div._3W86r div._3Gj5_:nth-last-of-type(2):not(:first-of-type) /* no friends */ '
        + ', div._3W86r div._3Gj5_:last-of-type:not(:only-child):not(:nth-of-type(2)) /* no share */ '
        + ', div._3o_lc /* no duo plus in shop */ '
        + ', ._1RL1c /* no duo anim gif */ '
        + ', div.SQR8J.wm1bO /* no duo plus after learn */ '
        + ', div._2WZQR /* no duo plus warning on discuss */ '
        + ', div._2VdVL._2CLsU /* no adv on discuss */ '
        + ', div._3yqw1.np6Tv /* no PLUS eyes on learn */ '
        + ' {display: none !important;} '
    )
})();
#root > div > div._3W86r._1Xlh1 > div > div._1YfQ8 > div._3ZuGY.sidebarCrownsInfoContainer