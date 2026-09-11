<script setup lang="ts">
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-vue-next'
const { t } = useI18n()
const contacts = [
  { key: 'email', icon: Mail, href: 'mailto:satriagirisyawalludin@gmail.com' },
  { key: 'whatsapp', icon: MessageCircle, href: 'https://wa.me/6283832204284' },
  { key: 'linkedin', icon: Linkedin, href: 'https://www.linkedin.com/in/satriags' },
  { key: 'github', icon: Github, href: 'https://github.com/satriags' },
  { key: 'location', icon: MapPin, href: '#contact' }
]
</script>

<template>
  <section id="contact" class="section bg-night"><div class="container-page"><div class="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_80%_10%,rgba(85,119,170,.4),transparent_32%),#182230] px-6 py-12 text-white sm:p-12 lg:px-16"><div class="grid items-end gap-10 lg:grid-cols-[1.1fr_.9fr]"><div><p class="eyebrow text-[#b8cae5]">{{ t('contact.eyebrow') }}</p><h2 class="font-[Space_Grotesk] text-3xl font-bold tracking-tight sm:text-5xl">{{ t('contact.title') }}</h2><p class="mt-5 max-w-xl text-lg leading-8 text-slate-300">{{ t('contact.description') }}</p><a href="https://wa.me/6283832204284" target="_blank" rel="noreferrer" class="btn-primary mt-8 bg-white text-brand hover:bg-brand-light">{{ t('contact.cta') }} <ArrowUpRight :size="17" /></a></div><div class="grid gap-3"><a v-for="item in contacts" :key="item.key" :href="item.href" :target="item.key === 'location' || item.key === 'email' ? undefined : '_blank'" :rel="item.key === 'location' || item.key === 'email' ? undefined : 'noreferrer'" class="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[.05] p-4 transition hover:border-[#9db5d6] hover:bg-white/[.09]"><component :is="item.icon" :size="20" class="text-[#b8cae5]" /><div><p class="text-xs font-bold uppercase tracking-wider text-slate-400">{{ t(`contact.${item.key}`) }}</p><p class="mt-1 text-sm font-semibold text-white">{{ item.key === 'location' ? t('contact.locationValue') : item.key === 'email' ? t('contact.emailValue') : item.key === 'whatsapp' ? t('contact.whatsappValue') : 'Satria Giri Syawalludin' }}</p></div><ArrowUpRight :size="16" class="ml-auto text-[#b8cae5] opacity-0 transition group-hover:opacity-100" /></a></div></div></div></div></section>
</template>
