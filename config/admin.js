module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a4ceb48e5c80935bd1d940dd6be576aa'),
  },
});
