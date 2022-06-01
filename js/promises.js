
const getLastCommit = (username) => {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': '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'}})
        .then((response) => response.json())
        .then(data => {
            let lastCommit = data[0].created_at.substring(0, 10);
            console.log(`${username}'s last commit was on: ${lastCommit}`)
        })
        .catch(() => console.error('BAD REQUEST!'));
};

console.log(getLastCommit('mojombo'));



function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));