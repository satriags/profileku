<script setup lang="ts">
import { ArrowDownRight, ArrowUpRight, Database, Github, Linkedin, Mail, Server, Workflow } from 'lucide-vue-next'
const { t } = useI18n()
</script>

<template>
  <section id="hero" class="relative isolate overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-40 lg:pb-24">
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_20%,#e8eef6_0,transparent_27%),linear-gradient(180deg,#fff_0%,#f8fafc_100%)]" />
    <div
      class="absolute inset-x-0 top-0 -z-10 h-full opacity-[.32] [background-image:radial-gradient(#5577AA_1px,transparent_1px)] [background-size:22px_22px]" />
    <div class="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
      <div class="max-w-3xl">
        <p class="eyebrow flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-brand" />{{ t('hero.eyebrow') }}
        </p>
        <h1
          class="font-[Space_Grotesk] text-4xl font-bold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {{ t('hero.headline') }}</h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-muted">{{ t('hero.description') }}</p>
        <div
          class="mt-7 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand-light/70 px-4 py-2 text-sm font-semibold text-brand-dark">
          <span class="h-2 w-2 rounded-full bg-brand" />{{ t('hero.badge') }}</div>
        <div class="mt-9 flex flex-wrap gap-3"><a href="#experience" class="btn-primary">{{ t('hero.experience') }}
            <ArrowDownRight :size="17" />
          </a><a href="#contact" class="btn-secondary">{{ t('hero.contact') }}
            <ArrowUpRight :size="17" />
          </a></div>
        <div class="mt-10 flex items-center gap-3"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"
            aria-label="LinkedIn"
            class="rounded-full border border-line p-2.5 text-muted transition hover:border-brand hover:text-brand">
            <Linkedin :size="18" />
          </a><a href="https://github.com/in/satriags" target="_blank" rel="noreferrer" aria-label="GitHub"
            class="rounded-full border border-line p-2.5 text-muted transition hover:border-brand hover:text-brand">
            <Github :size="18" />
          </a><a href="#contact" aria-label="Email"
            class="rounded-full border border-line p-2.5 text-muted transition hover:border-brand hover:text-brand">
            <Mail :size="18" />
          </a></div>
      </div>
      <div class="relative mx-auto w-full max-w-[520px]" aria-label="Software architecture visualization">
        <div
          class="aspect-square rounded-[2rem] border border-brand/10 bg-white/80 p-6 shadow-float backdrop-blur-sm sm:p-9">
          <div class="relative h-full rounded-2xl border border-brand/15 bg-soft/60">
            <svg class="absolute inset-0 h-full w-full" viewBox="0 0 400 400" fill="none" aria-hidden="true">
              <path
                d="M88 105C161 105 135 200 201 200S241 296 319 296M84 304C164 304 131 202 201 200S247 106 319 106M199 202V72M201 198V333"
                stroke="#5577AA" stroke-width="2" stroke-dasharray="5 7" opacity=".5" />
              <circle cx="201" cy="200" r="48" fill="#5577AA" fill-opacity=".12" stroke="#5577AA" stroke-width="2" />
              <circle cx="88" cy="105" r="8" fill="#5577AA" />
              <circle cx="319" cy="106" r="8" fill="#5577AA" />
              <circle cx="84" cy="304" r="8" fill="#5577AA" />
              <circle cx="319" cy="296" r="8" fill="#5577AA" />
            </svg>
            <div class="absolute left-[7%] top-[13%] rounded-xl bg-white px-3 py-2 shadow-card">
              <Workflow :size="18" class="text-brand" /><span
                class="mt-1 block text-[10px] font-bold text-ink">API</span>
            </div>
            <div class="absolute right-[6%] top-[13%] rounded-xl bg-white px-3 py-2 shadow-card">
              <Server :size="18" class="text-brand" /><span
                class="mt-1 block text-[10px] font-bold text-ink">Backend</span>
            </div>
            <div class="absolute bottom-[12%] left-[6%] rounded-xl bg-white px-3 py-2 shadow-card">
              <Database :size="18" class="text-brand" /><span
                class="mt-1 block text-[10px] font-bold text-ink">Database</span>
            </div>
            <div class="absolute bottom-[13%] right-[5%] rounded-xl bg-white px-3 py-2 shadow-card"><span
                class="mb-1 block h-[18px] w-[18px] rounded-md border-2 border-brand" /><span
                class="block text-[10px] font-bold text-ink">Frontend</span></div>
            <div
              class="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand text-center text-xs font-bold text-white shadow-lg">
              System<br />Integration</div>
          </div>
        </div>
        <p class="mt-4 text-center text-sm font-medium text-muted">{{ t('hero.architectureNote') }}</p>
      </div>
    </div>
  </section>
</template>
