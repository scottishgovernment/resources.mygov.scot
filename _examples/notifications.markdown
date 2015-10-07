---
layout: example
permalink: examples/notifications/
parent: examples/
body-class: accordion
---



<div id="browser-notice" class="notification strong">
    <div class="container">
        <p>You appear to be using an unsupported browser, and it may not be able to display this site properly.</p>
        <p>You may wish to <a href="#">upgrade your browser</a>.</p>

        <button title="Close this notification" id="close-unsupported-browser-notification" class="close-notification"><span>Close</span></button>
    </div>
</div>
<div id="cookie-notice" class="notification" aria-describedby="cookieinfo">
    <div class="container">
        <p tabindex="0" id="cookieinfo" class="cookieinfo">This site uses cookies to make the site simpler. <a href="#">Find out more about cookies</a></p>
        <button title="Close this notification" id="close-cookie-notification" class="close-notification">Close</button>
    </div>
</div>