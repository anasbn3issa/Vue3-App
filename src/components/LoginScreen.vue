<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="mt-5">Login</h1>
                <hr>
                <form-tag @myevent="submitHandler" name="myform" event="myevent">

                    <text-input
                        v-model="email"
                        label="Email"
                        type="email"
                        name="email"
                        required="true">
                    </text-input>

                    <text-input
                        v-model="password"
                        label="Password"
                        type="password"
                        name="password"
                        required="true">
                    </text-input>

                    <input type="submit" class="btn btn-primary" value="Login">
                </form-tag>
            </div>
        </div>
    </div>
</template>

<script>
import FormTag from './forms/FormTag.vue'
import TextInput from './forms/TextInput.vue'
import { store } from './store'
import router from '../router'
import notie from 'notie'

export default {
    name: 'LoginScreen',
    components: {
        FormTag,
        TextInput,
    },
    data() {
        return {
            email: "",
            password: "",
            store: store,
        }
    },
    methods: {
        submitHandler() {
            console.log("submitHandler called - success!");

            const payload = {
                email: this.email,
                password: this.password,
            }

            const requestOptions = {
                method: "POST",
                body: JSON.stringify(payload),
            }

            fetch(process.env.VUE_APP_API_URL + "/users/login", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    console.log("Error:", data.message);
                    notie.alert({
                        type: "error",
                        text: data.message,
                    })
                } else {
                    console.log(data);
                    store.token = "ABCDEFG";

                    store.user = {
                        id: data.user.id,
                        first_name: data.user.first_name,
                        last_name: data.user.last_name,
                        email: data.user.email,
                    }
                    router.push("/");
                    // save info to cookie
                    let date = new Date();
                    let expDays = 1;
                    date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * expDays);
                    const expires = "expires=" + date.toUTCString();
                    // set the cookie 
                    document.cookie = "_site_data="
                    + JSON.stringify(data.data)
                    + "; "
                    + expires 
                    + ";path=/ SameSite=strict; Secure";  


                }
            })
        }
    }
}
</script>