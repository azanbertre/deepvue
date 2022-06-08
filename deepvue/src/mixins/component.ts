// @ts-ignore
import { computed, onMounted } from 'vue';

const componentProps = () => {
    return {
        // @ts-ignore
        color: { type: String, default: null },
        danger: { type: Boolean, default: false },
        success: { type: Boolean, default: false },
        warning: { type: Boolean, default: false },
        dark: { type: Boolean, default: false },
        primary: { type: Boolean, default: false },
        active: { type: Boolean, default: false }
    }
}

// tslint:disable-next-line:no-shadowed-variable
const componentSetup = (props: any, context: any) => {
    const isColor = computed(() => {
        return !!props.color || !!props.primary || !!props.success || !!props.warning || !!props.danger || !!props.dark;
    })

    const isColorDark = computed(() => {
        return props.color === 'dark' || props.dark;
    })

    return { isColor, isColorDark }
}

export {
    componentProps,
    componentSetup
}
