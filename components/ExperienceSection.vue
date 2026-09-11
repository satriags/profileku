<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { experiences } from '~/data/experience'
const { t } = useI18n()
</script>

<template>
  <section id="experience" class="section"><div class="container-page"><div class="max-w-2xl"><p class="eyebrow">{{ t('experience.eyebrow') }}</p><h2 class="section-title">{{ t('experience.title') }}</h2><p class="section-copy">{{ t('experience.description') }}</p></div><ol class="relative mt-14 border-l border-brand/25 pl-7 sm:ml-4 sm:pl-12"><li v-for="item in experiences" :key="`${item.company}-${item.period}`" class="relative pb-11 last:pb-0"><span class="absolute -left-[35px] top-1 grid h-4 w-4 place-items-center rounded-full border-4 border-white bg-brand sm:-left-[55px]" /><article class="group rounded-2xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-brand/35 sm:p-7"><div class="flex flex-col justify-between gap-2 sm:flex-row"><div><p class="text-sm font-bold text-brand">{{ item.period }}</p><h3 class="mt-1 font-[Space_Grotesk] text-xl font-bold text-ink">{{ t(`experience.${item.roleKey}`) }}</h3><p class="mt-1 text-sm font-semibold text-muted">{{ item.company }}</p></div><ArrowUpRight :size="21" class="shrink-0 text-brand opacity-0 transition group-hover:opacity-100" /></div><p class="mt-4 max-w-3xl text-sm leading-7 text-muted">{{ t(`experience.${item.descriptionKey}`) }}</p><div class="mt-5 flex flex-wrap gap-2"><span v-for="tag in item.tags" :key="tag" class="rounded-full bg-brand-light px-3 py-1 text-xs font-bold text-brand-dark">{{ tag }}</span></div></article></li></ol></div></section>
</template>
