/// <reference path="../typings/tsd.d.ts" />

class CountrySelect {

  initial_event(){
    $.ajax({
      url: "/country_select?type=countries",
      type: "GET",
      dataType: "json",
      success: function(data){
        $.each(data, function(i, country){
          $('#country-select').append($('<option>').text(country.name).attr('value', country.val));
        });
      }
     });
   }

   country_select_event(){
     $('#country-select').change(function(){
       $.ajax({
         url: "/country_select?type=states",
         type: "GET",
         dataType: "json",
         success: function(data){
           $.each(data, function(i, state){
             $('#state-select').append($('<option>').text(state.name).attr('value', state.val));
           });
         }
        });
      });

   }

   state_select_event(){
     $('#state-select').change(function(){
       $.ajax({
         url: "/country_select?type=cities",
         type: "GET",
         dataType: "json",
         success: function(data){
           $.each(data, function(i, city){
             $('#city-select').append($('<option>').text(city.name).attr('value', city.val));
           });
         }
        });
      });

   }

}
