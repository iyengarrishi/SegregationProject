/**
 * @author Rishi Iyengar
 */

/*
 * 1. Keep initialize function same
 * 2. Add onLoad property to initalize function (default state)
 * 3. Add click handler to Layer 1 - If button 1 is clicked, show Layer 1
 * 4. Do the same for Layer 2 and Layer 3
 * 5. Single setMap function at the end, to reload maps each time a button is clicked
 */

/*function addButtons(){
	
	$(".btn").on("click", function(){
		
		var buttonName = $(this).attr("ref");
		
		if(buttonName == "income"){
			
			var layer = new google.maps.FusionTablesLayer({
				query:{
					select: "col0\x3e\x3e1",
					from: "1N9cY3w9iT7QjL4ICeg7elwckrYPwyn8x3Y7rXrWb",
					where: ""
				}, options: {
					styleId: 2,
					templateId: 2
				}
			});
		}else if(buttonName == "housing"){
			
			var layer = new google.maps.FusionTablesLayer({
				query:{
					select: "col0\x3e\x3e1",
					from: "1N9cY3w9iT7QjL4ICeg7elwckrYPwyn8x3Y7rXrWb",
					where: ""
				}, options: {
					styleId: 2,
					templateId: 2
				}
			});
		};

	});

}*/		
		/*if buttonName = 1 then
			layer = blah
		elseif buttonName = 2 then
			layer = blah2
			
		layer.setMap(map)*/   


function initialize() {

  var brentwood = new google.maps.LatLng(40.801983, -73.283011);

  var map = new google.maps.Map(document.getElementById('mapDiv'), {
    center: brentwood,
    zoom: 8
  	
  });
  
  var layer = new google.maps.FusionTablesLayer({
		query: {
	        select: "col0\x3e\x3e1",
	        from: "1YsjfaMcjaOlae8N_RF5otqvsb1RlXgpiYdG5TF9w",
	        where: ""
      	},
      	options: {
        styleId: 2,
        templateId: 2
      	}
  });

  
  $(".btn").on("click", function(){
		
		var buttonName = $(this).attr("ref");
		
		if(buttonName == "income"){
			
			var layer = new google.maps.FusionTablesLayer({
				query: {
	        		select: "col0\x3e\x3e1",
	        		from: "1YsjfaMcjaOlae8N_RF5otqvsb1RlXgpiYdG5TF9w",
	        		where: ""
      			},
      			options: {
        			styleId: 2,
        			templateId: 2
      			}
  			});
		}else if(buttonName == "housing"){
			
			var layer = new google.maps.FusionTablesLayer({
				query:{
					select: "col0\x3e\x3e1",
					from: "1N9cY3w9iT7QjL4ICeg7elwckrYPwyn8x3Y7rXrWb",
					where: ""
				}, options: {
					styleId: 2,
					templateId: 2
				}
			});
		};
		
		layer.setMap(map);	

	});
	
	layer.setMap(map);	
  
  }
  

    /*var layer = new google.maps.FusionTablesLayer({
   query: {
        select: "col0\x3e\x3e1",
        from: "1N9cY3w9iT7QjL4ICeg7elwckrYPwyn8x3Y7rXrWb",
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }

    
    
  });
  
  layer.setMap(map);*/
  /*var layer2 = new google.maps.FusionTablesLayer({
    query: {
      select: 'geometry',
      from: '1pXvu4vqADERI3wbQjllhbsMEoTkg59rMIvkcpdlJ'
    }
   });
  
  layer2.setMap(map);
  
  }*/

//$(document).ready(addButtons);

google.maps.event.addDomListener(window, 'load', initialize);