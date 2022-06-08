<script lang="ts">
  import { defineComponent, ref, h } from "vue";
  import { useRouter } from "vue-router";
  import createRipple from "../../../util/rippleEffect";
  import { getColor, mergeDicts, mergeClass } from '../../../util';
  import { componentProps } from "../../../mixins/component";

  export default defineComponent({
    props: {
      activeDisabled: { type: Boolean, default: false },
      flat: { type: Boolean, default: false },
      border: { type: Boolean, default: false },
      gradient: { type: Boolean, default: false },
      relief: { type: Boolean, default: false },
      transparent: { type: Boolean, default: false },
      shadow: { type: Boolean, default: false },
      floating: { type: Boolean, default: false },
      icon: { type: Boolean, default: false },
      circle: { type: Boolean, default: false },
      square: { type: Boolean, default: false },
      upload: { type: Boolean, default: false },
      block: { type: Boolean, default: false },

      size: { type: String, default: null },
      loading: { type: Boolean, default: false },
      to: { type: String, default: null },
      href: { type: String, default: null },
      blank: { type: Boolean, default: false },
      ripple: { type: Boolean, default: true },

      animationType: { type: String, default: '' },
      animateInactive: { type: Boolean, default: false },

      ...componentProps()
    },

    setup(props, ctx) {
      const root = ref(null);
      const router = useRouter();

      const slots = ctx.slots;
      const attrs = ctx.attrs;

      const hasDefaultSlot = !!slots['default'];
      const hasAnimateSlot = !!slots['animate'];

      const onMousedown = (evt: EventTarget) => {
        // * ignore if not ripple
        if (!props.ripple) return;

        const color = props.flat && (props.color || 'primary') &&
        !props.active && document.activeElement !== root ? 'inherit' : null;
        const isSolidColor = props.flat && !props.active && document.activeElement !== root;

        createRipple(evt, color, isSolidColor);

        ctx.emit('mousedown', evt);
      }

      const onClick = (evt: EventTarget) => {
        if (props.to) {
          router.push(props.to);
        } else if (props.href) {
          window.open(props.href, props.blank && '_blank' || '_self');
        }
        ctx.emit('click', evt);
      }

      const defaultSlot = h('div', {
        class: 'd-button__content'
      }, hasDefaultSlot ? slots.default() : null)
      
      const animateSlot = h('div', {
        slot: 'animate',
        class: [
          `d-button__animate`,
          `d-button__animate--${props.animationType}`
        ]
      }, hasAnimateSlot ? slots.animate() : null)

      const loadingElement = h('div', {
        class: [
          'd-button__loading'
        ]
      })

      const element = h('button', {
        ...attrs,  // get attributes and listeners
        style: mergeDicts({
          ['--d-color']: props.color ? getColor(props.color) : ''
        }, attrs.style),
        class: mergeClass([
          `d-button`,
          `d-button--size-${props.size}`,  // size
          {[`d-button--fff`]: props.color === '#fff'},  // if is fff (white)
          {[`d-button--active`]: !!props.active},  // if active
          {[`d-button--active-disabled`]: !!props.activeDisabled},
  
          // compatible types
          {[`d-button--icon`]: !!props.icon},
          {[`d-button--circle`]: !!props.circle},
          {[`d-button--square`]: !!props.square},
          {[`d-button--upload`]: !!props.upload},
          {[`d-button--block`]: !!props.block},
  
          {[`d-button--loading`]: !!props.loading},  // is loading
  
          // animation stuff
          {[`d-button--animate`]: !!slots.animate},
          {[`d-button--animate-${props.animationType}`]: !!props.animationType},
          {[`d-button--animate-inactive`]: !!props.animateInactive},
  
          // colors
          {[`d-button--primary`]: !props.danger && !props.success && !props.warning && !props.dark && !props.color},
          {[`d-button--danger`]: !!props.danger},
          {[`d-button--warning`]: !!props.warning},
          {[`d-button--success`]: !!props.success},
          {[`d-button--dark`]: !!props.dark},
  
          // other types
          {
            [`d-button--default`]:
            !props.flat &&
            !props.border &&
            !props.gradient &&
            !props.relief &&
            !props.transparent &&
            !props.shadow &&
            !props.floating
          },
          {[`d-button--flat`]: !!props.flat},
          {[`d-button--border`]: !!props.border},
          {[`d-button--gradient`]: !!props.gradient},
          {[`d-button--relief`]: !!props.relief},
          {[`d-button--transparent`]: !!props.transparent},
          {[`d-button--shadow`]: !!props.shadow},
          {[`d-button--floating`]: !!props.floating},
        ], attrs.class),
        onMousedown: (evt: EventTarget) => onMousedown(evt),
        onClick: (evt: EventTarget) => onClick(evt),
      }, [defaultSlot, hasAnimateSlot ? animateSlot : null, props.loading ? loadingElement : null])

      return () => [
        element
      ]
    }
  })
</script>
