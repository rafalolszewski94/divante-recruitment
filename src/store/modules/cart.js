/* eslint no-shadow: 0 */
import { PRODUCTS } from '../../utils';

const state = {
  cart: [],
};

// getters
const getters = {
  productsInCart(state) {
    return state.cart.map(id => {
      const productInCart = PRODUCTS.find(product => product.id === id);
      return {
        id: productInCart.id,
        title: productInCart.title,
        price: productInCart.price,
      };
    });
  },
  totalCartValue(state) {
    return state.cart
      .map(id => {
        return PRODUCTS.find(product => product.id === id);
      })
      .reduce((a, b) => a + b.price, 0)
      .toFixed(2);
  },
};

// actions
const actions = {
  addProductToCart({ state, commit }, productId) {
    if (state.cart.filter(item => item === productId).length) return;
    commit('addProductToCart', productId);
  },
  removeProductFromCart({ state, commit }, productId) {
    const indexToDelete = state.cart.findIndex(
      product => product === productId,
    );
    commit('removeProductFromCart', indexToDelete);
  },
};

// mutations
const mutations = {
  addProductToCart(state, productId) {
    state.cart.push(productId);
  },
  removeProductFromCart(state, indexToDelete) {
    state.cart.splice(indexToDelete, 1);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
