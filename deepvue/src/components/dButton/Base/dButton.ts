import {VNode} from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import DComponent from '../../../mixins/component';
import createRipple from '../../../util/rippleEffect/index';

@Component
export default class DButton extends DComponent {
  // * Button Types
  @Prop({ type: Boolean, default: false }) public activeDisabled!: boolean
  @Prop({ type: Boolean, default: false }) public flat!: boolean
  @Prop({ type: Boolean, default: false }) public border!: boolean
  @Prop({ type: Boolean, default: false }) public gradient!: boolean
  @Prop({ type: Boolean, default: false }) public relief!: boolean
  @Prop({ type: Boolean, default: false }) public transparent!: boolean
  @Prop({ type: Boolean, default: false }) public shadow!: boolean
  @Prop({ type: Boolean, default: false }) public floating!: boolean
  @Prop({ type: Boolean, default: false }) public icon!: boolean
  @Prop({ type: Boolean, default: false }) public circle!: boolean
  @Prop({ type: Boolean, default: false }) public square!: boolean
  @Prop({ type: Boolean, default: false }) public upload!: boolean
  @Prop({ type: Boolean, default: false }) public block!: boolean

  // * Other stuff
  @Prop({ type: String, default: null }) public size!: string
  @Prop({ type: Boolean, default: false }) public loading!: boolean
  @Prop({ type: String, default: null }) public to!: string | null
  @Prop({ type: String, default: null }) public href!: string | null
  @Prop({ type: Boolean, default: false }) public blank!: boolean
  @Prop({ type: Boolean, default: true }) public ripple!: boolean

  // * Animation
  @Prop({ type: String, default: '' }) public animationType!: string
  @Prop({ type: Boolean, default: false }) public animateInactive!: boolean

  public render(h: any): VNode {

    const defaultSlot = h('div', {
      staticClass: 'd-button__content'
    }, this.$slots.default )

    const animateSlot = h('div', {
      staticClass: 'd-button__animate',
      class: [
        `d-button__animate--${this.animationType}`
      ]
    }, this.$slots.animate )

    const loadingElement = h('div', {
      staticClass: 'd-button__loading'
    })

    return h('button', {
      staticClass: 'd-button',
      style: {
        ['--d-color']: this.color ? this.getColor : ''
      },
      class: [
        `d-button--${this.componentColor}`,
        `d-button--size-${this.size}`,  // size
        {[`d-button--fff`]: this.color === '#fff'},  // if is fff (white)
        {[`d-button--active`]: !!this.active},  // if active
        {[`d-button--active-disabled`]: !!this.activeDisabled},

        // compatible types
        {[`d-button--icon`]: !!this.icon},
        {[`d-button--circle`]: !!this.circle},
        {[`d-button--square`]: !!this.square},
        {[`d-button--upload`]: !!this.upload},
        {[`d-button--block`]: !!this.block},

        {[`d-button--loading`]: !!this.loading},  // is loading

        // animation stuff
        {[`d-button--animate`]: !!this.$slots.animate},
        {[`d-button--animate-${this.animationType}`]: !!this.animationType},
        {[`d-button--animate-inactive`]: !!this.animateInactive},

        // colors
        {[`d-button--primary`]: !this.danger && !this.success && !this.warning && !this.dark && !this.color},
        {[`d-button--danger`]: !!this.danger},
        {[`d-button--warning`]: !!this.warning},
        {[`d-button--success`]: !!this.success},
        {[`d-button--dark`]: !!this.dark},

        // other types
        {
          [`d-button--default`]:
          !this.flat &&
          !this.border &&
          !this.gradient &&
          !this.relief &&
          !this.transparent &&
          !this.shadow &&
          !this.floating
        },
        {[`d-button--flat`]: !!this.flat},
        {[`d-button--border`]: !!this.border},
        {[`d-button--gradient`]: !!this.gradient},
        {[`d-button--relief`]: !!this.relief},
        {[`d-button--transparent`]: !!this.transparent},
        {[`d-button--shadow`]: !!this.shadow},
        {[`d-button--floating`]: !!this.floating},
      ],
      attrs: {
        ...this.$attrs
      },
      on: {
        ...this.$listeners,
        mousedown: (evt: EventTarget) => {
          // * ignore if not ripple
          if (!this.ripple) return;

          const color = this.flat && (this.componentColor || this.color || 'primary') &&
          !this.active && document.activeElement !== this.$el ? 'inherit' : null;
          const isSolidColor = this.flat && !this.active && document.activeElement !== this.$el;

          createRipple(evt, color, isSolidColor);
        },
        click: (evt: EventTarget) => {
          if (this.to) {
            this.$router.push(this.to);
          } else if (this.href) {
            window.open(this.href, this.blank && '_blank' || '_self');
          }
          this.$emit('click', evt)
        }
      }
    }, [defaultSlot, this.$slots.animate ? animateSlot : null, this.loading ? loadingElement : null])
  }
}
