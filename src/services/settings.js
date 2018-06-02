// Rent
const MAX_RENT = 20000;
const MIN_RENT = 1000;
const STEP_RENT = 500;

// No. rooms
const ROOM_VALUES = [
  {value: 1, text: "1"},
  {value: 2, text: "2"},
  {value: 3, text: "3"},
  {value: 4, text: "4"},
  {value: 5, text: "5"},
  {value: 6, text: "6"},
  {value: 7, text: "7"},
  {value: 8, text: "8+"}
];
const MAX_ROOMS = ROOM_VALUES[ROOM_VALUES.length - 1].value;
const LENGTH_ROOMS = ROOM_VALUES.length;

// Apartment type
const TYPES = {
  apartment: "Lägenhet",
  short_term: "Korttidskontrakt",
  senior: "Seniorboende",
  new_construction: "Nybyggt",
  older_tenant: "Trygghetsboende",
  youth_apartment: "Ungdomslägenhet",
  student_housing: "Studentbostad"
};

// Google Maps API
const GOOGLE_MAPS_JS = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places";
const GOOGLE_MAPS_KEY = "AIzaSyDtTZTBMSoEnrum5YU9JszzbX-y6MemEWs";

const MAP_CENTER = {lat: 55.604981, lng: 13.003822};
const MAP_ZOOM_LEVEL = 14;

export {
  MAX_RENT,
  MIN_RENT,
  STEP_RENT,
  ROOM_VALUES,
  MAX_ROOMS,
  LENGTH_ROOMS,
  TYPES,
  GOOGLE_MAPS_JS,
  GOOGLE_MAPS_KEY,
  MAP_CENTER,
  MAP_ZOOM_LEVEL
};
