$(document).ready(function(){
  $('#friend-lookup-form').on('ajax:complete', function(event, data, status){
		// send the result
		$('#results').html(data.responseText)
	})
})