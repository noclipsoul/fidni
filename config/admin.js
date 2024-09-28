module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7rgi3J1Xyl3vIP6sjl9pww=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'H2P1TpNJI38sUa/CEsJHPQ=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT','1FH0bvL+NawTz8fQwK+lDg=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
