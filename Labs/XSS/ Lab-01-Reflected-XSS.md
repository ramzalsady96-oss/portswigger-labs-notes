# Reflected XSS into HTML context with nothing encoded

## Lab Information

| Item | Value |
|------|-------|
| Category | Cross-Site Scripting (XSS) |
| Lab | Reflected XSS into HTML context with nothing encoded |
| Difficulty | Apprentice |
| Status | ✅ Completed |

---

## Objective

Inject JavaScript into the search parameter and execute it in the victim's browser.

---

## Vulnerability Overview

This lab is vulnerable to Reflected Cross-Site Scripting (Reflected XSS). User input is reflected in the HTML response without validation or output encoding, allowing JavaScript code to execute in the browser.

---

## Root Cause

The application inserts user input directly into the HTML page without escaping or encoding special characters.

---

## Exploitation Steps

1. Open the lab.
2. Navigate to the search function.
3. Inject a JavaScript payload.
4. Submit the request.
5. Observe that the JavaScript executes.
6. The lab is solved.

---

## Payload

```html
<script>alert(1)</script>
```

---

## Impact

- Execute arbitrary JavaScript.
- Steal session cookies (when not protected).
- Perform actions as the victim.
- Modify page content.
- Phishing attacks.

---

## Mitigation

- Validate user input.
- Encode output before rendering.
- Use Content Security Policy (CSP).
- Avoid inserting untrusted data directly into HTML.

---

## What I Learned

- Difference between reflected input and stored input.
- How reflected XSS occurs.
- Why output encoding is important.
- How JavaScript executes inside the browser.

---

## References

- https://portswigger.net/web-security/cross-site-scripting 