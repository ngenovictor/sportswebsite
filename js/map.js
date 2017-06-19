
map = L.map('map').setView([-1.2921,36.8219], 12);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoibmdlbm92aWN0b3IzMjEiLCJhIjoiY2lmeWhzejVlMDJoaXU0bHp2NDcza2NteiJ9.xbQkW7UhxjnDXZT9ZQS1Rg',
{
    id: 'mapbox.light',
}).addTo(map);
//
var data = $.getJSON("facilities.json")
L.geoJson(data).addTo(map);
