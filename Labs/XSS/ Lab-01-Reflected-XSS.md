# Reflected XSS into HTML Context with Nothing Encoded

## Lab Information

| Item | Value |
|------|-------|
| Category | Cross-Site Scripting (XSS) |
| Type | Reflected XSS |
| Context | HTML Context |
| Lab | Reflected XSS into HTML context with nothing encoded |
| Difficulty | Apprentice |
| Platform | PortSwigger Web Security Academy |
| Status | ✅ Completed |

---

## Objective

The objective of this lab is to identify and exploit a Reflected Cross-Site Scripting (XSS) vulnerability by injecting JavaScript into the application's search parameter and causing the payload to execute in the browser.

---

## Vulnerability Overview

Reflected Cross-Site Scripting (XSS) occurs when an application receives attacker-controlled input through an HTTP request and reflects that input into the application's response without applying appropriate output encoding for the context in which the data is rendered.

In this lab, the user-controlled search parameter is reflected directly into the HTML response without HTML encoding.

As a result, an attacker can inject HTML containing JavaScript that is interpreted and executed by the victim's browser.

---

## Root Cause

The root cause is the unsafe handling of untrusted user input in an HTML context.

The application reflects the value of the search parameter into the HTML response without applying appropriate HTML output encoding.

Because characters such as `<` and `>` are not encoded, attacker-controlled HTML elements can be interpreted by the browser as markup instead of being displayed as plain text.

---

## Exploitation Steps

1. Open the PortSwigger Web Security Academy lab.
2. Identify the application's search functionality.
3. Enter a normal search term and observe how the value is reflected in the response.
4. Test whether special HTML characters are encoded.
5. Submit a controlled XSS payload through the search parameter.
6. Observe that the injected JavaScript executes in the browser.
7. Confirm that the lab is successfully solved.

---

## Proof of Concept

The following payload was used in the controlled PortSwigger laboratory environment:

```html
<script>alert(1)</script>

---

### The payload is interpreted as HTML/JavaScript because the application does not apply appropriate output encoding in the affected HTML context.

---
## Evidence

### Normal Request
The search parameter is reflected in the application's response.

Successful Exploitation
The injected payload executes in the browser, demonstrating the presence of Reflected XSS.

Screenshots demonstrating the successful exploitation are stored in the repository.

---
## Impact
Depending on the context and security controls of the vulnerable application, successful XSS exploitation may allow an attacker to:

- Execute arbitrary JavaScript in the victim's browser context.
- Modify the content presented to the victim.
- Perform actions using the victim's authenticated session.
- Conduct phishing or UI redressing attacks.
- Access data exposed to client-side JavaScript.
The actual impact depends on the application's architecture, browser security controls, cookie attributes, and available functionality.

---
## Mitigation

The primary mitigation is to apply context-appropriate output encoding to untrusted data before rendering it in HTML.

Additional security controls may include:

- Use framework-provided automatic output escaping.
- Avoid inserting untrusted data directly into HTML.
- Apply context-specific encoding based on where the data is rendered.
- Use a strong Content Security Policy (CSP) as a defense-in-depth measure.
- Sanitize HTML only when the application intentionally allows user-supplied HTML.
- Input validation may provide additional protection in specific contexts, but it should not be considered the primary defense against XSS.

---
## What I Learned
- How Reflected XSS differs from
Stored XSS.
- How attacker-controlled input can be reflected into an HTML response.
- Why context-appropriate output encoding is important.
- How the browser interprets HTML and JavaScript.
- How to identify the root cause of a Reflected XSS vulnerability.
- How to document a web security vulnerability using a structured format.

----
## References
PortSwigger Web Security Academy — Cross-Site Scripting (XSS)⁠�
OWASP Cross Site Scripting Prevention Cheat Sheet⁠