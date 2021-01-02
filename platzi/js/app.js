$('#clock').countdown('2022/1/1', function(event){
	var $this = $(this).html(event.strftime(''
		+'<span>%dd</span>'
		+'<span>%Hh</span>'
		+'<span>%Mm</span>'
		+'<span>%Ss</span>'
		))
})
