<template>
    <main id="login">
        <article class="modal">
            <figure>
                <img src="../assets/logo.png" alt="Logo">
                <figcaption>Vue Auth Demo</figcaption>
            </figure>
            <input v-model="username" type="text" class="username" placeholder="username">
            <input v-model="password" type="password" placeholder="password">
            <a href="#" class="btn" @click="login">Login</a>
        </article>
    </main>
</template>

<script>
export default {
    name: 'login',
    data(){
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login(){
            this.$store.dispatch('login', {username: this.username, password: this.password });
            this.$router.push('/admin');
        }
    }
}
</script>

<style lang="scss">

    @import '../scss/variables';

    #login {
        @extend %center;
        background: #222;

        .modal {
            background: white;
            border-radius: 3px;
            width: $baseline * 10;
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 1px;
            box-shadow: 0 0 2rem rgba($color: #000000, $alpha: .2);

            figure {
                height: $baseline * 6;
                @extend %center;
                flex-direction: column;

                img {
                    width: 60%;
                }

                figcaption {
                    font-weight: 700;
                    font-size: 1.2rem;
                    color: rgba($color: #000000, $alpha: .8);
                    margin: .25rem 0;
                }
            }

            input {
                border: none;
                padding: 1rem;
                font-size: 1rem;
                height: $baseline * 2;
                box-sizing: border-box;
                border-top: 1px solid rgba($color: #000000, $alpha: .2);

                &:focus {
                    outline: none;
                }
            }

            .btn {
                @extend %center;
                height: $baseline *3;
                background: $green;
                color: white;
                font-weight: 700;
                text-decoration: none;
                font-size: 1.2rem;
                border-bottom-left-radius: 3px;
                border-bottom-right-radius: 3px;
            }
        }
    }

</style>
