const KEY = "filter_history";
const FIELDS = ["rent", "rooms", "types", "max_rooms"];
const MAX_LENGTH = 3;

const takeKeys = (object, keys) => {
  return keys.reduce((acc, x) => {
    acc[x] = object[x];
    return acc;
  }, {});
};

const all = () => JSON.parse(localStorage.getItem(KEY) || "[]");

const add = (filter) => {
  const history = [takeKeys(filter, FIELDS), ...all()].slice(0, MAX_LENGTH);
  localStorage.setItem(KEY, JSON.stringify(history));
  return history;
};

const latest = (default_filter = {}) => all()[0] || default_filter;

export default {all, add, latest};
