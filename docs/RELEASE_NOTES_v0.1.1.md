# Micro-Planet Bioscience v0.1.1: first Windows installer

## What's new

- **Windows installer.** A graphical setup wizard in English and Chinese. It installs for the current user only, so no administrator rights are needed. Creates a Start menu entry and an optional desktop shortcut. Uninstall from Settings → Apps; your data is kept.
- **Desktop app window.** The app opens in its own window instead of a browser tab. Closing the window stops the background service.
- **Free models out of the box.** Kilo Gateway free models work with no account and no API key. The default model is `nvidia/nemotron-3-ultra-550b-a55b:free`, which supports tool use.
- **Consent before first use.** The first time you open the chat, the app asks once whether to use Kilo. What you type is then sent to Kilo and to the model's provider, so use it for everyday questions, not for unpublished research or patient data.
- **Bundled runtime.** Python and the core scientific libraries (pandas, Biopython) are included. You do not need to install Python.
- **Agent starts without a model.** If no model is set up yet, the app still starts. Once you set one up, the agent loads automatically, with no restart.

## Changes

- The model list now shows only the Kilo models. The OpenRouter presets and the ChatGPT entry are gone from the defaults. Add other providers under Settings → Models.
- Upgrading replaces the program files only. Your settings and conversations are kept.
- Removed the old Docker/Gradio deployment scripts and a personal screenshot from the documentation.

## Known issues

- Kilo's free models come from third parties. They can be rate-limited or unavailable. `kilo-auto/free` picks a different model on each request and may refuse tool calls, so keep the default Nemotron model for agent tasks.
- The installer is not code-signed. Windows SmartScreen may show a warning. Choose "More info" → "Run anyway".
- The optional component packs (analysis, genomics, office) cannot be downloaded yet. Tools that need packages such as scanpy or rdkit will report a missing module.
- Ports 18765 (service) and 13001 (page) are fixed. If another program uses them, close that program first. Otherwise the app may connect to the wrong service and stop at the loading screen.

## Install

1. Run `MicroPlanetBioscience-Setup-0.1.1.exe` (about 148 MB, Windows 10 or 11).
2. Open "Micro-Planet Bioscience" from the Start menu.
3. Answer the Kilo question on the first chat screen.

- Program: `%LOCALAPPDATA%\Programs\Micro-Planet-Bioscience`
- Data: `%LOCALAPPDATA%\Micro-Planet-Bioscience\data`

## Feedback

Open an issue on GitHub and attach `launcher.log` from the data folder.
