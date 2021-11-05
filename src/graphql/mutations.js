/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createMercancia = /* GraphQL */ `
  mutation CreateMercancia(
    $input: CreateMercanciaInput!
    $condition: ModelMercanciaConditionInput
  ) {
    createMercancia(input: $input, condition: $condition) {
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
export const updateMercancia = /* GraphQL */ `
  mutation UpdateMercancia(
    $input: UpdateMercanciaInput!
    $condition: ModelMercanciaConditionInput
  ) {
    updateMercancia(input: $input, condition: $condition) {
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
export const deleteMercancia = /* GraphQL */ `
  mutation DeleteMercancia(
    $input: DeleteMercanciaInput!
    $condition: ModelMercanciaConditionInput
  ) {
    deleteMercancia(input: $input, condition: $condition) {
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
export const createMercanciaOrder = /* GraphQL */ `
  mutation CreateMercanciaOrder(
    $input: CreateMercanciaOrderInput!
    $condition: ModelMercanciaOrderConditionInput
  ) {
    createMercanciaOrder(input: $input, condition: $condition) {
      id
      mercancia_id
      order_id
      order {
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
      createdAt
      updatedAt
      mercancia {
        id
        title
        description
        image
        author
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const updateMercanciaOrder = /* GraphQL */ `
  mutation UpdateMercanciaOrder(
    $input: UpdateMercanciaOrderInput!
    $condition: ModelMercanciaOrderConditionInput
  ) {
    updateMercanciaOrder(input: $input, condition: $condition) {
      id
      mercancia_id
      order_id
      order {
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
      createdAt
      updatedAt
      mercancia {
        id
        title
        description
        image
        author
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const deleteMercanciaOrder = /* GraphQL */ `
  mutation DeleteMercanciaOrder(
    $input: DeleteMercanciaOrderInput!
    $condition: ModelMercanciaOrderConditionInput
  ) {
    deleteMercanciaOrder(input: $input, condition: $condition) {
      id
      mercancia_id
      order_id
      order {
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
      createdAt
      updatedAt
      mercancia {
        id
        title
        description
        image
        author
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
