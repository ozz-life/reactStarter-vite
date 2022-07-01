import gql from "graphql-tag"; // https://stackoverflow.com/questions/59365316/why-do-you-need-graphql-tag-with-apollo

interface RocketData {
  id: string;
  name: string;
  wikipedia: string;
  description: string;
}

interface RocketsResult {
  rockets: Array<RocketData>;
}

const ROCKETS = gql`
  query GetRockets {
    rockets {
      id
      name
      wikipedia
      description
    }
  }
`;

const ADD_USER = gql`
  mutation InsertUser($name: String!) {
    insert_users(objects: { name: $name }) {
      returning {
        id
        name
      }
    }
  }
`;

interface UserDetails {
  id: string;
  name: string;
}

interface AddUserResponse {
  returning: Array<UserDetails>;
}

export { ROCKETS, ADD_USER };

export type { RocketData, RocketsResult, UserDetails, AddUserResponse };
