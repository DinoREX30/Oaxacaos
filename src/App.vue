<template>
<div id="app">
<router-view>

</router-view>

<facebook-login class="button"
      appId="579489356214610"
      @login="onLogin"
      @logout="onLogout"
      @sdk-loaded="sdkLoaded">
    </facebook-login>
</div>
</template>
<script>

import facebookLogin from 'facebook-login-vuejs'

export default {
  name: 'app',
  components: {
    facebookLogin
  },
  methods:
{
  getUserData () {
    this.FB.api('/me', 'GET', { fields: 'id,name,email' },
      userInformation => {
        this.personalID = userInformation.id
        this.email = userInformation.email
        this.name = userInformation.name
      }
    )
  },
  sdkLoaded (payload) {
    this.isConnected = payload.isConnected
    this.FB = payload.FB
    if (this.isConnected) this.getUserData()
  },
  onLogin () {
    this.isConnected = true
    this.getUserData()
  },
  onLogout () {
    this.isConnected = false
  }
}
}

</script>
