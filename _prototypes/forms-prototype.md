---
layout: forms-prototype
title: Forms prototype
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
            <p>You may wish to <a href="https://mygovv.scot/browsers/">upgrade your browser</a>.</p>

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
                                <!-- <img src="{{ "assets/images/mygov-logos/mygovscot_195px.png" | prepend: site.url }}" alt="mygov.scot logo"> -->
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
                <input type="hidden" value="sitesearch" name="cat" />

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
        --><div class="grid__item large--eight-twelfths medium--ten-twelfths push--medium--one-twelfth">
                <article>


                <header class="article-header">
                    <h1 class="article-header__title">Registration</h1>
                </header>

                <div class="body-content">
                    <p>To get started we just need some contact information from you as well as an indication of how you like to use the internet. If you’d like to know how we use your information then you can read our <a href="https://www.mygov.scot/privacy/">Privacy policy</a>. Your test facilitator can help you if you have any queries.</p>
                </div>


                <div class="form-box">

                    <p class="asterisk-note">All fields marked with an asterisk must be filled in (<span class="asterisk">*</span>)</p>

                    <div id='feedback-box'>
                        <div class="client-error hidden form-message form-message--error">
                            <h2>Oops, there's a problem... </h2>
                            <h3>There were some errors found on this form: </h3>
                            <div class="form-errors">
                            </div>
                        </div>
                    </div>

                    <form class="in-article-form main-content body-content" id="registration-form">

                        <h2>Date and time</h2>
                        <div class="form-group relative date-entry">
                            <a name="registration-date-link"></a>
                            <span class="required-icon">*</span><label
                                for="registration-date" class="filters_">Date of session</label>
                            <div class="date-entry__input-group input-group input-wrapper registration-date">
                                <input type="text" id="registration-date" placeholder="DD/MM/YYYY" class="grey form-control input__datepicker" />
                                <button id="date-start-trigger" type="button" class="date-entry__trigger button button--primary js-show-calendar">Choose date</button>
                                <ul class="current-errors"></ul>
                            </div>
                            <div class="date-entry__calendar">
                                <button class="date-entry__close filters-container__close hidden-xsmall js-close-calendar" type="button">Close</button>
                            </div>
                        </div>

                        <div class="form-group relative" id="registration-time">
                            <a name="registration-time-link"></a>
                            <span class="required-icon">*</span><legend>Time of session</legend>

                            <div class="input-wrapper">
                            <label for="registration-time-hours" class="inline">Hours<br>
                                <div class="create-select__arrow">
                                    <select id="registration-time-hours" class="create-select">
                                        <option selected disabled value="">HH</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                        <option>04</option>
                                        <option>05</option>
                                        <option>06</option>
                                        <option>07</option>
                                        <option>08</option>
                                        <option>09</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </select>
                                </div>
                            </label>

                            <label for="registration-time-minutes" class="inline">Minutes<br>
                                <div class="create-select__arrow">
                                    <select id="registration-time-minutes" class="create-select">
                                        <option selected disabled value="">MM</option>
                                        <option>00</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                        <option>04</option>
                                        <option>05</option>
                                        <option>06</option>
                                        <option>07</option>
                                        <option>08</option>
                                        <option>09</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                        <option>22</option>
                                        <option>23</option>
                                        <option>24</option>
                                        <option>25</option>
                                        <option>26</option>
                                        <option>27</option>
                                        <option>28</option>
                                        <option>29</option>
                                        <option>30</option>
                                        <option>31</option>
                                        <option>32</option>
                                        <option>33</option>
                                        <option>34</option>
                                        <option>35</option>
                                        <option>36</option>
                                        <option>37</option>
                                        <option>38</option>
                                        <option>39</option>
                                        <option>40</option>
                                        <option>41</option>
                                        <option>42</option>
                                        <option>43</option>
                                        <option>44</option>
                                        <option>45</option>
                                        <option>46</option>
                                        <option>47</option>
                                        <option>48</option>
                                        <option>49</option>
                                        <option>50</option>
                                        <option>51</option>
                                        <option>52</option>
                                        <option>53</option>
                                        <option>54</option>
                                        <option>55</option>
                                        <option>56</option>
                                        <option>57</option>
                                        <option>58</option>
                                        <option>59</option>
                                    </select>
                                </div>
                            </label>  
                            
                            <input type="radio" name="reg-time" id="registration-time-am" class="grey form-control fancy-radio">
                            <label for="registration-time-am" class="vertical-label fancy-radio">AM</label>
                            
                            <input type="radio" name="reg-time" id="registration-time-pm" class="grey form-control fancy-radio">
                            <label for="registration-time-pm" class="vertical-label fancy-radio">PM</label>
                            </div>

                            <ul class="current-errors"></ul>
                        </div>

                        <h2>Your details</h2>
                        <div class="form-group relative">
                            <a name="name-link"></a>
                            <span class="required-icon">*</span><label for="name">Full name</label>
                            <input id="name" class="grey form-control input--large" type="text">
                            <ul class="current-errors"></ul>
                        </div>

                        <div class="form-group relative">
                            <a name="birthdate-link"></a>
                            <span class="required-icon">*</span><label for="birthdate">Date of birth</label>

                            <div class="input-wrapper birthdate" id="birthdate">
                                <div class="create-select__arrow">
                                    <select id="birthdate-day" class="create-select">
                                        <option selected disabled value="">Day</option>
                                        <option value="01">1</option>
                                        <option value="02">2</option>
                                        <option value="03">3</option>
                                        <option value="04">4</option>
                                        <option value="05">5</option>
                                        <option value="06">6</option>
                                        <option value="07">7</option>
                                        <option value="08">8</option>
                                        <option value="09">9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                        <option>22</option>
                                        <option>23</option>
                                        <option>24</option>
                                        <option>25</option>
                                        <option>26</option>
                                        <option>27</option>
                                        <option>28</option>
                                        <option>29</option>
                                        <option>30</option>
                                        <option>31</option>
                                    </select>
                                </div>

                                <div class="create-select__arrow">
                                    <select id="birthdate-month" class="create-select">
                                        <option selected disabled value="Month">Month</option>
                                        <option value="01">January</option>
                                        <option value="02">February</option>
                                        <option value="03">March</option>
                                        <option value="04">April</option>
                                        <option value="05">May</option>
                                        <option value="06">June</option>
                                        <option value="07">July</option>
                                        <option value="08">August</option>
                                        <option value="09">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                </div>

                                <div class="create-select__arrow">                            
                                    <select id="birthdate-year" class="create-select">                                    
                                        <option selected disabled value="">Year</option>
                                        <option>2017</option><option>2016</option><option>2015</option><option>2014</option><option>2013</option><option>2012</option><option>2011</option><option>2010</option><option>2009</option><option>2008</option><option>2007</option><option>2006</option><option>2005</option><option>2004</option><option>2003</option><option>2002</option><option>2001</option><option>2000</option><option>1999</option><option>1998</option><option>1997</option><option>1996</option><option>1995</option><option>1994</option><option>1993</option><option>1992</option><option>1991</option><option>1990</option><option>1989</option><option>1988</option><option>1987</option><option>1986</option><option>1985</option><option>1984</option><option>1983</option><option>1982</option><option>1981</option><option>1980</option><option>1979</option><option>1978</option><option>1977</option><option>1976</option><option>1975</option><option>1974</option><option>1973</option><option>1972</option><option>1971</option><option>1970</option><option>1969</option><option>1968</option><option>1967</option><option>1966</option><option>1965</option><option>1964</option><option>1963</option><option>1962</option><option>1961</option><option>1960</option><option>1959</option><option>1958</option><option>1957</option><option>1956</option><option>1955</option><option>1954</option><option>1953</option><option>1952</option><option>1951</option><option>1950</option><option>1949</option><option>1948</option><option>1947</option><option>1946</option><option>1945</option><option>1944</option><option>1943</option><option>1942</option><option>1941</option><option>1940</option><option>1939</option><option>1938</option><option>1937</option><option>1936</option><option>1935</option><option>1934</option><option>1933</option><option>1932</option><option>1931</option><option>1930</option><option>1929</option><option>1928</option><option>1927</option><option>1926</option><option>1925</option><option>1924</option><option>1923</option><option>1922</option><option>1921</option><option>1920</option><option>1919</option><option>1918</option><option>1917</option><option>1916</option><option>1915</option><option>1914</option><option>1913</option><option>1912</option><option>1911</option><option>1910</option><option>1909</option><option>1908</option><option>1907</option><option>1906</option><option>1905</option><option>1904</option><option>1903</option><option>1902</option><option>1901</option>
                                    </select>
                                </div>
                                <ul class="current-errors"></ul>
                            </div>
                        </div>

                        <div class="form-group relative">
                            <a name="email-link"></a>
                            <span class="required-icon">*</span><label for="email">Email address</label>
                            <input id="email" class="grey form-control" type="text">
                            <ul class="current-errors"></ul>
                            <ul class="server-side-errors"></ul>
                        </div>

                        <div class="form-group relative">
                            <a name="telephone-number-link"></a>
                            <label for="telephone-number">Phone number <span class="optional">(optional)</span></label>
                            <p>We will use this if there are any problems with your form and we need to contact you.<br />
                            If overseas, include International dialling code e.g. +34.</p>
                            <input id="telephone-number" class="grey form-control input--medium" type="text">
                            <ul class="current-errors"></ul>
                        </div>

                        <div class="form-group relative">
                            <a name="address-1-link"></a>                            
                            <span class="required-icon">*</span><label for="address-1">Address line 1</label>
                            <input id="address-1" class="grey form-control" type="text">
                            <ul class="current-errors"></ul>
                        </div>

                        <div class="form-group relative">
                            <label for="address-2">Address line 2 <span class="optional">(optional)</span></label>
                            <input id="address-2" class="grey form-control" type="text">
                        </div>

                        <div class="form-group relative">
                            <label for="address-3">Address line 3 <span class="optional">(optional)</span></label>
                            <input id="address-3" class="grey form-control" type="text">
                        </div>

                        <div class="form-group relative">
                            <a name="postcode-link"></a>
                            <span class="required-icon">*</span> <label for="postcode">Postcode</label>
                            <input id="postcode" class="grey form-control input--small" type="text">
                            <ul class="current-errors"></ul>
                        </div>

                        <h2>Online activity</h2>
                        <div class="form-group relative" id="smartphone-radio">
                            <a name="smartphone-radio-link"></a>
                                <span class="required-icon">*</span><legend>Do you use a smartphone or tablet to access the internet?</legend>
                                <div class="input-wrapper">
                                    <input id="smartphone-yes" name="smartphone" class="grey form-control fancy-radio" type="radio">
                                    <label for="smartphone-yes" class="inline fancy-radio">Yes</label>
                                    <input id="smartphone-no" name="smartphone" class="grey form-control fancy-radio" type="radio">
                                    <label for="smartphone-no" class="inline fancy-radio" >No</label>
                                    <ul class="current-errors"></ul>
                                </div>
                        </div>

                        <div class="form-group relative">
                            <fieldset>
                                <legend>If so, what kind of device(s) do you have? <span class="optional">(optional)</span></legend>
                                <div class="input-wrapper">
                                    <input name="device" id="device-ios" class="fancy-checkbox" type="checkbox">
                                    <label for="device-ios" class="inline fancy-checkbox">iOS (Apple)</label> <br>
                                    <input name="device" id="device-android" class="fancy-checkbox" type="checkbox">
                                    <label for="device-android" class="inline fancy-checkbox">Android</label> <br>
                                    <input name="device" id="device-windows" class="fancy-checkbox" type="checkbox">
                                    <label for="device-windows" class="inline fancy-checkbox">Windows</label> <br>
                                    <input name="device" id="device-other" class="fancy-checkbox" type="checkbox">
                                    <label for="device-other" class="inline fancy-checkbox">Other</label> <br>
                                </div>
                            </fieldset>
                        </div>

                        <div class="form-group relative">
                            <a name="time-online-link"></a>
                            <fieldset id="time-online">
                                <span class="required-icon">*</span><legend>Daily time spent online?</legend>
                                <p>Please indicate number of hours spent in each area.</p>
                                <ul class="current-errors"></ul>
                                <div class="input-wrapper time-online">
                                    <div>
                                        <input id="time-online-social" class="grey form-control" type="text" placeholder="0">
                                        <label for="time-online-social" class="inline">Social networking sites</label> 
                                    </div>
                                    <div>
                                        <input id="time-online-news" class="grey form-control" type="text" placeholder="0"> 
                                        <label for="time-online-news" class="inline">News sites</label> 
                                    </div>
                                    <div>
                                        <input id="time-online-youtube" class="grey form-control" type="text" placeholder="0">
                                        <label for="time-online-youtube" class="inline">YouTube</label> 
                                    </div>
                                    <div>
                                        <input id="time-online-work" class="grey form-control" type="text" placeholder="0"> 
                                        <label for="time-online-work" class="inline">Work-related</label> 
                                    </div>
                                    <div>
                                        <input id="time-online-gaming" class="grey form-control" type="text" placeholder="0">
                                        <label for="time-online-gaming" class="inline">Gaming</label> 
                                    </div>
                                    <div>
                                        <input id="time-online-other" class="grey form-control" type="text" placeholder="0"> 
                                        <label for="time-online-other" class="inline">Other</label> 
                                    </div>
                                </div>
                            </fieldset>
                        </div>

                        <h2>Feedback</h2>

                        <div class="form-group relative">
                            <a name="form-difficulty-link"></a>
                            <fieldset id="form-difficulty">
                                <span class="required-icon">*</span><legend>Tell us how you have found this form so far</legend>
                                <ul class="current-errors"></ul>
                                <div class="input-wrapper">
                                    <input name="form-difficulty" id="very-difficult" class="fancy-radio" type="radio">
                                    <label for="very-difficult" class="fancy-radio">Very difficult</label> <br>

                                    <input name="form-difficulty" id="difficult" class="fancy-radio" type="radio">
                                    <label for="difficult" class="fancy-radio">Difficult</label> <br>

                                    <input name="form-difficulty" id="ok" class="fancy-radio" type="radio">
                                    <label for="ok" class="fancy-radio">OK</label> <br>

                                    <input name="form-difficulty" id="easy" class="fancy-radio" type="radio">
                                    <label for="easy" class="fancy-radio">Easy</label> <br>

                                    <input name="form-difficulty" id="very-easy" class="fancy-radio" type="radio">
                                    <label for="very-easy" class="fancy-radio">Very easy</label> <br>
                                </div>
                            </fieldset>
                        </div>

                        <div class="form-group relative">
                        <a name="comments-link"></a>
                            <label for="comments">Any other comments <span class="optional">(optional)</span></label>
                            <p>
                                If you’ve had any frustrations or the experience has been a pleasure throughout, then tell us here.
                            </p>
                            <div class="input-wrapper">
                                <textarea rows="4" id="comments"
                                          class="grey form-control"></textarea>
                                <p class="word-count"><span>700</span> characters remaining</p>
                                <ul class="current-errors"></ul>
                            </div>
                        </div>

                        <h2>Confirmation</h2>

                        <div class="form-group relative date-entry">
                            <a name="confirm-date-link"></a>
                            <span class="required-icon">*</span><label
                                for="confirm-date" class="filters_">Confirm date of session</label>
                            <div class="date-entry__input-group input-group input-wrapper" id="confirm-date">
                                <input type="number" id="registration-date-day" placeholder="DD" class="grey form-control input__datepicker--day" />                            
                                <span class="time-slash">/</span>                              
                                <input type="number" id="registration-date-month" placeholder="MM" class="grey form-control input__datepicker--month" />                            
                                <span class="time-slash">/</span>
                                <input type="number" id="registration-date-year" placeholder="YYYY" class="grey form-control input__datepicker--year" />
                                <button id="date-start-trigger" type="button" class="date-entry__trigger button button--primary js-show-calendar">Choose date</button>
                                <ul class="current-errors"></ul>
                            </div>
                            <div class="date-entry__calendar">
                                <button class="date-entry__close filters-container__close hidden-xsmall js-close-calendar" type="button">Close</button>
                            </div>
                        </div>

                        <div class="form-group relative" id="confirm-time">
                            <a name="confirm-time-link"></a>
                            <span class="required-icon">*</span><legend>Confirm time of session</legend>

                            <div class="input-wrapper">
                            <label for="confirm-time-hours" class="inline">Hours<br>
                                <input type="number" id="confirm-time-hours" class="grey" placeholder="HH">
                            </label>

                            <span class="time-colon">:</span>

                            <label for="confirm-time-minutes" class="inline">Minutes<br>
                                <input type="number" id="confirm-time-minutes" class="grey" placeholder="MM">
                            </label>  
                            
                            <input type="radio" name="confirm-time" id="confirm-time-am" class="grey form-control fancy-radio">
                            <label for="confirm-time-am" class="vertical-label fancy-radio">AM</label>
                            
                            <input type="radio" name="confirm-time" id="confirm-time-pm" class="grey form-control fancy-radio">
                            <label for="confirm-time-pm" class="vertical-label fancy-radio">PM</label>
                            </div>
                            <ul class="current-errors"></ul>
                        </div>


                        <div class="expandable-item expandable-item--disclaimer">
                            <a name="consent-checkbox-link"></a>
                            <fieldset id="consent">
                                <input type="checkbox" id="consent-checkbox" class="fancy-checkbox">
                                <label class="consent inline fancy-checkbox" for="consent-checkbox">By ticking the attached box you’re consenting to your data being used as laid out in the <a class="js-toggle-expand expandable-item__link-trigger" href="#consent-statement" data-toggle="collapse" data-gtm="panel-opened" aria-expanded="false" aria-controls="consent-statement">consent statement.</a></label> 
                                <ul class="current-errors"></ul>

                                <div class="expandable-item__body expandable-item__body--disclaimer" id="consent-statement">
                                    <h3>Usability Testing - Informed consent</h3>

                                    <p>The data received today will be used to help us understand and improve the Scottish Government websites.</p>

                                    <p>During the session you will be asked to use your personal information at certain points (i.e. full name, date of birth, email address, phone number, address and postcode). Observers from the MyGov team and the User Research and Service Design team will be able to view this information live. Your information will not be saved (on any databases), but it will be video recorded along with your likeness and voice. </p>

                                    <p>The recording will be stored on a password protected computer on a secure network in a locked room within the Scottish Government premises that can be accessed only by the user research team.  Your personal information will be removed/blanked out and any references (i.e. this consent form) will be kept in a separate file. The video file will be viewable only by team members on the MyGov programme or the User Research and Service Design team.</p>

                                    <p>We will hold your details for 12 months and the video recording will be deleted 12 months from the date you write below.</p>

                                    <p>If you have any questions about this study or your data please speak with the user researcher. If you need to get in touch at a later date please get in contact by emailing URSD@gov.scot.</p>
                                </div>
                            </fieldset>
                        </div>


                        <div class="form-group">
                            <input type="submit" data-gtm="form-submit" id="form-submit" class="button button--primary" value="Submit">
                        </div>
                    </form>


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


</div>
<script type="text/javascript">
var app = app || {};
</script>
