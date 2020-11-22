<template>
    <div>
        <Header></Header>
        <section class="main-container">
            <!-- will be moved to the drop-down once it gets added -->
            <router-link to="/BrowseProfiles">temporary link to profiles page</router-link>
            <br>
            <router-link to="/Login">temporary link to the login page</router-link>
            <router-view></router-view>
            <Profiles></Profiles>
        </section>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Profiles from "@/components/Profiles";

export default {
    name: "BrowseProfiles.vue",
    components: {
        Header,
        Profiles
    }
}
</script>