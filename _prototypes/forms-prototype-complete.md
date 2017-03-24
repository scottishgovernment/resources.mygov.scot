---
layout: forms-prototype
title: Forms prototype complete
category: standard
imperative: Guideline
type: design
summary:
index: 1
frontpage: no
---

<body class="article" data-uuid="MYGOV-1493">


    <!-- sticky notices -->

    <span id="page-top"></span>

    <!-- other notices -->
    <div id="browser-notice" class="notification hidden strong">
        <div class="wrapper">
            <p>You appear to be using an unsupported browser, and it may not be able to display this site properly.</p>
            <p>You may wish to <a href="https://mygov.scot/browsers/">upgrade your browser</a>.</p>

            <button title="Close this notification" id="close-unsupported-browser-notification" class="button button--close close-notification"><span>Close</span></button>
        </div>
    </div>
    <div id="cookie-notice" class="notification hidden" aria-describedby="cookieinfo">
        <div class="wrapper">
            <p tabindex="0" id="cookieinfo" class="cookieinfo">This site uses cookies to make the site simpler. <a href="/cookies/">Find out more about cookies</a></p>
            <button title="Close this notification" id="close-cookie-notification" class="button button--close close-notification">Close</button>
        </div>
    </div>
    <div id="decommissioned-site-notice" class="notification strong hidden" aria-describedby="decommissionedinfo">
        <div class="wrapper">
            <p tabindex="0" class="decommissionedinfo" id="decommissionedinfo">
                You've been redirected from a site that no longer exists
                (<span id="decomissioned-site-host"></span>).

                Find what you're looking for on mygov.scot.
            </p>
            <button title="Close this notification" id="close-decommissioned-site-notification" class="button button--close close-notification"><span>Close</span></button>
        </div>
    </div>
 <div class="div-spacer"></div>

