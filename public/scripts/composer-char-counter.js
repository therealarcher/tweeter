//console.log('testing');

$(document).ready(function() {
  console.log('ready')
  $("textarea").on('input', () => {
    console.log('input');
    console.log(this);
  });
  $("textarea").on('input', function() {
    console.log(this); //The this keyword is a reference to the button
    console.log($(this).val().length);
    let charCount = $(this).val().length;
    let charsRemaining = 140 - charCount;
    //console.log(charsRemaining);
    $(".counter").text(charsRemaining);
    console.log(charCount);
    if (charsRemaining < 0) {
      $(".counter").addClass('error');
    } else {
      $(".counter").removeClass('error');
    }
  });
});



  // $("textarea").on('click', () => {
  //   console.log(this); //The this keyword here refers to something else!
  // });

// $('textarea').keyup(updateCount);
// $('textarea').keydown(updateCount);

// function updateCount() {
//     var cs = $(this).val().length;
//     $('#characters').text(cs);
// }