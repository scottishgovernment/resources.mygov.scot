

# Architectural concepts: quality attributes
 
Defining and measuring the quality of delivered software is essential so that improvements can be made and best practice carried forward.
 
The quality attributes of a system tell us how the system behaves, and are often called ‘ities’.  
 
## Quality attributes
 
For the mygov.scot programme we have identified and defined a set of 18 quality attributes:

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

The importance of these cannot be overstated as they ensure there is a level of consistency of implementation. They also reduce complexity when we go to extend a system.

The quality attributes we have chosen follow the principles of good system design and help deliver our remit.

What follows is an introduction to quality attributes and a basic description of each. We will revisit each in future posts, looking at them in more detail.
 
### Accessibility

Accessibility is the degree to which a system is available to as many people as possible.

The concept often focuses on people with disabilities or special needs and their right of access.

This access is often enabled by the use of assistive technology.

### Availability

Availability is the amount of time that all components of the system are fully functional for its users.

Planned maintenance periods are excluded from availability measures.

### Capacity

Capacity is the maximum possible capability of the system in a particular dimension.

There is a difference between throughput and capacity. We consider throughput to be the total amount work that can be achieved by a system in a fixed period of time.

Typically, when measuring capacity, we would include items such as:

* Number of concurrent users
* Number of concurrent requests
* Number of concurrent messages processed
* Total data stored
* Network packet size

### Compatibility

Compatibility is the ability of a system to be fully functional across a defined range of technologies.
 
We consider typical dimensions of compatibility to include:

* Application Programming Interface (API) compatibility
* Browser compatibility
* Operating System (OS) compatibility
* Virtual Machine (VM)
* Programming language compatibility
* Hardware / device compatibility
* Character set compatibility

### Efficiency

Efficiency is the ability of a system to complete its tasks within a limited set of resources.
 
Resource limits would typically include:

* Memory
* Disk space
* CPU usage
* Network bandwidth
* Power consumption

### Elasticity

Elasticity is the ability of a system to add and remove capacity based on demand.

It should be noted that elasticity could be achieved by both manual and automatic methods.

### Extensibility

Extensibility is the ability to extend a system, with a minimum amount of effort, without impact to existing system functions.

Typically this would allow third parties to contribute new features or capabilities using published APIs, plugins or themes.

### Localisability

Localisability is the ability of the system to be configured to support a number of locales.

### Modifiabiity

Modifiability is the ability of the system to accommodate the addition, change and removal of features, with minimal impact on the rest of the system.

### Performance

Performance is the ability of a system to complete a specific function in a defined amount of time.

Compare this with our previous definition of capacity and our distinction of throughput.

### Recoverability

Recoverability is the ability to bring the system back to a known working state in a well-defined period of time.

### Resilience

Resilience if the ability of the system to tolerate anticipated faults.

### Robustness

Robustness is the ability of the system to tolerate unexpected or unplanned external or environmental conditions.

### Scalability

Scalability is the relative increase in the capacity of a system as resources are added; while the efficiency and performance of the system remains constant.

### Security

Security is the ability of the system to preserve the confidentiality, integrity and availability of information under external inputs.

### Serviceability

Serviceability is the ability of the system to be easily supported, maintained and operated.

Serviceability of the system will typically include activities such as:

* Installation
* Upgrading and patching
* Configuration
* Monitoring
* Debugging

### Testability

Testability is the measure of how easy it is to create tests for a system and its associated components, increasing the ability to find and isolate bugs in an effective way.

### Usability

Usability is the ease of use and learnability of the system.