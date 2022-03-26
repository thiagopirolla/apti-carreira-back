module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9892094b3e061388d41ed45ceb009483'),
  },
});
