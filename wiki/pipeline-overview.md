# Pipeline Overview

This document outlines the data-flow for the engineering pipeline.

```mermaid
graph TD
    A[Commit] --> B{Pandoc};
    B --> C[HTML Generation];
    C --> D{axe-core Scan};
    D --> E{Percy Visual Regression};
    E --> F[GitHub Release];
```

## Artefacts

The pipeline produces several verifiable artefacts.

- JSON (from axe-core scans).
- PNG (from Percy snapshots).
- SPDX (for the Software Bill of Materials).
