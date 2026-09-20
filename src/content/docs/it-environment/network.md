---

title: Networking

description: Network topology, passive cabling, fiber optics, security layers, VoIP, and MikroTik at BehMalt.

---

## Overview

Network infrastructure was one of the main technical areas covered during the internship at BehMalt. This page covers network topology, passive networking and structured cabling, fiber optics, network security layers, IP addressing, VoIP, and MikroTik router configuration.

## Network Topology

### Concepts

Network topology describes how devices are connected physically or logically within a network. Common topologies include bus, star, ring, and mesh. In a **star topology**, end devices are connected to a central point, typically a switch. This design simplifies network management and fault isolation compared with older bus-based designs.

As the physical distance between network points or buildings increases, the physical implementation may require different cabling, such as fiber instead of copper, or intermediate distribution points, while the logical topology can remain similar.

### At BehMalt

The network topology at BehMalt is **primarily star-based**. As the distance between points increases, such as between floors or buildings, distribution points and communication paths are used according to the physical environment.

## Passive Networking and Structured Cabling

### Concepts

**Passive networking** refers to the physical cabling infrastructure that provides the transmission path between network equipment. It is distinct from active equipment such as switches and routers, which process and manage network traffic.

Key components include:

* **Cabling**: Ethernet cables are categorized using standards such as CAT5e, CAT6, and CAT6a. Cable category defines performance requirements such as bandwidth and link-length specifications.

* **Patch Cords**: Short cables with connectors at both ends, used to connect equipment or patch panels to active network equipment.

* **Patch Panels**: Fixed panels installed in racks where permanent network cables, such as cables routed through walls or ducts, are terminated. Patch cords are typically used to connect patch panels to switches.

* **Keystone Jacks**: Modular connectors used for terminating network cables. They can be installed in wall outlets or keystone-compatible patch panels.

* **Wiring Standards**: Ethernet cable termination is commonly performed according to the T568A or T568B wiring standards. The selected wiring scheme must be implemented correctly according to the connection type at both ends of a given link.

* **Joining Cable Runs**: Ethernet cables should not be joined by directly connecting their internal conductors. A **barrel connector (coupler)** or a **keystone jack** can be used as an appropriate intermediate connection point.

* **Cable Shielding**: Network cables are available with different shielding configurations, including `U/UTP`, `F/UTP`, `U/FTP`, `S/FTP`, and `SF/UTP`. Shielded cables are useful in environments with higher electromagnetic interference and require proper shield termination and grounding.

### At BehMalt

The structured cabling infrastructure observed and worked with at BehMalt included:

* Cabling from wall outlets and keystone boxes to a **central rack**, where the cables are terminated on **patch panels**. Patch cords are then used to connect the patch panels to switches or other active equipment.

* **Cable management** using **ducts** and **trunking**. Trunking provides better organization and management of cable routes and typically includes various accessories for cable management. Installation requirements should be determined based on applicable standards and site conditions; a fixed distance such as 70 cm should not be treated as a universal rule.

* **Red electrical outlets** used for UPS-connected equipment, distinguishing them from standard power outlets.

* Use of cable-management equipment such as **cable combs and cable organizers** to organize cables inside racks.

### Practical Experience

* Terminating a network cable on an RJ45 connector according to the applicable wiring standard

* Punching down a **Keystone Jack**

* Testing a terminated cable with a **Cable Tester**

* Understanding Ethernet cable construction and the use of **four twisted pairs, equivalent to eight conductors**

* Introduction to **Power over Ethernet (PoE)** and the transmission of power and data over a single Ethernet cable for devices such as Access Points and VoIP phones

### Lessons Learned

* Permanent cabling should be terminated on patch panels, while patch cords should be used for flexible connections to active equipment. This separation makes network changes and equipment relocation easier.

* Trunking can be more suitable than simple ducting when more precise cable-route organization and management are required.

## Fiber Optics

### Concepts

Fiber-optic cabling transmits data as optical pulses and, compared with copper cabling, provides longer transmission distances, high bandwidth, and immunity to electromagnetic interference.

Common fiber-related activities include **cleaving** and **fusion splicing**. In fusion splicing, two fiber ends are joined using specialized equipment.

Fiber-optic cables have a minimum bend radius. Exceeding the permitted bend radius can increase optical loss or damage the fiber.

**FTTH (Fiber to the Home)** refers to an architecture in which fiber extends to the end user's premises.

**FTTx** is a general term for different fiber-access architectures where `x` identifies the point at which the fiber terminates, such as FTTH, FTTB, and FTTC.

### At BehMalt

The fiber-related concepts and tools introduced during the internship included cleaving and fusion-splicing tools, proper fiber handling and bending practices, and FTTH as one example of a fiber-access architecture. Specific fiber equipment brands or models were not recorded in the internship notes.

## Network Security Layers

### Concepts

Network security is generally implemented in layers, with different technologies and controls contributing to the protection of the infrastructure.

* **Firewall / UTM**: A firewall controls inbound and outbound traffic according to security rules. UTM combines multiple security capabilities, such as Firewall, VPN, content filtering, and, in some products, intrusion detection and prevention capabilities, within a single platform.

* **Fortinet / FortiGate**: FortiGate is a family of network-security appliances from Fortinet that provides capabilities such as Firewall, VPN, traffic control, and advanced security features.

* **pfSense**: A FreeBSD-based Firewall and Router platform providing capabilities such as Firewall, NAT, VPN, routing, and traffic management.

* **Kerio**: Kerio solutions are used in some organizational environments for capabilities such as Firewall, VPN, traffic control, and network access management.

