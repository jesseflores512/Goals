
$('.yrOne').click(()=> {
  $('#contentText, .contentList').empty()
  $('#contentText').text('In one year these are the goals I plan to accomplish:');
  $('.contentList').append(
    "<li>Start my career as a web developer.</li><li>Master the MERN stack.</li><li>Learn React Native.</li><li>Do my first hackathon.</li>")
});

$('.yrThree').click(()=> {
  $('#contentText, .contentList').empty()
  $('#contentText').text('In three years these are the goals I plan to accomplish:');
  $('.contentList').append(
    "<li>Be an invaluable developer at my company.</li><li>Master React Native</li><li>Learn a new programming language/framework</li><li>Launch multiple apps on iOS</li>")
});

$('.yrFive').click(()=> {
  $('#contentText, .contentList').empty()
  $('#contentText').text('In five years these are the goals I plan to accomplish:');
  $('.contentList').append(
    "<li>Be an expert in my field.</li><li>Be a mentor</li><li>Learn a new programming language/framework</li><li>Be up to date with the latest technologies</li>")
});

$('.yrTen').click(()=> {
  $('#contentText, .contentList').empty()
  $('#contentText').text('In ten years these are the goals I plan to accomplish:');

  $('.contentList').append(
    "<li>Be a senior developer.</li><li>Build something meaningful as a side project</li><li>Learn a new programming language/framework</li><li>Be up to date with the latest technologies</li>")
});

$('.yrTwFive').click(()=> {
  $('#contentText, .contentList').empty()
  $('#contentText').text('In twenty five years these are the goals I plan to accomplish:');

  $('.contentList').append(
    "<li>Retire</li>")
});
