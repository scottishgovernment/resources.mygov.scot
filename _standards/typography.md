---
layout: default
title:  "Typography"
categories: documentation
summary: The typography used on https://www.mygov.scot and https://www.beta.gov.scot. We are currently reviewing our typography styles to consider percentage terms as opposed to px sizing for improved responsive rendering of content.
imperative: Standard
index: 2
---

The font we use is Roboto, which is an open source, cost-free typeface developed by Google. Roboto is specifically designed for use on screen and has been designed to balance content density with reading comfort.

As a web-friendly font Roboto renders well on modern browsers and also performs on older versions to ensure maximum quality in the display of text for users.

##Download the latest version of Roboto here: [https://material.io/guidelines/resources/roboto-noto-fonts.html](https://material.io/guidelines/resources/roboto-noto-fonts.html)


## Design Theory

Roboto comes in a large variety of weights for maximising options on textual layouts and establishing an effective visual hierarchy. The font demonstrates humanistic qualities through the use of rounded letterforms and strong calligraphic shapes which makes it easy to read both on screen and in printed materials.

## Usage

Roboto is the only font used on mygov.scot and gov.scot websites. Definition and visual hierarchy is achieved through the use of typographic styles which use size and weight (character density) to define levels of content in the hierarchy.

## Text Colour

- Darkest Grey #333333 (rgb: 51, 51,51)

## Default width

- Mobile – 6 units, full width (320px – 749px)
- Tablet – 10 units, centered (750px – 969px)
- Desktop – 8 units & 4 units sidebar, left aligned (>970px)

## Sizing

There are two sets of sizing based on the screen size of the device used to access the site:

- Mobile (320px – 749px)
- Tablet Landscape and Desktop (>970px)

Examples of our type styles are shown along with the relevant HTML/CSS below.

## Styles

Use sentence case for headings and apply headings consistently to create a clear hierarchy of content.

See examples below (the text needs to be formatted in the HTML and CSS so it will resize correctly on all devices).

[images]

## Font smoothing

To ensure best font weight appearance, we use font smoothing. This delivers a truer and more legible interpretation of a font-set across macs, and is more consistent with PC display in terms of weight. We achieve that with the following CSS.

{
  -webkitfont smoothing: antialiased;
}

[Insert HTML and CSS (in drop down accordions)]

A comprehensive list of our typography styles including lists, notes, forms and multi-page guide formats is available in the [mygov.scot typography styles guide](https://resources.mygov.scot/standards/design-style/#typography) in the resources section.

## Accessibility

As a Sans Serif font, Roboto uses simplified characters which stand apart from each other and appear easier to read for users with dyslexia and visual impairment.

The typographic styles we have developed include a minimum size of 16pxls on main page content to ensure legibility and enable users to zoom content as per the WC3 standards (up to 200%). Type styles also adhere to additional accessibility guidance including maximum line length, the use of standard leading (space between lines of text) and kerning (space between characters). See the Accessibility section of this guidance for further information on this topic.
