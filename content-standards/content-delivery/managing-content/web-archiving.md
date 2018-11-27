---
layout: default
title:  "Web archiving"
parent: managing-content
summary: "How to make sure content is  available after you change or remove pages from your website."
index: 3
category: managing-content
permalink: /content-standards/content-delivery/managing-content/web-archiving/
---
## What it is

Web archiving makes sure your website content can be found by users if you remove it or an update has been made to the live version.

The process involves capturing web content at a moment in time, permanently preserving this in a different environment (archive), and making it accessible to users.

Archived content should:

- be publicly available on a web browser

- be presented as close to the original version as possible (in terms of appearance and functionality)

- show who archived the content and when the record was collected

If you are confident your web pages are being captured for future reference, you can focus on making sure your current website is up-to-date.

## Why it’s important

There is a legal requirement for public sector organisations to archive public records – websites are an important part of this.

A typical public sector website shows how that organisation represents itself to the outside world, covering information on decision making, policies, leadership and spending.

However, content on these websites change regularly to help meet:

- the changing needs of users

- advances in technology

- the current focus or aim of an organisation

If web content is not captured and archived when it is live, and before changes are made, it could be lost forever.

Missing content and untracked changes to a website may damage the corporate memory of the organisation. If information is not available, this reduces public transparency, and may impair citizens’ trust in that organisation.

It’s important to understand that images or data published on your website are still publicly available to users as an archive version - even after you remove it.

## How to do it

The most effective and scalable way to do web archiving is by using web crawler software, which goes through website pages via hyperlinks and copies content.

This copied content will be checked and officially preserved within a time-stamped ISO 28500:2009 WARC (Web ARChive) file format.

This creates an archival record of what was on the website at that point in time.

Two public organisations collect web archives in Scotland:
- [National Records of Scotland](https://www.nrscotland.gov.uk/research/researching-online/web-continuity-service)
- [National Library of Scotland](https://www.nls.uk/about-us/what-we-are/legal-deposit)

These organisations carry out legal duties in Scotland to make sure information is archived.

Public sector organisations should:

- have an archiving policy which includes details about how users can access information after it is removed from their website

- understand how often a website needs to be captured based on how often content changes

- make sure their website or content is easy to capture with archiving tools

- work with National Records of Scotland and National Library of Scotland to have their website content archived.


### National Records of Scotland Web Continuity Service

A part of the National Records of Scotland’s remit is to archive websites for the public record. This includes:

- the Scottish Government

- Scottish Courts

- Scottish public authorities

- public inquiries in Scotland

- a selection of private organisations

Their [Web Continuity Service](https://www.nrscotland.gov.uk/research/researching-online/web-continuity-service) can also connect live websites with the National Records of Scotland Web Archive via an http redirection service.

This means if a user finds a broken link (or 404 page) on a live website, they will be redirected to the web archive where a search for the missing information will be made and, if found, shown to the user in the format that was captured.


### National Library of Scotland

The National Library of Scotland creates collections of websites relevant to events or broad themes, working with the UK Web Archive.

The web archive has taken an annual crawl of UK sites since 2013, capturing many public sector websites at least once per year.

The Library provides access to collections in [reading rooms](https://www.nls.uk/using-the-library/reading-rooms) in Edinburgh and Glasgow and asks for permission from organisations to make copies publicly available on the web.

Websites published under [Open Government Licence](http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) are made available publicly.


### How to make your content as archive-friendly as possible

Here are 11 things you can do to improve the visibility of content for archiving:

1. Use [http GET](https://www.w3schools.com/tags/ref_httpmethods.asp) instead of http POST

2. Provide every unique resource (pages, images and files) on the website with its [own static URL](https://www.w3.org/TR/webarch/#id-resources)

3. Allow every resource in the public domain to be browsed as well as searched i.e. positioned on ‘front-end’ of the site, reachable via http

4. Have a sitemap (html or xml)

5. Provide a static alternative for streamed AV content that is fully resolvable (by http GET requests)

6. Use [breadcrumb trails](https://www.w3schools.com/howto/howto_css_breadcrumbs.asp) where possible

7. Make hyperlinks logical, human-readable and consistent. See the mygov.scot [URL style guide](/standards/url-design/)

8. Where possible, make sure all content is under one central website domain, for example [https://www.mygov.scot/](https://www.mygov.scot/)

9. Follow [accessibility standards](https://www.w3.org/standards/webdesign/accessibility) – if the site is accessible, it will very likely be archive-friendly as well

10. Where scalable, provide a static alternative to significant information contained within interactive maps e.g. .html, .jpeg, .csv download. If this is not possible, speak to NRS/NLS about how this content can be preserved

11. Make sure HTML5 and CSS are validated and standards compliant


## Helpful resources

- [Public Records Scotland Act 2011](https://www.nrscotland.gov.uk/record-keeping/public-records-scotland-act-2011/resources)
- [National Records of Scotland Web Archive](https://www.nrscotland.gov.uk/research/researching-online/web-continuity-service)
- [Save a UK website](https://www.webarchive.org.uk/en/ukwa/info/nominate) – nominations for Scottish websites go to the National Library of Scotland
- [UK Web Archive](https://www.webarchive.org.uk/)
- Example policy on [mygov.scot](https://www.mygov.scot/about-mygovscot/)
