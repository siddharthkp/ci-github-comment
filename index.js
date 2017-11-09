const axios = require('axios')
const githubComment = require('github-comment')

const { repo, pull_request_number, event } = require('ci-env')
const token = process.env.github_token || process.env.GITHUB_TOKEN

const comment = body => {
  if (event === 'pull_request') return githubComment(token, repo, pull_request_number, body)
  else return new Promise((resolve, reject) => reject('Only works with pull requests'))
}

module.exports = comment
