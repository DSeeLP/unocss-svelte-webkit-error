// @unocss-include
import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import extractorSvelte from '@unocss/extractor-svelte';

export default defineConfig({
    extractors: [
        extractorSvelte()
    ],
    presets: [
        presetUno(),
    ]    
})