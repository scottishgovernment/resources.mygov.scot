---
layout: article
title:  "Performance reporting: web analytics setup"
categories: documentation
summary: Good practice web analytics advice for getting your service/website ready for performance monitoring and reporting.
imperative: Guideline
type: design
index: 1
frontpage: yes
headings:
- Introduction, Training & Support
- Set up a Google account
- Set up Google Tag Manager
- Set up Google Analytics
- Set up and link Google Search Console
- Set up Bing Webmaster Tools
- Set up and link Google AdWords
- Google Account recovery

---
## Introduction, training & Support
Every website should have its performance monitored regularly - this allows the service owner to identify issues and use the data to make better decisions as outlined in the Digital First Service Standard's [data driven](http://scottishgovernment.github.io/criterion/data-driven/) and [performance management]( https://scottishgovernment.github.io/criterion/performance-management/) criteria.

To do this you will need to set up certain tools for your website or service. These are:

* A tag management system (optional for smaller websites/services, highly recommended for larger projects or those without in-house developers)
* A web analytics package(s) (which allow you to record your service's data, such as the number of users, and view the data on a dashboard) - this could include [Piwik]( https://piwik.org/), [Google Analytics](https://analytics.google.com/), [Adobe web analytics](http://www.adobe.com/uk/marketing-cloud/web-analytics.html), etc.
* A dashboarding tool (optional) - this could include [Klipfolio](https://www.klipfolio.com/) or [Google Data Studio BETA](https://datastudio.google.com/)
* The search console for key search engines (if your service is web-based)
* Additional analytics tools to collect supplemental information (optional) - this could include heatmapping tools like [Mouseflow](https://mouseflow.com/) or [Hotjar](https://www.hotjar.com/)

### Alternative tools
There are a range of different tools available - from free/open source through to paid/enterprise - to do these tasks. We use a mix of tools, including Google Analytics. Google Analytics is widely used across the Scottish Government. The setup outlined below has already been tested and approved for data security and is based on free products, so there's no need to go through procurement. We have documented a setup which is strong on interoperability, simplicity, available documentation and is largely based on free products but other web analytics packages are available and may be better suited to your needs.

### Recommended training
To get the best out of your web analytics setup, it's recommended that those who will frequently use the tools go on training. This is key to getting the best out of a platform, gaining insight into the performance of your service and understanding how your customers/users interact with the service. This training is also necessary for driving change in a data driven, evidence based manner.

Google offer free training on their analytics and tag management tools. This can be accessed on their [Analytics Academy website](https://analyticsacademy.withgoogle.com/).

Contact the [Scottish Government Performance Team](mailto:performance@mygov.scot?subject=Web%20Analytics%20Training) if you have any questions about training.

### Support
If your organisation needs more advanced support or configuration, or if you'd like to know more about how to make changes based on the data you're getting from your analytics tools, please contact the [Scottish Government Performance Team](mailto:performance@mygov.scot?subject=Web%20Analytics). You may also want to get involved in the [UK Government performance community]( https://www.gov.uk/service-manual/communities/performance-and-data-analysis-community) or the [Scottish Public Sector digital analytics community](https://tinyletter.com/scotanalysts).

## Set up a Google account
If you're going to be using Google Analytics you'll need a [Google account](https://accounts.google.com/SignUp) which is tied to your work email address (rather than adding your work email address as a secondary address to a personal account). If you're creating an account to be shared by a team we recommend creating a generic account, not only linking it to one individual and thinking ahead to secure against future resilience issues.

## Set up Google Tag Manager
[Google Tag Manager]( https://support.google.com/tagmanager/answer/6103696?hl=en) lets site owners add and update website tags - including tags for conversion tracking, site analytics and remarketing - without needing to edit your website's code.

To access and configure GTM:

* [Sign up using your team's Google account](https://www.google.co.uk/analytics/tag-manager/)

* Create and name your account then create and name your first container. We suggest you use the following naming convention; domain - subdomain - environment e.g. mygov - www - live

* Select the type of property for which you intend to use the container for. In most instances you'll select "web"

* Two code snippets will appear on screen, along with instructions on where to place them: place the code as instructed on all of your pages (this might require help from a developer)

* Repeat the previous 3 steps for any additional containers i.e. for test environments. Follow the same naming convention as your other container, e.g. "mygov.scot - www - test"

* Add the dataLayer snippet to your site (advanced). Here's a [guide](https://www.optimizesmart.com/google-tag-manager-data-layer-explained-like-never/) on the dataLayer and here are [instructions](https://developers.google.com/tag-manager/devguide) from Google on implementation for your developer.

Once GTM has been deployed to all pages, it lets you deploy your analytics tool/Google Analytics, enhanced tracking capability and any other tags where applicable, e.g. [Mouseflow](https://mouseflow.com/), advertising floodlight tags/pixels, etc.

Some basic event tracking examples:
* Each time a user clicks a link to open a PDF document
  * PDF tracking tag - the tag is used to set the dimensions that you will see in Google Analytics following a PDF link click. Set the category as `PDF`, the action as `Download` and the label using the pre-defined macro `{% raw %}{{Click URL}}{% endraw %}` (this sets the label as the URL of the HTML link element)
  * PDF firing rule - the tag should fire when a link has been clicked AND that the HTML `{% raw %}{{Click URL}}{% endraw %}` contains a directory structure of `/PDFs/`: `{% raw %}{{event}}{% endraw %} equals gtm.linkClick` and `{% raw %}{{Click URL}}{% endraw %} contains /PDFs/`
* each time a user clicks an email link
  * Email tracking tag - set the category as `Email`, the action as `{% raw %}{{Click Text}}{% endraw %}` and the label as `{% raw %}{{Click URL}}{% endraw %}`
  * Email firing rule - the tag should fire when an email address has been clicked: trigger on `Some Link Clicks` when `{% raw %}{{Click URL}}{% endraw %} starts with mailto:`
* each time a user clicks a phone number link
  * Phone tracking tag - set the category as `Phone number`, the action as `{% raw %}{{Click Text}}{% endraw %}` and the label as `{% raw %}{{Click URL}}{% endraw %}`
  * Phone firing rule - the tag should fire when a telephone number has been clicked: trigger on `Some Link Clicks` when `{% raw %}{{Click URL}}{% endraw %} starts with tel:`
* each time a user clicks an external link
  * External link tracking tag - set the category as `External link`, the action as `Click` and the label as `{% raw %}{{Click URL}}{% endraw %}`
  * External link firing rule - the tag should fire when an external link has been clicked: when `{% raw %}{{Click URL}}{% endraw %} does not start with https://www.yourdomain.com` and when `{% raw %}{{Click URL}}{% endraw %} does not start with tel:` and when `{% raw %}{{Click URL}}{% endraw %} does not start with mailto:`


### Google Tag Manager - additional reading

* [http://www.simoahava.com/analytics/awesome-google-tag-manager-resources/](http://www.simoahava.com/analytics/awesome-google-tag-manager-resources/)

* [https://www.optimizesmart.com/beginners-guide-google-tag-manager-v2/](https://www.optimizesmart.com/beginners-guide-google-tag-manager-v2/)

* [http://ipullrank.com/google-tag-manager/](http://ipullrank.com/google-tag-manager/)

* [http://www.digitalmarketer.com/guide-to-google-tag-manager/](http://www.digitalmarketer.com/guide-to-google-tag-manager/)

* [https://developers.google.com/tag-manager/](https://developers.google.com/tag-manager/)

* [https://support.google.com/tagmanager/answer/6103657?hl=en](https://support.google.com/tagmanager/answer/6103657?hl=en)

* [https://www.optimizesmart.com/event-tracking-in-google-tag-manager-v2-complete-guide/](https://www.optimizesmart.com/event-tracking-in-google-tag-manager-v2-complete-guide/)

### The Data Layer (dataLayer) - additional reading

* [http://www.simoahava.com/analytics/data-layer/](http://www.simoahava.com/analytics/data-layer/)

* [http://www.lunametrics.com/blog/2016/03/21/gtm-data-layer-best-practices/](http://www.lunametrics.com/blog/2016/03/21/gtm-data-layer-best-practices/)

* [https://www.optimizesmart.com/google-tag-manager-data-layer-explained-like-never/](https://www.optimizesmart.com/google-tag-manager-data-layer-explained-like-never/)

* [https://developers.google.com/tag-manager/devguide](https://developers.google.com/tag-manager/devguide)

## Set up Google Analytics

[Google Analytics]( https://support.google.com/analytics/answer/1008080?hl=en) offers both free and enterprise analytics tools to measure website and app data.

* [Sign up using your team's Google account](https://www.google.co.uk/analytics/analytics/)

* Create your account and name it appropriately

* [Grant access to colleagues and any developers who will be working on the service](http://www.seerinteractive.com/blog/get-the-most-out-of-google-analytics-user-permissions/)

* Within the Admin settings, you should turn off all data sharing other than within Google products and services

* Set up Google Analytics Profiles. Profiles are technically new properties, but they are created from within the same account. To do this, you visit the admin page of your desired account. Select the "create new property" option from the property dropdown and enter the desired profile name. The following profiles are recommended:

  * Raw Data > This is your unfiltered backup dataset - not to be deleted or changed

  * Live > Your main reporting profile

  * Test > This is a duplicate of the Live view and allows you to make changes for testing purposes

* Within your live and test profiles create the following [Views](https://support.google.com/analytics/answer/2649553?hl=en&ref_topic=6014102):

  * Unfiltered Master > with no filtering

  * All traffic > Minimal filtering

  * External - All Devices > This view has internal traffic filtered out

  * Internal - All Devices > This view is the converse of above

* Create the required filters for each custom view - [here are a few recommended filters to apply](http://www.lunametrics.com/blog/2015/12/10/basic-google-analytics-filters/)

* Create [goals](https://www.searchenginejournal.com/google-analytics-indepth-look-url-destination-goals/73605/) within Google Analytics that are in line with your business KPIs and objectives

* For key metrics you wish to record but where goals are not applicable you should [set up event tracking](https://www.optimizesmart.com/event-tracking-in-google-tag-manager-v2-complete-guide/)

* It's vital to protect user's privacy - along with not collecting sensitive information to your analytics package. To do this we recommend turning off demographic and interests reporting (at property level) and anonymising IP addresses (in Google Analytics you do this by using the `anonymizeIp` function - this is handled within Google Tag Manager, but it affects Google Analytics data. See this [screenshot](https://drive.google.com/open?id=0B3iRPBzyhQkiejNRaTc2eF9kaG8) for configuration within Google Tag Manager)

* At a property level, turn on the [enhanced link attribution](https://drive.google.com/open?id=0B3iRPBzyhQkiQnlEZGlacE1DNVE)

* Set your [sessions and campaigns to expire](https://drive.google.com/open?id=0B3iRPBzyhQkicVZrUC16MmRmQ1k) after set durations. We recommend setting sessions to expire after 30 minutes and campaigns after 6 months

* At a property level set your own domain in the [referral exclusion list](https://drive.google.com/open?id=0B3iRPBzyhQkiZDNrRnVjb3IzTHc)

* Deploy the property configurations to each of the relevant sites

### Updating existing Google Analytics libraries

You can use [Google Tag Assistant Chrome extension] (https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk) to identify whether your site is running legacy Google Analytics code libraries. Once installed, navigate to your site and click on the extension icon in the [browser toolbar](https://drive.google.com/open?id=0B3iRPBzyhQkidWlWajJub2QyU1U) and a dropdown will appear and notify you of any issues regarding the instance of Google Analytics on that page. Alternatively, you can view the source code of a particular website/page and search for `ga.js` (the legacy library, lacking in up to date functionality) and `analytics.js` ( the current library).

If your site is running legacy `ga.js` libraries and old GA code snippets, we recommend updating using this [guide](https://developers.google.com/analytics/devguides/collection/upgrade/).

### Google Analytics - additional reading

* [https://builtvisible.com/google-analytics-resource-guide/](https://builtvisible.com/google-analytics-resource-guide/)

* [https://www.lovesdata.com/blog/2016/google-analytics-glossary](https://www.lovesdata.com/blog/2016/google-analytics-glossary)

* [http://www.annielytics.com/blog/](http://www.annielytics.com/blog/)

* [https://developers.google.com/analytics/devguides/platform/](https://developers.google.com/analytics/devguides/platform/)

* [http://www.kaushik.net/avinash/](http://www.kaushik.net/avinash/)

* [https://ga-dev-tools.appspot.com/](https://ga-dev-tools.appspot.com/)

* [https://support.google.com/analytics/answer/1009618](https://support.google.com/analytics/answer/1009618)

* [http://www.lunametrics.com/regex-book/Regular-Expressions-Google-Analytics.pdf](http://www.lunametrics.com/regex-book/Regular-Expressions-Google-Analytics.pdf)

* [https://support.google.com/analytics/answer/2649553?hl=en&ref_topic=6014102](https://support.google.com/analytics/answer/2649553?hl=en&ref_topic=6014102)

* [https://www.searchenginejournal.com/google-analytics-indepth-look-url-destination-goals/73605/](https://www.searchenginejournal.com/google-analytics-indepth-look-url-destination-goals/73605/)

## Set up and link Google Search Console
[Google Search Console]( https://support.google.com/webmasters/answer/6001104?hl=en) (previously Google Webmaster Tools) is a service for website administrators to check indexing status, optimise visibility of their websites, view a sample of websites that link back to you, and see site errors and Google crawl stats.

* [Sign in to Google Search Console using your shared email account](https://www.google.com/webmasters/tools/) (formerly Google Webmaster Tools) and click the red button to add your website

* Add your domain. Note: it's often best to start with the root domain (without the `www.`) e.g. `https://twitter.com`

* You'll be presented with 4 verification options. Our recommended method is to use the "Domain name provider" option. While this may differ from Google's recommended method, it counters the possibility of verification revocation should the code be removed by a developer or through a site release. The DNS option remains persistent no matter what changes are applied to your website and there has to be specific intent behind removal of a DNS zone file entry. Once selected, you'll be presented with a string of characters used by Google for confirmation that you are the owner/admin of the site in question. Follow the instructions to create a text record in the zone file, or have your DNS provider do this for you if you have a managed service.

* Once applied, you may have to wait a short period of time for the change to fully propagate (due to caching and TTL ("time to live") before clicking the [verify property](https://drive.google.com/open?id=0B3iRPBzyhQkiOWFQV0ZLOG5MZGM) button within the Google Search Console page

* Google see http and https versions of your site separately, as with `www.` and non-`www.` versions - repeat for all combinations of your site

* Set up a property set by clicking the "Create a set" button in GSC (next to the "Add a property" button) and add all the previously created versions of your site to the set

* Go to your default and preferred version of your site, click the cog in the top right quadrant of the page and select the "site settings" from the dropdown. Select your preferred way of displaying your domain, whether it's with the `www.` or the naked domain

* Click the cog in the upper right quadrant and select Google Analytics Property from the drop down. Now select the appropriate GA property to link with. If you've followed the recommended naming convention above, it should be along the lines of "Domain name (Live)"

* It's important that you choose a consistent approach for displaying your domain within search engines and make sure it's mirrored in your site configuration through canonicalisation and also ensuring that your site is configured to display/redirect to the default version, no matter what version a user types/clicks. Further reading: [canonicalisation](https://moz.com/learn/seo/canonicalization) and [redirection/rewrites](https://moz.com/blog/url-rewrites-and-301-redirects-how-does-it-all-work)


* [Link your Google Search Console to Google Analytics]( https://support.google.com/analytics/answer/1308621?hl=en)

### Google Search Console - additional reading

* [https://www.geckoboard.com/blog/4-ways-to-automagically-get-your-data-into-spreadsheets/#.WDRyd6KLTjA](https://www.geckoboard.com/blog/4-ways-to-automagically-get-your-data-into-spreadsheets/#.WDRyd6KLTjA)

* [http://www.linkresearchtools.com/case-studies/the-ultimate-guide-to-google-webmaster-tools/](http://www.linkresearchtools.com/case-studies/the-ultimate-guide-to-google-webmaster-tools/)

* [https://blog.kissmetrics.com/beginners-guide-to-google-webmaster-tools/](https://blog.kissmetrics.com/beginners-guide-to-google-webmaster-tools/)

* [http://www.bruceclay.com/blog/set-up-google-search-console/](http://www.bruceclay.com/blog/set-up-google-search-console/)

* [https://online.marketing/guide/https/](https://online.marketing/guide/https/)


## Set up Bing Webmaster Tools

[Bing Webmaster Tools]( https://www.bing.com/toolbox/webmaster) is a service for website administrators to check indexing status, optimise visibility of their websites, view a sample of websites that link back to you, and see site errors and Bing crawl stats.

* [Sign in to Bing Webmaster Tools using a shared email account]( https://www.bing.com/toolbox/webmaster)

* Add your domain. Note: it's often best to start with the root domain (without the `www.`) e.g. `https://twitter.com`

* Submit a link to your XML sitemap - this is normally found at `yoursite.com/sitemap.xml`

* You'll be presented with 3 verification options. Our recommended method is to use the "add CNAME record to DNS" option. You'll be presented with a string of characters used by Bing for confirmation that you are the owner/admin of the site in question. Follow the instructions to create a text record in the zone file, or have your DNS provider do this for you if you have a managed service.

* Once applied, you may have to wait a short period of time for the change to fully propagate (due to caching and TTL ("time to live") before clicking the "Verify" button.

* Bing sees http and https versions of your site separately, as with `www.` and non-`www.` versions - repeat for all combinations of your site

* There is no way via Bing to set your preferred version of your site - instead you must set up your `www.` to redirect to non-`www.` on your server and via your sitemaps and canonicalisation. It's important that you choose a consistent approach for displaying your domain within search engines and make sure it's mirrored in your site configuration through canonicalisation and also ensuring that your site is configured to display/redirect to the default version, no matter what version a user types/clicks. Further reading: [canonicalisation](https://moz.com/learn/seo/canonicalization) and [redirection/rewrites](https://moz.com/blog/url-rewrites-and-301-redirects-how-does-it-all-work).


## Set up and link Google AdWords

Google AdWords is a pay-per-click (PPC) marketing platform. It's good practice from a budgetary, risk, audit and management perspective to manage AdWords accounts in-house, delegating access/permissions to agencies and staff where necessary. For this there are two account options for organisations:

* [Standard AdWords account](https://adwords.google.com/home/) (applies to the majority)

* AdWords Manager Account (applies to organisations with multiple accounts)

It's important to note that if you believe a management account is necessary, you should choose this option before setting up a standard account (otherwise, you'll need to create another account if you've already set up a standard account). Your organisation will be best placed to get a Manager Account if you run multiple accounts across multiple sites or have complex budgetary and procurement structures.

The other reason you may require a Manager Account, is if you're looking to apply for and use the Google AdWords API, where it's a prerequisite.

To set up a Manager Account:

* [Create an account](https://adwords.google.com/home/tools/manager-accounts/)

* Once completed you'll be taken to the dashboard. From here you can add any existing Google AdWords accounts or create an automatically linked account. Click the "+ Account" button and select the appropriate option from the dropdown.


## Google account recovery

In the instance where there's an existing Google Analytics account but access has been lost, you can recover it using the following steps:

* Identify the Google Analytics property ID you're looking to recover - you can get this by navigating to one of your pages and using the [Google Tag Assistant Chrome extension](https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk) or by viewing the page source and looking for your UA code, which begins "UA-XXXXXX".

* Log into Google AdWords. If you don't have an existing account, create one and log in

* Once logged in, click the cog in the top right-hand corner and click on "Worldwide phone support", pick the relevant number for your country and phone Google.

* Select the Analytics option, input your AdWords Customer ID (found in the top right of the AdWords webpage) and you'll be directed to the support team.

* Note that it can be several days before resolution and account access is restored
