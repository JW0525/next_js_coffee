// const fetcher = (...args: Parameters<typeof fetch>) =>
//   fetch(...args).then(res => res.json())

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An Error");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
}

export default fetcher;