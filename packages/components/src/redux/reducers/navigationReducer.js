
const initialState = {
  targetRoute: null,
  requiredAction: null
};

export default function navigation(state = initialState, action = {}) {
  return {
    ...state,
    targetRoute: action.route,
    requiredAction: action.type
  };
}