<div class="wrapper header-bar">
    <div class="header-with-search-container clearfix">
        <div class="site-brand">
            <div class="site-brand__link">
                <a id="mygov-logo" class="site-brand__logo" data-gtm="logo-mygov" href="/">
                    <svg viewBox="0 0 439 84.24" aria-label="mygov.scot logo">
                        <title>mygov.scot logo</title>
                        <defs>
                            <style>
                                .blue-base {
                                    fill: #0065bd;
                                }

                                .blue-darker {
                                    fill: #002d54;
                                }
                            </style>
                        </defs>
                        <switch>
                            <g>
                                <path class="blue-base" d="M281.14,59.75a4.8,4.8,0,0,1-3.37-5V52.11c0-2.7,2.16-4.94,5.7-4.11a48.53,48.53,0,0,0,11.66,1.78c4.75,0,6.9-.93,6.9-3.27s-1.58-3-4.66-3.26c-14.72-1.3-18.82-5.22-18.82-14.91,0-9.5,6.15-15.84,20.5-15.84,5.41,0,10.93.75,13.17,1.49a5,5,0,0,1,3.56,5v2.61c0,2.7-2.35,4.94-5.89,4.1a40.25,40.25,0,0,0-10.17-1.3c-4.19,0-6.57.93-6.57,3.26s1.55,3,4.63,3.26c14.73,1.3,18.81,5.22,18.81,14.91,0,9-5.33,15.85-21.08,15.85A54.59,54.59,0,0,1,281.14,59.75Z"
                                    transform="translate(-0.76 -1.88)" />
                                <path class="blue-base" d="M345.29,48.84a23.11,23.11,0,0,0,5.51-.65c3.73-.84,6,1.4,6,4.1v3.07c0,2.7-1.13,4.29-3.46,5a31.47,31.47,0,0,1-9.55,1.3c-17.14,0-23.51-8.76-23.51-24.61s6.33-24.6,23.47-24.6a31.76,31.76,0,0,1,9.6,1.3c2.33.75,3.45,2.33,3.45,5v3.07c0,2.7-2.24,4.94-6,4.1a22.64,22.64,0,0,0-5.46-.65c-6.15,0-10.37,2.89-10.37,11.74S339.14,48.84,345.29,48.84Z"
                                    transform="translate(-0.76 -1.88)" />
                                <path class="blue-base" d="M359.15,37.1c0-14.54,4.66-24.6,21.9-24.6s21.9,10.06,21.9,24.6S398.29,61.71,381,61.71,359.15,51.64,359.15,37.1Zm14.91,0c0,9.32,1.86,12.68,7,12.68s7-3.35,7-12.68-1.86-12.67-7-12.67S374.05,27.78,374.05,37.1Z" transform="translate(-0.76 -1.88)"
                                />
                                <path class="blue-base" d="M412.76,8.12c0-2.7,1.16-3.73,4.52-4.66l4.87-1.31c3.91-1,5.61.93,5.61,3.82V13.9H435c2.89,0,4.73,1.31,4.73,4.19v3.82c0,2.89-1.84,4-4.73,4h-7.27V44c0,3.63,1.39,5.9,6.15,5.9h.93a3.6,3.6,0,0,1,3.92,3.7v3.07A4.56,4.56,0,0,1,435,61.33a22.52,22.52,0,0,1-4.21.38c-13.23,0-18-5.5-18-16.5V25.9h-3.55c-2.89,0-4.45-1.1-4.45-4V19.77c0-2.42,1.06-3.64,3.77-4.38l4.23-1.12Z"
                                    transform="translate(-0.76 -1.88)" />
                                <path class="blue-base" d="M68.76,56.62c0,3-1.28,4.28-4.14,4.28H58.06c-2.85,0-4.29-1.33-4.29-4.28V28.27c0-2.47-1.17-3.81-4.12-3.81a10.76,10.76,0,0,0-6.88,2.47V56.62c0,3-1.74,4.28-4.59,4.28H31.61c-2.85,0-4.84-1.33-4.84-4.28V28.27c0-2.47-1.17-3.81-4.12-3.81a10.75,10.75,0,0,0-6.88,2.47V56.62c0,3-1.28,4.28-4.24,4.28H5.06C2.11,60.9.76,59.57.76,56.62V17.8c0-2.95,1.35-3.9,4.29-3.9H7.44c2.09,0,2.85.62,4.28,3.19,3.43-3,10-4.88,14.94-4.88,6.38,0,9.51,1.65,11,3.84,3.43-2.57,9.59-3.93,15.3-3.93,12.37,0,15.77,7.39,15.77,16Z"
                                    transform="translate(-0.76 -1.88)" />
                                <path class="blue-base" d="M94.7,80.47c-1.14,2.85-2.76,4.43-6.09,4.43H83.09c-3.52,0-5.33-3.19-3.71-6.71L88.7,58,72.53,20.34c-1.43-3.42.57-6.44,4.09-6.44h5.14c3.33,0,4.95,1.38,5.9,4.14l8.75,24.71,7.8-24.66c.86-2.85,2.57-4.2,5.9-4.2h5.14c3.52,0,5.52,2.93,4.09,6.45Z"
                                    transform="translate(-0.76 -1.88)" />
                                <path class="blue-darker" d="M164.16,25.13a30.39,30.39,0,0,1,.48,5.23c0,12-6.66,18.27-21.41,18.27a40.16,40.16,0,0,1-4.85-.19,2.87,2.87,0,0,0-.67,1.81c0,1,.57,1.52,1.9,1.71L158,54.34c10,1.33,12.85,6.28,12.85,14,0,12.85-14.75,17.79-29.31,17.79-12,0-22.55-3.71-22.55-12.94,0-6.47,5-10.47,9.9-11.51A8.32,8.32,0,0,1,124.48,54c0-2.66,2-6,5-8.18-5.24-3-7.71-8.09-7.71-15.42,0-12,6.66-18,21.41-18,4.37,0,7.71-.43,11.13,1.57H166c2.85,0,4.8,1,4.8,3.9v2c0,2.76-1.54,4-4.3,4.76Zm-27.5,39.11A5.53,5.53,0,0,0,133,69.09c0,3.43,2.57,5.61,10.09,5.61,7.23,0,12.66-2.47,12.66-5.61,0-1.52-.76-2.47-2.66-2.76Zm6.56-26.84c4.66,0,6.94-2.38,6.94-7s-2.28-7-6.94-7-6.95,2.38-6.95,7S138.56,37.4,143.23,37.4Z"
                                    transform="translate(-0.76 -1.88)" />
                                <path class="blue-darker" d="M171.85,37.21c0-14.84,4.76-25.12,22.36-25.12s22.36,10.28,22.36,25.12-4.76,25.12-22.36,25.12S171.85,52.05,171.85,37.21Zm15.22,0c0,9.52,1.9,12.94,7.14,12.94s7.14-3.42,7.14-12.94-1.9-12.94-7.14-12.94S187.08,27.7,187.08,37.21Z"
                                    transform="translate(-0.76 -1.88)" />
                                <path class="blue-darker" d="M240.17,61.9c-4,0-5.42-1.5-6.85-5.11L218.48,20.55c-1.62-4,.48-6.65,4-6.65h4.66c3.33,0,4.85,1.38,5.8,4.14l8.85,25,8.85-24.94c1-2.76,2.47-4.2,5.8-4.2h4.66c3.52,0,5.62,2.62,4,6.61L250.26,56.91c-1.43,3.62-2.86,5-6.85,5Z" transform="translate(-0.76 -1.88)"
                                />
                                <circle class="blue-base" cx="264.81" cy="53.41" r="6.19" />
                            </g>
                            <foreignObject>
                                <!-- <img src="/assets/images/mygov-logos/mygovscot_195px.png" alt="mygov.scot logo"> -->
                          </foreignObject>
                        </switch>
                    </svg>
                </a>
            </div>
        </div>

        <div class="search-box">
            <form class="search-box__form" method="GET" action="/search/">
                <label class="search-box__label hidden" for="search-box">Search</label>
                <input name="q" required id="search-box" class="search-box__input" type="text" placeholder="Search mygov.scot" />
                <input type="hidden" value="sitesearch" name="cat"/>

                <button type="submit" title="search" class="search-box__button button button--primary">
                    <img alt="" class="search-box__icon" src="{{ "/assets/images/icons/search-white_@2x.png" | prepend: site.github_sg_site_url }}" />
                    <span class="hidden">Search mygov.scot</span>
                </button>
            </form>
        </div>
    </div>
