const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
} = require('graphql');
const axios = require('axios').default

const CompanyType = new GraphQLObjectType({
    name: "Company",
    fields: () => ({
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        desc: {
            type: GraphQLString
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(source, args) {
                return axios.get(`http://localhost:3000/users?companyId=${source.id}`)
                    .then(res => res.data)
            }
        }
    })
})
// fddfg
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        username: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        },
        company: {
            type: CompanyType,
            resolve(source, args) {
                return axios.get(`http://localhost:3000/companies/${source.companyId}`)
                    .then(res => res.data)

            }
        }
    })
})


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
            async resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/users/${args.id}`)
                    .then(res => res.data)
            }
        },
        company: {
            type: CompanyType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/companies/${args.id}`)
                    .then(res => res.data)
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