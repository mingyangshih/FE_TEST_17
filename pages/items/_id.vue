<template>
  <div>
    <h1 v-if="route">
      {{ route }}
    </h1>
  </div>
</template>

<script>
export default {
  layout: 'default',
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  data () {
    return {
      route: this.$route.params.id
    }
  }
}
</script>
