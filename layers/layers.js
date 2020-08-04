var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Conducts5yr__3 = new ol.format.GeoJSON();
var features_Conducts5yr__3 = format_Conducts5yr__3.readFeatures(json_Conducts5yr__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conducts5yr__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conducts5yr__3.addFeatures(features_Conducts5yr__3);
var lyr_Conducts5yr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Conducts5yr__3, 
                style: style_Conducts5yr__3,
                interactive: true,
    title: 'Conducts5yr_<br />\
    <img src="styles/legend/Conducts5yr__3_0.png" /> BC<br />\
    <img src="styles/legend/Conducts5yr__3_1.png" /> Pipe<br />\
    <img src="styles/legend/Conducts5yr__3_2.png" /> V-drain<br />'
        });
var format_Conducts50yr_4 = new ol.format.GeoJSON();
var features_Conducts50yr_4 = format_Conducts50yr_4.readFeatures(json_Conducts50yr_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conducts50yr_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conducts50yr_4.addFeatures(features_Conducts50yr_4);
var lyr_Conducts50yr_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Conducts50yr_4, 
                style: style_Conducts50yr_4,
                interactive: true,
    title: 'Conducts50yr<br />\
    <img src="styles/legend/Conducts50yr_4_0.png" /> CC<br />\
    <img src="styles/legend/Conducts50yr_4_1.png" /> CC  height reduced from 740mm<br />\
    <img src="styles/legend/Conducts50yr_4_2.png" /> CC_10m_wide<br />\
    <img src="styles/legend/Conducts50yr_4_3.png" /> CC_1800mm<br />\
    <img src="styles/legend/Conducts50yr_4_4.png" /> CC_2100mm<br />\
    <img src="styles/legend/Conducts50yr_4_5.png" /> CC_2585mm<br />\
    <img src="styles/legend/Conducts50yr_4_6.png" /> CC_2700mm<br />\
    <img src="styles/legend/Conducts50yr_4_7.png" /> CC_2900mm<br />\
    <img src="styles/legend/Conducts50yr_4_8.png" /> CC_3000mm<br />\
    <img src="styles/legend/Conducts50yr_4_9.png" /> CC_4800mm<br />\
    <img src="styles/legend/Conducts50yr_4_10.png" /> CC_TVD<br />\
    <img src="styles/legend/Conducts50yr_4_11.png" /> CC_VD<br />\
    <img src="styles/legend/Conducts50yr_4_12.png" /> EC<br />\
    <img src="styles/legend/Conducts50yr_4_13.png" /> EC increase height was 0.64<br />\
    <img src="styles/legend/Conducts50yr_4_14.png" /> EC_Road<br />\
    <img src="styles/legend/Conducts50yr_4_15.png" /> p<br />\
    <img src="styles/legend/Conducts50yr_4_16.png" /> TVD<br />\
    <img src="styles/legend/Conducts50yr_4_17.png" /> TVD_1870mm<br />\
    <img src="styles/legend/Conducts50yr_4_18.png" /> tzc<br />\
    <img src="styles/legend/Conducts50yr_4_19.png" /> TZC<br />\
    <img src="styles/legend/Conducts50yr_4_20.png" /> TZC_1200mm<br />\
    <img src="styles/legend/Conducts50yr_4_21.png" /> TZC_1200mm_H_1520mm_BW<br />\
    <img src="styles/legend/Conducts50yr_4_22.png" /> TZC_1870mm_H_4300mm_BW<br />\
    <img src="styles/legend/Conducts50yr_4_23.png" /> TZC_2100mm<br />\
    <img src="styles/legend/Conducts50yr_4_24.png" /> TZC_2500mm<br />\
    <img src="styles/legend/Conducts50yr_4_25.png" /> TZC_2900mm<br />\
    <img src="styles/legend/Conducts50yr_4_26.png" /> TZC_3800mm<br />\
    <img src="styles/legend/Conducts50yr_4_27.png" /> TZC_6000mm<br />'
        });
