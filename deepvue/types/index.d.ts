import Vue, { VueConstructor } from 'vue';

declare module 'vue/types/vue' {
    export interface Vue {
        $d: any
        $router: any
    }
}

declare global {
    interface Window {
        Vue: VueConstructor,
        consolee: any
    }
}

declare module '*.svg' {
    const content: string;
    export default content;
}
