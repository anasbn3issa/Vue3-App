<template>
    <form @submit.prevent="submit" :event="event" :ref="name" :action="action" autocomplete="off" :method="method" class="needs-validation" novalidate>
        <slot></slot>
    </form>
</template>

<script>
export default {
    name: 'FormTag',
    props: ["action", "method","event","name"],
    methods: {
        submit() {
            let myForm = this.$refs[this.$props.name];

            if (myForm.checkValidity() === true) {
                console.log(this.$props.event, this.$refs[this.$props.name]);
                this.$emit(this.$props.event);
            }

            myForm.classList.add('was-validated');
        }
    },
}
</script>
