import Vue from 'vue';
import component from './dLoading';
import './style.sass';

interface LoadingParams {
  type?: string
  text?: string
  hidden?: boolean,
  color?: string,
  background?: string
  opacity?: string
  percent?: string
  progress?: string
  target?: any
  scale?: string
}

const loadingConstructor = Vue.extend(component);

loadingConstructor.prototype.close = function() {
  this.isVisible = false;

  document.body.style.overflowY = 'auto';

  setTimeout(() => {
    this.$destroy();
    this.$el.parentNode.removeChild(this.$el);
  }, 250)
}

loadingConstructor.prototype.changePercent = function(v: string) {
  if (!v) {
    return;
  }
  this.percent = v;
}

loadingConstructor.prototype.changeProgress = function(v: number) {
  if (!v) {
    return;
  }
  this.progress = v;
}

loadingConstructor.prototype.changeText = function(v: string) {
  if (!v) {
    return;
  }
  this.text = v;
}

const loading = (params: LoadingParams = {}) => {
  const instance = new loadingConstructor()

  if (typeof params.target === 'string') {
    params.target = document.querySelector(params.target);
    instance.$data.target = params.target;
  } else if (params.target) {
    params.target = params.target.$el || params.target;
    instance.$data.target = params.target;
  } else {
    params.target = document.body;
  }

  instance.$data.text = params.text;
  instance.$data.color = params.color;
  instance.$data.background = params.background;
  instance.$data.opacity = params.opacity;
  instance.$data.percent = params.percent;
  instance.$data.progress = params.progress;
  instance.$data.type = params.type;
  instance.$data.scale = params.scale;

  params.target.appendChild(instance.$mount().$el);
  document.body.style.overflowY = params.hidden && 'hidden';
  Vue.nextTick(() => {
    instance.$data.isVisible = true;
  })

  return instance;
}

export default loading;
