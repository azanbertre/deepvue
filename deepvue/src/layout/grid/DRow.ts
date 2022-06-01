import Vue from 'vue';
import { VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class DRow extends Vue {
  static install: (vue: any) => any
  static use: (vue: any) => any

  @Prop({ type: Number, default: 12 }) public w!: number
  @Prop({ type: String, default: 'flex-start' }) public justify!: string
  @Prop({ type: String, default: 'flex-start' }) public align!: string
  @Prop({ type: String, default: 'row' }) public direction!: string

  public render(h: any): VNode {
    return h('div', {
      staticClass: 'd-row',
      style: {
        justifyContent: this.justify,
        alignItems: this.align,
        flexDirection: this.direction
      },
    }, this.$slots.default )
  }
}
