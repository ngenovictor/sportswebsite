// Initialize map and add the tile layer for the satellite images
var map = L.map('map');

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoibmdlbm92aWN0b3IzMjEiLCJhIjoiY2lmeWhzejVlMDJoaXU0bHp2NDcza2NteiJ9.xbQkW7UhxjnDXZT9ZQS1Rg',
{
    id: 'mapbox.streets-satellite',
}).addTo(map);
var facilityLayer = L.geoJson(facilities).addTo(map);
var routesLayer = L.geoJson(routes).addTo(map);

console.log(map.fitBounds(facilityLayer.getBounds(),routesLayer.getBounds()));


$(document).ready(function(){
  function addDataToMap(data, map) {
    /*will add the */
      var dataLayer = L.geoJson(data, {
          onEachFeature: function(feature, layer) {

              var popupText = "<p>"+feature.properties.Name+"</p>";
              if (feature.properties && feature.properties.popupText) {
              	popupText += feature.properties.popupText;
              }
              layer.bindPopup(popupText);

            }
          });
      dataLayer.addTo(map);
  }
  addDataToMap(facilities, map);
  addDataToMap(routes, map);

  var facilityLayer = L.geoJson(facilities);
  var routesLayer = L.geoJson(routes);
  map.fitBounds(facilityLayer.getBounds(),routesLayer.getBounds());


  $("section#mapinfo .row .cols .mapinfo#routes").click(function(){
    $("section#mapinfo .row .cols #routeresult").slideToggle();
    $("section#mapinfo .row .cols #facilityresult").hide();
    $("section#mapinfo .row .cols #routeresult").text("");
    $("section#mapinfo .row .cols #routeresult").append("<div class='row'><div class='attr'></div><div class='name'></div></div>");
    L.geoJson(routes,{
      onEachFeature: function(feature, layer){
        $("section#mapinfo .row .cols #routeresult .name").append($("<p>"+feature.properties.Name+"</p>").click(function(){
          $("section#mapinfo .row .cols #routeresult .attr").text("");
          $("section#mapinfo .row .cols #routeresult .attr").append("<p>Distance: "+feature.properties.Distance+" Kms</p>");
          map.fitBounds(layer.getBounds());

        }));
      }
    });
  });
  $("section#mapinfo .row .cols .mapinfo#facilities").click(function(){
    $("section#mapinfo .row .cols #facilityresult").slideToggle();
    $("section#mapinfo .row .cols #routeresult").hide();
    $("section#mapinfo .row .cols #facilityresult").text("");
    $("section#mapinfo .row .cols #facilityresult").append("<div class='row'><div class='attr'></div><div class='name'></div></div>");
    L.geoJson(facilities,{
      onEachFeature: function(feature, layer){
        $("section#mapinfo .row .cols #facilityresult .name").append($("<div class='col-xs-5 bck'><p>"+feature.properties.Name+"</p></div>").click(function(){
          $("section#mapinfo .row .cols #facilityresult .name .bck").mouseenter(function(){
            $(this).css({"text-decoration": "underline"})
          });
          $("section#mapinfo .row .cols #facilityresult .name .bck").mouseleave(function(){
            $(this).css({"text-decoration": "none"})
          });

          $("section#mapinfo .row .cols #facilityresult .attr").text("");
          $("section#mapinfo .row .cols #facilityresult .attr").append("<p>"+feature.properties.Type+"</p>");
          map.setView([feature.geometry.coordinates[1],feature.geometry.coordinates[0]],  zoom=16, animate=true, duration=1 );
        }))
      }
    });
  });
});
