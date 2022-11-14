import {API} from "../../config";

export default async function getIdData (id) {
  const url = `${API.ORDER}/order`;
  const res = await fetch(url);
  const data = await res.json();

  if(id) {
    return data.find(value => value.id === id);
  }

  return data;
}