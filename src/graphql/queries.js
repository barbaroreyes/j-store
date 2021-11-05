/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      mercancias {
        items {
          id
          mercancia_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        date
        total
        mercancias {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      nextToken
    }
  }
`;
export const getMercancia = /* GraphQL */ `
  query GetMercancia($id: ID!) {
    getMercancia(id: $id) {
      id
      title
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          mercancia_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMercancias = /* GraphQL */ `
  query ListMercancias(
    $filter: ModelMercanciaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMercancias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        author
        featured
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
