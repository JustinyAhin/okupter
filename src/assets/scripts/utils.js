// Externals
import { render } from "datocms-structured-text-to-html-string";

const readableDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
};

const renderStructuredText = (value) => {
  const options = {
    renderBlock({ record, adapter: { renderNode } }) {
      switch (record.__typename) {
        case "BlockImageRecord":
          return renderNode(
            "figure",
            {},
            renderNode("img", {
              src: record.image.url,
              alt: record.image.alt,
              loading: "lazy",
            })
          );
        default:
          return null;
      }
    },
  };

  return render(value, options);
};

export { readableDate, renderStructuredText };
