<script setup lang="ts">
import { expertise } from '~/data/skills'
const { t } = useI18n()
</script>

<template>
  <section id="expertise" class="section bg-night text-white"><div class="container-page"><div class="max-w-2xl"><p class="eyebrow text-[#9db5d6]">{{ t('expertise.eyebrow') }}</p><h2 class="section-title text-white">{{ t('expertise.title') }}</h2><p class="section-copy text-slate-300">{{ t('expertise.description') }}</p></div><div class="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><article v-for="item in expertise" :key="item.key" class="group rounded-2xl border border-white/10 bg-white/[.04] p-5 transition hover:-translate-y-1 hover:border-brand hover:bg-white/[.07]"><component :is="item.icon" :size="25" class="text-[#9db5d6] transition group-hover:text-white" /><h3 class="mt-8 font-[Space_Grotesk] text-lg font-bold">{{ t(`expertise.${item.key}`) }}</h3></article></div></div></section>
</template>
