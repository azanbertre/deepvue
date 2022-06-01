<template>
  <div class="center">
    <d-btn>
      Home
      <template #animate >
        <i class='bx bx-home-alt' ></i>
      </template>
    </d-btn>

    <d-btn
      flat
      success
      animation-type="vertical"
    >
      Message
      <template #animate >
        <i class='bx bx-mail-send' ></i> Send
      </template>
    </d-btn>

    <d-btn
      gradient
      style="min-width: 60px"
      warning
      animation-type="scale"
    >
      <i class='bx bxs-shopping-bag' ></i>
      <template #animate >
        Store
      </template>
    </d-btn>

    <d-btn
      icon
      relief
      danger
      animation-type="rotate"
    >
      <i class='bx bx-like'></i>
      <template #animate>
        <i class='bx bxs-like' ></i>
      </template>
    </d-btn>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: 0
  })
}
</script>
<style lang="stylus" scoped>
.center
  max-width 400px
  margin auto
</style>
