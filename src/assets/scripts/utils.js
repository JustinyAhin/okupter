const generateSlug = (content) => {
  const slug = content.toLowerCase().trim();
  return slug.replace(/[^a-z0-9]+/g, "-");
};

const readableDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
};

export { generateSlug, readableDate };
