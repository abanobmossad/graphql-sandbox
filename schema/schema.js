const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = require('graphql');
const _ = require("lodash")

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: GraphQLString
        },
        username: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        },
    }
})

const users = [{
        id: '1',
        username: 'admin',
        age: 12
    },
    {
        id: '2',
        username: 'admin1234',
        age: 14
    },
    {
        id: '3',
        username: 'some username',
        age: 50
    },
]

const RootQuery = new GraphQLObjectType({
    name: "Root",
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                return _.find(users, {
                    id: args.id
                })
            }
        }
    }
})


const schema = new GraphQLSchema({
    query: RootQuery
})
module.exports = {
    schema
}