var format_Junctions50yr_5 = new ol.format.GeoJSON();
var features_Junctions50yr_5 = format_Junctions50yr_5.readFeatures(json_Junctions50yr_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Junctions50yr_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Junctions50yr_5.addFeatures(features_Junctions50yr_5);
var lyr_Junctions50yr_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Junctions50yr_5, 
                style: style_Junctions50yr_5,
                interactive: true,
    title: 'Junctions50yr<br />\
    <img src="styles/legend/Junctions50yr_5_0.png" /> No<br />\
    <img src="styles/legend/Junctions50yr_5_1.png" /> Yes<br />'
        });
var format_Junctions5yr_6 = new ol.format.GeoJSON();
var features_Junctions5yr_6 = format_Junctions5yr_6.readFeatures(json_Junctions5yr_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Junctions5yr_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Junctions5yr_6.addFeatures(features_Junctions5yr_6);
var lyr_Junctions5yr_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Junctions5yr_6, 
                style: style_Junctions5yr_6,
                interactive: true,
                title: '<img src="styles/legend/Junctions5yr_6.png" /> Junctions5yr'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_Conducts5yr__3.setVisible(true);lyr_Conducts50yr_4.setVisible(true);lyr_Junctions50yr_5.setVisible(true);lyr_Junctions5yr_6.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,lyr_OpenStreetMap_2,lyr_Conducts5yr__3,lyr_Conducts50yr_4,lyr_Junctions50yr_5,lyr_Junctions5yr_6];
