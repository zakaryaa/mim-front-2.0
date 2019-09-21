import React from "react";
import DeckGL, {IconLayer} from "deck.gl";
import { StaticMap } from "react-map-gl";
// import { PaperPlaneSvg } from "../../assets/svg/paperPlane.svg";

/**
 * Note: if by any case we start to change the data object dynamically
 * we need to reconsider handling viewState on our own since it will have
 * some performance implications, instead use 'initialViewState'
 */

const MapDeckGL = ({startupsData}) => {
  const startupsLayer = new IconLayer({
    id: "startups-layer",
    data: startupsData.data,
    // iconAtlas and iconMapping should not be provided
    // getIcon return an object which contains url to fetch icon of each data point
    getIcon: d => ({
      url: "/paperPlane.png",
      width: 128,
      height: 128,
      anchorY: 128
    }),
    pickable: true,
    sizeScale: 60,
    getPosition: (d) => {
      console.log(d);
      return [+d.longitude, +d.latitude];},
  });

  return (
    <React.Fragment>
      <DeckGL
        initialViewState={{
          longitude: -74.006,
          latitude: 40.7128,
          zoom: 12
          }}
        layers={[startupsLayer]}
        controller={true} // allows the user to move the map around
      >
        <StaticMap
          mapStyle="mapbox://styles/mapbox/streets-v11"
        />
      </DeckGL>
   </React.Fragment>
  );
};

MapDeckGL.defaultProps = {
  // Initial viewport settings
  initialViewState: {
    longitude: 41.00594,
    latitude: 39.746235,
    zoom: 2,
    pitch: 0,
    bearing: 0
  },
  showCluster: false
};

export default MapDeckGL;
