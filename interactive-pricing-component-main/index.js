$('document').ready(function(e){
 
       const discount = () =>
       {  
          let rangevalue = $('input[type="range"]').val();
          let num = parseInt($('input[type="range"]').val());
          let givedist = $('input[type="checkbox"]');
          if(rangevalue <= 10)
          {   
              rangevalue = num*10;
              $('#views').html(`${rangevalue}k`);
              if($(givedist).is(':checked'))
              {
                $('.price').html(`$${(12*(num+7)*0.75)}`);
                $('.month').html('/ year');
              }else{
                $('.price').html(`$${num+7}`);
                $('.month').html('/ month');
              }
          }else if(rangevalue < 19)
          {
              rangevalue = ((num%10)*100)+100;
              $('#views').html(`${rangevalue}k`);
              if($(givedist).is(':checked'))
              {
                $('.price').html(`$${(Math.floor(num*1.9)*12*0.75)}`);
                $('.month').html('/ year');
              }else{
                $('.price').html(`$${Math.floor(num*1.9)}`);
                $('.month').html('/ month');
              }
          }else
          {   
             $('#views').html(`1M`); 
              if($(givedist).is(':checked'))
              {
                $('.price').html(`$${(Math.floor(num*1.9)*12*0.75)}`);
                $('.month').html('/ year');
              }else{
                $('.price').html(`$${Math.floor(num*1.9)}`);
                $('.month').html('/ month');
              }   
          }

       }

	$(document).on('input change','#slider',function(e){
	   discount();
	});

       $('input[type="checkbox"]').on('click',function(e){
            discount();
       });

});


