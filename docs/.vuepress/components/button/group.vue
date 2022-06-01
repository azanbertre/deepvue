<template>
  <div class="center">
    <d-btn-group>
      <d-btn>
        One
      </d-btn>
      <d-btn>
        Two
      </d-btn>
      <d-btn>
        Three
      </d-btn>
      <d-btn>
        four
      </d-btn>
    </d-btn-group>

    <span class="divider" />

    <d-btn-group>
      <d-btn flat icon>
        <i class='bx bx-play' ></i>
      </d-btn>
      <d-btn flat icon>
        <i class='bx bx-pause' ></i>
      </d-btn>
      <d-btn flat icon>
        <i class='bx bx-fast-forward' ></i>
      </d-btn>
      <d-btn flat icon>
        <i class='bx bx-shuffle' ></i>
      </d-btn>
    </d-btn-group>

    <span class="divider" />

    <d-btn-group>
      <d-btn border>
        <i class='bx bxs-pencil' ></i> Edit
      </d-btn>
      <d-btn border icon>
        <i class='bx bx-font-color' ></i>
      </d-btn>
      <d-btn border icon>
        <i class='bx bx-align-middle' ></i>
      </d-btn>
      <d-btn border>
        <i class='bx bx-font-size' ></i> Font size
      </d-btn>
    </d-btn-group>

    <span class="divider" />

    <d-btn-group>
      <d-btn relief>
        <i class='bx bx-home-alt' ></i> Home
      </d-btn>
      <d-btn relief>
        <i class='bx bxs-phone-call' ></i> Contact
      </d-btn>
      <d-btn relief loading>
        <i class='bx bxs-cart-alt' ></i> Products
      </d-btn>
      <d-btn relief upload>
        <i class='bx bxs-envelope' ></i> Send
      </d-btn>
    </d-btn-group>
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
  flex-wrap wrap
  >>>.d-btn-group
    margin 20px 20px
</style>
