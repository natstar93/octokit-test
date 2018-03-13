const octokit = require('@octokit/rest')();
const password = process.env.PWD_GH;
const owner = 'natstar93';
const repo = 'python-practice';

const getRefs = async () => {
    
    const result = await octokit.gitdata.getReferences({ owner, repo });
    console.log('getRefs result', result);
}

const createTag = async () => {
    const result = await octokit.gitdata.createTag({
        owner,
        repo,
        tag: 'tag',
        message: 'test tag',
        object: 'e5585e69eecdddb58d647575e4872c58935807d9',
        type: 'commit',
        tagger: {
            name: 'nats',
            email: 'abc@123.com',
            date: new Date().toISOString()
        }
    });

    console.log('createTag result', result);
}

const updateRef = async () => {
    const result = await octokit.gitdata.updateReference({
        owner,
        repo,
        ref: 'heads/tags',
        sha: 'e5585e69eecdddb58d647575e4872c58935807d9',
    });

    console.log('updateRef result', result);
}

const createRef = async () => {
    const result = await octokit.gitdata.createReference({
        owner,
        repo,
        ref: 'refs/tags/tag',
        sha: 'e5585e69eecdddb58d647575e4872c58935807d9',
    });

    console.log('createRef result', result);
}

octokit.authenticate({
    type: 'basic',
    username: 'natstar93',
    password
});

getRefs();
createTag();
createRef();
