$(document).ready(()=>{
    // login button
    $('#login').click((event)=>{
        // event.preventDefault();
        // console.log(event);
        // console.log('login clicked');
        let user = $('#username').val();
        let pwd = $('#password').val();
        
        if(user == ""){
            // cease the default behavior submit button
            event.preventDefault();
            $('#username').focus();
            $('#username').addClass('input-error');
            $('#error-message').text('Username cannot be left blank');
        }else if(pwd == ""){
            // cease the default behavior submit button
            event.preventDefault();
            $('#password').addClass('input-error');
            $('#password').focus();
            $('#error-message').text('Password cannot be left blank');
        }
    });

    // using class
    $('.btn-submit').click(()=>{
        console.log('class based');
    });

    // using element / tag
    $('div').mouseover(()=>{
       // console.log('Traversed div');
    });

    $(':text').mouseout(()=>{
        // console.log('Mouse out Div');
        $(':text').css({'background-color':'white'});
    });
    // for all the text boxes
    // trigger once 
    $(':text').one('mouseover',()=>{
        $(':text').css({'background-color':'#66e8dc'});
    });

});