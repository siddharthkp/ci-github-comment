<p align="center">
  <img src="https://octodex.github.com/images/codercat.jpg" height="200px"/><img src="https://media.giphy.com/media/GxZ8bBoZJAIIo/giphy.gif" height="200px"/>
  <br><br>
  <b>Comment on a pull request on GitHub from your CI</b>
  <br><br>
  <img src="https://travis-ci.org/siddharthkp/ci-github-comment.svg?branch=master&maxAge=3600"/>
</p>

&nbsp;

#### install

```
npm install ci-github-comment
```

&nbsp;

#### usage

1. Set a `github_token` in your CI settings. You can create a [personal access token on GitHub here](https://github.com/settings/tokens)

2. In your code:

  ```js
  const comment = require('ci-github-comment')

  comment('this is the content') // returns a promise
  ```

&nbsp;

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
