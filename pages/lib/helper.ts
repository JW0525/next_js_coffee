export default async function getIdData (url: string, id: number) {
  // const url = `${API.ORDER}`;
  const res = await fetch(url);
  const data = await res.json();

  if (id) {
    return data.find((value: any) => value.id === id);
  }

  return data;
}