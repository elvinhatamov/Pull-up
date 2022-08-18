import Map from "../../Components/Map/Map";
import { useLoadScript, Marker } from "@react-google-maps/api";

export default function MapListingsPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div style={{ width: "100vw", height: "90vh" }}>
      <Map />
    </div>
  );
}
