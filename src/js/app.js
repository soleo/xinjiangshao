async function getGithubOrgsAsync() {
    let response = await fetch('https://api.github.com/users/soleo/orgs');
    let orgs = await response.json();
    return orgs;
}

getGithubOrgsAsync()
    .then(orgs => console.log(orgs))
    .catch(reason => console.log(reason));
