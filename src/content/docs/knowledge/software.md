---
title: Software
description: Office, database, messaging, and platform software encountered during the internship.
---

## Overview

This page covers general-purpose software and platforms encountered during the internship: Windows Server administration tools, MikroTik/VoIP management tools, Microsoft Access, and the SMS.ir messaging platform. Business-specific systems (ERP, CRM, etc.) are covered in [Business Systems](../business-systems/overview/).

## Windows Server & Network Tools

- **Windows Server** and its administration tools (Server Manager, Active Directory Users and Computers) — see [Servers & Server Room → Windows Server](../it-environment/servers-server-room/#windows-server).
- **Winbox** and the RouterOS web interface, used to manage MikroTik devices — see [Network → MikroTik](../it-environment/network/#mikrotik).
- **Issabel**, the platform on which VoIP and contact-center call routing were configured — see [Network → Issabel Contact Center / PBX Administration](../it-environment/network/#issabel-contact-center--pbx-administration).
- **Kerio Control**, used as a firewall/UTM — see [Security → Firewalls and UTM](../it-environment/security/#firewalls-and-utm).
- **vSphere / vCenter / ESXi**, used for server virtualization — see [Servers & Server Room → Physical Servers & Virtualization](../it-environment/servers-server-room/#physical-servers--virtualization).

## Microsoft Access

### Concepts

**Microsoft Access** is a desktop relational database management system (RDBMS) bundled with Microsoft Office. It combines a database engine (based on the Access Database Engine / Jet) with built-in tools for building forms, queries, and reports, making it possible to create small-to-medium data-driven applications without needing a separate database server or writing a full application from scratch.

Typical use cases for Microsoft Access include:

- **Small business data tracking** — e.g., inventory lists, contact/customer records, simple order tracking — for organizations too small to justify a full ERP/CRM deployment.
- **Rapid prototyping of data-entry applications** — building a working form-based application quickly using Access's built-in form designer, before (if needed) migrating the data model to a more robust database platform.
- **Departmental or personal databases** — used by individual teams to track data relevant to their own workflows (e.g., a maintenance log, an asset checklist) without needing IT to provision a dedicated server-based database.
- **Reporting** — generating formatted printable/exportable reports directly from stored data using Access's built-in report designer.
- **Front-end for larger databases** — Access can also act as a front-end (forms/reports layer) connected to a back-end database engine such as SQL Server, letting users interact with a larger, centrally hosted database through a simpler Access-based interface.

### At BehMalt

Microsoft Access was introduced during the internship as a tool for working with data — building and querying simple databases directly from within the Microsoft Office suite. Specific Access-based applications in use at BehMalt were not detailed in the notes — `[unclear]`.

## SMS.ir (SMS Panel)

### Concepts

**SMS.ir** is an SMS gateway/panel service that allows organizations to send bulk or individual SMS messages to users programmatically or through a web panel. Such platforms typically offer multiple **sending lines**, each with different rules and use cases:

- **Service (transactional) lines** — used for operational/service messages (e.g., order confirmations, appointment reminders, verification codes). These messages are typically delivered even to numbers that have opted out of advertising messages, but sending **promotional/advertising content** over a service line is against the provider's usage policy.
- **Advertising (promotional) lines** — used specifically for marketing/ad content, and are subject to opt-out/blocking by recipients who do not wish to receive ads.

SMS.ir also supports **location-based/area-targeted sending**, allowing messages to be sent to recipients within a specific geographic area — useful for localized advertising campaigns (e.g., promoting a store opening or local offer to nearby recipients) without needing a pre-existing contact list for that area.

### At BehMalt

SMS.ir was introduced as a platform for sending SMS messages to users, distinguishing between service lines (operational messages, not permitted for ads) and advertising lines (marketing content, blockable by users), as well as its area-targeted sending capability for localized advertising. Specific BehMalt use cases (e.g., which line is used for which business process) were not detailed in the notes — `[unclear]`.
