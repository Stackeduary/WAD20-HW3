<template>
    <div>
        <Header></Header>
        <section class="main-container">
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