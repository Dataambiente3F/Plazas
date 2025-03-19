var wms_layers = [];

var format_Prueba02_0 = new ol.format.GeoJSON();
var features_Prueba02_0 = format_Prueba02_0.readFeatures(json_Prueba02_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prueba02_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prueba02_0.addFeatures(features_Prueba02_0);
var lyr_Prueba02_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prueba02_0, 
                style: style_Prueba02_0,
                popuplayertitle: 'Prueba 02',
                interactive: true,
                title: '<img src="styles/legend/Prueba02_0.png" /> Prueba 02'
            });

lyr_Prueba02_0.setVisible(true);
var layersList = [lyr_Prueba02_0];
lyr_Prueba02_0.set('fieldAliases', {'id': 'id', });
lyr_Prueba02_0.set('fieldImages', {'id': '', });
lyr_Prueba02_0.set('fieldLabels', {'id': 'no label', });
lyr_Prueba02_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});