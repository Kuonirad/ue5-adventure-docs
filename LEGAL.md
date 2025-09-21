# Legal Information and Data Processing

This document outlines the legal basis for data processing activities related to this website, in accordance with the user's requirements.

## Telemetry Events

As per the project requirements, this website utilizes privacy-first analytics (Plausible.js). The following telemetry events are tracked.

### 1. Scroll Depth

*   **Description:** Tracks how far down a user scrolls on the page. This helps in understanding which content is most engaging.
*   **Article 6(1)(f) Justification (Legitimate Interest):**
    *   [Placeholder for legal justification. e.g., "Processing is necessary for the legitimate interest of improving the user experience and content of the guide by understanding which sections are most read and which are potentially being missed."]
*   **JSON Schema:**
    ```json
    {
      "event": "scroll_depth",
      "percentage": "integer",
      "timestamp": "ISO_8601_string"
    }
    ```

### 2. Exit Heading

*   **Description:** Tracks the last H2 heading the user was viewing before leaving the page. This helps identify content areas where users might be losing interest or finishing their session.
*   **Article 6(1)(f) Justification (Legitimate Interest):**
    *   [Placeholder for legal justification. e.g., "Processing is necessary for the legitimate interest of identifying potentially confusing or unengaging sections of the guide to improve content quality and user retention."]
*   **JSON Schema:**
    ```json
    {
      "event": "exit_heading",
      "heading_id": "string",
      "timestamp": "ISO_8601_string"
    }
    ```

---
*Disclaimer: This document was prepared by an AI software engineer based on project requirements. It is a placeholder and requires review and sign-off from qualified legal counsel.*
