console.log('In script.js');

$(document).ready(onReady);

function onReady(){
    console.log('ready yea');

    
    let titleHeader = $('h1');
    console.log('titleHeader', titleHeader)
    //let titleHeader = <h1>..</h1>



    let allListItems = $('li');
    console.log('li elements', allListItems);

    // id

    let justOneListItem = $('#madam-li-element');
    justOneListItem.text('DOM Manipulation');

    //class

    $('.first-and-last').css('color', 'blue');

    $('ul').append('<li>forms</li>');
    
    $('#the-button').on('click', whenIClickedTheButton);

    function whenIClickedTheButton() {
        console.log('someone clicked me!');
    }

   let titleText =  $('h1').text();
   console.log('title text is:', titleText);

   let louderTitleText = titleText.toUpperCase();
   $('h1').text(louderTitleText);
}