<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()
const title = computed(() => locale.value === 'id' ? 'Satria Giri Syawalludin | Full Stack, Backend & Odoo Developer' : 'Satria Giri Syawalludin | Full Stack & Backend Developer')
const description = computed(() => t('hero.description'))
const canonical = computed(() => `https://satriags.dev${route.path}`)

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogImage: 'https://satriags.dev/fotosatria.png',
  twitterCard: 'summary_large_image'
})
useHead({
  link: [{ rel: 'canonical', href: canonical }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Satria Giri Syawalludin', jobTitle: 'Full Stack, Backend & Odoo Developer', url: 'https://satriags.dev', address: { '@type': 'PostalAddress', addressLocality: 'Gresik', addressRegion: 'East Java', addressCountry: 'ID' } }) }]
})
</script>

<template><main><Navbar /><HeroSection /><AboutSection /><ExperienceSection /><ExpertiseSection /><TechStackSection /><ProjectsSection /><EducationSection /><ContactSection /><Footer /></main></template>
