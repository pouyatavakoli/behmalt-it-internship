---

title: Security

description: Firewall/UTM practices, physical security, and account and access management at BehMalt.

---

## Overview

During the internship at BehMalt, security was studied across three main areas: **Firewall/UTM security** as a major network-traffic control point, **physical security** for protecting the server room and equipment, and **account and access security**.

Layered network-security concepts, including security controls on routers and switches, are covered in [Networking](/behmalt-it-internship/fa/it-environment/network/). This page focuses primarily on Firewall/UTM, physical security, and account and access management.

## Firewall and UTM

### Concepts

A **Firewall** controls inbound and outbound network traffic according to a set of security rules and policies. **UTM (Unified Threat Management)** combines multiple network-security capabilities into a single platform and may include features such as Firewall, VPN, content filtering, and intrusion detection and prevention.

Firewalls and UTM platforms can be implemented in different forms:

* **Hardware Appliance** — A dedicated physical device designed to provide Firewall and network-security capabilities.

* **Software Firewall** — Software running on general-purpose hardware that can provide Firewall or Router functionality.

Common Firewall/UTM capabilities include:

* **Access Control** — Controlling which users and devices can access specific resources and services.

* **NAT and Firewall Rules** — Translating network addresses and allowing or blocking traffic according to defined policies. See [Networking](/behmalt-it-internship/fa/it-environment/network/) for NAT concepts.

* **Traffic Management** — Controlling, prioritizing, or limiting traffic to manage bandwidth usage and protect latency-sensitive services such as VoIP.

* **DHCP Server** — Some Firewall/UTM platforms can operate as DHCP Servers and assign IP addresses to network clients.

* **DNS** — Some products can act as DNS Resolvers or Forwarders for network clients.

* **Content Inspection and Filtering** — Depending on the product, traffic can be inspected and filtered to identify threats, inappropriate content, or suspicious patterns.

* **Logging and Monitoring** — Recording and displaying information about traffic, security events, bandwidth usage, and user activity.

**Traffic Rules** are a core part of Firewall configuration. They define which traffic is allowed or blocked based on factors such as source, destination, port, protocol, and other conditions. Capabilities such as NAT, VPN, filtering, and logging are used alongside these policies depending on the product and configuration.

### Fortinet / FortiGate

**FortiGate** is a family of network-security appliances and products from Fortinet that provides capabilities such as Firewall, NAT, VPN, traffic control, filtering, and advanced security features.

FortiGate can be deployed at the network edge and act as a traffic-control point between the internal network and external networks.

### pfSense

**pfSense** is a FreeBSD-based Firewall and Router platform that can run on general-purpose hardware or compatible appliances.

Common pfSense capabilities include Firewall, NAT, routing, VPN, DHCP, DNS, and traffic management. It allows general-purpose hardware to be used as a network-security and routing solution.

### Kerio

**Kerio** is also a family of network and security solutions that has been used in some organizational environments for capabilities such as Firewall, VPN, traffic control, and network-access management.

### At BehMalt

During the internship, Firewall and UTM concepts and their role in controlling network traffic were studied. Due to security considerations, specific equipment names, internal configurations, and organizational security policies are not documented here.

Platforms such as **Fortinet / FortiGate**, **pfSense**, and **Kerio** were examined as examples of Firewall/UTM or Firewall/Router solutions.

### Lessons Learned

* Firewall rules should be designed according to actual service requirements and the **Least Privilege** principle, allowing only the traffic that is required.

* A Firewall can be implemented as a dedicated hardware appliance or as software running on general-purpose hardware.

* DHCP, DNS, NAT, and VPN can be provided alongside Firewall functionality on a network-security platform, but each service should be enabled according to the organization's architecture and requirements.

* Recording and reviewing Firewall logs and reports is important for monitoring and troubleshooting network events.

## Domain vs. Workgroup

### Concepts

Windows computers can be organized using different identity and access-management models. Two common models in Windows environments are:

* **Workgroup** — Each computer independently manages its local user accounts and security settings, without a centralized authentication authority. This model is suitable for small and simple environments.

* **Domain** — A centralized model for managing identities and network resources, commonly implemented using **Active Directory Domain Services (AD DS)**. Users, computers, and security policies can be centrally managed. See [Servers and Server Room](/behmalt-it-internship/fa/it-environment/servers-server-room/) for more information.

### At BehMalt

* **Workgroup** is suitable for small and simple networks that do not require centralized management of users and computers.

* In an **organizational environment**, using a Domain enables centralized management of users, computers, and policies. An organizational identity can also be used for access control across different services when those services support the required authentication mechanisms and are configured accordingly, including infrastructure and management services such as ESXi and vCenter.

### Lessons Learned

Centralized identity management through a Domain allows user accounts and access policies to be managed more consistently across different systems and services, reducing the need to maintain separate accounts on each device.

## Physical Security

### Concepts

Physical security protects IT infrastructure against unauthorized physical access, environmental damage, and theft. Common considerations include server-room access control, equipment protection, environmental conditions, and fire safety. See [Servers and Server Room](/behmalt-it-internship/fa/it-environment/servers-server-room/) for more information.

### At BehMalt

The physical-security topics covered during the internship included **server-room access control** and the physical protection of equipment and the server-room environment. Infrastructure and server-room standards are documented in [Servers and Server Room](/behmalt-it-internship/fa/it-environment/servers-server-room/).

## Account and Access Security Practices

* Restricting server-room access to authorized personnel

* In Windows Server and Active Directory, using dedicated administrative accounts instead of using the Administrator account for routine activities, together with appropriate policies for privileged accounts

* On MikroTik routers, restricting management services, disabling unnecessary services, and changing management ports where appropriate

* Maintaining a controlled emergency management path to prevent lockout when applying security changes to network equipment

## Related Sections

* [Networking](/behmalt-it-internship/fa/it-environment/network/)

* [Servers and Server Room](/behmalt-it-internship/fa/it-environment/servers-server-room/)