const template = document.querySelector('#post-template')
const container = document.querySelector('.container-API')

fetch('https://jsonplaceholder.typicode.com/posts')
.then(function (responseFathi) {
  return responseFathi.json()
})
.then(function (posts) {

  for (const post of posts) {
    container.innerHTML += template.innerHTML.replaceAll('POST_TITLE', post.title).replaceAll('POST_BODY', post.body)
  }
})