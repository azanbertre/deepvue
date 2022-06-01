import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { getColor } from '../util';

@Component
export default class DComponent extends Vue {
  static install: (vue: any) => void
  static use: (vue: any) => any

  componentColor: string = null
  getColor: any = null

  // * Colors
  @Prop({ type: String, default: null }) color!: string
  @Prop({ type: Boolean, default: false }) danger!: boolean
  @Prop({ type: Boolean, default: false }) success!: boolean
  @Prop({ type: Boolean, default: false }) warning!: boolean
  @Prop({ type: Boolean, default: false }) dark!: boolean
  @Prop({ type: Boolean, default: false }) primary!: boolean

  @Prop({ type: Boolean, default: false }) active!: boolean

  get isColorDark() {
    return this.color === 'dark' || this.dark || this.componentColor === 'dark';
  }

  get isColor() {
    return !!this.color || !!this.primary || !!this.success || !!this.warning || !!this.danger || !!this.dark;
  }

  mounted() {
    this.getColor = getColor(this.color);
  }
}
