<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link active" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/books">Books</router-link>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navBarDropDown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">Admin</a>
                    <ul class="dropdown-menu" aria-labelledby="navBarDropDown">
                        <li>
                            <router-link class="dropdown-item" to="/admin/users">Manage Users</router-link>
                        </li>
                        <li>
                            <router-link class="dropdown-item" to="/admin/users/0">Add User</router-link>
                        </li>
                        <li>
                            <router-link class="dropdown-item" to="/admin/books">Manage Books</router-link>
                        </li>
                        <li>
                            <router-link class="dropdown-item" :to="{ name: 'BookEdit', params: { bookId: 0 } }">Add
                                Book</router-link>
                        </li>
                    </ul>
                </li>

                <li class="nav-item">
                    <router-link v-if="store.token == ''" class="nav-item nav-link" to="/login">Login</router-link>
                    <a href="javascript:void(0)" v-else class="nav-item nav-link" @click="logout">Logout</a>
                </li>
            </ul>

            <span class="navbar-text">
                {{ store.user.first_name ?? '' }}
            </span>
        </div>
    </nav>
</template>

<script>
import { store } from './store'
import router from '../router'
export default {
    data() {
        return {
            store: store,
        }
    },
    methods: {
        logout() {
            // call the backend to logout
            const payload = {
                token: store.token,
            }
            const requestOptions = {
                method: "POST",
                body: JSON.stringify(payload),
            }
            fetch(process.env.VUE_APP_API_URL + "/users/logout", requestOptions)
                .then((response) => response.json())
                .then((response) => {
                    if (response.error) {
                        console.log(response.message);
                    } else {
                        store.token = "";
                        store.user = {};

                        document.cookie = '_site_data=; Path=/; ' +
                            'SameSite=Strict; Secure; ' +
                            'Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                        router.push("/login");
                    }
                })
        }
    }
}
</script>