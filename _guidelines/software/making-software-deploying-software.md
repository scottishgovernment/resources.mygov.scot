layout: detailed-guidance
title: Deploying software
subtitle: Principles to ensure frequent, low-risk deployments
category: making-software
type: guide
audience:
  primary: tech-archs, web-ops
  secondary: developers, performance-analysts, qa
phases:
  - alpha
  - beta
  - live
breadcrumbs:
  -
    title: Home
    url: **CHECK—>/service-manual**
  -
    title: Making software
    url: **CHECK—>/service-manual/making-software**

## Deploying Software

A central idea to which we subscribe is the notion of increased software deployment frequency whilst reducing risk. This idea is not tied to a particular technological implementation, it is independent of your technology stack.
 
We consider that the following principles are key to creating software that fulfils user needs: 

* Rapid delivery of working software
* Operate using continuous delivery
* Optimise and lower your cycle time
* Repeatable, auditable and automated deployments of artefacts
* Zero downtime releases
* Repeatable, audit able and automated provisioning of infrastructure environments

### Rapid delivery of working software
By producing working software quickly, we can include the stockholder early in the development process. This is crucial as it allows us to garner feedback early and make sure that the features being developed fulfil the user and stakeholder requirements.
### Operate using continuous delivery
Continuous delivery is a practice used within software development to automate and reduce risk factors within the software development process. It combines a number of other practices including automated testing, continuous integration and the implementation of a build pipeline. 
### Optimise and lower your cycle time
A key area which should be optimised is the time it takes a feature to go from a code change to being available in the production environment. This is important as a product should be able to respond to change effectively and not increase risk whilst doing so. This quick iteration approach is crucial to the Agile method of delivery, it allows you to get your product in front of the end-user as quickly as possible
  
### Repeatable, auditable and automated deployments of artefacts

Make things easy for yourself. Avoid common anti-patterns around deployment and favour the production of one (or more) artefacts for delivering the software into the production environment.
 
We consider the production of single executable artefact to be an important goal in the software deployment process:

* JAR file for JVM based languages. 
* Debian package file

This approach lowers risk and reduces the need for manual intervention.
  
By leveraging the deployment of artefacts you can also reduce coupling to other components within your software stack. Consider an approach that separates out the:
 
### Zero downtime releases

We consider that any release of software should be instantaneous and opaque to the end-user. Likewise any roll-back to a previous release should also be instantaneous and opaque to the end-user.

We achieve this level control by implementing the concept of blue-green deployments. This approach uses two identical versions of the production environment where one environment - blue - has the latest release deployed to it and the other environment - green - continues to serve the previous software release. This allows the new release on blue to be “warmed up” and additional smoke tests can be run to ensure stability. When confident that the “blue” release is performing as expected, one can switch the “green” to “blue” and “blue” to “green” to achieve zero downtime releases.

It is worth defining the concepts of read-only and write-only deployments. The former deals with deployments of software artefacts where the end-users interaction is a read only process - viewing a web page for example. The latter deals with deployments of software where the end-users interaction involves the creation or updating of data.
 
 
### Repeatable, auditable and automated provisioning of infrastructure environments

To fully realise our goal of increased frequency and reduced risk, the final piece of the puzzle involves the environments to which the software is deployed to. Your build pipeline should be identical in software stack and configuration. In fact, we consider that the machine which the code is developed on should also fall under this rule. This approach creates a continuum of consistency which increases confidence in the software being developed.

It is useful at this stage to define read-only and read-write deployments.  Broadly speaking, read-only deployments are artefacts deployed into production that have no dependencies and do not create or alter data within the production system (often referred to as ***transactional***) and read-write deployments are artefacts that are deployed into production that have dependencies on components that create or alter data on the production system.

##### Database Migrations
For deployments that have read-write concerns, we consider it best practice to use a migrations approach. As application code is iterated over time to deliver new features, invariably affected will be the persistent storage solution that is in use. To make sure that that application code and persistent storage change in step, database migration scripts should be used. These scripts can be implemented as SQL scripts or as application code if a object relational mapping solution is being used. 