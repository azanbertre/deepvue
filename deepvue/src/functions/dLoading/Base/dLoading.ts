import Vue, { VNode } from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { setColor, setStyleVar } from '../../../util';

@Component
export default class DLoading extends Vue {
  text: string | null = null;
  type: string = 'default';
  color: string | null = null;
  background: string | null = null;
  opacity: string | null = null;
  percent: string | null = null;
  progress: string | null = null;
  scale: string | null = null;
  target: any = null;
  isVisible: boolean = false;

  @Watch('isVisible')
  handleIsVisible() {
    this.$nextTick(() => {
      if (this.opacity) {
        setStyleVar('opacity', this.opacity, this.$el);
      }

      setColor('color', this.color, this.$el);
      setColor('background', this.background, this.$el);
    })
  }

  public render(h: any): VNode {
    const animation = h('div', {
      class: ['d-loading__load__animation'],
    }, [
      h('div', {
        staticClass: 'd-loading__load__percent'
      }, [
        this.percent
      ]),
      h('div', {
        staticClass: 'd-loading__load__animation__1'
      }),
      h('div', {
        staticClass: 'd-loading__load__animation__2'
      }),
      h('div', {
        staticClass: 'd-loading__load__animation__3'
      })
    ])

    const text = h('div', {
      class: ['d-loading__load__text'],
    }, this.text)

    const loading = h('div', {
      class: ['d-loading__load'],
      style: {
        transform: `scale(${this.scale})`
      },
    }, [
      animation,
      text
    ])

    const progress = h('div', {
      class: ['d-loading__progress'],
    }, [
      h('div', {
        staticClass: 'd-loading__progress__bar',
        style: {
          width: `${this.progress}%`
        }
      })
    ])

    return h('transition', {
      props: {
        name: 'loading'
      }
    }, [
      this.isVisible && h('div', {
          staticClass: 'd-loading',
          class: [
            `d-loading--${this.type || 'default'}`,
            { 'd-loading--target': !!this.target },
            { 'd-loading--background': !!this.background }
          ],
        }, [
          loading,
          this.progress && progress
        ])
      ]
    )
  }
}
