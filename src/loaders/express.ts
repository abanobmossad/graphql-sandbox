import express from 'express';
import { graphqlHTTP } from 'express-graphql';

export default ({ app }: { app: express.Application }) => {
  // app.use('graphql', graphqlHTTP({ graphiql: true }))
  app.use('/', (_req, res) => {
    res.status(200).send('<h1> GraphQL Sabdbox </h2>');
  });
};
