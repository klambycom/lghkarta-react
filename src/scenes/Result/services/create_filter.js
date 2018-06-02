import queryString from "query-string";
import {MAX_RENT, MAX_ROOMS} from "../../../services/settings";

const create_filter = param_str => {
  let filter = queryString.parse(param_str, {arrayFormat: "bracket"});
  filter.rent = +filter.rent || MAX_RENT;
  filter.rooms = (filter.rooms || []).map(x => +x);
  filter.max_rooms = +filter.max_rooms || MAX_ROOMS;
  return filter;
};

export default create_filter;