lyr_Conducts5yr__3.set('fieldAliases', {'NAME': 'NAME', 'INLETNODE': 'INLETNODE', 'OUTLETNODE': 'OUTLETNODE', 'DESCRIPT': 'DESCRIPT', 'TAG': 'TAG', 'LENGTH': 'LENGTH', 'ROUGHNESS': 'ROUGHNESS', 'INOFFSET': 'INOFFSET', 'OUTOFFSET': 'OUTOFFSET', 'INITFLOW': 'INITFLOW', 'FLOWLIMIT': 'FLOWLIMIT', 'ENTLOSSCO': 'ENTLOSSCO', 'EXITLOSSCO': 'EXITLOSSCO', 'AVGLOSSCO': 'AVGLOSSCO', 'SEEPAGE': 'SEEPAGE', 'FLAPGATE': 'FLAPGATE', 'XSECTION': 'XSECTION', 'GEOM1': 'GEOM1', 'GEOM2': 'GEOM2', 'GEOM3': 'GEOM3', 'GEOM4': 'GEOM4', 'BARRELS': 'BARRELS', 'TRANSECT': 'TRANSECT', 'SHAPECURVE': 'SHAPECURVE', 'CULVRTCODE': 'CULVRTCODE', 'CTRLRULES': 'CTRLRULES', 'SLOPE': 'SLOPE', 'MAXSPREAD': 'MAXSPREAD', 'TOTCONAREA': 'TOTCONAREA', 'IMPCONAREA': 'IMPCONAREA', 'UNITFLOW': 'UNITFLOW', 'MAXFLOW': 'MAXFLOW', 'TIMEMAXFLW': 'TIMEMAXFLW', 'MAXVELOCIT': 'MAXVELOCIT', 'CAPFLOW': 'CAPFLOW', 'CAPDEPTH': 'CAPDEPTH', 'MAXVOLUME': 'MAXVOLUME', 'FULLBOTH': 'FULLBOTH', 'HRSFULLUP': 'HRSFULLUP', 'FULLDOWN': 'FULLDOWN', 'FULLNORMAL': 'FULLNORMAL', 'HRSLIMITED': 'HRSLIMITED', 'LENGTHFACT': 'LENGTHFACT', 'DRY': 'DRY', 'SUBCRIT': 'SUBCRIT', 'SUPERCRIT': 'SUPERCRIT', 'NORMALLTD': 'NORMALLTD', 'INLETCNTRL': 'INLETCNTRL', 'TSCAPACITY': 'TSCAPACITY', 'TypeC': 'TypeC', });
lyr_Conducts50yr_4.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'INLETNODE': 'INLETNODE', 'OUTLETNODE': 'OUTLETNODE', 'DESCRIPT': 'DESCRIPT', 'TAG': 'TAG', 'LENGTH': 'LENGTH', 'ROUGHNESS': 'ROUGHNESS', 'INOFFSET': 'INOFFSET', 'OUTOFFSET': 'OUTOFFSET', 'INITFLOW': 'INITFLOW', 'FLOWLIMIT': 'FLOWLIMIT', 'ENTLOSSCO': 'ENTLOSSCO', 'EXITLOSSCO': 'EXITLOSSCO', 'AVGLOSSCO': 'AVGLOSSCO', 'SEEPAGE': 'SEEPAGE', 'FLAPGATE': 'FLAPGATE', 'XSECTION': 'XSECTION', 'GEOM1': 'GEOM1', 'GEOM2': 'GEOM2', 'GEOM3': 'GEOM3', 'GEOM4': 'GEOM4', 'BARRELS': 'BARRELS', 'TRANSECT': 'TRANSECT', 'SHAPECURVE': 'SHAPECURVE', 'CULVRTCODE': 'CULVRTCODE', 'CTRLRULES': 'CTRLRULES', 'SLOPE': 'SLOPE', 'MAXSPREAD': 'MAXSPREAD', 'TOTCONAREA': 'TOTCONAREA', 'IMPCONAREA': 'IMPCONAREA', 'UNITFLOW': 'UNITFLOW', 'MAXFLOW': 'MAXFLOW', 'TIMEMAXFLW': 'TIMEMAXFLW', 'MAXVELOCIT': 'MAXVELOCIT', 'CAPFLOW': 'CAPFLOW', 'CAPDEPTH': 'CAPDEPTH', 'MAXVOLUME': 'MAXVOLUME', 'FULLBOTH': 'FULLBOTH', 'HRSFULLUP': 'HRSFULLUP', 'FULLDOWN': 'FULLDOWN', 'FULLNORMAL': 'FULLNORMAL', 'HRSLIMITED': 'HRSLIMITED', 'LENGTHFACT': 'LENGTHFACT', 'DRY': 'DRY', 'SUBCRIT': 'SUBCRIT', 'SUPERCRIT': 'SUPERCRIT', 'NORMALLTD': 'NORMALLTD', 'INLETCNTRL': 'INLETCNTRL', 'TSCAPACITY': 'TSCAPACITY', });
lyr_Junctions50yr_5.set('fieldAliases', {'NAME': 'NAME', 'X': 'X', 'Y': 'Y', 'DESCRIPT': 'DESCRIPT', 'TAG': 'TAG', 'INFLOWS': 'INFLOWS', 'TREATMENT': 'TREATMENT', 'INVERTELEV': 'INVERTELEV', 'RIMELEV': 'RIMELEV', 'DEPTH': 'DEPTH', 'INITDEPTH': 'INITDEPTH', 'SURCHDEPTH': 'SURCHDEPTH', 'PONDEDAREA': 'PONDEDAREA', 'BASEFLOW': 'BASEFLOW', 'BASEPATTRN': 'BASEPATTRN', 'TIMESERIES': 'TIMESERIES', 'SCALEFACTR': 'SCALEFACTR', 'AVGVALUE': 'AVGVALUE', 'PATTERN1': 'PATTERN1', 'PATTERN2': 'PATTERN2', 'PATTERN3': 'PATTERN3', 'PATTERN4': 'PATTERN4', 'HYDROGRAPH': 'HYDROGRAPH', 'SSAREA': 'SSAREA', 'TOTCONAREA': 'TOTCONAREA', 'IMPCONAREA': 'IMPCONAREA', 'UNITFLOW': 'UNITFLOW', 'AVGDEPTH': 'AVGDEPTH', 'MAXDEPTH': 'MAXDEPTH', 'MAXHGL': 'MAXHGL', 'TIMEMAXHGL': 'TIMEMAXHGL', 'REMAXDEPTH': 'REMAXDEPTH', 'MAXLATFLOW': 'MAXLATFLOW', 'MAXTOTFLOW': 'MAXTOTFLOW', 'TOTLATFLOW': 'TOTLATFLOW', 'TOTINFLOW': 'TOTINFLOW', 'FLOWERROR': 'FLOWERROR', 'HRSSURCHAR': 'HRSSURCHAR', 'MAXSURCHAR': 'MAXSURCHAR', 'MINDEPTHBR': 'MINDEPTHBR', 'HOURSFLOOD': 'HOURSFLOOD', 'MAXFLOODR': 'MAXFLOODR', 'TOTFLDVOL': 'TOTFLDVOL', 'MAXPONDED': 'MAXPONDED', 'TSVOLUME': 'TSVOLUME', 'Touch': 'Touch', });
lyr_Junctions5yr_6.set('fieldAliases', {'NAME': 'NAME', 'X': 'X', 'Y': 'Y', 'DESCRIPT': 'DESCRIPT', 'TAG': 'TAG', 'INFLOWS': 'INFLOWS', 'TREATMENT': 'TREATMENT', 'INVERTELEV': 'INVERTELEV', 'RIMELEV': 'RIMELEV', 'DEPTH': 'DEPTH', 'INITDEPTH': 'INITDEPTH', 'SURCHDEPTH': 'SURCHDEPTH', 'PONDEDAREA': 'PONDEDAREA', 'BASEFLOW': 'BASEFLOW', 'BASEPATTRN': 'BASEPATTRN', 'TIMESERIES': 'TIMESERIES', 'SCALEFACTR': 'SCALEFACTR', 'AVGVALUE': 'AVGVALUE', 'PATTERN1': 'PATTERN1', 'PATTERN2': 'PATTERN2', 'PATTERN3': 'PATTERN3', 'PATTERN4': 'PATTERN4', 'HYDROGRAPH': 'HYDROGRAPH', 'SSAREA': 'SSAREA', 'TOTCONAREA': 'TOTCONAREA', 'IMPCONAREA': 'IMPCONAREA', 'UNITFLOW': 'UNITFLOW', 'AVGDEPTH': 'AVGDEPTH', 'MAXDEPTH': 'MAXDEPTH', 'MAXHGL': 'MAXHGL', 'TIMEMAXHGL': 'TIMEMAXHGL', 'REMAXDEPTH': 'REMAXDEPTH', 'MAXLATFLOW': 'MAXLATFLOW', 'MAXTOTFLOW': 'MAXTOTFLOW', 'TOTLATFLOW': 'TOTLATFLOW', 'TOTINFLOW': 'TOTINFLOW', 'FLOWERROR': 'FLOWERROR', 'HRSSURCHAR': 'HRSSURCHAR', 'MAXSURCHAR': 'MAXSURCHAR', 'MINDEPTHBR': 'MINDEPTHBR', 'HOURSFLOOD': 'HOURSFLOOD', 'MAXFLOODR': 'MAXFLOODR', 'TOTFLDVOL': 'TOTFLDVOL', 'MAXPONDED': 'MAXPONDED', 'TSVOLUME': 'TSVOLUME', });
lyr_Conducts5yr__3.set('fieldImages', {'NAME': 'TextEdit', 'INLETNODE': 'TextEdit', 'OUTLETNODE': 'TextEdit', 'DESCRIPT': 'TextEdit', 'TAG': 'TextEdit', 'LENGTH': 'TextEdit', 'ROUGHNESS': 'TextEdit', 'INOFFSET': 'TextEdit', 'OUTOFFSET': 'TextEdit', 'INITFLOW': 'TextEdit', 'FLOWLIMIT': 'TextEdit', 'ENTLOSSCO': 'TextEdit', 'EXITLOSSCO': 'TextEdit', 'AVGLOSSCO': 'TextEdit', 'SEEPAGE': 'TextEdit', 'FLAPGATE': 'TextEdit', 'XSECTION': 'TextEdit', 'GEOM1': 'TextEdit', 'GEOM2': 'TextEdit', 'GEOM3': 'TextEdit', 'GEOM4': 'TextEdit', 'BARRELS': 'TextEdit', 'TRANSECT': 'TextEdit', 'SHAPECURVE': 'TextEdit', 'CULVRTCODE': 'TextEdit', 'CTRLRULES': 'TextEdit', 'SLOPE': 'TextEdit', 'MAXSPREAD': 'TextEdit', 'TOTCONAREA': 'TextEdit', 'IMPCONAREA': 'TextEdit', 'UNITFLOW': 'TextEdit', 'MAXFLOW': 'TextEdit', 'TIMEMAXFLW': 'TextEdit', 'MAXVELOCIT': 'TextEdit', 'CAPFLOW': 'TextEdit', 'CAPDEPTH': 'TextEdit', 'MAXVOLUME': 'TextEdit', 'FULLBOTH': 'TextEdit', 'HRSFULLUP': 'TextEdit', 'FULLDOWN': 'TextEdit', 'FULLNORMAL': 'TextEdit', 'HRSLIMITED': 'TextEdit', 'LENGTHFACT': 'TextEdit', 'DRY': 'TextEdit', 'SUBCRIT': 'TextEdit', 'SUPERCRIT': 'TextEdit', 'NORMALLTD': 'TextEdit', 'INLETCNTRL': 'TextEdit', 'TSCAPACITY': 'TextEdit', 'TypeC': '', });
lyr_Conducts50yr_4.set('fieldImages', {'fid': '', 'NAME': 'TextEdit', 'INLETNODE': 'TextEdit', 'OUTLETNODE': 'TextEdit', 'DESCRIPT': 'TextEdit', 'TAG': 'TextEdit', 'LENGTH': 'TextEdit', 'ROUGHNESS': 'TextEdit', 'INOFFSET': 'TextEdit', 'OUTOFFSET': 'TextEdit', 'INITFLOW': 'TextEdit', 'FLOWLIMIT': 'TextEdit', 'ENTLOSSCO': 'TextEdit', 'EXITLOSSCO': 'TextEdit', 'AVGLOSSCO': 'TextEdit', 'SEEPAGE': 'TextEdit', 'FLAPGATE': 'TextEdit', 'XSECTION': 'TextEdit', 'GEOM1': 'TextEdit', 'GEOM2': 'TextEdit', 'GEOM3': 'TextEdit', 'GEOM4': 'TextEdit', 'BARRELS': 'TextEdit', 'TRANSECT': 'TextEdit', 'SHAPECURVE': 'TextEdit', 'CULVRTCODE': 'TextEdit', 'CTRLRULES': 'TextEdit', 'SLOPE': 'TextEdit', 'MAXSPREAD': 'TextEdit', 'TOTCONAREA': 'TextEdit', 'IMPCONAREA': 'TextEdit', 'UNITFLOW': 'TextEdit', 'MAXFLOW': 'TextEdit', 'TIMEMAXFLW': 'TextEdit', 'MAXVELOCIT': 'TextEdit', 'CAPFLOW': 'TextEdit', 'CAPDEPTH': 'TextEdit', 'MAXVOLUME': 'TextEdit', 'FULLBOTH': 'TextEdit', 'HRSFULLUP': 'TextEdit', 'FULLDOWN': 'TextEdit', 'FULLNORMAL': 'TextEdit', 'HRSLIMITED': 'TextEdit', 'LENGTHFACT': 'TextEdit', 'DRY': 'TextEdit', 'SUBCRIT': 'TextEdit', 'SUPERCRIT': 'TextEdit', 'NORMALLTD': 'TextEdit', 'INLETCNTRL': 'TextEdit', 'TSCAPACITY': 'TextEdit', });
lyr_Junctions50yr_5.set('fieldImages', {'NAME': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'DESCRIPT': 'TextEdit', 'TAG': 'TextEdit', 'INFLOWS': 'TextEdit', 'TREATMENT': 'TextEdit', 'INVERTELEV': 'TextEdit', 'RIMELEV': 'TextEdit', 'DEPTH': 'TextEdit', 'INITDEPTH': 'TextEdit', 'SURCHDEPTH': 'TextEdit', 'PONDEDAREA': 'TextEdit', 'BASEFLOW': 'TextEdit', 'BASEPATTRN': 'TextEdit', 'TIMESERIES': 'TextEdit', 'SCALEFACTR': 'TextEdit', 'AVGVALUE': 'TextEdit', 'PATTERN1': 'TextEdit', 'PATTERN2': 'TextEdit', 'PATTERN3': 'TextEdit', 'PATTERN4': 'TextEdit', 'HYDROGRAPH': 'TextEdit', 'SSAREA': 'TextEdit', 'TOTCONAREA': 'TextEdit', 'IMPCONAREA': 'TextEdit', 'UNITFLOW': 'TextEdit', 'AVGDEPTH': 'TextEdit', 'MAXDEPTH': 'TextEdit', 'MAXHGL': 'TextEdit', 'TIMEMAXHGL': 'TextEdit', 'REMAXDEPTH': 'TextEdit', 'MAXLATFLOW': 'TextEdit', 'MAXTOTFLOW': 'TextEdit', 'TOTLATFLOW': 'TextEdit', 'TOTINFLOW': 'TextEdit', 'FLOWERROR': 'TextEdit', 'HRSSURCHAR': 'TextEdit', 'MAXSURCHAR': 'TextEdit', 'MINDEPTHBR': 'TextEdit', 'HOURSFLOOD': 'TextEdit', 'MAXFLOODR': 'TextEdit', 'TOTFLDVOL': 'TextEdit', 'MAXPONDED': 'TextEdit', 'TSVOLUME': 'TextEdit', 'Touch': '', });
lyr_Junctions5yr_6.set('fieldImages', {'NAME': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'DESCRIPT': 'TextEdit', 'TAG': 'TextEdit', 'INFLOWS': 'TextEdit', 'TREATMENT': 'TextEdit', 'INVERTELEV': 'TextEdit', 'RIMELEV': 'TextEdit', 'DEPTH': 'TextEdit', 'INITDEPTH': 'TextEdit', 'SURCHDEPTH': 'TextEdit', 'PONDEDAREA': 'TextEdit', 'BASEFLOW': 'TextEdit', 'BASEPATTRN': 'TextEdit', 'TIMESERIES': 'TextEdit', 'SCALEFACTR': 'TextEdit', 'AVGVALUE': 'TextEdit', 'PATTERN1': 'TextEdit', 'PATTERN2': 'TextEdit', 'PATTERN3': 'TextEdit', 'PATTERN4': 'TextEdit', 'HYDROGRAPH': 'TextEdit', 'SSAREA': 'TextEdit', 'TOTCONAREA': 'TextEdit', 'IMPCONAREA': 'TextEdit', 'UNITFLOW': 'TextEdit', 'AVGDEPTH': 'TextEdit', 'MAXDEPTH': 'TextEdit', 'MAXHGL': 'TextEdit', 'TIMEMAXHGL': 'TextEdit', 'REMAXDEPTH': 'TextEdit', 'MAXLATFLOW': 'TextEdit', 'MAXTOTFLOW': 'TextEdit', 'TOTLATFLOW': 'TextEdit', 'TOTINFLOW': 'TextEdit', 'FLOWERROR': 'TextEdit', 'HRSSURCHAR': 'TextEdit', 'MAXSURCHAR': 'TextEdit', 'MINDEPTHBR': 'TextEdit', 'HOURSFLOOD': 'TextEdit', 'MAXFLOODR': 'TextEdit', 'TOTFLDVOL': 'TextEdit', 'MAXPONDED': 'TextEdit', 'TSVOLUME': 'TextEdit', });
lyr_Conducts5yr__3.set('fieldLabels', {'NAME': 'no label', 'INLETNODE': 'no label', 'OUTLETNODE': 'no label', 'DESCRIPT': 'no label', 'TAG': 'no label', 'LENGTH': 'no label', 'ROUGHNESS': 'no label', 'INOFFSET': 'no label', 'OUTOFFSET': 'no label', 'INITFLOW': 'no label', 'FLOWLIMIT': 'no label', 'ENTLOSSCO': 'no label', 'EXITLOSSCO': 'no label', 'AVGLOSSCO': 'no label', 'SEEPAGE': 'no label', 'FLAPGATE': 'no label', 'XSECTION': 'no label', 'GEOM1': 'no label', 'GEOM2': 'no label', 'GEOM3': 'no label', 'GEOM4': 'no label', 'BARRELS': 'no label', 'TRANSECT': 'no label', 'SHAPECURVE': 'no label', 'CULVRTCODE': 'no label', 'CTRLRULES': 'no label', 'SLOPE': 'no label', 'MAXSPREAD': 'no label', 'TOTCONAREA': 'no label', 'IMPCONAREA': 'no label', 'UNITFLOW': 'no label', 'MAXFLOW': 'no label', 'TIMEMAXFLW': 'no label', 'MAXVELOCIT': 'no label', 'CAPFLOW': 'no label', 'CAPDEPTH': 'no label', 'MAXVOLUME': 'no label', 'FULLBOTH': 'no label', 'HRSFULLUP': 'no label', 'FULLDOWN': 'no label', 'FULLNORMAL': 'no label', 'HRSLIMITED': 'no label', 'LENGTHFACT': 'no label', 'DRY': 'no label', 'SUBCRIT': 'no label', 'SUPERCRIT': 'no label', 'NORMALLTD': 'no label', 'INLETCNTRL': 'no label', 'TSCAPACITY': 'no label', 'TypeC': 'no label', });
lyr_Conducts50yr_4.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'INLETNODE': 'no label', 'OUTLETNODE': 'no label', 'DESCRIPT': 'no label', 'TAG': 'no label', 'LENGTH': 'no label', 'ROUGHNESS': 'no label', 'INOFFSET': 'no label', 'OUTOFFSET': 'no label', 'INITFLOW': 'no label', 'FLOWLIMIT': 'no label', 'ENTLOSSCO': 'no label', 'EXITLOSSCO': 'no label', 'AVGLOSSCO': 'no label', 'SEEPAGE': 'no label', 'FLAPGATE': 'no label', 'XSECTION': 'no label', 'GEOM1': 'no label', 'GEOM2': 'no label', 'GEOM3': 'no label', 'GEOM4': 'no label', 'BARRELS': 'no label', 'TRANSECT': 'no label', 'SHAPECURVE': 'no label', 'CULVRTCODE': 'no label', 'CTRLRULES': 'no label', 'SLOPE': 'no label', 'MAXSPREAD': 'no label', 'TOTCONAREA': 'no label', 'IMPCONAREA': 'no label', 'UNITFLOW': 'no label', 'MAXFLOW': 'no label', 'TIMEMAXFLW': 'no label', 'MAXVELOCIT': 'no label', 'CAPFLOW': 'no label', 'CAPDEPTH': 'no label', 'MAXVOLUME': 'no label', 'FULLBOTH': 'no label', 'HRSFULLUP': 'no label', 'FULLDOWN': 'no label', 'FULLNORMAL': 'no label', 'HRSLIMITED': 'no label', 'LENGTHFACT': 'no label', 'DRY': 'no label', 'SUBCRIT': 'no label', 'SUPERCRIT': 'no label', 'NORMALLTD': 'no label', 'INLETCNTRL': 'no label', 'TSCAPACITY': 'no label', });
lyr_Junctions50yr_5.set('fieldLabels', {'NAME': 'no label', 'X': 'no label', 'Y': 'no label', 'DESCRIPT': 'no label', 'TAG': 'no label', 'INFLOWS': 'no label', 'TREATMENT': 'no label', 'INVERTELEV': 'no label', 'RIMELEV': 'no label', 'DEPTH': 'no label', 'INITDEPTH': 'no label', 'SURCHDEPTH': 'no label', 'PONDEDAREA': 'no label', 'BASEFLOW': 'no label', 'BASEPATTRN': 'no label', 'TIMESERIES': 'no label', 'SCALEFACTR': 'no label', 'AVGVALUE': 'no label', 'PATTERN1': 'no label', 'PATTERN2': 'no label', 'PATTERN3': 'no label', 'PATTERN4': 'no label', 'HYDROGRAPH': 'no label', 'SSAREA': 'no label', 'TOTCONAREA': 'no label', 'IMPCONAREA': 'no label', 'UNITFLOW': 'no label', 'AVGDEPTH': 'no label', 'MAXDEPTH': 'no label', 'MAXHGL': 'no label', 'TIMEMAXHGL': 'no label', 'REMAXDEPTH': 'no label', 'MAXLATFLOW': 'no label', 'MAXTOTFLOW': 'no label', 'TOTLATFLOW': 'no label', 'TOTINFLOW': 'no label', 'FLOWERROR': 'no label', 'HRSSURCHAR': 'no label', 'MAXSURCHAR': 'no label', 'MINDEPTHBR': 'no label', 'HOURSFLOOD': 'no label', 'MAXFLOODR': 'no label', 'TOTFLDVOL': 'no label', 'MAXPONDED': 'no label', 'TSVOLUME': 'no label', 'Touch': 'no label', });
lyr_Junctions5yr_6.set('fieldLabels', {'NAME': 'no label', 'X': 'no label', 'Y': 'no label', 'DESCRIPT': 'no label', 'TAG': 'no label', 'INFLOWS': 'no label', 'TREATMENT': 'no label', 'INVERTELEV': 'no label', 'RIMELEV': 'no label', 'DEPTH': 'no label', 'INITDEPTH': 'no label', 'SURCHDEPTH': 'no label', 'PONDEDAREA': 'no label', 'BASEFLOW': 'no label', 'BASEPATTRN': 'no label', 'TIMESERIES': 'no label', 'SCALEFACTR': 'no label', 'AVGVALUE': 'no label', 'PATTERN1': 'no label', 'PATTERN2': 'no label', 'PATTERN3': 'no label', 'PATTERN4': 'no label', 'HYDROGRAPH': 'no label', 'SSAREA': 'no label', 'TOTCONAREA': 'no label', 'IMPCONAREA': 'no label', 'UNITFLOW': 'no label', 'AVGDEPTH': 'no label', 'MAXDEPTH': 'no label', 'MAXHGL': 'no label', 'TIMEMAXHGL': 'no label', 'REMAXDEPTH': 'no label', 'MAXLATFLOW': 'no label', 'MAXTOTFLOW': 'no label', 'TOTLATFLOW': 'no label', 'TOTINFLOW': 'no label', 'FLOWERROR': 'no label', 'HRSSURCHAR': 'no label', 'MAXSURCHAR': 'no label', 'MINDEPTHBR': 'no label', 'HOURSFLOOD': 'no label', 'MAXFLOODR': 'no label', 'TOTFLDVOL': 'no label', 'MAXPONDED': 'no label', 'TSVOLUME': 'no label', });
lyr_Junctions5yr_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});