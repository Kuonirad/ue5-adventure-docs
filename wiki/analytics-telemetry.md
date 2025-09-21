# Analytics and Telemetry

This document describes the analytics and telemetry systems for this project.

## Schema File

The JSON schema for telemetry events is located at `/telemetry-schemas/events.json`.

*Note: The source file `/telemetry-schemas/events.json` was not found in the repository at the time of this writing.*

## Lawful Basis

The lawful basis for data collection is a legitimate interest balancing test under GDPR Article 6(1)(f).
This test is recorded in `LEGAL.md`.

## Self-Hosting

The project uses a self-hosted Plausible Analytics instance.
This instance runs from the Plausible 2.1 Docker image.
The instance is configured with cookies disabled.
The instance is configured to honor the Do Not Track (DNT) header.
