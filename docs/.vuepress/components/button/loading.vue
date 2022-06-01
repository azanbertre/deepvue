<template>
  <div class="center">
    <d-btn
      loading
      :active="active == 0"
      @click="active = 0"
    >
      Home
    </d-btn>

    <d-btn
      loading
      icon
      success
      flat
      :active="active == 1"
      @click="active = 1"
    >
      <i class="bx bxs-phone-call"></i>
    </d-btn>

    <d-btn
      loading
      danger
      border
      :active="active == 2"
      @click="active = 2"
    >
      <i class="bx bxs-heart"></i> Like
    </d-btn>

    <d-btn
      loading
      warning
      gradient
      :active="active == 3"
      @click="active = 3"
    >
      Notifications <i class="bx bxs-bell-ring"></i>
    </d-btn>

    <d-btn
      loading
      icon
      color="#7d33ff"
      relief
      :active="active == 5"
      @click="active = 5"
    >
      <i class="bx bxs-paper-plane"></i>
    </d-btn>
    <d-btn
      loading
      icon
      color="rgb(59,222,200)"
      gradient
      :active="active == 6"
      @click="active = 6"
    >
      <i class="bx bxs-purchase-tag"></i>
    </d-btn>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: 0
  })
};
</script>
