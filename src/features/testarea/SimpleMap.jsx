import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "semantic-ui-react";

const AnyReactComponent = () => <Icon name='marker' size='big' color='red' />;

export default function SimpleMap({ latLng }) {
  const defaultProps = {
    zoom: 11
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "300px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCNxybeRu-TFSYVDDnjZ2z7Ld8tp0_yuI8" }}
        defaultCenter={latLng}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={latLng.lat} lng={latLng.lng} />
      </GoogleMapReact>
    </div>
  );
}
