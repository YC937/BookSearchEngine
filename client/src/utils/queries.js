import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query Users {
    me {
        _id
        bookCount
        email
        password
        username
    }
    }
`;
