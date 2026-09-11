<script setup lang="ts">
import { BriefcaseBusiness, CircleUserRound, Code2, FolderKanban, House, Mail, Sparkles } from 'lucide-vue-next'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const scrolled = ref(false)
const navItems = [
  { key: 'home', id: 'hero', icon: House },
  { key: 'about', id: 'about', icon: CircleUserRound },
  { key: 'experience', id: 'experience', icon: BriefcaseBusiness },
  { key: 'expertise', id: 'expertise', icon: Sparkles },
  { key: 'projects', id: 'projects', icon: FolderKanban },
  { key: 'tech', id: 'tech', icon: Code2 },
  { key: 'contact', id: 'contact', icon: Mail }
]

const onScroll = () => { scrolled.value = window.scrollY > 12 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header :class="['fixed inset-x-0 top-0 z-50 transition-all duration-300', scrolled ? 'border-b border-line/80 bg-white/95 shadow-sm backdrop-blur' : 'bg-transparent']">
    <nav class="container-page flex h-[72px] items-center justify-between px-5 sm:px-8" aria-label="Primary navigation">
      <a href="#hero" class="font-[Space_Grotesk] text-xl font-bold tracking-tight text-ink" aria-label="Satria home">Satria<span class="text-brand">.</span></a>
      <div class="hidden items-center gap-6 lg:flex">
        <a v-for="item in navItems" :key="item.id" :href="`#${item.id}`" class="text-sm font-semibold text-muted transition hover:text-brand">{{ t(`nav.${item.key}`) }}</a>
      </div>
      <div class="hidden items-center gap-3 sm:flex">
        <div class="rounded-full border border-line bg-white p-1 text-xs font-bold" aria-label="Language selector">
          <NuxtLink :to="localePath('index', 'id')" :class="['rounded-full px-2 py-1 transition', locale === 'id' ? 'bg-brand text-white' : 'text-muted hover:text-brand']">ID</NuxtLink>
          <NuxtLink :to="localePath('index', 'en')" :class="['rounded-full px-2 py-1 transition', locale === 'en' ? 'bg-brand text-white' : 'text-muted hover:text-brand']">EN</NuxtLink>
        </div>
        <a href="#contact" class="btn-primary px-4 py-2.5">{{ t('nav.cta') }}</a>
      </div>
      <div class="rounded-full border border-line bg-white p-1 text-xs font-bold sm:hidden" aria-label="Language selector">
        <NuxtLink :to="localePath('index', 'id')" :class="['rounded-full px-2 py-1 transition', locale === 'id' ? 'bg-brand text-white' : 'text-muted hover:text-brand']">ID</NuxtLink>
        <NuxtLink :to="localePath('index', 'en')" :class="['rounded-full px-2 py-1 transition', locale === 'en' ? 'bg-brand text-white' : 'text-muted hover:text-brand']">EN</NuxtLink>
      </div>
    </nav>
  </header>
  <nav class="fixed inset-x-0 bottom-0 z-50 grid grid-cols-7 border-t border-line bg-white/95 px-1 pb-[max(0.3rem,env(safe-area-inset-bottom))] pt-1 shadow-[0_-8px_30px_rgba(24,34,48,0.08)] backdrop-blur lg:hidden" aria-label="Mobile navigation">
    <a v-for="item in navItems" :key="item.id" :href="`#${item.id}`" class="flex min-w-0 flex-col items-center gap-0.5 rounded-lg px-0.5 py-1.5 text-[9px] font-bold leading-3 text-muted transition hover:bg-brand-light hover:text-brand" :aria-label="t(`nav.${item.key}`)">
      <component :is="item.icon" :size="17" stroke-width="2.1" />
      <span class="w-full truncate text-center">{{ t(`nav.${item.key}`) }}</span>
    </a>
  </nav>
</template>
