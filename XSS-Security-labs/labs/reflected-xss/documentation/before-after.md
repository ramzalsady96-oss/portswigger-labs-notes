# Before and After Security Comparison

## Overview

This document compares the intentionally vulnerable implementation with the remediated secure implementation.

---

# Before Remediation

## Data Flow

```text
URL
 ↓
search parameter
 ↓
URLSearchParams
 ↓
userInput
 ↓
innerHTML
 ↓
HTML Interpretation
```

## Vulnerable Code

```javascript
result.innerHTML =
    "<strong>Search results for:</strong> "
    + userInput;
```

## Security Problem

The application inserts untrusted input into an HTML interpretation context.

---

# After Remediation

## Data Flow

```text
URL
 ↓
search parameter
 ↓
URLSearchParams
 ↓
userInput
 ↓
textContent / createTextNode
 ↓
Text Rendering
```

## Secure Code

```javascript
const text =
    document.createTextNode(
        userInput
    );

result.appendChild(text);
```

## Security Improvement

The user-controlled input is treated as text rather than HTML.

---

# Comparison

| Area | Vulnerable Version | Secure Version |
|------|-------------------|----------------|
| Input Source | URL Parameter | URL Parameter |
| Input Trust | Untrusted | Untrusted |
| Rendering API | innerHTML | textContent / createTextNode |
| HTML Interpretation | Possible | Prevented |
| Security Status | Vulnerable | Remediated |

---

# Retesting

The secure version should be tested using the same controlled input used during the vulnerable application assessment.

The expected result is that the input appears as ordinary text rather than being interpreted as HTML.

---

# Conclusion

The primary security improvement is changing how untrusted data is rendered.

The objective is not simply to filter a specific payload, but to ensure that untrusted data is handled according to the correct output context.