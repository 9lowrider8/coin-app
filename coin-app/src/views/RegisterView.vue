<template>
    <div class="main">
        <div class="right">
            <img src="/src/assets/images/F2.png" alt="">
        </div>
        <div class="container">
            <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="" @click="toggleTheme()">
            <h1>ثبت نام</h1>
            <form @submit="register">
                <div class="form-control">
                    <label for="email">ایمیل :</label>
                    <div class="input-style">
                        <i class="fas fa-user"></i>
                        <input v-model="email" id="email" placeholder=" ایمیل خود را وارد کنید" required>
                    </div>
                </div>
                <div class="form-control">
                    <label for="password"> کلمه عبور :</label>
                    <div class="input-style">
                        <i class="fas fa-lock"></i>
                        <input v-model="password" type="password" id="password" placeholder="کلمه عبور خود را وارد کنید" required>
                    </div>
                </div>
                <div class="captcha">
                    <label for="captcha-text">کد امنیتی :</label>
                    <input type="text" id="captcha-text" >
                </div>
                <div class="check">
                    <input type="checkbox" id="html" name="fav_language" value="HTML">
                    <label for="html">مرا به یاد داشته باش</label><br>
                </div>
                <button class="btn" >ثبت نام</button>

            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    setup() {

    },
    data() {
        return {
            email: '',
            password: '',
            theme: 'light'
        }
    },
    methods: {
        async register(e) {
            e.preventDefault();
            await axios({
                method: 'POST',
                url: 'https://reqres.in/api/login',
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    email: this.email,//
                    password: this.password//
                },
                json: true,
            }).then(response => {
                this.checkResponse(response.data)
            }).catch(err => {
                this.checkResponse(err.response.data.error)
            });

        },
        toggleTheme() {

            if (this.theme === "light") {
                document.querySelectorAll('.main')[0].classList.add("main-dark");
                this.theme = "dark";
            }
            else {
                document.querySelectorAll('.main')[0].classList.remove("main-dark");
                this.theme = "light";
            }
        },
        checkResponse(response) {
            if (response === "user not found") {
                alert(" Only defined users succeed registration")
            }
            else {
                this.$router.push({ path: "/Switch" })
            }
        }
    },
}
</script>

<style>

</style>