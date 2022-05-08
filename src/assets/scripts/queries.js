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

const blogIndexSlugsQuery = `
query blogIndexSlugsQuery {
  allPosts {
    id
    __typename
    slug
  }
}`;

const singlePostQuery = `
query singlePostQuery($slug: String!) {
  post(filter: {slug: {eq: $slug}}) {
    id
    __typename
    _firstPublishedAt
    title
    slug
    content {
      value
    }
    seoMetatags {
      __typename
      title
      description
      image {
        id
        __typename
        url
        alt
        title
      }
    }
  }
}`;

export { blogIndexQuery, blogIndexSlugsQuery, singlePostQuery, siteMetaQuery };
