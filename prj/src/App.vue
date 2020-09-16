<template>
  <div id="app">
    <div class="position-fixed" style="z-index:99; width:100%">
      <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand href="/">Inbae kang</b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template v-slot:default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/">Main</b-nav-item>
          <b-nav-item href="/about">About</b-nav-item>
          <b-nav-item href="/skill">Skill</b-nav-item>
          <b-nav-item href="/stack">Stack</b-nav-item>
          <b-nav-item href="/link">Link</b-nav-item>
          <b-nav-item href="/closing">Closing</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    </div>
    
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
