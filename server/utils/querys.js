const fetch = require('node-fetch');

const accessGitHubToken = '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';

module.exports = {
    graphQuery: (user) => {
        const query = `{
            user(login: "${user}") {
              repositories(first: 50) {
                edges {
                  node {
                    id
                    name
                    url
                  }
                }
              }
            }
          }`;

        return fetch('https://api.github.com/graphql', {
            method: 'POST',
            body: JSON.stringify({ query }),
            headers: {
                'Authorization': `Bearer ${accessGitHubToken}`,
            },
        }).then(
            res => res.text()
        ).then(body => {
            return JSON.parse(body);
        }).catch(err => {
            console.log('then catch');
            console.log(err);
            return {
                success: false,
                error: 'Then Catch Error see logs',
            }
        });
    }
}
