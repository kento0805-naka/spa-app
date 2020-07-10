<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="openSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>マイアドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <SideNav/>

    <v-content>
    </v-content>
  </v-app>
</template>

<script>
// import { mapActions } from 'vuex'
import SideNav from './components/SideNav'
export default {
  name: 'App',
  components: {
    SideNav
  },
  data () {
    return {
      //
    }
  },
  methods: {
    openSideMenu () {
      this.$store.dispatch('toggleSideMenu')
    }
  }
}
</script>