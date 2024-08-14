console.log('Hi there!')

document.addEventListener('DOMContentLoaded', () => {
  const articles = document.querySelectorAll('article');

  articles.forEach((article, index) => {
    article.style.animationDelay = `${index * 0.5}s`
  })
})