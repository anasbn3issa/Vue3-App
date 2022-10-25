<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="mt-5">Login</h1>
                <hr>
                <FormTag @myevent="submitHandler" name="myform" event="myevent" >
                    <TextInput v-model="email" name="email" type="email" label="Email" placeholder="Enter email"
                        required="required" autocomplete="email" />
                    <TextInput v-model="password" name="password" type="password" label="Password"
                        placeholder="Enter password" required="required" autocomplete="current-password" />
                    <CheckInput name="remember" label="Remember me" />
                    <input type="submit" class="btn btn-primary" value="Login">

                </FormTag>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>

import TextInput from './forms/TextInput.vue';
import CheckInput from './forms/CheckInput.vue';
import FormTag from './forms/FormTag.vue';

export default {
    name: 'LoginScreen',
    components: {
        TextInput,
        CheckInput,
        FormTag
    },
    data() {
        return {
            email: '',
            password: '',
            remember: false
        }
    },
    methods: {
        submitHandler: function (data) {
            console.log(data);
        }
    }
}
</script>
