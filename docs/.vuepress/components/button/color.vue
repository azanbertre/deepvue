<template>
  <div class="center">
    <d-btn
      :active="active == 0"
      @click="active = 0"
    >
      Default
    </d-btn>
    <d-btn
      success
      flat
      :active="active == 1"
      @click="active = 1"
    >
      Success
    </d-btn>
    <d-btn
      danger
      border
      :active="active == 2"
      @click="active = 2"
    >
      Danger
    </d-btn>
    <d-btn
      warning
      gradient
      :active="active == 3"
      @click="active = 3"
    >
      Warn
    </d-btn>
    <d-btn
      dark
      shadow
      :active="active == 4"
      @click="active = 4"
    >
      Dark
    </d-btn>
    <d-btn
      color="#7d33ff"
      relief
      :active="active == 5"
      @click="active = 5"
    >
        HEX
    </d-btn>
    <d-btn
      color="rgb(59,222,200)"
      gradient
      :active="active == 6"
      @click="active = 6"
    >
      RGB
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
