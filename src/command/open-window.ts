import * as vscode from 'vscode'

async function openInNewWindow(event) {
  const folderPath = event._fsPath

  await vscode.commands.executeCommand(
    'vscode.openFolder',
    vscode.Uri.file(folderPath),
    true
  )
}

async function openInCurrentWindow(event) {
  const folderPath = event._fsPath

  await vscode.commands.executeCommand(
    'vscode.openFolder',
    vscode.Uri.file(folderPath),
    false
  )
}

export { openInNewWindow, openInCurrentWindow }