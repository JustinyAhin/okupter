const siteMetaQuery = `
query SiteMeta {
  settingsPage {
      id
      __typename
      name
      publicUrl
      slogan
      ogImage {
        id
        __typename
        url
      }
  }
}`;

export { siteMetaQuery };
