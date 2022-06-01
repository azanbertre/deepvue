<template>
  <div class="center">
    <d-btn
      size="xl"
      :active="active == 0"
       @click="active = 0"
    >
      XLarge
    </d-btn>
    <d-btn
      size="large"
      :active="active == 1"
      @click="active = 1"
    >
      Large
    </d-btn>
    <d-btn
      :active="active == 2"
      @click="active = 2"
    >
      Default
    </d-btn>
    <d-btn
      size="small"
      :active="active == 3"
      @click="active = 3"
    >
      Small
    </d-btn>
    <d-btn
      size="mini"
      :active="active == 4"
      @click="active = 4"
    >
      Mini
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
