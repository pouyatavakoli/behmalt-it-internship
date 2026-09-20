---
title: Operational Lessons
description: Operational lessons learned during the internship.
---

- Always leave one router port unconfigured for emergency access before applying port-hardening changes — a safeguard against accidental lockout.
- Disable the default Administrator account on Windows Server / Active Directory and use a dedicated named admin account instead, to reduce the risk of a well-known account being targeted.
- Change default management ports and disable unused ports/services on network equipment as a basic hardening step.
- For larger environments, use centralized services (update distribution servers, KMS, AD-based printer/file sharing) to reduce administrative overhead.
- Environmental control (temperature, humidity) and fire hazard mitigation are essential, ongoing operational concerns for a server room, not one-time setup tasks.
- A domain-based network (rather than a workgroup) lets a single user identity be reused consistently across systems — including being referenced directly in firewall access rules — instead of duplicating access management per system.
- DHCP exclusion ranges should be defined for infrastructure devices (servers, printers) so they are never handed out to regular client devices dynamically.
- iLO (or equivalent out-of-band management) should be configured with a reachable IP address as one of the first steps when provisioning a new physical server, since it provides access independent of the server's main OS.
