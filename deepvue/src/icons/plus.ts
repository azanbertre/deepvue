import Vue, { VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import './icons.sass';

@Component
export default class DIconPlus extends Vue {
  @Prop({ type: Boolean, default: false }) public less!: boolean

  render(h: any): VNode {
    return h('i', {
      staticClass: 'd-icon-plus',
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
