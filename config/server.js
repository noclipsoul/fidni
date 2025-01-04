module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  app: {
    keys: env.array('APP_KEYS',['m3YaXhQAOg/T4f13GYKyvQ==','cGEu12nWbpVGDQXm53hFZQ==','wHuzHOnLb6RzOZuPJZJdMA==','XeKGnnfoHePC1lx3ahJa6A==']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  proxy: {
    trustProxy: true,
  },
});
