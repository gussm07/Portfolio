$(function() {
    $( "#btnSend" ).click(function(){
        var errores = '';

        if($('#inputFirstName').val() == ''){
            errores += '<p>Please write your FirstName</p>';
            $('#inputFirstName').css("border-color", "F14B4B")
        }
        else
        {
           $('#inputFirstName').css("border-color", "d1d1d1") 
        }
        if($('#inputLastName').val() == ''){
            errores += '<p>Please write your LastName</p>';
            $('#inputLastName').css("border-bottom-color", "F14B4B")
        }
        else
        {
           $('#inputLastName').css("border-bottom-color", "Fd1d1d1") 
        }
        if($('#inputEmail').val() == ''){
            errores += '<p>Please write your email</p>';
            $('#inputEmail').css("border-bottom-color", "F14B4B")
        }
        else
        {
           $('#inputEmail').css("border-bottom-color", "Fd1d1d1") 
        }
        if($('#message').val() == ''){
            errores += '<p>Please write a message</p>';
            $('#message').css("border-bottom-color", "F14B4B")        
        }
        else
        {
           $('#message').css("border-bottom-color", "d1d1d1") 
        }
        

        /* SENDING MESSAGE */

        if(errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errors found</h3>'+
                                        errores+
                                        '<span id="btnClose">Close</span>'
                                    '</div>'+
                               '</div>'

            $('body').append(mensajeModal);


        }
        /* CLOSING MODAL */

        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });

    });
  });