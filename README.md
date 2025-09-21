# Unreal Engine 5 Adventure Game Guide - Web Page

This project contains the source code for a web page that displays "The Ultimate Unreal Engine 5 Adventure Game Guide".

The page has been built with accessibility in mind and includes a tool to audit for WCAG 2.1 AA violations.

## Accessibility Audit

To run the accessibility audit, you will need to have Node.js and npm installed.

1.  **Install Dependencies:**
    Open a terminal in the project root and run the following command to install the necessary dependencies (`axe-core` and `jsdom`):
    ```bash
    npm install
    ```

2.  **Run the Audit Script:**
    Once the dependencies are installed, run the audit script from the project root:
    ```bash
    node run-axe.js
    ```

The script will run the `axe-core` accessibility engine against `index.html` and print any violations to the console. If there are no violations, it will print a success message.

feature/create-unreal-guide-page

## Author

This project was created by Kuonirad.

main