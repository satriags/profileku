<script setup lang="ts">
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template><footer class="border-t border-white/10 bg-night px-5 pb-8 sm:px-8"><div class="container-page flex flex-col gap-5 pt-8 text-sm sm:flex-row sm:items-end sm:justify-between"><div><p class="font-[Space_Grotesk] text-lg font-bold text-white">Satria<span class="text-[#9db5d6]">.</span></p><p class="mt-1 text-slate-400">{{ t('footer.role') }} · {{ t('footer.tagline') }}</p></div><p class="text-slate-500">© {{ year }} Satria Giri Syawalludin. {{ t('footer.copyright') }}</p></div></footer></template>
