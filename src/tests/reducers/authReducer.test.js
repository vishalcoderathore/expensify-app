import authReducer from '../../reducers/authReducer';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: '123abc'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT',
        uid: '123abc'
    };
    const state = authReducer({}, action);
    expect(state).toEqual({});
});