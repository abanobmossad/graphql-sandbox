import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
// eslint-disable-next-line import/no-cycle
import { getUserPosts, PostType } from '../posts';

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    username: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    website: { type: GraphQLString },
    posts: {
      type: new GraphQLList(PostType),
      resolve(user) {
        return getUserPosts(user.id);
      },
    },
  }),
});
