mapboxgl.accessToken =
  "pk.eyJ1IjoibXNoYWtlcyIsImEiOiJjbDBpbmh0NjYwM3ozM2tuc2Z1Y2x5cG94In0.WGoGxuWX9R61KLAO5htCLw";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-0.14574, 51.51291],
  zoom: 13,
  scrollZoom: true,
});
