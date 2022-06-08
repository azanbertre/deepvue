import { defineComponent, ref, h } from 'vue';
import { useRouter } from 'vue-router';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var mergeClass = function (classList, classNames) {
    var isClassListEmpty = !classList || !Array.isArray(classList) || !classList.length;
    var isClassNamesEmpty = !classNames || classNames.constructor != String || !classNames.trim().length;
    if (isClassListEmpty && isClassNamesEmpty) {
        return [];
    }
    if (isClassListEmpty && !isClassNamesEmpty) {
        return classNames.split(' ').map(function (el) { return el.trim(); });
    }
    if (!isClassListEmpty && isClassNamesEmpty) {
        return classList;
    }
    return mergeLists(classList, classNames.split(' ').map(function (el) { return el.trim(); }));
};
var mergeLists = function (list1, list2) {
    var isList1Empty = !list1 || !Array.isArray(list1) || !list1.length;
    var isList2Empty = !list2 || !Array.isArray(list1) || !list2.length;
    if (isList1Empty && isList2Empty) {
        return [];
    }
    if (!isList1Empty && isList2Empty) {
        return list1;
    }
    if (isList1Empty && !isList2Empty) {
        return list2;
    }
    return list1.concat(list2);
};
var mergeDicts = function (dict1, dict2) {
    var isDict1Empty = !dict1 || dict1.constructor != Object || !Object.keys(dict1).length;
    var isDict2Empty = !dict2 || dict2.constructor != Object || !Object.keys(dict2).length;
    if (isDict1Empty && isDict2Empty) {
        return [];
    }
    if (!isDict1Empty && isDict2Empty) {
        return dict1;
    }
    if (isDict1Empty && !isDict2Empty) {
        return dict2;
    }
    return Object.assign({}, dict1, dict2);
};
var isColor = function (color) {
    var dColors = [
        'primary', 'secondary', 'success', 'danger', 'warning', 'dark', 'light',
        // * Colors for social media
        'facebook', 'twitter', 'youtube', 'pinterest',
        'linkedin', 'snapchat', 'whatsapp', 'tumblr',
        'reddit', 'spotify', 'amazon', 'medium', 'vimeo', 'skype',
        'dribbble', 'slack', 'yahoo', 'twitch', 'discord', 'telegram',
        'google-plus', 'messenger'
    ];
    return dColors.includes(color);
};
var setStyleVar = function (name, value, el) {
    if (el) {
        el.style.setProperty("--d-".concat(name), value);
        return;
    }
    document.documentElement.style.setProperty("--d-".concat(name), value);
};
var setColor = function (name, color, el, addClass) {
    if (color == 'dark' && el) {
        el.classList.add('d-component-dark');
        return;
    }
    var newColor = getColor(color);
    if (!newColor) {
        return;
    }
    setStyleVar(name, newColor, el);
    if (addClass) {
        el.classList.add('d-change-color');
    }
};
var getColor = function (color) {
    var newColor;
    if (isRGB(color)) {
        var rgb = color.replace(/[rgba()]/g, '').split(',');
        newColor = "".concat(rgb[0], ",").concat(rgb[1], ",").concat(rgb[2]);
    }
    else if (isHEX(color)) {
        var rgb = hexToRgb(color);
        newColor = "".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b);
    }
    else if (isColor(color)) {
        newColor = "var(--d-".concat(color, ")");
    }
    else {
        newColor = null;
    }
    return newColor;
};
function isRGB(color) {
    // for rgba -> 0,0,0,1
    // ((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),
    // (0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d))(,((0.[\d]|0)|1))?
    var nCheck = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(color);
    var rgbCheck = /^(rgb|rgba)/.test(color);
    return nCheck || rgbCheck;
}
function isHEX(color) {
    return /^(#)/.test(color);
}
function hexToRgb(hex) {
    var regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    // short hex
    if (hex.length < 6) {
        regex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    }
    var result = regex.exec(hex);
    // handle short hex result
    if (hex.length < 6 && result) {
        result[1] = result[1] + result[1];
        result[2] = result[2] + result[2];
        result[3] = result[3] + result[3];
    }
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

var createRipple = function (event, color, isSolidColor) {
    if (color === void 0) { color = null; }
    if (isSolidColor === void 0) { isSolidColor = false; }
    var el = event.currentTarget;
    var rippleContainer = document.createElement('div');
    var ripple = document.createElement('div');
    rippleContainer.className = 'd-ripple-container';
    if (!color) {
        setColor('color', '#fff', rippleContainer);
    }
    var offset = el.getBoundingClientRect();
    var rippleTime = 0.8;
    if (el.clientWidth > 120) {
        rippleTime = 1.4;
    }
    ripple.style.left = "".concat(event.clientX - offset.left, "px");
    ripple.style.top = "".concat(event.clientY - offset.top, "px");
    ripple.style.transition = "all ".concat(rippleTime, "s ease");
    ripple.classList.add('d-ripple');
    if (isSolidColor) {
        ripple.classList.add('d-ripple--solid');
    }
    rippleContainer.appendChild(ripple);
    el.appendChild(rippleContainer);
    ripple.style.width = ripple.style.height = "".concat(el.clientWidth * 3, "px");
    ripple.style.opacity = "1";
    // tslint:disable-next-line:no-shadowed-variable
    function removeRipple(event) {
        ripple.style.transition = "all 0.".concat(rippleTime * 800, "s ease");
        setTimeout(function () {
            ripple.style.opacity = '0';
            setTimeout(function () {
                el.removeChild(rippleContainer);
            }, rippleTime * 400);
        }, rippleTime * 300);
        event.target.removeEventListener('mouseup', removeRipple);
        event.target.removeEventListener('mouseleave', removeRipple);
    }
    event.target.addEventListener('mouseup', removeRipple);
    event.target.addEventListener('mouseleave', removeRipple);
};

// @ts-ignore
var componentProps = function () {
    return {
        // @ts-ignore
        color: { type: String, default: null },
        danger: { type: Boolean, default: false },
        success: { type: Boolean, default: false },
        warning: { type: Boolean, default: false },
        dark: { type: Boolean, default: false },
        primary: { type: Boolean, default: false },
        active: { type: Boolean, default: false }
    };
};

var script$3 = defineComponent({
    props: __assign({ activeDisabled: { type: Boolean, default: false }, flat: { type: Boolean, default: false }, border: { type: Boolean, default: false }, gradient: { type: Boolean, default: false }, relief: { type: Boolean, default: false }, transparent: { type: Boolean, default: false }, shadow: { type: Boolean, default: false }, floating: { type: Boolean, default: false }, icon: { type: Boolean, default: false }, circle: { type: Boolean, default: false }, square: { type: Boolean, default: false }, upload: { type: Boolean, default: false }, block: { type: Boolean, default: false }, size: { type: String, default: null }, loading: { type: Boolean, default: false }, to: { type: String, default: null }, href: { type: String, default: null }, blank: { type: Boolean, default: false }, ripple: { type: Boolean, default: true }, animationType: { type: String, default: '' }, animateInactive: { type: Boolean, default: false } }, componentProps()),
    setup: function (props, ctx) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
        var root = ref(null);
        var router = useRouter();
        var slots = ctx.slots;
        var attrs = ctx.attrs;
        var hasDefaultSlot = !!slots['default'];
        var hasAnimateSlot = !!slots['animate'];
        var onMousedown = function (evt) {
            // * ignore if not ripple
            if (!props.ripple)
                return;
            var color = props.flat && (props.color || 'primary') &&
                !props.active && document.activeElement !== root ? 'inherit' : null;
            var isSolidColor = props.flat && !props.active && document.activeElement !== root;
            createRipple(evt, color, isSolidColor);
            ctx.emit('mousedown', evt);
        };
        var onClick = function (evt) {
            if (props.to) {
                router.push(props.to);
            }
            else if (props.href) {
                window.open(props.href, props.blank && '_blank' || '_self');
            }
            ctx.emit('click', evt);
        };
        var defaultSlot = h('div', {
            class: 'd-button__content'
        }, hasDefaultSlot ? slots.default() : null);
        var animateSlot = h('div', {
            slot: 'animate',
            class: [
                "d-button__animate",
                "d-button__animate--".concat(props.animationType)
            ]
        }, hasAnimateSlot ? slots.animate() : null);
        var loadingElement = h('div', {
            class: [
                'd-button__loading'
            ]
        });
        var element = h('button', __assign(__assign({}, attrs), { style: mergeDicts((_a = {},
                _a['--d-color'] = props.color ? getColor(props.color) : '',
                _a), attrs.style), class: mergeClass([
                "d-button",
                "d-button--size-".concat(props.size),
                (_b = {}, _b["d-button--fff"] = props.color === '#fff', _b),
                (_c = {}, _c["d-button--active"] = !!props.active, _c),
                (_d = {}, _d["d-button--active-disabled"] = !!props.activeDisabled, _d),
                (_e = {}, _e["d-button--icon"] = !!props.icon, _e),
                (_f = {}, _f["d-button--circle"] = !!props.circle, _f),
                (_g = {}, _g["d-button--square"] = !!props.square, _g),
                (_h = {}, _h["d-button--upload"] = !!props.upload, _h),
                (_j = {}, _j["d-button--block"] = !!props.block, _j),
                (_k = {}, _k["d-button--loading"] = !!props.loading, _k),
                (_l = {}, _l["d-button--animate"] = !!slots.animate, _l),
                (_m = {}, _m["d-button--animate-".concat(props.animationType)] = !!props.animationType, _m),
                (_o = {}, _o["d-button--animate-inactive"] = !!props.animateInactive, _o),
                (_p = {}, _p["d-button--primary"] = !props.danger && !props.success && !props.warning && !props.dark && !props.color, _p),
                (_q = {}, _q["d-button--danger"] = !!props.danger, _q),
                (_r = {}, _r["d-button--warning"] = !!props.warning, _r),
                (_s = {}, _s["d-button--success"] = !!props.success, _s),
                (_t = {}, _t["d-button--dark"] = !!props.dark, _t),
                (_u = {},
                    _u["d-button--default"] = !props.flat &&
                        !props.border &&
                        !props.gradient &&
                        !props.relief &&
                        !props.transparent &&
                        !props.shadow &&
                        !props.floating,
                    _u),
                (_v = {}, _v["d-button--flat"] = !!props.flat, _v),
                (_w = {}, _w["d-button--border"] = !!props.border, _w),
                (_x = {}, _x["d-button--gradient"] = !!props.gradient, _x),
                (_y = {}, _y["d-button--relief"] = !!props.relief, _y),
                (_z = {}, _z["d-button--transparent"] = !!props.transparent, _z),
                (_0 = {}, _0["d-button--shadow"] = !!props.shadow, _0),
                (_1 = {}, _1["d-button--floating"] = !!props.floating, _1),
            ], attrs.class), onMousedown: function (evt) { return onMousedown(evt); }, onClick: function (evt) { return onClick(evt); } }), [defaultSlot, hasAnimateSlot ? animateSlot : null, props.loading ? loadingElement : null]);
        return function () { return [
            element
        ]; };
    }
});

script$3.__file = "src/components/dButton/Base/dButton.vue";

script$3.install = function (vue) {
    vue.component('d-btn', script$3);
};
if (typeof window !== 'undefined' && window.Vue) {
    script$3.install(window.Vue);
}

var script$2 = defineComponent({
    props: {},
    setup: function (props, ctx) {
        var slots = ctx.slots;
        var attrs = ctx.attrs;
        var hasDefaultSlot = !!slots['default'];
        var element = h('div', __assign(__assign({}, attrs), { class: mergeClass(['d-button-group'], attrs.class) }), hasDefaultSlot ? slots.default() : null);
        return function () { return [
            element
        ]; };
    }
});

script$2.__file = "src/components/dButton/Group/dButtonGroup.vue";

script$2.install = function (vue) {
    vue.component('d-btn-group', script$2);
};
if (typeof window !== 'undefined' && window.Vue) {
    script$2.install(window.Vue);
}

// export { default as dInput } from './dInput/Base/index'
// new

var dComponents = /*#__PURE__*/Object.freeze({
    __proto__: null,
    dButton: script$3,
    dButtonGroup: script$2
});

var getPage = function (data, page, maxItems) {
    if (maxItems === void 0) { maxItems = 5; }
    var max = Math.ceil(page * maxItems);
    var min = max - maxItems;
    var items = [];
    data.forEach(function (item, index) {
        if (index >= min && index < max) {
            items.push(item);
        }
    });
    return items;
};
var getPageLength = function (data, maxItems) {
    if (maxItems === void 0) { maxItems = 5; }
    return Math.ceil(data.length / maxItems);
};
var getLength = function (data) {
    return data.length;
};
var checkAll = function (selected, data) {
    if (selected.length !== data.length) {
        selected = [];
        data.forEach(function (item) {
            selected.push(item);
        });
        return selected;
    }
    return [];
};
var getSearch = function (data, search) {
    if (search === void 0) { search = ''; }
    var searchNormalize = normalize(search);
    return data.filter(function (item) {
        return normalize(getValues(item).toString()).indexOf(searchNormalize) != -1;
    });
};
var sortData = function (evt, data, sortKey, type) {
    function returnOriginalIndex(a, b) {
        return a["OriginalIndex".concat(sortKey)] - b["OriginalIndex".concat(sortKey)];
    }
    function compare(a, b) {
        if (a[sortKey] < b[sortKey]) {
            return sortType !== 'desc' ? 1 : -1;
        }
        if (a[sortKey] > b[sortKey]) {
            return sortType !== 'desc' ? -1 : 1;
        }
        return 0;
    }
    data = __spreadArray([], data, true).sort(returnOriginalIndex);
    var sortType = type || 'desc';
    var el = evt.target;
    if (el.dataset["sortType".concat(sortKey)] == 'desc') {
        sortType = 'asc';
    }
    else if (el.dataset["sortType".concat(sortKey)] == 'asc') {
        sortType = null;
    }
    if (sortType == 'desc') {
        data.map(function (item, i) {
            item["OriginalIndex".concat(sortKey)] = i;
        });
    }
    el.dataset["sortType".concat(sortKey)] = sortType;
    el.dataset.sortType = sortType;
    el.dataset.sortKey = "sortType".concat(sortKey);
    var parent = el.closest('.d-table__tr');
    var ths = parent.querySelectorAll('th.sort');
    ths.forEach(function (th) {
        if (th != el) {
            th.dataset.sortType = null;
            th.dataset[th.dataset["sortKey"]] = null;
        }
    });
    return sortType !== null ? __spreadArray([], data, true).sort(compare) : __spreadArray([], data, true).sort(returnOriginalIndex);
};
// * Utils functions
function flattenDeep(obj) {
    return Object.values(obj || []).reduce(function (a, v) { return (typeof v === 'object') ?
        a.concat(flattenDeep(v)) : a.concat(v, []); });
}
function getValues(obj) {
    return flattenDeep(obj).filter(function (item) {
        return (typeof item === 'string') || (typeof item === 'number');
    });
}
function normalize(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

var setTheme = function (theme) {
    // * Stop transitions before changing the theme
    document.body.classList.add('d-remove-transition');
    var media = window.matchMedia('(prefers-color-scheme: dark)');
    var isThemeDark = media.matches;
    if (localStorage.dTheme) {
        isThemeDark = localStorage.dTheme == 'dark';
    }
    if (isThemeDark) {
        document.body.setAttribute('d-theme', 'dark');
    }
    else {
        document.body.removeAttribute('d-theme');
    }
    if (theme == 'dark') {
        document.body.setAttribute('d-theme', 'dark');
    }
    else if (theme == 'light') {
        document.body.removeAttribute('d-theme');
    }
    localStorage.dTheme = isThemeDark ? 'dark' : 'light';
    setTimeout(function () {
        document.body.classList.remove('d-remove-transition');
    }, 100);
    return isThemeDark ? 'dark' : 'light';
};
var toggleTheme = function (theme) {
    // * Stop transitions before changing the theme
    document.body.classList.add('d-remove-transition');
    var media = window.matchMedia('(prefers-color-scheme: dark)');
    var isThemeDark = media.matches;
    if (localStorage.dTheme) {
        isThemeDark = localStorage.dTheme == 'dark';
    }
    if (!isThemeDark) {
        document.body.setAttribute('d-theme', 'dark');
    }
    else {
        document.body.removeAttribute('d-theme');
    }
    if (theme == 'dark') {
        document.body.removeAttribute('d-theme');
    }
    else if (theme == 'light') {
        document.body.setAttribute('d-theme', 'dark');
    }
    localStorage.dTheme = !isThemeDark ? 'dark' : 'light';
    setTimeout(function () {
        document.body.classList.remove('d-remove-transition');
    }, 100);
    return !isThemeDark ? 'dark' : 'light';
};

var defineDeepVueFunctions = (function (Vue) {
    Vue.provide('$d', {
        setColor: function (color, val) {
            setColor(color, val, document.body);
        },
        toggleTheme: toggleTheme,
        setTheme: setTheme,
        getPage: getPage,
        getPageLength: getPageLength,
        getLength: getLength,
        checkAll: checkAll,
        getSearch: getSearch,
        sortData: sortData
    });
});

var script$1 = defineComponent({
    props: {
        cols: { type: [String, Number], default: '12' },
        offset: { type: [String, Number], default: '0' },
        order: { type: [String, Number], default: '0' },
        lg: { type: [String, Number], default: '0' },
        md: { type: [String, Number], default: '0' },
        sm: { type: [String, Number], default: '0' },
        display: { type: String, default: 'block' },
        justify: { type: String, default: 'flex-start' },
        align: { type: String, default: 'flex-start' }
    },
    setup: function (props, ctx) {
        var slots = ctx.slots;
        var attrs = ctx.attrs;
        var hasDefaultSlot = !!slots['default'];
        var element = h('div', __assign(__assign({}, attrs), { class: mergeClass([
                'd-col',
                "d-col--cols-".concat(props.cols),
                "d-col--offset-".concat(props.offset),
                "d-col--lg-".concat(props.lg),
                "d-col--md-".concat(props.md),
                "d-col--sm-".concat(props.sm),
            ], attrs.class), style: mergeDicts({
                justifyContent: props.justify,
                alignItems: props.align,
                display: props.display,
                order: props.order
            }, attrs.style) }), hasDefaultSlot ? slots.default() : null);
        return function () { return [
            element
        ]; };
    }
});

script$1.__file = "src/layout/grid/dCol.vue";

var script = defineComponent({
    props: {
        number: { type: [String, Number], default: '12' },
        justify: { type: String, default: 'flex-start' },
        align: { type: String, default: 'flex-start' },
        direction: { type: String, default: 'row' },
    },
    setup: function (props, ctx) {
        var slots = ctx.slots;
        var attrs = ctx.attrs;
        var hasDefaultSlot = !!slots['default'];
        var element = h('div', __assign(__assign({}, attrs), { class: mergeClass(['d-row'], attrs.class), style: mergeDicts({
                justifyContent: props.justify,
                alignItems: props.align,
                flexDirection: props.direction
            }, attrs.style) }), hasDefaultSlot ? slots.default() : null);
        return function () { return [
            element
        ]; };
    }
});

script.__file = "src/layout/grid/dRow.vue";

script$1.install = function (vue) {
    vue.component('d-col', script$1);
};
script.install = function (vue) {
    vue.component('d-row', script);
};
if (typeof window !== 'undefined' && window.Vue) {
    script$1.install(window.Vue);
    script.install(window.Vue);
}

var dLayouts = /*#__PURE__*/Object.freeze({
    __proto__: null,
    dRow: script,
    dCol: script$1
});

var defineColors = function (colors) {
    if (!document.body) {
        return;
    }
    Object.keys(colors).forEach(function (el) {
        setColor(el, colors[el], document.body);
    });
};
var defineDeepVueOptions = function (options) {
    if (!!options.colors) {
        defineColors(options.colors);
    }
    if (!!options.theme) {
        setTheme(options.theme);
    }
};

var install = function (Vue, options) {
    // * Set Components
    Object.values(dComponents).forEach(function (dComponent) {
        Vue.use(dComponent);
    });
    // * Set Layouts
    Object.values(dLayouts).forEach(function (dLayout) {
        Vue.use(dLayout);
    });
    if (options) {
        defineDeepVueOptions(options);
    }
    defineDeepVueFunctions(Vue);
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export { install as default };
