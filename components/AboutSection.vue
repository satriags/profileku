<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'
const { t } = useI18n()
const stats = computed(() => [
  { value: '5+', label: t('about.stats.0.label') },
  { value: 'Enterprise', label: t('about.stats.1.label') },
  { value: 'Full Stack', label: t('about.stats.2.label') },
  { value: 'Lead', label: t('about.stats.3.label') }
])
const industries = ['HRIS', 'HCMS', 'Odoo', 'SaaS', 'IoT', 'E-Commerce', 'POS', 'WMS']
</script>

<template>
  <section id="about" class="section bg-soft">
    <div class="container-page grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
      <div class="relative mx-auto w-full max-w-md"><div class="absolute -inset-3 -z-10 rounded-[2rem] bg-brand/15 rotate-3" /><img src="/fotosatria.png" :alt="t('about.profileAlt')" class="aspect-[4/5] w-full rounded-[1.65rem] object-cover object-center shadow-float" loading="lazy" /><div class="absolute -bottom-5 -right-4 rounded-2xl bg-white px-5 py-4 shadow-card"><p class="font-[Space_Grotesk] text-xl font-bold text-brand">2019—now</p><p class="text-xs font-semibold text-muted">Building software</p></div></div>
      <div><p class="eyebrow">{{ t('about.eyebrow') }}</p><h2 class="section-title">{{ t('about.title') }}</h2><p class="section-copy">{{ t('about.description') }}</p><div class="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4"><div v-for="stat in stats" :key="stat.value" class="rounded-xl border border-line bg-white p-4"><p class="font-[Space_Grotesk] text-lg font-bold text-brand">{{ stat.value }}</p><p class="mt-1 text-xs font-semibold leading-4 text-muted">{{ stat.label }}</p></div></div><div class="mt-10"><p class="mb-4 text-sm font-bold text-ink">{{ t('about.industriesTitle') }}</p><div class="flex flex-wrap gap-x-5 gap-y-3"><span v-for="industry in industries" :key="industry" class="inline-flex items-center gap-2 text-sm font-semibold text-muted"><CheckCircle2 :size="16" class="text-brand" />{{ industry }}</span></div></div></div>
    </div>
  </section>
</template>
