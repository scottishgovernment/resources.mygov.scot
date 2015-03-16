---
layout: article
title:  "Continuous delivery"
date:   2015-03-10 13:33:00
permalink: ../standard/continuous-delivery/ 
categories: documentation
summary: Build a service that can be iterated on a frequent basis and make sure resources are in place to do so.
tags: 
- policy
type: standard
parent: standard
thispage: continuous-delivery
headings:
- Statement
- Rationale
- Implications
- Supporting material
---

##Statement

Build a service that can be iterated on a frequent basis and make sure resources are in place to do so.

##Rationale

* Frequent Iteration - Build a service that can be iterated on a frequent basis and make sure resources are in place to do so in order to ensure it continues to meet the needs of citizens and businesses
* Automation - In order to be capable of frequent changes the resources required to make the change must be minimised, through the use of automation, without degrading the quality of what is produced
* Deployment Pipeline - Development, testing, architecture and management working together to create automated deployment pipeline to facilitate faster, stable changes

##Implications

### for delivery of the mygov.scot service

* Mygov.scot will implement continuous delivery as the fundamental model that underpins service implementation
* Mygov.scot will implement configuration management solutions for all artefacts including environment configurations, application packages, automated build configuration and developed application code to ensure all components can be pulled, via self service, by team members to create the necessary environments at the touch of a button
* Mygov.scot will utilise continuous integration to automatically build and test each incremental change
* Mygov.scot will implement a test strategy detailing processes, concepts and techniques for testing and defect management as well as detailing test automation strategies for design, environments, test data management and reporting
* Mygov.scot will implement a deployment pipeline to support automated deployment through automated test environments and push button automated deployment to production environments to maintain a suitable balance of automated continuous delivery with service stability

### for service providers of mygov.scot services

* Service providers and potential service providers must maintain ongoing awareness of service evolution through established communication channels
* Service providers and potential service providers must embrace the concept of continuing evolution within their use of mygov.scot service either through embracing similar processes within their own organisation or a clear understanding and development of interfaces between out services which are frequently subject to change and their static processes

##Supporting material

- [GDS, Digital by Default Service Standard, Criterion 19](https://www.gov.uk/service-manual/digital-by-default#criterion-19)
