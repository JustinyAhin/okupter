const generateSlug = (content: string) => {
  const slug = content.toLowerCase().trim();
  return slug.replace(/[^a-z0-9]+/g, "-");
};

const readingTime = (content: string) => {
  const wordsPerMinute = 225;
  const words = content.split(/\s+/g).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

const readableDate = (date: Date) => {
  return new Date(date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
};

export { generateSlug, readableDate, readingTime };
