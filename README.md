# camie-tech VS Code Extension

## Overview

**camie-tech** is a Visual Studio Code extension that provides ready-to-use, production-grade code snippets for authentication and email service patterns in TypeScript. It is designed to boost productivity for developers working with Supabase, Firebase, Google Auth, custom email/password authentication, and robust email delivery (Nodemailer + Supabase).

## Features

- Insert full-featured authentication service code for:
  - Supabase
  - Firebase
  - Google (ID Token verification)
  - Custom email/password (with bcrypt)
- Insert a comprehensive email service (Nodemailer + Supabase, rate limiting, templates)
- All snippets are production-ready and can be used as a starting point for your backend services

## Usage

1. **Install the extension** in VS Code.
2. Open a TypeScript file.
3. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
4. Search for and run any of the following commands:
   - `Insert Supabase Auth Service`
   - `Insert Firebase Auth Service`
   - `Insert Google Auth Service`
   - `Insert Custom Email/Password Auth Service`
   - `Insert Email Service`
5. The corresponding code snippet will be inserted at your cursor position.

## Snippet List

- **Supabase Auth Service**: `SupabaseAuthService` class for sign up, sign in, password reset, and OTP.
- **Firebase Auth Service**: `FirebaseAuthService` class for sign up, sign in, and password reset.
- **Google Auth Service**: `GoogleAuthService` class for ID token verification.
- **Custom Email/Password Auth**: `CustomAuthService` class for hashing, verifying, and managing passwords with bcrypt.
- **Email Service**: Full-featured service for sending emails using Nodemailer and Supabase, with rate limiting and template support.

## How to Add Support for Other Languages

To add code snippets for another language (e.g., Python, JavaScript):

1. **Create a new snippet file** in the `src/snippets/` directory, e.g., `python.json`.
2. **Define your snippets** in the new file using the VS Code snippet format.
3. **Register the snippet file** in `package.json` under `contributes.snippets`:
   ```json
   {
     "language": "python",
     "path": "./snippets/python.json"
   }
   ```
4. **(Optional) Add new commands** in `package.json` and implement them in `extension.ts` following the pattern used for TypeScript.
5. **Reload the extension** to use your new language snippets.

## Requirements

- Visual Studio Code v1.99.0 or later
- Node.js and npm for development

## Development

- Run `npm install` to install dependencies.
- Use `npm run watch` to compile in watch mode.
- Press `F5` in VS Code to launch an Extension Development Host.

## Contributing

Feel free to open issues or submit pull requests for new snippets, bug fixes, or improvements.

## License

MIT
