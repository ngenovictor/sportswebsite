var map = L.map('map');

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoibmdlbm92aWN0b3IzMjEiLCJhIjoiY2lmeWhzejVlMDJoaXU0bHp2NDcza2NteiJ9.xbQkW7UhxjnDXZT9ZQS1Rg',
{
    id: 'mapbox.light',
}).addTo(map);
var facilityLayer = L.geoJson(facilities).addTo(map);
var routesLayer = L.geoJson(routes).addTo(map);

console.log(map.fitBounds(facilityLayer.getBounds(),routesLayer.getBounds()));


$(document).ready(function(){
  function addDataToMap(data, map) {
      var dataLayer = L.geoJson(data, {
          onEachFeature: function(feature, layer) {
              var popupText = "<div id='popup' >Name: " + feature.properties.Name
                  +"<br>Type: " + feature.properties.Type+"</div>";
              layer.bindPopup(popupText);

            }
          });
      dataLayer.addTo(map);
      console.log();
  }
  addDataToMap(facilities, map);


  $("section#mapinfo .row .cols .mapinfo#routes").click(function(){
    $("section#mapinfo .row .cols #mapresult").show();
    $("section#mapinfo .row .cols #mapresult").text("");
    L.geoJson(routes,{
      onEachFeature: function(feature, layer){
        $("section#mapinfo .row .cols #mapresult").append("<p>Route:"+feature.properties.Name+"</p>").click(function(event){
          event.stopPropagation();
          map.fitBounds(layer.getBounds());
        });
      }
    });
  });
});
