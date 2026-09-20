---
title: Technical Lessons
description: Technical lessons learned during the internship.
---

- Structured cabling should terminate on patch panels, with patch cords providing the flexible connection to active equipment — this keeps the permanent infrastructure stable while allowing easy re-patching.
- Trunking gives more control over cable organization than simple ducting.
- Standard Ethernet cabling uses 4 wire pairs; PoE can deliver power over the same cable as data.
- CIDR notation (`/x`) determines the number of usable IP addresses in a subnet — an essential skill for planning and troubleshooting IP addressing.
- NAT has two directions that serve different purposes: source NAT (outbound) and destination NAT (inbound/port forwarding).
- A domain-based (Active Directory) environment centralizes authentication, policy, and resource sharing, in contrast to a workgroup where each machine is managed independently.
- Time synchronization (NTP) is foundational to a working Active Directory environment.
- Two Ethernet cables cannot simply be twisted together to join them — a proper barrel connector or keystone jack must be used for a reliable joint.
- Cable shielding comes in several distinct variants (U/UTP, F/UTP, U/FTP, S/FTP, SF/UTP), each offering a different tradeoff between interference resistance and cost/complexity.
- A load balancer's usefulness goes beyond combining bandwidth — it also supports failover, per-user traffic distribution, and prioritizing latency-sensitive traffic like VoIP.
- RAID provides real-time drive-failure redundancy and works best with uniform drive hardware, while SnapRAID trades real-time protection for the flexibility of mixing different drive sizes/types — making each suited to different use cases (production storage vs. backups/home-lab).
- A firewall/UTM's traffic rule set is its most important configuration element; features like reporting, DHCP, and antivirus are built around that rule set.
