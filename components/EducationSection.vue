<script setup lang="ts">
import { Award, GraduationCap, Languages } from 'lucide-vue-next'
const { t } = useI18n()
</script>

<template>
  <section class="section"><div class="container-page"><div class="max-w-2xl"><p class="eyebrow">{{ t('education.eyebrow') }}</p><h2 class="section-title">{{ t('education.title') }}</h2></div><div class="mt-12 grid gap-5 lg:grid-cols-[1.1fr_.9fr]"><article class="rounded-2xl border border-line bg-white p-7 shadow-card"><div class="flex items-start gap-4"><div class="rounded-xl bg-brand-light p-3 text-brand"><GraduationCap :size="25" /></div><div><p class="text-sm font-bold text-brand">2017 — 2021</p><h3 class="mt-1 font-[Space_Grotesk] text-xl font-bold text-ink">Universitas Internasional Semen Indonesia</h3><p class="mt-2 text-sm text-muted">{{ t('education.degree') }}</p><p class="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-1.5 text-xs font-bold text-brand-dark"><Award :size="15" />{{ t('education.honor') }}</p></div></div></article><article class="rounded-2xl border border-line bg-soft p-7"><div class="flex gap-4"><div class="rounded-xl bg-white p-3 text-brand shadow-sm"><Languages :size="25" /></div><div><h3 class="font-[Space_Grotesk] text-xl font-bold text-ink">{{ t('education.languageTitle') }}</h3><p class="mt-4 text-sm font-bold text-ink">{{ t('education.indonesian') }}</p><p class="mt-3 text-sm font-bold text-ink">{{ t('education.english') }}</p><p class="mt-2 text-sm leading-6 text-muted">{{ t('education.englishNote') }}</p></div></div></article></div></div></section>
</template>
