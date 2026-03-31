<template>
	<div>
		<p>Текущая дата: {{ formattedDate }}</p>
		<p>Дата через 5 дней: {{ futureDate }}</p>
		<p>Время публикации: {{ publicationTime }}</p>
		<p>Сегодня: {{ $dayjs() }}</p>
	</div>
	<div>
		<h2>NuxtImg</h2>
		<NuxtImg src='/images/main.jpg'/>
		<NuxtImg src="/images/01.jpg" />
	</div>
	<div>
		<h2>SRC</h2>
		<img src="/public/images/main.jpg">
		<img src="/public/images/01.jpg">
	</div>
</template>

<script setup>
// Получаем доступ к Day.js через $dayjs
const { $dayjs } = useNuxtApp();

// Форматируем текущую дату
const formattedDate = $dayjs().format('DD MMMM YYYY, HH:mm')

// Манипулируем датой
const futureDate = $dayjs().add(5, 'day').format('YYYY-MM-DD');

// Пример форматирования даты из переменной (например, из API)
const apiDateString = '2023-10-27T10:00:00Z';
const publicationTime = $dayjs(apiDateString).format('HH:mm');

// Пример работы с локализацией (если настроена в nuxt.config.ts)
// const localizedDate = $dayjs().locale('en').format('LL');
</script>