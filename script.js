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

/*SLIDER STEPS
 * 1. Create duplicate sliderDiv and slider-values for each button
 * 2. Copy-paste code and change values
 * 3. Set null sliders for other two and active slider for current button
 */
   
function initialize (map){

  perflayer = new google.maps.FusionTablesLayer({
    query: {
        select: "col0\x3e\x3e1",
        from: "1i8SRdC3GH6IiGRu13FBbHo8hZfTTA0u2ggoYX6Ck",
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
  });
  
  racelayer = new google.maps.FusionTablesLayer({
    query: {
        select: "col0\x3e\x3e1",
        from: "1pTeZhVpf1-xfD_5kefW-KgZ_KFIt1pMkihI3GK7_",
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
  });
   		
  houselayer = new google.maps.FusionTablesLayer({
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
	
   perflayer.setMap(map);	
  
  }
 //google.maps.event.addDomListener(window, 'load', initialize);
 
$(function() {
	
	var yaphank = new google.maps.LatLng(40.898072, -72.923895);
	
	var map = new google.maps.Map(document.getElementById('mapDiv'), {
	  center: yaphank,
	  zoom: 9
    
  	});
	
initialize(map);
	
    $('#perfsliderDiv').slider({
        max: 2011,//slider max value
        min: 2006,//slider min value
        step: 1,//slider steps 
        value: 2006,//start value 
        slide: function(event, ui) {
            document.getElementById("perfslider-value").innerHTML = ui.value + "";
            console.log(ui.value);
            perflayer.setOptions({
                query: {
                    select: "col0\x3e\x3e1",
                    from: "1i8SRdC3GH6IiGRu13FBbHo8hZfTTA0u2ggoYX6Ck",
                    where: "ACC_YEAR = " +  ui.value
                }
            });
        }
    });
    
    $('#racesliderDiv').slider({
        max: 2013,//slider max value
        min: 2005,//slider min value
        step: 1,//slider steps 
        value: 2005,//start value 
        slide: function(event, ui) {
            document.getElementById("raceslider-value").innerHTML = ui.value + "";
            console.log(ui.value);
            racelayer.setOptions({
                query: {
                    select: "col0\x3e\x3e1",
        			from: "1pTeZhVpf1-xfD_5kefW-KgZ_KFIt1pMkihI3GK7_",
                    where: "YEAR = " +  ui.value
                }
            });
        }
    });
    
    $(".btn").on("click", function(){
		
		var buttonName = $(this).attr("ref");
		
		if(buttonName == "perf"){
			
			perflayer.setMap(map);
			racelayer.setMap(null);
	  		houselayer.setMap(null);
	  		
	  		$("#perfsliderDiv").show();
	  		$("#racesliderDiv").hide();	  		
  		
  		}else if(buttonName == "race"){
		
			perflayer.setMap(null);
			racelayer.setMap(map);
			houselayer.setMap(null);
			
			$("#perfsliderDiv").hide();
	  		$("#racesliderDiv").show();	
			
		}else if(buttonName == "house"){
			
			perflayer.setMap(null);
			racelayer.setMap(null);
			houselayer.setMap(map);
			
			$("#perfsliderDiv").hide();
	  		$("#racesliderDiv").hide();
			
		};	

	}); 

    
});	


	
