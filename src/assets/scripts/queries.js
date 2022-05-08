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

const blogIndexQuery = `
query blogIndexQuery {
  allPosts(orderBy: _firstPublishedAt_DESC) {
    id
    __typename
    title
    slug
    _firstPublishedAt
  }
}`;

export { blogIndexQuery, siteMetaQuery };
