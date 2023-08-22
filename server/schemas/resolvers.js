const { User } = require('../models');
const { AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async ()

    },

    Mutation: {
        login: async (parent, { email, password }) => {

        },

        addUser: async (parent, args) => {
        },

        saveBook: async (parent, { bookData }, context) => {
        },

        deleteBook: async (parent, { bookId }, context) => {

    }
}
};

module.exports = resolvers;
