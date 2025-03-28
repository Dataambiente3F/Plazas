var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Espacio_1 = new ol.format.GeoJSON();
var features_Espacio_1 = format_Espacio_1.readFeatures(json_Espacio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espacio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espacio_1.addFeatures(features_Espacio_1);
var lyr_Espacio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espacio_1, 
                style: style_Espacio_1,
                popuplayertitle: 'Espacio',
                interactive: true,
                title: '<img src="styles/legend/Espacio_1.png" /> Espacio'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Espacio_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Espacio_1];
lyr_Espacio_1.set('fieldAliases', {'Nombre': 'Nombre', 'Imagen': 'Imagen', 'Filtro 1': 'Filtro 1', });
lyr_Espacio_1.set('fieldImages', {'Nombre': 'TextEdit', 'Imagen': 'ExternalResource', 'Filtro 1': 'TextEdit', });
lyr_Espacio_1.set('fieldLabels', {'Nombre': 'inline label - always visible', 'Imagen': 'inline label - always visible', 'Filtro 1': 'inline label - always visible', });
lyr_Espacio_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});