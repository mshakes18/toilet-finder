mapboxgl.accessToken =
  "pk.eyJ1IjoibXNoYWtlcyIsImEiOiJjbDBpbmh0NjYwM3ozM2tuc2Z1Y2x5cG94In0.WGoGxuWX9R61KLAO5htCLw";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [-77.034084, 38.909671],
  zoom: 13,
  scrollZoom: false,
});
