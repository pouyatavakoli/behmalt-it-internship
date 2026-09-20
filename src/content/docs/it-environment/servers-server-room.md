---

title: Servers and Server Room

description: Server-room standards, physical servers, virtualization, and Windows Server infrastructure at BehMalt.

---

## Overview

This page covers two related areas: the **physical server room** and its environmental and structural requirements, and the **Windows Server** infrastructure hosted within it, including Active Directory and related services.

## Server Room Standards

### Concepts

A server room requires controlled environmental conditions for reliable hardware operation, including:

* **Temperature and humidity control**, typically provided through appropriate HVAC or cooling systems, to prevent overheating and reduce risks associated with excessive humidity, condensation, and static electricity.

* **Fire hazard mitigation**, including appropriate construction materials and, in professional environments, fire-suppression systems suitable for rooms containing electrical equipment.

* **Structured cabling** within the room (see [Networking](./fa/it-environment/network/)).

* **Access control** to restrict physical entry to authorized personnel (see [Security](./fa/it-environment/security/)).

### At BehMalt

The internship covered server-room standards conceptually, including temperature, humidity, cable organization, fire-risk considerations, and access-control requirements for the BehMalt server room. Specific numerical targets, such as exact temperature and humidity ranges, were not recorded in the internship notes.

## Physical Servers and Virtualization

### Concepts

Enterprise physical servers are generally designed with **redundancy** in mind to reduce the impact of individual component failures. Common features include:

* **Hot-swappable components** — Certain server components, such as fans, power supplies, and hard drives, can be replaced while the system remains running on compatible hardware.

* **RAID (Redundant Array of Independent Disks)** — Combines multiple physical disks into a logical array to provide, depending on the RAID level, redundancy, fault tolerance, and/or performance improvements. Redundant RAID levels such as RAID 1, RAID 5, RAID 6, and RAID 10 can tolerate specific disk failures according to the characteristics of each level.

  RAID arrays are commonly built using disks with matching capacities and specifications. Using disks of different capacities is possible in some configurations, but usable capacity can be constrained by the smallest disk; therefore, using similar disks is common practice.

* **SnapRAID** — A parity-based data-protection solution more commonly suited to personal, home, or archival storage pools. Unlike traditional RAID, it does not stripe data in real time, and parity is typically updated periodically. This allows disks of different sizes to be used, but it does not provide the same real-time redundancy behavior as traditional RAID.

* **iLO (Integrated Lights-Out)** — HPE's out-of-band server-management technology, providing remote hardware management independently of the operating system. Features such as remote console access, power control, monitoring, and hardware alerts can be provided through iLO. It has its own network interface and IP configuration. Initial iLO access information or credentials are provided on a label or with the server depending on its generation and model.

* **Server Virtualization (ESXi)** — **ESXi** is VMware's bare-metal hypervisor. It is installed directly on server hardware and allows multiple independent virtual machines to run on the same physical host.

* **vCenter / vSphere** — **vSphere** is VMware's virtualization platform, which includes ESXi and related management components. **vCenter Server** provides centralized management for multiple ESXi hosts and their virtual machines. vCenter Server is commonly deployed as the **vCenter Server Appliance (VCSA)**, a virtual-appliance-based deployment.

### At BehMalt

* The physical servers at BehMalt are primarily **HP/HPE** servers.

* The servers are deployed with redundancy in mind. Some **fans and hard drives** support hot replacement on compatible systems, while hard drives are configured in **RAID** arrays so that, depending on the RAID level, failure of a disk does not result in data loss.

* **SnapRAID** was discussed as a different approach to data protection and storage pools that allows disks with different capacities to be used and is more suitable for backup, archival, or non-production storage scenarios.

* **iLO** is the primary out-of-band management interface used for the HP/HPE physical servers. One of the initial setup steps is **assigning an IP address to iLO** so that it can be accessed through the management network. Initial access information is provided on a label or in the server documentation depending on the server model and generation.

* **ESXi** is used as the virtualization layer on the physical servers at BehMalt. In the environment examined, **the ESXi boot storage is kept separate from the RAID array used for VM data**. **Windows Server** then runs as a virtual machine on ESXi.

* Because the environment contains **multiple ESXi hosts**, **vSphere/vCenter** is used for centralized virtualization management. This provides a single management point for multiple hosts and virtual machines.

