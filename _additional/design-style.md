---
layout: article
title:  "Design Style Guide"
categories: documentation
summary: The standard for the look and feel of services available via mygov.scot.
imperative: Standard
index: 2
headings:
- The grid
- Typography
- Link and button language
- Colour palette

---

## Purpose
This document outlines design thinking and approach, covering Grid, Typography and Link language, with inline examples for common elements.

## The grid

<p class="lead">If you do nothing else: get responsive; be consistent.</p>

### Get responsive

We make use of a responsive 12 column grid which works across multiple devices. There are 4 breakpoints, which allow for custom CSS to be generated for different viewports and which can be loosely attributed to: smart phones; small/portrait tablet; desktop and desktop HD.

This allows us to deliver content optimised for a variety of devices. It means that mobile is loved just as much as desktop. It means that we engrain in our thinking "let's start with mobile" and "let's enhance desktop". The goal is that our users don't notice they are on the mobile version of our site &mdash; they are just on our site. Consistency of design elements and language throughout ensure that the journey is the same.

### HD Desktop (L)

For displays &ge; 1200px

<img src="{{ site.url }}/assets/images/style-guide-grid-l.png" alt="The grid on large desktops" style="width:100%;">

### Desktop (M)

For displays &ge; 992px

<img src="{{ site.url }}/assets/images/style-guide-grid-m.png" alt="The grid on normal desktops" style="width:80%;">

### Tablet (S)

For displays &ge; 768px

<img src="{{ site.url }}/assets/images/style-guide-grid-s.png" alt="The grid on tablets" style="width:60%;">

### Mobile (XS)

For displays &lt; 768px

<img src="{{ site.url }}/assets/images/style-guide-grid-xs.png" alt="The grid on mobiles" style="width:60%;">


### Be consistent

By defining a set of rules that determine spacing above and below common elements on the site, we set the vertical rhythm. And this rhythm is ever more pertinent across mobile devices where users encounter much longer pages that often look very uniform compared to their desktop counterparts.

The use of a 7px baseline/vertical grid sets the rules for vertical spacing across the site. This provides the backbone for typographical line-height and padding as well as sizing and margins for all graphical elements. Line-height and fixed height elements are all multiples of 7px. Padding, margins and borders of each block element also total multiples of 7px. So everything sits on the grid, which is nice, but most importantly, as a designer/developer there is less guess work involved and you are better prepared to make decisions.

**Note:** It may be necessary to fine-tune spacing to accurately position against the baseline. ‘Baseline grid’ is a recognised term in web design with it’s grounding in print design. It refers to the baseline that text sits on, as if writing on ruled paper (descenders drop below the baseline). However, in the case of web design, it can be misleading as the vertical spacing of text is determined by the css parameter ‘line-height’ and this positions text within the vertical centre of the attributed area.

Use the baseline grid to inform layout, and use it as a guide, not a constraint.


## Typography

<p class="lead">Good typography isn’t noticed.</p>

### Accessibilty

If you're creating a site to host digital public services that people will rely on then accessibility has to be at the forefront of your thinking. Gone are the days of ‘make it Arial min 12pt’. We now have the luxury of being able to use a much wider range of fonts and are in an age where rendering of fonts are of a much higher standard.

We chose to use Roboto, a Google font, which ticks a lot of boxes in terms of readability and flexibility. Importantly it is a non-serif font which has humanist qualities increasing legibility, particularly with dyslexic viewers in mind. It has a good range of weights which all (except ‘Thin’ at small sizes) render well on modern browsers and still perform on the not-so-modern.


### 1. Font-sizing and spacing

Good semantic copy is supported by appropriate styling. Levels of importance are defined by size, weight, and margins. Line-height, padding and margins all adhere to the baseline grid of 7px. Any deviations from this are nested within fixed height blocks which adhere to the grid. Any further deviations from this can be put down to ‘artistic license’.

{% include example.html file="headings" caption="Basic headings and paragraph" height="1000" %}


### 2. Column width

It's tempting to use all the space available. Don’t. Wide columns of text can make it difficult for the reader to keep their place, as the eye has greater distance to travel from end of one line to the start of the next.

