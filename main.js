const core = require('@actions/core');
const { promises: fs } = require('fs')

async function run() {
    try {
        const path = core.getInput('path')
        console.log(path)

        const files = await fs.readdir('./')
        for (const file of files)
            console.log(file);
        

        console.log('Workspace folder')
        const files = await fs.readdir('/github/workspace/')
        for (const file of files)
            console.log(file);

        let content = await fs.readFile(path, 'utf8')

        const regexPattern = core.getInput('regex_pattern')
        console.log(regexPattern)
        regex = new RegExp(regexPattern);

        const match = content.match(regex)

        if (match == null) {
            core.setFailed('The regex failed to match')
        }
    } catch(error) {
        core.setFailed(`Action failed with error ${error}`);
    }
}

run()