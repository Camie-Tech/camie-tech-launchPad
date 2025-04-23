import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "camie-tech" is now active!');
  vscode.window.showInformationMessage(
    'Congratulations, your extension "camie-tech" is now active!'
  );

  // Helper to load snippet content by key
  const loadSnippet = (snippetKey: string): string | null => {
    const snippetsPath = path.join(
      context.extensionPath,
      "src",
      "snippets",
      "typescript.json"
    );
    const snippetsContent = fs.readFileSync(snippetsPath, "utf-8");
    const snippets = JSON.parse(snippetsContent);
    if (snippets[snippetKey] && snippets[snippetKey].body) {
      return Array.isArray(snippets[snippetKey].body)
        ? snippets[snippetKey].body.join("\n")
        : snippets[snippetKey].body;
    }
    return null;
  };

  // Helper to register a command for a snippet
  const registerSnippetCommand = (
    command: string,
    snippetKey: string,
    infoMsg: string
  ) => {
    const disposable = vscode.commands.registerCommand(command, () => {
      const editor = vscode.window.activeTextEditor;
      const snippetContent = loadSnippet(snippetKey);
      if (editor && snippetContent) {
        editor.insertSnippet(new vscode.SnippetString(snippetContent));
        vscode.window.showInformationMessage(infoMsg);
      } else {
        vscode.window.showErrorMessage(
          "Snippet not found or no active editor."
        );
      }
    });
    context.subscriptions.push(disposable);
  };

  // Register all relevant commands
  registerSnippetCommand(
    "camie-tech.supabaseAuth",
    "Supabase Auth Service (TypeScript)",
    "Inserting Supabase Auth Service snippet"
  );
  registerSnippetCommand(
    "camie-tech.firebaseAuth",
    "Firebase Auth Service (TypeScript)",
    "Inserting Firebase Auth Service snippet"
  );
  registerSnippetCommand(
    "camie-tech.googleAuth",
    "Google Auth Service (TypeScript)",
    "Inserting Google Auth Service snippet"
  );
  registerSnippetCommand(
    "camie-tech.customEmailPasswordAuth",
    "Custom Email/Password Auth (TypeScript)",
    "Inserting Custom Email/Password Auth snippet"
  );
  registerSnippetCommand(
    "camie-tech.emailService",
    "Email Service (Nodemailer + Supabase, Rate Limiting, Templates)",
    "Inserting Email Service snippet"
  );
}

export function deactivate() {
  console.log('Extension "camie-tech" is now deactivated');
}