*Recommendation: average 14 words per line*

All the best attention to typographical detail goes out the window if the body copy sits within an uncomfortably wide column. Further reading with [design composition fundamentals](http://inside.mygov.scot/2014/09/08/design-composition-fundamentals/) blog post.


### 3. Font weight treatment

To ensure best font­ weight appearance, use font smoothing. This delivers a truer and more legible interpretation of a font-set across macs, and is more consistent with PC display in terms of weight. We achieve that with the following CSS.

	{
        -­webkit­font­smoothing: antialiased;
    }

{% include example.html file="fontweight" caption="Font weights" height="1250" %}


### 4. Typographical variations

Outwith regular article formatting, we have found a need for ‘h2 emphasis’ to jump out within swathes of content that we don’t have as much control over i.e. from external feeds OR to act as a sub-header as in the instance of [business rates calculator](https://www.mygov.scot/business-rates-calculator/#property-address). ‘h2 emphasis’ applies a top border to h2.

{% include example.html file="h2-emphasis" caption="h2 with emphasis" height="100" %}

Guide pages display both the guide title (h1) and page/section title (h2) on each page. The standard h2 which is used sitewide does not have enough prominence in this instance to handle the page title, therefore ‘h2 emphasis (guide)’ has been defined to be used solely on guide pages. Can only appear once on a page as in the case of h1. Note: Guide page h3s match styling of regular h2s and similarly guide page h4s match regular h3s. ‘h2 emphasis (guide)’ is larger than standard ‘h2 emphasis’ and applies a blue top border.

{% include example.html file="h2-guide" caption="h2 in a guide" height="100" %}

### 5. Breadcrumbs

Currently breadcrumbs appear on all views expcept mobile (320px). They adopt the 'small print' size and line-height styling.

{% include example.html file="breadcrumbs" caption="Breadcrumbs" height="130" %}

### 6. Informational notes

It's not good enough to rely on the html `<blockquote>` element to render all information requiring some kind of highlighting. Here we have a range of ‘informational notes’...


{% include example.html file="note" caption="Note" height="250" %}

{% include example.html file="note-caution" caption="Note caution" height="250" %}

{% include example.html file="blockquote" caption="Blockquote" height="250" %}

{% include example.html file="small-print" caption="Small print" height="150"%}

### 7. Ordered lists

{% include example.html file="ordered-list" caption="An ordered list" height="350" %}

### 8. Unordered lists

{% include example.html file="unordered-list" caption="An unordered list" height="350" %}

## Link and button language

<p class="lead">Set the user's expectation by taking away the unknown.</p>

Users will quickly become familiar with the language of a site and we can gain their trust by delivering consistent interactions. If this is achieved, then the user can browse and find the information they seek quicker and easier. That's the ultimate goal.

Links/Buttons by default need to stand out from their context. The way we handle different types of links needs to vary slightly dependent on the context.

Users are informed when a text link or button will link to an external site by way of the recognised ‘external link’ icon.

Links are by default Primary blue. In the case of text links, underline only appears on hover except in the instance of contextual text links, whereby their default state is underlined to help stand-out from body text. Call to Action (CTA) buttons are big and bold. Secondary buttons are smaller than their Primary counterparts and are a darker blue to indicate that they are optional. Cancel/Call-off buttons have a ‘ghost’ appearance meaning they do not fight for attention with CTA buttons which they will often sit alongside.

Hover states are subtle indicators. All text and button links darken on hover.

*Note: Transitions are almost immediate (0.2 secs duration on hover), and ease out at a slower rate on out (1 sec duration).*

Active states are affirming. In the case of buttons the hover state is maintained while the reversal text becomes semi-transparent. This maintains a consistency across desktop and mobile devices where hover becomes redundant, while replicating a real-life down-press event. In the case of text links and Category / Content item listings a light blue is applied to the background. This is especially useful to mobile users, as screen size and brightness, smaller text and graphical elements, and poor connectivity can all potentially make it difficult to know whether a link has been pressed.

### 1. Text links

{% include example.html file="text-links" caption="Header and contextual links; internal and external" height="250" %}

### 2. Primary button

{% include example.html file="primary-button" %}

### 3. External button

{% include example.html file="external-button" %}

### 4. Secondary button

{% include example.html file="secondary-button" height="175" %}

### 5. Stop / Call-off / Cancel button

{% include example.html file="cancel-button" %}

### 6. Navigation button

{% include example.html file="nav-button" height="250" %}

### 7. Sequential guide navigation

{% include example.html file="guide-sequential" height="200" %}

### 8. Non-sequential guide navigation

{% include example.html file="guide-non-sequential" height="200" %}

### 9. Accordion

{% include example.html file="accordion" height="400" %}

### 10. Tabs

{% include example.html file="tabs" %}

### 11. Notifications

{% include example.html file="notifications" height="300" %}

## Colour palette

<p class="lead">Users will see, process and react to colour instantly and will learn patterns quickly.</p>

The colour palette is predominantly comprised of blues and greys and is reflected in the branding of the Scottish Government and its sub-brands.

As a general rule Blue is used for links, Dark greys for text, Light greys for layout and Light blues for active/selected states. Red represents error, Green validation and Yellow warning/notifications.

<div class="palette-sample darker-blue">
    <span>
        <a href="#darker-blue">
            Darker blue
            <p class="colour-name">#002d54</p>
            (rgb: 0, 45, 84)
        </a>
    </span>
</div>

<div class="palette-sample dark-blue">
    <span>
        <a href="#dark-blue">
            Dark blue
            <p class="colour-name">#00437e</p>
            (rgb: 0, 67, 126)
        </a>
    </span>
</div>

<div class="palette-sample primary-blue">
    <span>
        <a href="#primary-blue">
            Primary blue
            <p class="colour-name">#0065bd</p>
            (rgb: 0, 101, 189)
        </a>
    </span>
</div>

<div class="palette-sample light-blue">
    <span>
        <a href="#light-blue">
            Light blue
            <p class="colour-name">#d9effc</p>
            (rgb: 217, 239, 252)
        </a>
    </span>
</div>

<div class="palette-sample lighter-blue">
    <span>
        <a href="#lighter-blue">
            Lighter blue
            <p class="colour-name">#e5f0f8</p>
            (rgb: 229, 240, 248)
        </a>
    </span>
</div>

<!-- empty block -->
<div class="palette-sample spacer"></div>

<div class="palette-sample dark-grey">
    <span>
        <a href="#dark-grey">
            Dark grey
            <p class="colour-name">#333</p>
            (rgb: 51, 51, 51)
        </a>
    </span>
</div>

<div class="palette-sample base-grey">
    <span>
        <a href="#base-grey">
            Base grey
            <p class="colour-name">#727272</p>
            (rgb: 114, 114, 114)
        </a>
    </span>
</div>

<div class="palette-sample mid-grey">
    <span>
        <a href="#mid-grey">
            Mid grey
            <p class="colour-name">#b3b3b3</p>
            (rgb: 179, 179, 179)
        </a>
    </span>
</div>

<div class="palette-sample pale-grey">
    <span>
        <a href="#pale-grey">
            Pale grey
            <p class="colour-name">#e3e3e3</p>
            (rgb: 227, 227, 227)
        </a>
    </span>
</div>

<div class="palette-sample light-grey">
    <span>
        <a href="#light-grey">
            Light grey
            <p class="colour-name">#ebebeb</p>
            (rgb: 235, 235, 235)
        </a>
    </span>
</div>

<div class="palette-sample lighter-grey">
    <span>
        <a href="#lighter-grey">
            Lighter grey
            <p class="colour-name">#f8f8f8</p>
            (rgb: 248, 248, 248)
        </a>
    </span>
</div>

<div class="palette-sample error-red">
    <span>
        <a href="#error-red">
            Error red
            <p class="colour-name">#d32205</p>
            (rgb: 211, 34, 5)
        </a>
    </span>
</div>

<div class="palette-sample error-red-tint">
    <span>
        <a href="#error-red-tint">
            Error red tint
            <p class="colour-name">#f4e2df</p>
            (rgb: 244, 226, 223)
        </a>
    </span>
</div>

<!-- empty block -->
<div class="palette-sample spacer-tablet"></div>

<div class="palette-sample validation-green">
    <span>
        <a href="#validation-green">
            Validation green
            <p class="colour-name">#4e9d52</p>
            (rgb: 78, 157, 82)
        </a>
    </span>
</div>

<div class="palette-sample validation-green-tint">
    <span>
        <a href="#validation-green-tint">
            Validation green tint
            <p class="colour-name">#edf5ee</p>
            (rgb: 237, 245, 238)
        </a>
    </span>
</div>

<!-- empty block -->
<div class="palette-sample spacer-tablet"></div>

<div class="palette-sample notification-yellow">
    <span>
        <a href="#notification-yellow">
            Notification yellow
            <p class="colour-name">#ffb644</p>
            (rgb: 255, 182, 68)
        </a>
    </span>
</div>

<div class="palette-sample notification-yellow-tint">
    <span>
        <a href="#notification-yellow-tint">
            Notification yellow tint
            <p class="colour-name">#fff8ec</p>
            (rgb: 255, 248, 236)
        </a>
    </span>
</div>


### Blues

<div class="palette-list__colour-block primary-blue"></div>
<div class="palette-list">
    <a name="primary-blue"></a>
    <strong>Primary Blue: #0065bd <span class="rgb">(rgb: 0, 101, 189)</span></strong><br>
    Use: Default link colour e.g.
    <ul>
        <li>Text links</li>
        <li>CTA/Primary button</li>
        <li>Secondary button outline</li>
        <li>Accompanying icons (arrows/numbers/graphics)</li>
        <li>Form field focus border</li>
        <li>Heading emphasis border above</li>
        <li>Blockquote / address vertical left border</li>
        <li>Footer background</li>
    </ul>
</div>

<div class="palette-list__colour-block dark-blue"></div>
<div class="palette-list">
    <a name="dark-blue"></a>
    <strong>Dark blue: #00437e <span class="rgb">(rgb: 0, 67, 126)</span></strong><br>
    Use: Link:hover state
</div>

<div class="palette-list__colour-block darker-blue"></div>
<div class="palette-list">
    <a name="darker-blue"></a>
    <strong>Darker blue: #002d54 <span class="rgb">(rgb: 0, 45, 84)</span></strong><br>
    Use: May be used for graphical display text
</div>

<div class="palette-list__colour-block light-blue"></div>
<div class="palette-list">
    <a name="light-blue"></a>
    <strong>Light blue: #d9effc <span class="rgb">(rgb: 217, 239, 252)</span></strong><br>
    Use: Link:active state background
</div>

<div class="palette-list__colour-block lighter-blue"></div>
<div class="palette-list">
    <a name="lighter-blue"></a>
    <strong>Lighter blue: #e5f0f8 <span class="rgb">(rgb: 229, 240, 248)</span></strong><br>
    Use: Navigational selected state background / Form field focus background
</div>

### Greys

<div class="palette-list__colour-block dark-grey"></div>
<div class="palette-list">
    <a name="dark-grey"></a>
    <strong>Dark grey: #333333 <span class="rgb">(rgb: 51, 51, 51)</span></strong><br>
    Use: Default all text (para and headings) / Call-off / Cancel buttons
</div>

<div class="palette-list__colour-block base-grey"></div>
<div class="palette-list">
    <a name="base-grey"></a>
    <strong>Base grey: #727272 <span class="rgb">(rgb: 114, 114, 114)</span></strong><br>
    Use: Secondary text and form element borders
    <ul>
        <li>Search field placeholder (Mid-grey to be used for all other form field placeholder)</li>
        <li>Form field character count</li>
        <li>Form field border</li>
        <li>Drop down select borde</li>
        <li>Checkbox / Radio button border</li>
        <li>List items date / time</li>
    </ul>
</div>

<div class="palette-list__colour-block mid-grey"></div>
<div class="palette-list">
    <a name="mid-grey"></a>
    <strong>Mid grey: #b3b3b3 <span class="rgb">(rgb: 179, 179, 179)</span></strong><br>
    Use: Form field placeholder text / Secondary text reversal out of Dark grey
    <ul>
        <li>Info and Caution Notes top and bottom border</li>
    </ul>
</div>

<div class="palette-list__colour-block pale-grey"></div>
<div class="palette-list">
    <a name="pale-grey"></a>
    <strong>Pale grey: #e3e3e3 <span class="rgb">(rgb: 227, 227, 227)</span></strong><br>
    Use: Subtle borders / lines e.g.
    <ul>
        <li>Search results divider</li>
        <li>Sub-nav items divider</li>
        <li>Inactive field border</li>
    </ul>
</div>

<div class="palette-list__colour-block light-grey"></div>
<div class="palette-list">
    <a name="light-grey"></a>
    <strong>Light grey: #ebebeb <span class="rgb">(rgb: 235, 235, 235)</span></strong><br>
    Use: Background grey hover
    <ul>
        <li>Hover state for ‘Lighter grey’ block element</li>
    </ul>
</div>

<div class="palette-list__colour-block lighter-grey"></div>
<div class="palette-list">
    <a name="lighter-grey"></a>
    <strong>Lighter grey: #f8f8f8 <span class="rgb">(rgb: 248, 248, 248)</span></strong><br>
    Use: Block backgrounds
    <ul>
        <li>White background button/nav/search results hover state</li>
        <li>Block element background e.g. optional inline form background</li>
        <li>Aside / filter background</li>
    </ul>
</div>

### Reds

<div class="palette-list__colour-block error-red"></div>
<div class="palette-list">
    <a name="error-red"></a>
    <strong>Error red: #d32205 <span class="rgb">(rgb: 211, 34, 5</span></strong><br>
    Use: Error messages / Attention e.g.
    <ul>
        <li>‘This fund is currently closed’ / ‘Please enter your name’</li>
        <li>Error playback border and text</li>
        <li>Form field border in error state</li>
        <li>Supporting error message</li>
        <li>Fieldset border in error state</li>
    </ul>
</div>

<div class="palette-list__colour-block error-red-tint"></div>
<div class="palette-list">
    <a name="error-red-tint"></a>
    <strong>Error red tint: #f4e2df <span class="rgb">(rgb: 244, 226, 223)</span></strong><br>
    Use: Error messages / Attention e.g.
    <ul>
        <li>Fieldset background in error state</li>
    </ul>
</div>

### Greens

<div class="palette-list__colour-block validation-green"></div>
<div class="palette-list">
    <a name="validation-green"></a>
    <strong>Validation green: #4e9d52 <span class="rgb">(rgb: 78, 157, 82)</span></strong><br>
    Use: Validation / Success messages / Attention (friendly) e.g.
    <ul>
        <li>‘Hide this page’ button</li>
        <li>Success message border and heading text</li>
        <li>Form field border in validated state</li>
        <li>Fieldset border in validation state</li>
    </ul>
</div>

<div class="palette-list__colour-block validation-green-tint"></div>
<div class="palette-list">
    <a name="validation-green-tint"></a>
    <strong>Validation green tint: #edf5ee <span class="rgb">(rgb: 237, 245, 238)</span></strong><br>
    Use: Validation / Success messages / Attention (friendly) e.g.
    <ul>
        <li>Fieldset background in validation state</li>
    </ul>
</div>

### Yellows

<div class="palette-list__colour-block notification-yellow"></div>
<div class="palette-list">
    <a name="notification-yellow"></a>
    <strong>Notification yellow: #ffb644 <span class="rgb">(rgb: 255, 182, 68)</span></strong><br>
    Use: Amber state / Notification background (accompanied by Dark grey text) i.e. ‘Beta banner’ or ‘You have been redirected from a site which no longer exists’
</div>

<div class="palette-list__colour-block notification-yellow-tint"></div>
<div class="palette-list">
    <a name="notification-yellow-tint"></a>
    <strong>Notification yellow tint: #fff8ec <span class="rgb">(rgb: 255, 248, 236)</span></strong><br>
    Use: Can be used in instances where solid Notification yellow isn’t suitable.
</div>

<br>