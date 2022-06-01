import Vue, { VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import './icons.sass';

@Component
export default class DIconClose extends Vue {
  @Prop({ type: String, default: null }) public hover!: string | null

  render(h: any): VNode {
    return h('i', {
      staticClass: 'd-icon-close',
      class: [
        `d-icon-hover-${this.hover}`
      ],
      ref: 'icon'
    })
  }
}
