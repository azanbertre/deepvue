<script lang="ts">
  import { defineComponent, h } from "vue";
  import { mergeDicts, mergeClass } from '../../util';

  export default defineComponent({
    props: {
      cols: { type: [String, Number], default: '12' },
      offset: { type: [String, Number], default: '0' },
      order: { type: [String, Number], default: '0' },
      lg: { type: [String, Number], default: '0' },
      md: { type: [String, Number], default: '0' },
      sm: { type: [String, Number], default: '0' },
      display: { type: String, default: 'block' },
      justify: { type: String, default: 'flex-start' },
      align: { type: String, default: 'flex-start' }
    },

    setup(props, ctx) {
      const slots = ctx.slots;
      const attrs = ctx.attrs;

      const hasDefaultSlot = !!slots['default'];

      const element = h('div', {
        ...attrs,
        class: mergeClass([
          'd-col',
          `d-col--cols-${props.cols}`,
          `d-col--offset-${props.offset}`,
          `d-col--lg-${props.lg}`,
          `d-col--md-${props.md}`,
          `d-col--sm-${props.sm}`,
        ], attrs.class),
        style: mergeDicts({
          justifyContent: props.justify,
          alignItems: props.align,
          display: props.display,
          order: props.order
        }, attrs.style),
      }, hasDefaultSlot ? slots.default() : null)

      return () => [
          element
      ]
    }
  })
</script>