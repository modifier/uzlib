<script>
	import { books } from '$lib/books';
	import Book from '../components/Book.svelte';
</script>

<main>
	<h1>Книги про Узбекистан</h1>

	<p>
		Собираю советские книги про Узбекистан в цифровом формате. Если у вас есть книги, которых нет в этой коллекции,
		прошу отправлять мне в телеграм <a href="https://t.me/modifier">@modifier</a>.
	</p>
	<section>
		{#each Object.entries(books) as [filename, book]}
			<Book {filename} {book} />
		{/each}
	</section>
</main>

<style lang="scss">
	main {
		max-width: 700px;
		margin: 1rem auto;
	}

	h1 {
		font-family: 'Merriweather', serif;
		margin: 0 0 0.5rem;
		font-weight: 700;
		font-size: 2rem;
	}

	p {
		line-height: 1.4em;
	}

	section {
		margin-top: 2rem;
	}
</style>
