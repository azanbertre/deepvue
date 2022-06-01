import Vue, { VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import './icons.sass';

@Component
export default class DIconArrow extends Vue {
  @Prop({ type: Boolean, default: false }) public less!: boolean

  render(h: any): VNode {
    return h('i', {
      staticClass: 'd-icon-arrow',
      class: {
        less: this.less
      },
      ref: 'icon',
      on: {
        ...this.$listeners
      }
    })
  }
}