</div>

<div class="wrapper">
    <div class="header-separator header-separator--eight-twelfths"> </div>
</div>

<!-- Start article.hbs -->

<div class="wrapper">
    <div class="grid"><!--
        --><div class="grid__item large--eight-twelfths">
            <article>

                <header class="article-header">
                    <h1 class="article-header__title">Registration</h1>
                </header>

                <div class="body-content">
                	<div class="form-message form-message--successful">
		                <h2>Success...</h2>
		                <p>Your application has now been submitted. An email summary has been sent to the address provided.</p>
                    </div>

                    <p>Your test facilitator will now ask you to <a href="/prototypes/forms-prototype/">complete another form</a>. If you have any
					questions then now is a good time to ask. If you’d like to know how we use your
					information then you can read our <a href="https://www.mygov.scot/privacy/">Privacy policy</a>.</p>

					<h3><a href="/prototypes/forms-prototype/">Go to next form</a></h3>
                </div>

            </article>
        </div><!--

        --><div class="grid__item large--four-twelfths" id="sidebar">
            <div class="enlarged-gutter">

                <nav class="related-items">
<!--                 	<h2 class="related-items__title">Related items</h2>
                	<ul class="related-items__list no-margin">
                			<li class="related-items__item">
                				<a class="related-items__link" href="/transport-help/" data-gtm="link-related-0">Transport help for older or disabled people</a>
                			</li>
                	</ul>
                  -->
                </nav>
            </div>
        </div><!--
    --></div>

    <div class="grid"><!--
           Feedback form would go here.
    --></div>

</div>
<script type="text/javascript">
var app = app || {};
</script>
