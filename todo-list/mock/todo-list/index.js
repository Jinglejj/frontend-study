module.exports = [
    {
        url: '/todoList',
        type: 'get',
        response: config => {
            const list = ["a", "b", "c"]
            return {
                code: 200,
                data: list
            }
        }
    },
    // user login
    {
        url: '/vue-element-admin/user/login',
        type: 'post',
        response: config => {
            const {username} = config.body
            const token = tokens[username]

            // mock error
            if (!token) {
                return {
                    code: 60204,
                    message: 'Account and password are incorrect.'
                }
            }

            return {
                code: 20000,
                data: token
            }
        }
    },

    // get user info
    {
        url: '/vue-element-admin/user/info\.*',
        type: 'get',
        response: config => {
            const {token} = config.query
            const info = users[token]

            // mock error
            if (!info) {
                return {
                    code: 50008,
                    message: 'Login failed, unable to get user details.'
                }
            }

            return {
                code: 20000,
                data: info
            }
        }
    },

    // user logout
    {
        url: '/vue-element-admin/user/logout',
        type: 'post',
        response: _ => {
            return {
                code: 20000,
                data: 'success'
            }
        }
    }
]
