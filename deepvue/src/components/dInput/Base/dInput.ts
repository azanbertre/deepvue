import {VNode} from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import DComponent from '../../../mixins/component';

@Component
export default class DInput extends DComponent {
  public Class: string = '';
  public prototype: any;

  @Prop({ default: '' }) value!: any;
  @Prop({ default: '' }) labelPlaceholder!: any;
  @Prop({ default: '' }) label!: any;
  @Prop({ type: Boolean, default: false }) block!: boolean;
  @Prop({ type: Boolean, default: false }) iconAfter!: boolean;
  @Prop({ type: Boolean, default: false }) visiblePassword!: boolean;
  @Prop({ type: Boolean, default: false }) loading!: boolean;
  @Prop({ type: String, default: null }) color!: string;
  @Prop({ type: String, default: null }) state!: string;
  @Prop({ type: Number, default: 0 }) progress!: number;
  @Prop({ type: Boolean, default: false }) border!: boolean;
  @Prop({ type: Boolean, default: false }) shadow!: boolean;
  @Prop({ type: Boolean, default: false }) transparent!: boolean;
  @Prop({ type: Boolean, default: false }) textWhite!: boolean;
  @Prop({ type: Boolean, default: false }) square!: boolean;

  private isVisiblePassword: boolean = false;
  // tslint:disable-next-line:variable-name
  private _uid: any;

  get getId() {
    return `d-input--${this.$attrs.id || this._uid}`;
  }

  get hasColor() {
    return (this.color || this.primary || this.danger || this.success || this.dark || this.warning);
  }

  beforeEnter(el: any) {
    el.style.height = 0;
  }

  enter(el: any, done: any) {
    const h = el.scrollHeight;
    el.style.height = h - 1 + 'px';
    done();
  }

  leave(el: any, done: any) {
    el.style.minHeight = '0px';
    el.style.height = '0px';
  }

  getMessage(type: string) {
    return this.$createElement('transition', {
      on: {
        beforeEnter: this.beforeEnter,
        enter: this.enter,
        leave: this.leave
      },
    }, [
      !!this.$slots[`message-${type}`] && this.$createElement('div', {
        staticClass: 'd-input__message',
        class: [`d-input__message--${type}`]
      }, [
        this.$slots[`message-${type}`]
      ])
    ])
  }

  public render(h: any): VNode {
    const input = h('input', {
      staticClass: 'd-input',
      domProps: {
        value: this.value
      },
      class: [
        { ['d-input--has-icon']: !!this.$slots.icon },
        { ['d-input--has-icon--after']: !!this.iconAfter }
      ],
      on: {
        ...this.$listeners,
        input: (evt: any) => {
          this.$emit('input', evt.target.value)
        }
      },
      attrs: {
        ...this.$attrs,
        placeholder: '',
        id: this.getId,
        type: this.visiblePassword ? 'text' : this.$attrs.type
      }
    })

    const label = h('label', {
      attrs: {
        for: this.getId
      },
      class: [
        'd-input__label',
        { 'd-input__label--placeholder': this.labelPlaceholder },
        { 'd-input__label--hidden': this.value !== '' || this.$attrs.type == 'date' || this.$attrs.type == 'time' },
        { 'd-input__label--label': this.label }
      ],
    }, [this.label || this.$attrs.placeholder || this.labelPlaceholder])

    const placeholder = h('label', {
      attrs: {
        for: this.getId
      },
      class: [
        'd-input__label',
        { 'd-input__label--hidden': this.value !== '' },
      ],
    }, [this.$attrs.placeholder])

    const icon = h('span', {
      staticClass: 'd-input__icon',
      class: [
        { 'd-input__icon--after': this.iconAfter },
        { 'd-input__icon--click': !!this.$listeners['click-icon'] }
      ],
      on: {
        click: (evt: any) => {
          this.$emit('click-icon', evt.target.value)
        }
      },
    }, [this.$slots.icon])

    const progressBar = h('div', {
      staticClass: 'd-input__progress',
      class: [
        { 'd-input__progress--danger': this.progress < 33 },
        { 'd-input__progress--warning': this.progress < 66 && this.progress > 33 },
        { 'd-input__progress--success': this.progress > 66 }
      ]
    }, [
      h('div', {
        staticClass: 'd-input__progress__bar',
        style: {
          width: `${this.progress}%`
        },
      })
    ])

    const loading = h('div', {
      staticClass: 'd-input__loading',
    })

    const effects = h('div', {
      staticClass: 'd-input__affects',
    }, [
      h('div', {
        staticClass: 'd-input__affects__1',
      }),
      h('div', {
        staticClass: 'd-input__affects__2',
      }),
      h('div', {
        staticClass: 'd-input__affects__3',
      }),
      h('div', {
        staticClass: 'd-input__affects__4',
      })
    ])

    const inputContent = h('div', {
      staticClass: 'd-input-content',
      class: [
        { [`d-input-content--has-color`]: this.hasColor },
        { [`d-input-content--has-label`]: this.label || this.labelPlaceholder }
      ]
    }, [
      input,
      this.label && placeholder,
      label,
      this.$slots.icon && icon,
      this.loading && loading,
      effects
    ])

    const messageSuccess = this.getMessage('success');
    const messageDanger = this.getMessage('danger');
    const messageWarning = this.getMessage('warning');
    const messagePrimary = this.getMessage('primary');

    return h('div', {
      staticClass: 'd-input-parent',
      style: {
        ['--d-color']: this.color ? this.getColor : ''
      },
      class: [
        `d-input-parent--state-${this.state}`,
        { 'd-input-parent--border': !!this.border },
        { 'd-input-parent--shadow': !!this.shadow },
        { [`d-input-content--has-label`]: this.label || this.labelPlaceholder },
        { block: this.block },
        { transparent: this.transparent },
        { textWhite: this.textWhite },
        { square: this.square },

        // colors
        { [`d-input--primary`] : !this.danger && !this.success && !this.warning && !this.dark && !this.color },
        { [`d-input--danger`] : !!this.danger },
        { [`d-input--warning`] : !!this.warning },
        { [`d-input--success`] : !!this.success },
        { [`d-input--dark`] : !!this.dark },
        { [`d-input--is-color`] : !!this.isColor },
      ]
    }, [
      inputContent,
      this.progress > 0 && progressBar,
      messageSuccess,
      messageDanger,
      messageWarning,
      messagePrimary
    ])
  }
}
