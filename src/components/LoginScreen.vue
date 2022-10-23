<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="mt-5">Login</h1>
                <hr>
                    <form method="post" action="/login" class="needs-validation" novalidate>
                        <TextInput name="email" type="email" label="Email" placeholder="Enter email" required="required" autocomplete="email" />
                        <TextInput name="password" type="password" label="Password" placeholder="Enter password" required="required" autocomplete="current-password" />
                        <CheckInput name="remember" label="Remember me" />
                        <input type="submit" class="btn btn-primary" value="Login">

                    </form>
                    <hr>
            </div>
        </div>
    </div>
</template>

<script>

import TextInput from './forms/TextInput.vue';
import CheckInput from './forms/CheckInput.vue';

export default {
    name: 'LoginScreen',
    components: {
        TextInput,
        CheckInput
    },
    mounted() {
        (function () {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
                })
            })()
    }
}
</script>
