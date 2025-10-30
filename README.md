# HideCopilotPowerApps
Automatically removes the Copilot button from the Power Apps Studio interface because reasons.

# Description

This Edge/Chrome extension removes the Copilot button (#btnShellCopilot_container) that appears in Power Apps Studio.
It keeps the interface clean and distraction-free by deleting the element as soon as it’s detected, even when the app reloads dynamically.

# Installation
1. Download or clone this repository
git clone https://github.com/<ton-user>/hide-copilot-powerapps.git

2. Load the extension in Edge or Chrome

Open edge://extensions or chrome://extensions

Enable Developer Mode

Click "Load unpacked"

Select the folder containing manifest.json

The extension will now automatically run on https://make.powerapps.com/*.


# How it works

Runs only on make.powerapps.com

Detects the element #btnShellCopilot_container

Removes it from the DOM

Watches the page with a MutationObserver in case the UI reloads dynamically

# Permissions

Minimal permissions only:

scripting and tabs, to inject the script into the Power Apps page.

# License

MIT License — do whatever you want, just don’t blame me if Microsoft changes their DOM.
