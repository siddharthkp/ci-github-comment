const axios = require('axios')
const githubComment = require('github-comment')

const { repo, pull_request_number } = require('ci-env')
const token = process.env.github_token || process.env.GITHUB_TOKEN

console.log(!!token, repo, pull_request_number, body)

const comment = body => githubComment(token, repo, pull_request_number, body)

module.exports = comment
