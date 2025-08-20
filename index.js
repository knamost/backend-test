require('dotenv').config()  
const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('somankathayat') 
})

app.get('/login', (req, res) => {
  res.send('<h1>Please Login at site</h1>')
}) 

const githubData = {
  "login": "knamost",
  "id": 109841905,
  "node_id": "U_kgDOBowN8Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/109841905?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/knamost",
  "html_url": "https://github.com/knamost",
  "followers_url": "https://api.github.com/users/knamost/followers",
  "following_url": "https://api.github.com/users/knamost/following{/other_user}",
  "gists_url": "https://api.github.com/users/knamost/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/knamost/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/knamost/subscriptions",
  "organizations_url": "https://api.github.com/users/knamost/orgs",
  "repos_url": "https://api.github.com/users/knamost/repos",
  "events_url": "https://api.github.com/users/knamost/events{/privacy}",
  "received_events_url": "https://api.github.com/users/knamost/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Suman Kathayat",
  "company": null,
  "blog": "",
  "location": "Kathmandu, Nepal",
  "email": null,
  "hireable": null,
  "bio": "CSIT Student | Passionate about coding, problem-solving, and learning new technologies |",
  "twitter_username": "somankathayat",
  "public_repos": 6,
  "public_gists": 0,
  "followers": 5,
  "following": 29,
  "created_at": "2022-07-23T05:14:02Z",
  "updated_at": "2025-08-20T13:19:12Z"
}

app.get('/github', (req, res) => {
  res.json(githubData)
})




app.get('/youtube', (req, res) => {
  res.send("<h2>Welcome to my YouTube channel</h2>")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

