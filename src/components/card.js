import axios from 'axios';

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

  // 1. Create a parent div
  const cardContainer = document.createElement('div');
  // 2. And add a class to it
  cardContainer.classList.add('card');

  // 3. Create another div
  const headline = document.createElement('div');
  // 4. And add a class to it
  headline.classList.add('headline');
  // 5. Then add a textContent to it equal to the article object's headline
  headline.textContent = article.headline;

  // 6. Create another div
  const author = document.createElement('div');
  // 7. And add a class to it
  author.classList.add('author');

  // 8. Create another div
  const authorImgDiv = document.createElement('div');
  // 9. And add a class to it
  authorImgDiv.classList.add('img-container');

  // 10. Create an img tag
  const authorImg = document.createElement('img');
  // 11. Define the img's src tag and set it equal to the article object's authorPhoto
  authorImg.src = article.authorPhoto;

  // 12. Append the authorImg element created to the img-container div
  authorImgDiv.appendChild(authorImg);

  // 13. Append the img-container div to the author div
  author.appendChild(authorImgDiv);

  // 14. Create a span
  const authorName = document.createElement('span');
  // 15. And set its textContent to the required string including the article object's authorName
  authorName.textContent = `By ${article.authorName}`;
  
  // 16. Append the authorName element to the author div
  author.appendChild(authorName);

  // 17. Declare the array of children to be appended to the parent div
  const children = [headline, author];

  // 18. Do something with each child in the children array
  children.forEach(child => {
  // 19. Append each child to the parent div
    cardContainer.appendChild(child);
  });

  // 20. Return the parent div
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

  // 1. Declare the data URL
  const url = `https://lambda-times-api.herokuapp.com/articles`;
  
  // 2. Get the URL using Axios
  axios.get(url)
  // 3. Then do something with the response
    .then(response => {
  // 4. Declare the parent div using the specified selector
      const container = document.querySelector(selector);
  // 5. Declare the articlesList and set it equal to the response data articles object
      const articlesList = response.data.articles;
  // 6. Create an array from the property names of the articlesList object
      const topicsList = Object.getOwnPropertyNames(articlesList);
  // 7. Loop over the topicsList array
      topicsList.forEach(topic => {
  // 8. Loop over the array of each topic returned from the articlesList
        articlesList[topic].forEach(article => {
  // 9. Append each article to the parent div
          container.appendChild(Card(article));
        });
      });
  // 10. Return the parent container
      return container;
    })
  // Axios: if the get fails, console.log the resulting error
    .catch(err => {
      console.log(err);
    })
}

export { Card, cardAppender }
