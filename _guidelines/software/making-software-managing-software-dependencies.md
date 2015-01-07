# Service Manual

## Managing Software Dependencies

Modern software development can be a complex beast, but thanks to open source and 3rd party code you no longer have to create all functionality from scratch. Given that in software development common tasks are repeated time and time again many of these functions are available in 3rd party libraries. 

## Approach

While this brave new world offers much, we still need to approach with caution. Trust is important when dealing with 3rd party code, it should not be implicit but a function of verifying that the 3rd party code does what it is supposed to do.

With the usage of third party code comes great responsibility. While it can save considerable time in getting a product up and running you have to take steps to gain a trust level with any 3rd party code you are using.

We advocate that the following steps be undertaken to evaluate open source or 3rd party code for inclusion within a project:

#### Documentation

* Is documentation available?
* Is the documentation updated with each release?
* Does the documentation cover the use-case of the library effectively?

#### Code Audit

* Review the source code
* Review the licence for compatibility with your project
* Determine the language version which the code has been developed for  #### Active
* Are there regular releases and patches?
* How quickly are tickets resolved?
* How many commits are occurring in the project?* Are pull requests for features being accepted?
* Are pull requests for bug fixes being accepted?

#### Verification

* Obtain the library (in binary form) from a trusted source.
* Compare expected MD5 / Sha 1 hashes with that supplied by the creator(s).
* Build the library from source.

## Tools

There are a number of tools available that help with managing open source and 3rd party library dependencies in software development.  

We make use of Maven Central, Node Package Manager, RubyGems and Bundler for delivering software throughout our stack. We also run a local on-premise Sonatype Nexus instance, which affords us the ability to install locally developed code (snapshots and releases) to the instance as well as use it as an on-premise cache of the 3rd party libraries used in the development of mygov.scot.

| Name | Description | Links | | - | - | | Maven | JVM / Java based build and dependency management tool | [Maven](http://maven.apache.org/) | | NPM | Node Package Manager | [NPM](https://www.npmjs.org/) | | Bundler | For managing and tracking RubyGem versions and dependencies | [Bundler](http://bundler.io/) | | RubyGems | The original Ruby package management system | [RubyGems](https://rubygems.org/) | | Bower | JavaScript and CSS package manager | [Bower](http://bower.io/) | | Carton | Perl package manager | [Carton](http://search.cpan.org/~miyagawa/Carton-v1.0.12/lib/Carton.pm) | | Sonatype Nexus Repo | Repository management | [Sonatype Nexus](http://www.sonatype.com/nexus) | | Sonatype CLM | Component lifecycle management | [Sonatype CLM](http://www.sonatype.com/clm/overview)

## Finding open source or third party libraries

Once you have your approach for using open source and 3rd party libraries the next step is to identify where to get them from.  In no order of merit, the following sites are excellent resources for open source and 3rd party code:    | Name | Site Link | | - | - | | Github | [github.com](https://github.com/) | BitBucket | [bitbucket.org](https://bitbucket.org/) | | Google Code | [code.google.com](https://code.google.com/) | | Apache Project | [apache.org](http://www.apache.org/) |
 
 
 
