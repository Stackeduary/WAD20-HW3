<template>
    <header>
        <nav>
            <div button="logo-container" @click="$router.push('BrowsePosts')">
                <img src="../assets/images/logo.png" alt="postIt">
            </div>

            <div class="search-container">
                <input type="text" name="search">
                <button type="button">Search</button>
            </div>
            <div class="avatar-container">
                <button type="button" id="avatar-button" @click="toggleList"><img :src="activeUser.avatar">
                </button>
            </div>
        </nav>
        <div id="active-user-info" v-show="showMenu">
            <p id="active-user-name">{{ activeUser.firstname }} {{ activeUser.lastname }}</p>
            <p id="active-user-email">{{ activeUser.email }}</p>
            <router-link to="/BrowseProfiles">Browse</router-link>
            <br>
            <router-link to="/Login">Log out</router-link>
            <router-view></router-view>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data: function () {
        return {
            showMenu: false
        }
    },
    computed: {
        activeUser() {
            return this.$store.state.activeUser
        }
    },
    mounted() {
        this.$store.dispatch("getActiveUser");
    },
    methods: {
        toggleList: function () {
            this.showMenu = !this.showMenu
        }
    }
}
</script>

<style scoped>
#active-user-info {
    width: 15%;
    min-height: 10%;
    margin-left: auto;
    margin-right: 0;
    padding: 5px 0px 10px 10px;
    background-color: #ffffff;
    position: fixed;
    right: 0px;
}

button {
    padding: 8px 16px;
    margin: 4px 0;
    color: #ffffff;
    background-color: #01579b;
    border: none;
    border-radius: 4px;
}

button:hover {
    box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
    cursor: pointer;
}

header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
}

header:hover {
    box-shadow: 0 -20px 30px #4d4d4d;
}

nav {
    display: flex;
    background-color: #ffffff;
    align-items: center;
}

nav div {
    height: 30px;
    flex-grow: 4;
    padding: 10px;
}

nav div img {
    height: 100%;
    width: 30px;
    margin-left: 15px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top center;
}

nav div.search-container > input {
    box-sizing: border-box;
    height: 30px;
    width: 80%;
    margin: 0;
    padding: 5px;
    border: 1px solid #e0e0e0;
}

nav div.search-container > button {
    height: 30px;
    width: 20%;
    margin: 0;
    padding: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

nav div.avatar-container {
    margin-right: 15px;
    text-align: right;
    padding-top: 0;
}

nav div #avatar-button {
    padding: 0px 0px;
    background: transparent;
    box-shadow: none;
    height: 30px;
    border-radius: 50%;
}
</style>