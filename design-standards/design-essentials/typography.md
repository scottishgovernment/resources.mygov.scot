---
layout: default
title:  "Typography"
summary: Guidance on using an accessible font and the typeface selected for the mygov.scot site.
parent: design-essentials
category: design-essentials
permalink: /design-standards/design-essentials/typography/
---

## Selecting a font
The font we use is Roboto, which is an open source, cost-free typeface developed by Google. Roboto is specifically designed for use on screen and has been designed to balance content density with reading comfort.

As a web-friendly font Roboto renders well on modern browsers and also performs on older versions to ensure maximum quality in the display of text for users.

**Download the latest version of Roboto here: [https://material.io/guidelines/resources/roboto-noto-fonts.html](https://material.io/guidelines/resources/roboto-noto-fonts.html)**

## Design theory
Roboto comes in a large variety of weights for maximising options on textual layouts and establishing an effective visual hierarchy. The font demonstrates humanistic qualities through the use of rounded letterforms and strong calligraphic shapes which makes it easy to read both on screen and in printed materials.

## Usage
Roboto is the only font used on mygov.scot and gov.scot websites. Definition and visual hierarchy is achieved through the use of typographic styles which use size and weight (character density) to define levels of content in the hierarchy.

## Text colour
- Darkest Grey #333333 (_RGB: 51, 51, 51_)

## Default width
* Mobile – 6 units, full width (_320px – 749px_)
* Tablet – 10 units, centered (_750px – 969px_)
* Desktop – 8 units & 4 units sidebar, left aligned (_>970px_)

## Sizing
There are two sets of sizing based on the screen size of the device used to access the site:

*  Mobile (_320px – 749px_)
*  Tablet (landscape) and desktop (_>970px_)

## Styles
Use sentence case for headings and apply headings consistently to create a clear hierarchy of content.

See examples of the typography styles adopted for the mygov.scot and scot.gov sites below:

<br>

![Mobile](/assets/images/Design-standards-images/Font Styles Mobile.jpg)
<br>

![Mobile](/assets/images/Design-standards-images/Tablet,Desktop,HD.jpg)
<br>


## Font smoothing
To ensure best font weight appearance, we use font smoothing. This delivers a truer and more legible interpretation of a font-set across macs, and is more consistent with PC display in terms of weight. We achieve that with the following CSS.

`{
  -webkit-font-smoothing: antialiased;
}`

A comprehensive list of our typography styles including lists, notes, forms and multi-page guide formats is available in the mygov.scot typography styles guide in the resources section.

## Accessibility
As a sans-serif font, Roboto uses simplified characters which stand apart from each other and appear easier to read for users with dyslexia and visual impairment.      

The typographic styles we have developed include a minimum size of 16 pixels on main page content to ensure legibility and enable users to zoom content as per the WC3 standards (up to 200%). Type styles also adhere to additional accessibility guidance including maximum line length, the use of standard leading (space between lines of text) and kerning (space between characters). See the [/design-standards/accessibility/](accessibility section) of this guidance for further information on this topic.
