<script lang="ts">
  import { defineComponent, h } from "vue";
  import { mergeClass } from '../../../util';

  export default defineComponent({
    props: {},

    setup(props, ctx) {
      const slots = ctx.slots;
      const attrs = ctx.attrs;

      const hasDefaultSlot = !!slots['default'];

      const element = h('div', {
        ...attrs,
        class: mergeClass(['d-button-group'], attrs.class),
      }, hasDefaultSlot ? slots.default() : null)

      return () => [
          element
      ]
    }
  })
</script>