$('document').ready(function(){
  $('.mc-form-example').submit(function(e){
        
    // Prevent the form from being submitted via the browser directly
    e.preventDefault();
        
    // Grabs the attributes and values from the form
    var data = {email: $('#mc-email').val()};
    var endpoint = $(this).attr('action');
        
    // Makes the ajax request
    $.ajax({
      method: 'POST',
      dataType: "json",
      url: endpoint,
      data: data
    }).success(function(data){

      if(data.id){
      	
      	// Clean Previous Data
      	$("p#newsletter_message").empty();
      	
        // Success
        $("p#newsletter_message").append('Thanks for signing up.');

      } else if (data.title == 'Member Exists') {
        
        // Clean Previous Data
        $("p#newsletter_message").empty();
        	
        // Error
        $("p#newsletter_message").append('Thanks, but you are alredy signed up.');

      } else {
		
		// Clean Previous Data
		$("p#newsletter_message").empty();

        // Error
      	$("p#newsletter_message").append('Sorry but there is something wrong. Please try later.');

      }

    }).error(function(){
		
		// Clean Previous Data
		$("p#newsletter_message").empty();
		
		// Server Issue
		$("p#newsletter_message").append('Sorry but there is something wrong. Please try later.');

    });

  });
});