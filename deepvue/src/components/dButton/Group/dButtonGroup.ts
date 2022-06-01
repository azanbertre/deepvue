import { VNode } from 'vue';
import { Component } from 'vue-property-decorator';
import DComponent from '../../../mixins/component';

@Component
export default class DButton extends DComponent {
  public render(h: any): VNode {
    return h('div', {
      staticClass: 'd-button-group'
    }, this.$slots.default )
  }
}
