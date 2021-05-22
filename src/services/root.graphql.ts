import { GraphQLObjectType, GraphQLString } from 'graphql';
import { getPost, PostType } from './posts';
import { getUser, UserType } from './users';

export const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(_parent, args) {
        return getUser(args.id);
      },
    },
    post: {
      type: PostType,
      args: { id: { type: GraphQLString } },
      resolve(_parent, args) {
        return getPost(args.id);
      },
    },
  },
});
