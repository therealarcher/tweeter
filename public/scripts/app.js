/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const createTweetElement = function (obj) {
  // const $tweet = $("<article>").addClass("content"); //check
  //console.log($tweet);
  return `
  <article>
    <header class="top-of-tweet">
      <img class="avatar" src=${obj.user.avatars}>
      <span class='userName'>${obj.user.name}</span>
      <span class='handle'>${obj.user.handle}</span>
    </header>
    <p>
        <div class="tweet-text"> ${obj.content.text} </div>
    </p>
    <footer>
      <span class="days-ago">${Date()} </span>
    </footer>
  
  </article>
`;
  // console.log($('#tweet-container').append(markUp));
  // $('#tweet-container').append(markUp);

}

const renderTweets = function (tweets) {
  const container = $('#tweet-container');
  for (let post of tweets) {
    const rendered = createTweetElement(post);
    container.append(rendered)
  }
}

const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]
// const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
// 
$(document).ready(function() {
  renderTweets(tweetData);
});
