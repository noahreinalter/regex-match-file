const core = require('@actions/core');
const { promises: fs } = require('fs')

async function run() {
    try {
        const path = core.getInput('path')

        let content = await fs.readFile(path, 'utf8')

        const regexPattern = core.getInput('regex_pattern')
        regex = new RegExp(regexPattern);

        const match = content.match(regex)

        if (match == null) {
            core.setFailed('The regex failed to match')
        } else {
            console.log('Match found')
        }
    } catch(error) {
        core.setFailed(`Action failed with error ${error}`);
    }
}

run()