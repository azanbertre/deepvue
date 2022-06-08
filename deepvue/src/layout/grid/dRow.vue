<script lang="ts">
  import { defineComponent, h } from "vue";
  import { mergeDicts, mergeClass } from '../../util';

  export default defineComponent({
    props: {
      number: { type: [String, Number], default: '12' },
      justify: { type: String, default: 'flex-start' },
      align: { type: String, default: 'flex-start' },
      direction: { type: String, default: 'row' },
    },

    setup(props, ctx) {
      const slots = ctx.slots;
      const attrs = ctx.attrs;

      const hasDefaultSlot = !!slots['default'];

      const element = h('div', {
        ...attrs,
        class: mergeClass(['d-row'], attrs.class),
        style: mergeDicts({
          justifyContent: props.justify,
          alignItems: props.align,
          flexDirection: props.direction
        }, attrs.style),
      }, hasDefaultSlot ? slots.default() : null)

      return () => [
          element
      ]
    }
  })
</script>