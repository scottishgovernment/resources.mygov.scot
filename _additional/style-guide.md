---
layout: article
title:  "Style guide"
date:   2015-09-15 09:00:00
permalink: ../style-guide/
categories: documentation
summary: ... summary ...
parent: home
headings:
- The Grid
- Typography
- Link and button language

---

## The Grid

<p class="lead">If you do nothing else: get responsive; be consistent.</p>

### Get responsive

We make use of a responsive 12 column grid which works across multiple devices. There are 4 breakpoints, which allow for custom CSS to be generated for different viewports and which can be loosely attributed to: smart phones; small/portrait tablet; desktop and desktop HD.

This allows us to deliver conten optimsed for a variety of devices. It means that mobile is loved just as much as desktop. It means that we engrain in our thinking "lets start with mobile" and "let's enhance desktop". The goal is that our users don't notice they are on the mobile version of our site, they are just on our site. Consistency of design elelments and language throughout ensure that the journey is the same. They may be in a different vehicle, but they're taking the same route.

### HD Desktop (L)

For displays &ge; 1200px

<img src="{{ site.baseurl }}/assets/images/style-guide-grid-l.png" alt="The grid on large desktops" style="width:100%;">

### Desktop (M)

For displays &ge; 992px

<img src="{{ site.baseurl }}/assets/images/style-guide-grid-m.png" alt="The grid on normal desktops" style="width:80%;">

### Tablet (S)

For displays &ge; 768px

<img src="{{ site.baseurl }}/assets/images/style-guide-grid-s.png" alt="The grid on tablets" style="width:60%;">

### Mobile (XS)

For displays &lt; 768px

<img src="{{ site.baseurl }}/assets/images/style-guide-grid-xs.png" alt="The grid on mobiles" style="width:60%;">


### Be consistent

The use of a 7px baseline grid is implemented across the site at all viewports. This provides the backbone for Typographical line-height and padding as well as sizing and margins for all graphical elements.

By defining a set or rules that determine spacing above and below common elements on the site, we set the vertical rhythm. And this rhythm is ever more pertinent across mobile devices where users encounter much longer pages that often look very uniform compared to their desktop counterparts.

Use the baseline grid as a guide, not a constraint.





## Typography

<p class="lead">Good typography isn’t noticed.</p>

### Accessibilty

If you’re creating a site to host digital public services that people will rely on then accessibilty has to be at the forefront of your thinking. Gone are the days of ‘make it Arial min 12pt’. We now have the luxury of being able to use a much wider range of fonts and are in an age where rendering of fonts are of a much higher standard than the days of Chicago.

We chose to use Roboto, a Google font, which ticks a lot of boxes in terms of readability and flexibility. Importantly it is a non-serif font which has humanist qualities increasing legibility, particularly with dyslexic viewers in mind. It has a good range of weights which all (except ‘Thin’) render well on modern browsers and still perform on the not-so-modern.

Choose a font, try it out, define the rules. Here’s how we have done it...


### 1. Font-sizing and spacing

Good semantic copy is supported by appropriate styling. Levels of importance are defined by size, weight, and margins. Line-height, padding and margins all adhere to the baseline grid of 7px. Any deviations from this are nested within fixed height blocks which adhere to the grid. Any further deviations from this can be put down to ‘artistic license’.

{% include example.html file="headings" caption="Basic headings and paragraph" height="300" %}


### 2. Column width

It’s tempting to use all the space available. Don’t. Wide columns of text can make it difficult for the reader to keep their place, as the eye has greater distance to travel from end of one line to the start of the next.

**Recommended avg. max 14 words per line.**

All the best attention to typographical detail goes out the window if the body copy sits within an uncomfortably wide column. See [blog post](http://inside.mygov.scot/2014/09/08/design-composition-fundamentals/).


### 3. Font-weight treatment


{% include example.html file="fontweight" caption="Font weights" height="650" %}


### 4. Typographical variations

Problem... If you have a guide format which encompasses several pages and each page has it’s own identity, is the H1 assigned to the Guide title or the page title? Semantics and HTML5 arguments aside, Here we have a need for a more punchy page title which sits somewhere between the defines styling of h1 and h2.

Introducing Guide page h2...

{% include example.html file="h2-guide" caption="h2 in a guide" height="100" %}

Similarily we found a need for h2 emphasis in the instances that it’s recognised that h2 just don’t cut it.

{% include example.html file="h2-emphasis" caption="h2 with emphasis" height="100" %}


### 5. Breadcrumbs

Currently breadcrumbs appear on all views expcept mobile (320px). They adopt the ‘small print’ size and line-height styling defined below...

{% include example.html file="breadcrumbs" caption="Breadcrumbs" height="100" %}


### 6. Informational notes

It’s not good enough to rely on the html ‘blockquote’ element to render all information requiring some kind of highlighting. Here we have a range of ‘informational notes’...


{% include example.html file="note" caption="Note" %}

{% include example.html file="note-caution" caption="Note caution" height="250" %}

{% include example.html file="blockquote" caption="Blockquote" %}

{% include example.html file="small-print" caption="Small print" height="150"%}



### 7. Unordered lists

{% include example.html file="unordered-list" caption="An unordered list" height="400" %}



### 8. Ordered lists

{% include example.html file="ordered-list" caption="An ordered list" height="400" %}


## Link and button language

<p class="lead">Set the user’s expectation by taking away the unknown.</p>

<p>Links are blue. Sometimes. Links are underlined. Sometimes. There aren’t hard and fast rules, but again consistency is the key. That doesn’t necessarily mean consistency in terms of an exact style match. Think in terms of expectation...More text to come here</p>


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




