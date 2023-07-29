/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRODATest = /* GraphQL */ `
  query GetRODATest($entity: String!, $id: String!) {
    getRODATest(entity: $entity, id: $id) {
      entity
      id
      name
      __typename
    }
  }
`;
export const listRODATests = /* GraphQL */ `
  query ListRODATests(
    $filter: TableRODATestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRODATests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        entity
        id
        name
        __typename
      }
      nextToken
      __typename
    }
  }
`;
