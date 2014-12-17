	
var main = function(){
	
	$('.dropdown-toggle').click(function(){
		
		$('.dropdown-menu').toggle();
	});
	
	$('.dropdown-menu').hide();
	
	
	$('.dropdown-toggle-two').click(function(){
		
		$('.dropdown-menu-two').toggle();
	});
	
	$('.dropdown-menu-two').hide();
	
var map = L.map('map').setView([51.29, 18.16], 15);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

/*
$("#wms").click(function(){
	var wms = L.tileLayer.wms('http://mapy.geoportal.gov.pl/wss/service/pub/guest/G2_ZSIN_EUPOS_WMS/MapServer/WMSServer', {
    format: 'img/png',
    transparent: true,
    layers: 15
}).addTo(map);
});
*/

	
$('.miejsca').click(function(){	
		
  
   var marker1=L.marker([51.293472, 18.152159]).addTo(map).bindPopup("Kościół i klasztor popauliński. <p> Początki klasztoru oo. Paulinów w Wieruszowie łączą się z osobą sędziego wieluńskiego Bernarda Wierusza. W 1401 roku ufundował on klasztor przy drewnianym kościółku pw. Świętego Ducha, położonym nad Prosną u bram miasta Wieruszowa.</p>").openPopup();
  var marker2=L.marker([51.295096, 18.162421]).addTo(map).bindPopup("Kościół św.Stanisława i Matki Boskiej Częstochowskiej").openPopup();
   var marker3=L.marker([51.297197, 18.150155]).addTo(map).bindPopup("Stadion klubu sportowego WKS Prosna").openPopup();
   var marker4=L.marker([51.286840, 18.140157]).addTo(map).bindPopup("Grodzisko kultury łużyckiej").openPopup();
   var marker5=L.marker([51.286177, 18.139907]).addTo(map).bindPopup("Drewniany kościół św.Rocha z 1746 roku wraz cmentarzem<p>Położony obok grodziska kultury łużyckiej, pomiędzy Wieruszowem i Podzamczem a pobliską wsią Kuźnicą Skakawską. Jest to obiekt orientowany o konstrukcji zrębowej, jednonawowy, zbudowany z drewna modrzewiowego.</p>").openPopup();
   var marker6=L.marker([51.295822, 18.147287]).addTo(map).bindPopup("Fundamenty gotyckiego zamku wieruszowskiego").openPopup();
   var marker7=L.marker([51.295682, 18.147349]).addTo(map).bindPopup("Pomnik-Samolot DC-3 Douglas<p>Wieruszowski samolot został sprowadzony w 1968 roku z okazji 600-setnej rocznicy miasta. Samolot pasażerski Lisunow Li-2P o numerze seryjnym 234 448 04, jest radziecką licencją Douglasa DC3.</p>").openPopup();
   
});
 


 
//dodawanie na mapie po kliknięciu znaczników i ich usuwanie  
   
map.on('click', onMapClick);

function onMapClick(e) {

    var geojsonFeature = {
        "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [e.latlng.lat, e.latlng.lng]
        }
    }

    var znacznik;

    L.geoJson(geojsonFeature, {
        
        pointToLayer: function(feature, latlng){
            
            znacznik = L.marker(e.latlng, {
                
                title: "Resource Location",
                alt: "Resource Location",
                riseOnHover: true,
                

            }).bindPopup("<b>Jesteś tutaj</b><br />Co chcesz zobaczyć?").bindPopup("<input type='button' value='Usuń' class='delete'/>");

            znacznik.on("popupopen", onPopupOpen);
       
            return znacznik;
        }
    }).addTo(map);
};

function onPopupOpen() {

    var tempZnacznik = this;

    $(".delete:visible").click(function () {
        map.removeLayer(tempZnacznik);
    });
}


/*
var poligon = [{
    "type": "Feature",
    "properties": {"name":"Grodzisko"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [51.286914, 18.139079],
            [51.286800, 18.141707],
            [51.287652, 18.143328],
            [51.290477, 18.141557],
            [51.290880, 18.140924],
            [51.290880, 18.139959],
            [51.290323, 18.139454],
            [51.290309, 18.138178],
            [51.289397, 18.137974],
            [51.286914, 18.139079]
        ]]
    }
}];
    
   var Styl={
   	color:"#ff0000";
   }; 
          
  L.geoJson(poligon, {
    style:Styl
    }).addTo(map);
*/




   	
   	};




$(document).ready(main);


