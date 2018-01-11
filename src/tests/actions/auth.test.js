import { login, logout } from '../../actions/auth';

test('should set up login correctly', () => {
    const uid = '123abc'
    const loginAction = login(uid);
    expect(loginAction).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should set up logout correctly', () => {
    const logoutAction = logout();
    expect(logoutAction).toEqual({
        type: 'LOGOUT'
    });
});