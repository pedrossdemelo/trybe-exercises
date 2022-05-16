// githubApi.test.js

const fetch = require('node-fetch');

const githubUrl = 'https://api.github.com/orgs/tryber/repos?per_page=100';

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

test('Testando se a API retorna certos repos', async () => {
  const repos = await getRepos(githubUrl);
  expect(repos).toEqual(expect.arrayContaining(['sd-01-week10-movie-card-library-tests', 'sd-02-week11-movie-card-library-tests']));
})