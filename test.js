const test = require('ava')
const axios = require('axios')
const comment = require('./index')

const { repo } = require('ci-env')
const token = process.env.github_token || process.env.GITHUB_TOKEN

test(async t => {
  const content = `comment ${new Date().getTime()}`

  const response = await comment(content)
  const commentId = response.data.id

  t.is(await get(commentId), content)
})

const get = id => {
  return axios({
    method: 'GET',
    url: `https://api.github.com/repos/${repo}/issues/comments/${id}`,
    headers: { Authorization: `token ${token}` }
  })
    .then(response => response.data.body)
    .catch(error => error)
}
