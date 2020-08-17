import axios from 'axios';

export const mixin =
{
    components: {},
    created: async function () {
        this.getDataInLocalStorage();
        await this.isLogged();
    },
    methods: {
        async tokenIsValid() {
            try {
                if (this.ls_token) {
                    await axios.post(`${this.baseUrl}/auth/verify-token`, null, {
                        headers: {
                            Authorization: `Bearer ${this.ls_token}`,
                        }
                    });
                    if (location.pathname == '/login') {
                        this.redirect('/admin');
                    }
                }
            } catch (err) {
                this.clearStorage();
                this.redirect('/login');
            }
        },
        async isLogged() {
            if (!this.ls_token && location.pathname != '/login') {
                this.clearStorage();
                location.href = '/login';
            }
            if (this.ls_token) {
                await this.tokenIsValid();
            }
        },
    },
}

export const global = {
    created: function () {
        this.getDataInLocalStorage();
    },
    data: () => {
        return {
            baseUrl: 'https://api-casa-do-pastel.herokuapp.com',
            ls_token: '',
            ls_user: null,
            ls_refreshToken: '',
            ls_logged: false,
        }
    },
    methods: {
        getDataInLocalStorage() {
            this.ls_user = this.getUserFromLS();
            this.ls_token = this.getTokenFromLS();
            this.ls_refreshToken = this.getRefreshTokenFromLS();
            this.ls_logged = this.getIsLoggedFromLS();
        },
        logout() {
            localStorage.clear();
            this.redirect('/login');
        },
        redirect(to) {
            to = to ? to : '/';
            location.href = `${to}`;
        },
        clearStorage() {
            localStorage.clear();
        },
        getTokenFromLS() {
            return localStorage.getItem('token');
        },
        getUserFromLS() {
            return localStorage.getItem('user');
        },
        getRefreshTokenFromLS() {
            return localStorage.getItem('refreshToken');
        },
        getIsLoggedFromLS() {
            return localStorage.getItem('logged');
        }
    },
}