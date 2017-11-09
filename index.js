const axios = require('axios')
const githubComment = require('github-comment')

const { repo, pull_request_number } = require('ci-env')
const token = process.env.github_token || process.env.GITHUB_TOKEN

const comment = body => {
  console.log(!!token, repo, pull_request_number, body)
  return githubComment(token, repo, pull_request_number, body)
}

module.exports = comment
