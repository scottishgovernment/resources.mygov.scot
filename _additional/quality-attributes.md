---
layout: default
title:  "System Quality Attributes"
summary: Towards a measurable and empirical software engineering future.
imperative: Guidelines
index: 0
---

## Purpose

This document describes our approach to system quality attributes (often called non-functional requirements), what they are and the eighteen we have selected as being important to the software we build for the MyGov programme within the Scottish Government.

## Contents

* TOC
{:toc}
<!--TOC max3-->

## What is architecture?

When we seek to describe a set of components to define a system, we are creating its ***architecture***. When we refer to the architecture of a system, we are talking about core properties that are realised by its elements, relationships and the principles that underpin its design and evolution. When talking about a ***system***, we are referring to a collection of software and hardware elements that are defined in order to realise requirements.

### Dynamic and runtime structures

Two types of structure make up the elements that comprise a system and its relationships.

The static structures of a system are concerned with the internal design time elements and how they are structured. For example this can be packages or executable code, compiled classes or stored procedures within a database.

The dynamic structures of a system are concerned with the runtime elements and their interactions. For example, this may include messages sent between architecturally significant components, network requests or API calls.

These are both interrelated. In some cases, the static structures will be a predicate to the dynamic structures.

## Quality attributes

The core properties of a system are manifested by two components, its ***externally visible behaviour*** and its ***quality attributes***.

The externally visible behaviour of the system concerns itself with the functional elements of the system and how it interacts with its environment. These external behaviours can encompass such elements as the flow of information in and out of the system or how the system reacts to external stimuli.

Quality attributes are non-functional properties and represent the architectural constraints of the system. They allow us to describe the intended behaviours of a system within its execution environment and measure its suitability. Ultimately, the quality attributes of a given system affect the runtime behaviour, user experience and the systems overall design.

We have identified and defined a set of eighteen quality attributes which we feel are congruent to both the principles of good system design and our programme of work.

For the [MyGov](https://www.mygov.scot/) programme we have identified and defined a set of 18 quality attributes:

* Accessibility
* Availability
* Capacity
* Compatibility
* Efficiency
* Elasticity
* Extensibility
* Localisibility
* Modifiability
* Performance
* Recoverability
* Resilience
* Robustness
* Scalability
* Security
* Serviceability
* Testability
* Usability

These ensure a level of consistency of implementation and reduce complexity when we go to extend a system. The quality attributes we have chosen follow the principles of good system design and help us deliver great products for users.

What follows is an introduction to each quality attributes.

## Defining quality attributes

### Accessibility
Is the degree to which a system is available to as many people as possible. The concept often focuses on people with disabilities or special needs and their right of access. This access is often enabled by the use of assistive technology.

### Availability
Is the amount of time that all components of the system are fully functional for its users. Planned maintenance periods are excluded from availability measures.

### Capacity
Is the maximum possible capability of the system in a particular dimension. This would typically include:

  * Number of concurrent users
  * Number of concurrent requests
  * Number of concurrent messages processed
  * Total data stored
  * Network packet size

Note that there is a distinction between ***throughput*** and ***capacity***. We consider throughput to be the total amount work that can be achieved by a system in a fixed period of time.

### Compatibility
Is the ability of a system to be fully functional across a defined range of technologies. We consider typical dimensions of compatibility to include:

* Application Programming Interface (API) compatibility
* Browser compatibility
* Operating System (OS) compatibility
* Virtual Machine (VM) compatibility
* Programming language compatibility
* Hardware / device compatibility
* Character set compatibility

### Efficiency
Is the ability of a system to complete its tasks within a limited set of resources. Resource limits would typically include:

* Memory
* Disk space
* CPU usage
* Network bandwidth
* Power consumption

### Elasticity
Is the ability of a system to add and remove capacity based on demand. It should be noted that elasticity could be achieved by both manual and automatic methods.

### Extensibility
Is the ability to extend a system, with a minimum amount of effort, without impact to existing system functions. Typically this would allow third parties to contribute new features or capabilities using published APIs, plugins or themes.

### Localisability
Is the ability of the system to be configured to support a number of locales.

### Modifiabiity
Is the ability of the system to accommodate the addition, change and removal of features, with minimal impact on the rest of the system.

### Performance
Is the ability of a system to complete a specific function in a defined amount of time.
Compare this with our previous definition of capacity and our distinction of throughput.

### Recoverability
Is the ability to bring the system back to a known working state in a well-defined period of time.

### Resilience
Is the ability of the system to tolerate anticipated faults.

### Robustness
Is the ability of the system to tolerate unexpected or unplanned external or environmental conditions.

### Scalability
Is the relative increase in the capacity of a system as resources are added; while the efficiency and performance of the system remains constant.

### Security
Is the ability of the system to preserve the confidentiality, integrity and availability of information under external inputs.

### Serviceability
Is the ability of the system to be easily supported, maintained and operated. Service of the system will typically include activities such as:

* Installation
* Upgrading and patching
* Configuration
* Monitoring
* Debugging

### Testability
Is the measure of how easy it is to create tests for a system and its associated components, increasing the ability to find and isolate bugs in an effective way.

### Usability
Is the ease of use and learnability of the system.
