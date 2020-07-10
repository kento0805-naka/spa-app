<template>
  <v-sheet
    height="100vh"
    class="overflow-hidden"
    style="position: relative;"
  >

    <v-navigation-drawer
      v-model="$store.state.drawer"
      absolute
      temporary
      
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://www.akb48.at/wp-content/uploads/2019/09/kaas_190905010.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Kento Nakamura</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: '連絡先一覧', icon: 'mdi-menu' },
        ],
      }
    },
  }
</script>