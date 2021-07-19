import {Feature, Map, View} from "ol";
import {Tile as TileLayer, Vector as VectorLayer} from "ol/layer";
import {OSM, Vector as VectorSource} from "ol/source";
import {Point} from "ol/geom";
import {Circle, Fill, Style} from "ol/style";
import {fromLonLat} from "ol/proj";

export default class MapService {
  static initializeMapWithPoint(mapId, coordinates) {
    const point = new Point(fromLonLat(coordinates));

    return new Map({
      target: mapId,
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [new Feature(point)],
          }),
          style: new Style({
            image: new Circle({
              radius: 7,
              fill: new Fill({color: 'red'}),
            }),
          })
        })
      ],
      view: new View({
        center: fromLonLat(coordinates),
        zoom: 15
      })
    });
  }
}