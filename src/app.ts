import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import { postsRouter } from './services/posts';
import { RootQuery } from './services/root.graphql';
import { usersRouter } from './services/users';
// Create server
export const app = express();

// Load routes...
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

// Load graphql
app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema: new GraphQLSchema({ query: RootQuery }),
  }),
);
// Landing page
app.use('/', (_req, res) => {
  res
    .status(200)
    .send(
      '<h2> GraphQL Sabdbox, Go to <a href="/graphql"><code>Graphiql</code></a> </h2>',
    );
});
