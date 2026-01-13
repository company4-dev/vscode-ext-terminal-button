const vscode = require("vscode");

function activate(context) {
    const terminalItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left
    );

    let open = false;

    terminalItem.text = `$(terminal) Terminal`;
    terminalItem.tooltip = "Toggle Terminal";
    terminalItem.command = "bottom-terminal";
    terminalItem.show();

    const disposable = vscode.commands.registerCommand(
        "bottom-terminal",
        () => {
            if (open) {
                vscode.commands.executeCommand("workbench.action.closePanel");
                open = false;
            } else {
                vscode.commands.executeCommand("workbench.action.terminal.focus");
                open = true;
            }
        }
    );

    context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
    activate,
    deactivate,
};
