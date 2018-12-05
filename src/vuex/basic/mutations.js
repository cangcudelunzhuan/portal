import * as types from './types'
export const mutations = {
  [types.PRDLIST] (state, {prdList}) {
    state.prdList = prdList
  }
}
