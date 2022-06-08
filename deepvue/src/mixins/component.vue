<template>

</template>

<script lang="ts">
  import { defineComponent, onMounted, computed } from "vue";
  import { getColor as getC } from "../util";

  export default defineComponent({
    name: "DComponent",

    props: {
      color: { type: String, default: null },
      danger: { type: Boolean, default: false },
      success: { type: Boolean, default: false },
      warning: { type: Boolean, default: false },
      dark: { type: Boolean, default: false },
      primary: { type: Boolean, default: false },
      active: { type: Boolean, default: false },
    },

    setup(props, context) {
      // static install: (vue: any) => void
      // static use: (vue: any) => any

      let componentColor: string = null;
      let getColor: any = null;

      onMounted(() => {
        getColor = getC(props.color);
      })

      const isColor = computed(() => {
        return !!props.color || !!props.primary || !!props.success || !!props.warning || !!props.danger || !!props.dark;
      })

      const isColorDark = computed(() => {
        return props.color === 'dark' || props.dark || componentColor === 'dark';
      })

      return { isColor, isColorDark }
    },
  })
</script>