* The **vCenter Server Appliance** itself runs as a virtual machine and, in the environment examined, is hosted on one of the ESXi hosts.

### Lessons Learned

* RAID is designed to provide disk-failure tolerance, while using disks with matching capacities and specifications simplifies array management and utilization. SnapRAID provides greater flexibility for mixed disks, but its redundancy is not real-time.

* Separating hypervisor boot storage from VM data storage can provide clearer storage-role separation and simplify management.

* Out-of-band management such as **iLO** is important for managing and recovering physical servers even when the operating system is unavailable.

* **vCenter/vSphere** provides centralized management for environments with multiple ESXi hosts and reduces the need to administer each host independently.

## Windows Server

### Concepts

**Windows Server** is Microsoft's server operating system for hosting infrastructure, networking, and directory services in organizational environments. Relevant roles and services include:

* **Active Directory (AD)** — Microsoft's directory-service technology for centralized management of identities, users, computers, and resources within a domain.

* **DNS** — Resolves host and service names to IP addresses and is a core component of Active Directory infrastructure.

* **DHCP** — Automatically assigns IP addresses and other network configuration to clients. This role can also be provided by other infrastructure devices, such as MikroTik; see [Networking](./fa/it-environment/network/).

* **FTP** — A file-transfer service used in some environments for transferring files.

* **Certificate Authority (CA)** — Used to issue and manage digital certificates, including certificates for internal services.

* **Windows Time Service** — Provides time synchronization in Windows environments. Consistent system time is important for Kerberos-based authentication in Active Directory.

* **Hyper-V** — Microsoft's hypervisor for running virtual machines on physical hosts.

* **KMS (Key Management Service)** — Provides centralized activation of supported Windows and Microsoft products in organizational environments.

* **Server Manager** — A Windows Server management console for managing server roles, features, and related configuration.

### Active Directory / Domain

A **domain** provides centralized management of identities and network resources, while in a **workgroup**, each device independently manages its local accounts and security settings.

Domain membership enables **centralized authentication, Group Policy, and resource management**. For a comparison of Domain and Workgroup, see [Security](./fa/it-environment/security/).

Within Active Directory:

* **Active Directory Users and Computers (ADUC)** is the standard console for creating and managing user and computer objects.

* **Group Policy** allows administrators to centrally apply configuration and security settings to domain-joined machines.

* Resources such as **printers** can be made available to domain users through centralized Windows management and sharing mechanisms.

* File sharing can range from a simple **Shared Folder** to dedicated storage infrastructure such as **SAN** and **NAS**. FTP may also be used depending on the service architecture and requirements.

* In larger environments, solutions such as **WSUS** can be used to centrally manage and distribute Windows updates.

### At BehMalt

The internship covered:

* Windows Server roles including **Active Directory, DNS, DHCP, and FTP**, along with **Server Manager** for role management.

* The configuration and concepts of **time synchronization** for domain-joined systems.

* **Certificate Authority** functionality on Windows Server.

* **Hyper-V** as a virtualization role available in Windows Server.

* **KMS** for centralized activation of Windows products.

* Active Directory management through **ADUC**, including the concept of **domain membership**.

* An important security practice: avoiding the built-in **Administrator** account for routine administrative work and using a separate named administrative account. Where appropriate and after checking environmental dependencies, the built-in Administrator account can also be disabled.

* The option of using a dedicated **update-distribution server**, such as WSUS, in larger environments.

* **Printer sharing** in Windows environments.

* File-sharing options ranging from a simple shared folder to dedicated **SAN** or **NAS** infrastructure.

### Lessons Learned

* Using a dedicated, named administrative account instead of routinely using the built-in Administrator account is a basic practice for reducing privileged-account risk.

* Centralized services such as **AD and DNS** reduce administrative overhead and enable consistent management of users, systems, and policies.

* Consistent system time is essential for **Kerberos authentication** and therefore for reliable Active Directory operation.

## Related Sections

* [Networking](./fa/it-environment/network/) — MikroTik can provide DHCP Server functionality in some architectures.

* [Security](./fa/it-environment/security/) — Physical server-room access control, Firewall/UTM solutions including Fortinet / FortiGate, pfSense, and Kerio, and Domain versus Workgroup access models.

* [Hardware](./fa/it-environment/hardware/) — Server hardware installed in racks and related equipment.