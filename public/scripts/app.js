/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary)
// 
$(document).ready(function() {
  addSubmitHandler();
  loadTweets();
});

const addSubmitHandler = function() {
  $(".new-tweet form").on('submit', function (event) {
    event.preventDefault();
    if ($('#tweet-string').val() === "" || $('#tweet-string').val() === null) {
      alert("Please enter a value");
      return;
    } else if ($('#tweet-string').val().length > 140) {
      alert("Maximum character length is 140, please reduce and resubmit");
      return;
    } else {
      console.log('performing ajax call...');      
      $.ajax('/tweets', {method: 'POST', data: $(this).serialize()})
      .done(function (response) {
        console.log('Success: ', response);
        loadTweets();
        $('#tweet-string').val("");
        $(".counter").text(140);
      })
      .fail(function (error) {
        console.error(error);
      });
    }
  });
};

const loadTweets = function () {
  // const $button = $('#submit-button');
  // $button.on('click', function () {
    // console.log('Button clicked, performing ajax call...');
    
    $.ajax('/tweets', { method: 'GET', dataType: 'json' })
    //$.getJSON('/tweets');
    .done(function (response) {
      console.log('Success with Get: ', response);
      renderTweets(response);
    });
  // });
};

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
        <div class="tweet-text"> ${escape(obj.content.text)} </div>
    </p>
    <footer>
      <span class="days-ago">${Date(obj.created_at)} </span>
    </footer>
  
  </article>
`;
  // console.log($('#tweet-container').append(markUp));
  // $('#tweet-container').append(markUp);

}

const renderTweets = function (tweets) {
  const container = $('#tweet-container');
  container.empty();
  for (let post of tweets) {
    //console.log(post)
    const rendered = createTweetElement(post);
    container.prepend(rendered)
  }
}

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}


// const tweetData = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]
// const $tweet = createTweetElement(tweetData);
