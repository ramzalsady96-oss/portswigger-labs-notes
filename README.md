# Cybersecurity Labs & Security Research Portfolio

![Cybersecurity](https://img.shields.io/badge/Field-Cybersecurity-blue)
![Web Security](https://img.shields.io/badge/Focus-Web%20Application%20Security-orange)
![Status](https://img.shields.io/badge/Status-In%20Progress-green)

This repository documents my practical journey as a Cybersecurity student, focusing on Web Application Security, Vulnerability Analysis, Secure Coding, and Security Testing.

The purpose of this repository is not only to solve security labs, but also to build a practical understanding of how vulnerabilities work, how applications can be tested in authorized environments, how security issues can be analyzed, and how vulnerable applications can be redesigned and secured.

The repository is divided into two main areas:

1. **PortSwigger Web Security Academy Labs**
2. **My Own Security Projects & Custom Labs**

---

## Repository Goals

The main goals of this repository are:

- Learn Web Application Security through practical labs.
- Understand common web vulnerabilities and their root causes.
- Practice vulnerability analysis in authorized environments.
- Build vulnerable applications for educational purposes.
- Develop secure versions of vulnerable applications.
- Analyze JavaScript source and sink behavior.
- Understand the data flow of untrusted input.
- Practice vulnerability remediation and retesting.
- Build professional cybersecurity documentation.
- Create security assessment reports.
- Develop practical projects that demonstrate my cybersecurity skills.

---

# Repository Structure

```text
portswigger-labs-notes/
│
├── README.md
│
├── Labs/
│   │
│   └── XSS/
│       │
│       ├── README.md
│       ├── Lab-01-Reflected-XSS.md
│       ├── Lab-02-Stored-XSS.md
│       ├── Lab-03-DOM-XSS.md
│       │
│       ├── screenshots/
│       │   ├── reflected-xss/
│       │   ├── stored-xss/
│       │   └── dom-xss/
│       │
│       └── references/
│
└── Custom-Projects/
    │
    └── XSS-Security-Lab/
        │
        ├── README.md
        │
        ├── vulnerable-version/
        │   ├── index.html
        │   ├── style.css
        │   └── script.js
        │
        ├── secure-version/
        │   ├── index.html
        │   ├── style.css
        │   └── script.js
        │
        ├── labs/
        │   ├── reflected-xss/
        │   ├── stored-xss/
        │   └── dom-xss/
        │
        ├── dashboard/
        │
        ├── screenshots/
        │
        ├── docs/
        │   ├── vulnerability-analysis.md
        │   ├── remediation.md
        │   └── javascript-security-analysis.md
        │
        └── reports/
            └── xss-security-assessment.pdf

Part 1 — PortSwigger Web Security Academy Labs
Overview
This section contains my practical notes and solutions for security labs completed through PortSwigger Web Security Academy.
PortSwigger Web Security Academy is used as a controlled and authorized learning environment for studying web application security vulnerabilities.
The labs help me understand how vulnerabilities behave in real web application scenarios and provide practical experience with vulnerability identification, exploitation, and remediation concepts.
Topics
The topics covered in this section include:
Cross-Site Scripting (XSS)
SQL Injection
Authentication Vulnerabilities
JSON Web Token (JWT) Vulnerabilities
API Security
Access Control
Other Web Application Security Topics
Current Progress
Category
Status
Cross-Site Scripting (XSS)
🔄 In Progress
SQL Injection
⏳ Planned
Authentication
⏳ Planned
JWT Vulnerabilities
⏳ Planned
API Vulnerabilities
⏳ Planned
Documentation Approach
For each completed lab, I document:
Lab Information
Objective
Vulnerability Overview
Root Cause
Exploitation Methodology
Proof of Concept
Evidence
Impact
Mitigation
Lessons Learned
References
The purpose is to document not only how the vulnerability was exploited in the authorized lab environment, but also why the vulnerability exists and how it can be mitigated.
Part 2 — My Own Security Projects & Custom Labs
Overview
This section contains security projects and educational web applications that I design and build myself.
The goal is to move beyond solving existing labs and demonstrate my ability to:
Design web applications.
Build vulnerable applications for controlled testing.
Analyze application security.
Understand JavaScript behavior.
Identify vulnerable data flows.
Implement secure coding practices.
Fix vulnerabilities.
Retest applications after remediation.
Document the complete security lifecycle.
These projects are intended to demonstrate practical cybersecurity knowledge combined with web development and secure coding skills.
Project 01 — XSS Security Lab
Project Overview
The XSS Security Lab is a custom educational web application that I plan to design and build to demonstrate Cross-Site Scripting vulnerabilities and their remediation.
The project will be designed as a practical security training environment where the vulnerability lifecycle can be studied from multiple perspectives: