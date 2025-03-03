import React, { useRef, useEffect } from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import * as proj from 'ol/proj'

const Mapa = ({ coord }) => {
  const mapRef = useRef(null)
  const mapInstance = useRef(null)

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      mapInstance.current = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: proj.fromLonLat(coord),
          zoom: 12,
        }),
      });
    }
  }, [])

  return (
    <div ref={mapRef} className="map" 
      style={{ width: '100%', height: '400px' }}>
    </div>
  )
}

export default Mapa