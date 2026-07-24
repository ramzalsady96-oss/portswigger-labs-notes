# Source / Data Flow / Sink Analysis

## Overview

This document analyzes the data flow of the Reflected XSS vulnerability implemented in the controlled educational laboratory.

The purpose is to understand how user-controlled input travels through the application and reaches a potentially unsafe rendering operation.

---

## Vulnerable Data Flow

```text
User Input
    ↓
URL Query Parameter
    ↓
URLSearchParams
    ↓
userInput
    ↓
innerHTML
    ↓
Browser HTML Parser
```

---

## 1. Source

The source is the location where attacker-controlled or user-controlled data enters the application.

In this laboratory, the input is obtained from the URL query parameter.

```javascript
const params =
    new URLSearchParams(
        window.location.search
    );

const userInput =
    params.get("search");
```

The `search` parameter represents untrusted input.

---

## 2. Data Flow

The input is stored in the `userInput` variable and then passed to the rendering logic.

```text
search parameter
        ↓
userInput
        ↓
result.innerHTML
```

The application does not treat the input as untrusted data before rendering it.

---

## 3. Sink

The vulnerable sink is:

```javascript
result.innerHTML =
    "<strong>Search results for:</strong> "
    + userInput;
```

The `innerHTML` property interprets the assigned string as HTML.

Therefore, inserting untrusted data into this sink without appropriate handling can introduce Cross-Site Scripting vulnerabilities.

---

## Secure Data Flow

The secure implementation uses safe DOM APIs.

```text
User Input
    ↓
URL Query Parameter
    ↓
URLSearchParams
    ↓
userInput
    ↓
textContent / createTextNode
    ↓
Text Rendering
```

The secure implementation treats the input as text rather than HTML.

---

## Secure Implementation

```javascript
const text =
    document.createTextNode(
        userInput
    );

result.appendChild(text);
```

This prevents the browser from interpreting the user-controlled value as HTML markup.

---

## Conclusion

The vulnerability exists because untrusted input reaches an HTML interpretation sink without appropriate context-aware handling.

The remediation changes the data flow so that the user-controlled input is rendered as text rather than interpreted as HTML.