$('document').ready(function(e){
	
	$(document).on('input change','#slider',function(e){
       $('.price').html(`$${$(this).val()*4}`);
       // $('#views').html(`${i++}k`)
       console.log($(this).val());
	});
});

// - 10K pageviews / $8 per month 
// - 50K pageviews / $12 per month 
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month