const test = require('ava')
const axios = require('axios')
const comment = require('./index')

const { repo, event } = require('ci-env')
const token = process.env.github_token || process.env.GITHUB_TOKEN

if (event === 'pull_request') {
  test(async t => {
    const content = `comment ${new Date().getTime()}`

    const response = await comment(content)
    const commentId = response.data.id

    t.is(await get(commentId), content)
  })
} else {
  test.skip('Only works with pull requests', t => t.pass())
}

const get = id => {
  return axios({
    method: 'GET',
    url: `https://api.github.com/repos/${repo}/issues/comments/${id}`,
    headers: { Authorization: `token ${token}` }
  })
    .then(response => response.data.body)
    .catch(error => error)
}
