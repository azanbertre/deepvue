<template>
  <div class="center">
    <d-btn
      flat
      :active="active == 0"
      @click="active = 0"
    >
      Active
    </d-btn>
    <d-btn
      flat
      :active="active == 1"
      @click="active = 1"
    >
      Default
    </d-btn>
    <d-btn
      flat
      disabled
    >
      Disabled
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
