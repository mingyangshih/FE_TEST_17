<template>
  <div>
    <Tutorial />
    <!-- {{ counter }} -->
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'IndexPage',
  layout: 'default',
  computed: {
    ...mapState(['counter'])
  },
  created () {
    this.increment()
  },
  methods: {
    ...mapMutations(['increment'])
  }
}
</script>
