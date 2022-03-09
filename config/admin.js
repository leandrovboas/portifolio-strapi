module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd1b816fd40dc05f6a1493f7294955604'),
  },
});
