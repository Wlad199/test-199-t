<template>
	<div>
		<h2>NuxtImg</h2>
		<NuxtImg src='/images/main.jpg' />
		<NuxtImg src="/images/01.jpg" />
	</div>
	<div class="content">
		<h2>Title</h2>
		<p class="en">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur molestiae nulla qui, voluptate pariatur
			animi nihil aliquam nemo cum! Nostrum, ratione id dolores debitis autem architecto quia sunt a corporis.
		</p>
		<p class="rus">
			лоыфвалмифвыли
		</p>
	</div>
</template>

<script setup>

</script>

<style>
.content {
	font-family: "Montserrat";
}

.en {
	font-family: Inter;
	font-weight: 900;
}

.rus {}
</style>