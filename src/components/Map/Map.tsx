import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { MapProps } from "./types";

export const Map = (props: MapProps, { data }: any) => {
  const { center, zoom } = props;

  return (
    <div data-testid="map-container" className="container shadow">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
        <ChangeView center={center} zoom={zoom} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}></Marker>
      </MapContainer>
    </div>
  );
};

// hook imported from leaflet
function ChangeView(props: MapProps) {
  const { center, zoom } = props;
  {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
}
