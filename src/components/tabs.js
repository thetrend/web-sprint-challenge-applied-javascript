import axios from 'axios';

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  // 1. Create a parent div
  const topicsDiv = document.createElement('div');
  // 2. And add class to it
  topicsDiv.classList.add('topics');

  // 3. Loop over the topics array
  topics.forEach(topic => {
  // 4. Create a child div
    const tabDiv = document.createElement('div');
  // 5. Add a class to it
    tabDiv.classList.add('tab');
  // 6. Give the div some textContent and set it equal to the topic
    tabDiv.textContent = topic;

  // 7. Append each child div to the parent
    topicsDiv.appendChild(tabDiv);
  });

  // 8. Return the parent div
  return topicsDiv;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  // 1. Declare the URL to be used
  const url = `https://lambda-times-api.herokuapp.com/topics`;
  // 2, Get the URL using Axios
  axios.get(url)
  // 3. Then do something with the data returned
    .then(response => {
  // 4. Grab the parent div specified with the selector variable
      const parent = document.querySelector(selector);
  // 5. Declare the list array to be taken from the response
      const list = response.data.topics;
  // 6. Declare the Tab that consists of a Tabs'ified list array
      const Tab = Tabs(list);

  // 7. Append the Tab to the parent div
      parent.appendChild(Tab);

  // 6. Return the parent div
      return parent;
    })
  // Axios: if the get fails, console.log the resulting error
    .catch(err => {
      console.log(err);
    });
}

export { Tabs, tabsAppender }
