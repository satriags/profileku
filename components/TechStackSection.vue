<script setup lang="ts">
import { techStacks } from '~/data/skills'
const { t } = useI18n()
</script>

<template>
  <section id="tech" class="section"><div class="container-page"><div class="max-w-2xl"><p class="eyebrow">{{ t('tech.eyebrow') }}</p><h2 class="section-title">{{ t('tech.title') }}</h2><p class="section-copy">{{ t('tech.description') }}</p></div><div class="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"><article v-for="stack in techStacks" :key="stack.key" class="rounded-2xl border border-line p-6 shadow-card"><h3 class="font-[Space_Grotesk] text-lg font-bold text-ink">{{ t(`tech.${stack.key}`) }}</h3><div class="mt-5 flex flex-wrap gap-2"><span v-for="item in stack.items" :key="item" class="rounded-lg bg-soft px-3 py-2 text-sm font-semibold text-muted">{{ item }}</span></div></article></div></div></section>
</template>
