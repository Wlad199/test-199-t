// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ["~/assets/scss/style.scss"],
	modules: ["dayjs-nuxt", '@nuxt/image'],
	dayjs: {
		// Локализация (если нужно)
		locales: ['ru'], // Список поддерживаемых локалей
		defaultLocale: 'ru',   // Локаль по умолчанию
		// Можно также настроить плагины, если они вам нужны (например, для работы с таймзонами)
		// plugins: ['relativeTime', 'utc', 'advancedFormat'],
	},
})