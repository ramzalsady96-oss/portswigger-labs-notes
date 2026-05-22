# 01 - XSS (Cross-Site Scripting)

## 🧠 What is XSS?
XSS is a vulnerability that allows attackers to inject JavaScript into web pages.

---

## ⚡ How it happens
When user input is not properly sanitized and is rendered in the browser.

---

## 💣 Example Payload
```html
<script>alert('XSS')</script>

🔓 Impact
Session hijacking
Cookie theft
Account takeover
🛡️ Prevention
Input validation
Output encoding
Content Security Policy (CSP)
