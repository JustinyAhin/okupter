const url = import.meta.env.PUBLIC_DATO_CMS_ENDPOINT;
const token = import.meta.env.PUBLIC_DATO_CMS_API_KEY;

const getDataFromDato = async (query, slug) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: query,
      variables: { slug: slug },
    }),
  });

  const res = await response.json();

  return res.data;
};

export default getDataFromDato;
