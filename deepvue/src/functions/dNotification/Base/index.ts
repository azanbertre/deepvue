import Vue from 'vue';
import './style.sass';
import component from './dNotification';

interface NotificationParams {
  title?: string
  text?: string
  position?: string
  color?: string
  border?: string
  icon?: string
  duration?: number | string
  onClick?: any
  onClickClose?: any
  buttonClose?: boolean
  flat?: boolean
  onDestroy?: any
  sticky?: boolean
  square?: boolean
  width?: string
  loading?: boolean
  progress?: any
  notPadding?: any
  content?: any
  clickClose?: boolean
  classNotification?: string
}

const notificationConstructor = Vue.extend(component)

notificationConstructor.prototype.close = function() {
  this.isVisible = false;
}

notificationConstructor.prototype.setLoading = function(val: boolean) {
  this.loading = val;
}

notificationConstructor.prototype.changeProgress = function(v: number) {
  if (!v) {
    return;
  }
  this.progress = v;
}

notificationConstructor.prototype.toggleClass = function(v: number) {
  if (!v) {
    return;
  }
  this.classNotification = v;
  this.$el.closest('.d-notification-parent').classList.toggle(String(v));
}

const notification = (params: NotificationParams = {}) => {
  const instance = new notificationConstructor()

  instance.$data.title = params.title;
  instance.$data.text = params.text;
  instance.$data.color = params.color;
  instance.$data.colorName = params.color;
  instance.$data.border = params.border;
  instance.$data.icon = params.icon;
  instance.$data.flat = params.flat;
  instance.$data.sticky = params.sticky;
  instance.$data.square = params.square;
  instance.$data.width = params.width;
  instance.$data.loading = params.loading;
  instance.$data.notPadding = params.notPadding;
  instance.$data.classNotification = params.classNotification;

  instance.$data.onClick = params.onClick;
  instance.$data.onClickClose = params.onClickClose;
  instance.$data.onDestroy = params.onDestroy;
  instance.$data.clickClose = params.clickClose;

  if (params.duration !== 'none') {
    instance.$data.duration = params.duration || 4000;
  }
  if (params.progress == 'auto' && params.duration !== 'none') {
    instance.$data.progressAuto = true;
  } else {
    instance.$data.progress = params.progress;
  }
  if (typeof params.buttonClose == 'boolean') {
    instance.$data.buttonClose = params.buttonClose;
  }

  if (params.width == '100%' || window.innerWidth < 600) {
    if (params.position === 'top-left' || params.position === 'top-right') {
      params.position = 'top-center';
    } else if (params.position === 'bottom-left' || params.position === 'bottom-right' || !params.position) {
      params.position = 'bottom-center';
    }
  }

  if (typeof params.position !== 'string') {
    params.position = 'bottom-right';
  }

  const parent: HTMLElement = document.querySelector(`.d-notification-parent--${params.position || 'bottom-right'}`) || document.createElement('div');

  if (!document.querySelector(`.d-notification-parent--${params.position || 'bottom-right'}`)) {
    parent.className = 'd-notification-parent';
    parent.classList.add(`d-notification-parent--${params.position || 'bottom-right'}`);
  }

  if (params.classNotification) {
    parent.classList.add(params.classNotification);
  }

  parent.appendChild(instance.$mount().$el);

  document.body.appendChild(parent);

  Vue.nextTick(() => {
    instance.$data.isVisible = true;
    instance.$data.content = params.content;
  })

  if (params.duration !== 'none') {
    setTimeout(() => {
      (instance as any).close();
    }, Number(params.duration) || 4000)
  }

  return instance
}

export default notification
