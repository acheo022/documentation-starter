module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs/Embedding_tutorial",
        permanent: false,
      },
      {
        source: "/docs/",
        destination: "/docs/Embedding_tutorial",
        permanent: false,
      },
    ];
  },
  trailingSlash: true,
};
