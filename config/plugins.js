module.exports = {
  graphql: {
    config: {
      introspection: true,
      endpoint: "/graphql",
      playgroundAlways: true,
      defaultLimit: 100,
      maxLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
};
