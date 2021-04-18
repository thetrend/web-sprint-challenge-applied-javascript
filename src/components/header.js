const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // 1. Create a header div
  const headerDiv = document.createElement('div');
  // 2. And add a class to it
  headerDiv.classList.add('header');

  // 3. Create a span
  const dateSpan = document.createElement('span');
  // 4. And add a class to it
  dateSpan.classList.add('date');
  // 5. Then give it some data to display as its textContent
  dateSpan.textContent = date;

  // 6. Create an h1
  const h1 = document.createElement('h1');
  // 7. Then give it some data to display as its textContent
  h1.textContent = title;

  // 8. Create another span
  const tempSpan = document.createElement('span');
  // 9. And add a class to it
  tempSpan.classList.add('temp');
  // 10. Then give it some data to display as its textContent
  tempSpan.textContent = temp;

  // 11. Create an array from the variables to be appended to the parent div
  const headerDivContent = [dateSpan, h1, tempSpan];
  // 12. Do something with each array item
  headerDivContent.forEach(element => {
  // 13. Append each element to the parent div
    headerDiv.appendChild(element);
  });

  // 14. Return the parent div
  return headerDiv;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // 1. Create a new Date Object
  const today = new Date();
  // 2. Create a string from the Date created
  const date = `${(today.getMonth()+1)}/${today.getDate()}/${today.getFullYear()}`;

  // 3. Declare the title
  const title = 'This Week the Trend';
  // 4. Declare the temp
  const temp = '82° F';

  // 5. Declare the header with the variables created
  const header = Header(title, date, temp);

  // 6. Return the element with the specified selector and append the created header
  return document.querySelector(selector).appendChild(header);
}

export { Header, headerAppender }
