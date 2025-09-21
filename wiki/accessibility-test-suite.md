# Accessibility Test Suite

This document details the configuration of the accessibility test suite.

## Tool

The test suite uses axe-core 4.9 CLI.

## Scan Tags

The scan is configured with the following tags.

- wcag2a.
- wcag2aa.
- best-practice.

## Fail Threshold

The CI job will fail if the scan reports any of the following.

- One or more "moderate" violations.
- 0.5 percent or more element violations.
