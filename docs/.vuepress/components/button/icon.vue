<template>
  <div class="center">
    <d-btn
      icon
      :active="active == 0"
      @click="active = 0"
    >
      <i class='bx bx-home-alt'></i>
    </d-btn>

    <d-btn
      icon
      success
      flat
      :active="active == 1"
      @click="active = 1"
    >
      <i class='bx bxs-phone-call' ></i>
    </d-btn>

    <d-btn
      icon
      danger
      border
      :active="active == 2"
      @click="active = 2"
    >
      <i class='bx bxs-heart' ></i>
    </d-btn>

    <d-btn
      icon
      warning
      gradient
      :active="active == 3" @click="active = 3"
    >
      <i class='bx bxs-bell-ring' ></i>
    </d-btn>

    <d-btn
      icon
      color="#7d33ff"
      relief
      :active="active == 5"
      @click="active = 5"
    >
      <i class='bx bxs-paper-plane' ></i>
    </d-btn>

    <d-btn
      icon
      color="rgb(59,222,200)"
      gradient
      :active="active == 6"
      @click="active = 6"
    >
      <i class='bx bxs-purchase-tag' ></i>
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
