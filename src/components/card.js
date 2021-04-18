import axios from 'axios';
import { articles } from '../mocks/data';

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');

  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = article.headline;

  const author = document.createElement('div');
  author.classList.add('author');
  
  const authorImgDiv = document.createElement('div');
  authorImgDiv.classList.add('img-container');

  const authorImg = document.createElement('img');
  authorImg.src = article.authorPhoto;

  authorImgDiv.appendChild(authorImg);

  author.appendChild(authorImgDiv);

  const authorName = document.createElement('span');
  authorName.textContent = `By ${article.authorName}`;

  const children = [headline, author, authorName];

  children.forEach(child => {
    cardContainer.appendChild(child);
  })

  return cardContainer;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const url = `https://lambda-times-api.herokuapp.com/articles`;
  axios.get(url)
    .then(response => {
      const container = document.querySelector(selector);
      const articlesList = response.data.articles;
      const topicsList = Object.getOwnPropertyNames(articlesList);
      topicsList.forEach(topic => {
        articlesList[topic].forEach(article => {
          container.appendChild(Card(article));
        });
      });
      return container;
    })
    .catch(err => {
      console.log(err);
    })
}

export { Card, cardAppender }
