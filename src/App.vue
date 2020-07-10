<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="nav"
      absolute
      temporary
     >
      
    </v-navigation-drawer>

    <v-app-bar 
      app
      color="primary"
      dark
      collapse-on-scroll
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>アドレス帳</v-toolbar-title>
      <v-spacer></v-spacer>
      
        <v-avatar color="blue" size="36">K</v-avatar>
      
      

    </v-app-bar>

    <v-main>

      <v-container fluid>
        <div>
          <v-card>
            <v-responsive
              :aspect-ratio="16/9"
            >
              <v-card-title>メインコンテンツのタイトル</v-card-title>
              <v-card-text>
                ここにはコンテンツテキストが入ります。<br>
                改行は反映されていますか？
              </v-card-text>
              <v-btn
                @click.stop="nav = !nav"
                color="primary"
              >ボタン</v-btn>
            </v-responsive>
          </v-card>
        </div>

        
      </v-container>
    </v-main>

    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      nav: null,
      hover: false,
    }
  },
  

}
</script>