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