* **Router and Switch Security**: Routers and switches can provide controls such as Access Control, Port Security, and restrictions on management services in addition to their routing and switching functions.

* **Physical Security**: Protecting server rooms, racks, network equipment, and cable routes is also part of network infrastructure security.

### At BehMalt

During the internship, network security was studied **conceptually and across multiple network layers**. This included the roles of Firewall/UTM systems, routers, switches, and security controls in protecting the network.

In organizational environments, solutions such as **Fortinet / FortiGate**, **pfSense**, and **Kerio** can be used for security-policy enforcement, traffic control, NAT, VPN, and network-access management.

Network security is not limited to security appliances. Physical protection of server rooms, racks, and network equipment is also part of the infrastructure protection chain.

## IP Addressing

### Concepts

IP addressing can be represented using **CIDR notation**, such as `/24`. This value specifies the length of the network portion of an address and determines the address range within a subnet.

Working with CIDR includes identifying the network address, broadcast address, and number of usable host addresses.

### At BehMalt

The internship covered reading and interpreting CIDR notation and calculating the address range of a subnet. These concepts are fundamental for network operation and MikroTik configuration.

## VoIP

### Concepts

**VoIP (Voice over IP)** transmits voice over IP networks, using data networks instead of traditional telephone infrastructure. Different protocols are used for signaling and media transmission; for example, SIP is commonly used for signaling and RTP for carrying audio.

### At BehMalt

BehMalt receives a **dedicated VLAN** for VoIP traffic from the telecommunications provider, allowing voice traffic to be separated from general data traffic.

VoIP traffic is controlled and permitted across different parts of the network, including the Firewall, router, and switches, according to service requirements.

VoIP at BehMalt is configured on **Issabel**, an open-source PBX and enterprise communications platform based on Asterisk.

### Issabel Contact Center / PBX Management

Issabel is used as a PBX and Contact Center platform for managing VoIP calls and their routing logic. Key management concepts include:

* **PBX (Private Branch Exchange)**: The central telephone system that routes calls between internal extensions and external lines such as trunks.

* **Business Hours Rules**: Rules for routing calls according to working hours, such as sending calls received outside business hours to voicemail or a predefined message.

* **Extensions**: Internal numbers assigned to users or organizational telephones.

* **Ring Groups**: Groups of extensions that ring simultaneously or sequentially according to a defined pattern when a call is received.

* **Queues**: A mechanism for placing calls in a queue and distributing them among agents, with features such as caller wait-time management and call-distribution strategies.

* **Ring Strategy**: An algorithm that determines how extensions or agents are called, such as simultaneous, sequential, or round-robin strategies.

## MikroTik

### Concepts

MikroTik is a network-equipment manufacturer, particularly known for routers, with many of its products running **RouterOS**. Common MikroTik management concepts include:

* **Initial Access**: In some initial setup scenarios, device discovery and MAC-based access can be used to connect to a device. Initial IP configuration depends on the model and factory configuration.

* **Winbox**: A MikroTik management tool that allows devices to be configured through IP and, in some situations, through MAC-based access.

* **Web Interface**: RouterOS provides a web-based management interface that can be available over HTTP or HTTPS depending on the device configuration.

* **NAT (Network Address Translation)**: Used to translate IP addresses as traffic passes through the router. `src-nat` is commonly used for outbound traffic, while `dst-nat` is used to modify the destination of traffic, such as in port forwarding.

* **DHCP**: A MikroTik router can operate as a DHCP Server for a network.

* **Port and Service Hardening**: Unnecessary management services should be disabled or restricted, and management ports may be changed where appropriate to reduce the attack surface.

* **Load Balancing**: Multiple WAN connections can be used for traffic distribution and improved availability. This can involve connection distribution, failover, and policy-based traffic routing.

* **Bridging**: The MikroTik Bridge feature can connect multiple interfaces within the same broadcast domain and can form part of a WAN connection design in some scenarios.

* **Certifications**: MikroTik-related certifications such as **MTCNA** and **MTCRE**, along with broader networking certifications such as **CCNA** and **Network+**, are relevant educational paths in networking. For more information, see [Network Certifications](/fa/appendix/references/).

### At BehMalt

Observed activities and practical work related to MikroTik included:

* Performing an **OS/firmware update** on a MikroTik router

* Obtaining **initial access** to the router through MAC-based access and then assigning an IP address

* Connecting to the router through **Winbox** using its IP address

* **Disabling unnecessary ports and services** as part of hardening

* **Changing default management ports**

* Using the router as a **DHCP Server**

* Learning a practical method for maintaining an emergency management path in case the primary configuration becomes inaccessible

* Defining **NAT rules** with a distinction between source NAT and destination NAT

* Using the RouterOS web interface as an alternative to Winbox

* Learning about **Load Balancing** across multiple WAN connections and its use for failover and traffic distribution

### Lessons Learned

* Network-device hardening should include a controlled emergency management path to prevent administrative lockout.

* Restricting management services and disabling unnecessary services are fundamental network-device hardening practices.

* Understanding the difference between `src-nat` and `dst-nat` is essential for designing Internet access and controlled exposure of internal services.

## Related Sections

* [Servers and Server Room](/fa/it-environment/servers-server-room/) — Windows Server can provide services such as DHCP and DNS, while Active Directory enables centralized user and access management.

* [Hardware](/fa/it-environment/hardware/) — Rack equipment, cable-management tools, and testing equipment used in passive networking.

* [Security](/fa/it-environment/security/) — Firewall/UTM technologies, including Fortinet / FortiGate, pfSense, and Kerio, as well as physical security for server rooms and network equipment.
