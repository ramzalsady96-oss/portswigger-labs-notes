# XSS Remediation

## Vulnerability

Reflected Cross-Site Scripting (XSS)

---

## Vulnerable Implementation

The vulnerable application uses:

```javascript
result.innerHTML =
    "<strong>Search results for:</strong> "
    + userInput;
```

This approach combines HTML markup with untrusted user input.

---

## Remediation

The secure implementation treats user-controlled data as text.

Example:

```javascript
result.textContent =
    userInput;
```

Another safe approach is to create a text node:

```javascript
const text =
    document.createTextNode(
        userInput
    );

result.appendChild(text);
```

---

## Security Principle

The application should use context-appropriate output encoding and safe DOM APIs when handling untrusted data.

The correct mitigation depends on the context in which the data is rendered.

---

## Additional Security Controls

Additional defensive controls may include:

- Framework-provided automatic output escaping.
- Context-aware output encoding.
- Avoiding unsafe DOM APIs when possible.
- Content Security Policy as defense in depth.
- Secure coding practices.
- Security testing during development.

---

## Retesting

After remediation, the same controlled test should be repeated against the secure implementation.

The expected behavior is that user-controlled input is rendered as text and is not interpreted as HTML.

---

## Result

```text
Before Remediation
User Input
    ↓
innerHTML
    ↓
HTML Interpretation
    ↓
Vulnerable

After Remediation
User Input
    ↓
textContent / createTextNode
    ↓
Text Rendering
    ↓
Mitigated
```

---

## Conclusion

The remediation removes the unsafe interpretation of user-controlled input as HTML.

The secure implementation demonstrates how safe DOM APIs can reduce the risk of XSS when rendering untrusted data.