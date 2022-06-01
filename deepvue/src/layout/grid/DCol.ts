import Vue from 'vue';
import { VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class DCol extends Vue {
  static install: (vue: any) => any
  static use: (vue: any) => any

  @Prop({ type: [String, Number], default: '12' }) public w!: string | number
  @Prop({ type: [String, Number], default: '0' }) public offset!: string | number
  @Prop({ type: [String, Number], default: '0' }) public order!: string | number
  @Prop({ type: [String, Number], default: '0' }) public lg!: string | number
  @Prop({ type: [String, Number], default: '0' }) public sm!: string | number
  @Prop({ type: [String, Number], default: '0' }) public xs!: string | number
  @Prop({ type: String, default: 'block' }) public type!: string
  @Prop({ type: String, default: 'flex-start' }) public justify!: string

  public render(h: any): VNode {
    return h('div', {
      staticClass: 'd-col',
      style: {
        order: this.order,
        display: this.type,
        justifyContent: this.justify,
      },
      class: [
        `d-col--w-${this.w}`,
        `d-col--offset-${this.offset}`,
        `d-col--lg-${this.lg}`,
        `d-col--sm-${this.sm}`,
        `d-col--xs-${this.xs}`,
      ]
    }, this.$slots.default )
  }
}
