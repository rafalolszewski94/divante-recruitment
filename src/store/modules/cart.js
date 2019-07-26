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
      .reduce((a, b) => a + b.price, 0);
  },
};

// actions
const actions = {
  addProductToCart({ state, commit }, productId) {
    if (state.cart.filter(item => item === productId).length) return;
    commit('addProductToCart', productId);
  },
};

// mutations
const mutations = {
  addProductToCart(state, productId) {
    state.cart.push(productId);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
