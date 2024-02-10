<script lang="ts">
	import type { Book } from '$lib/books';

	export let filename: string;
	export let book: Book;
</script>

<article>
	<img src="/img/{filename}.jpg" alt="Обложка книги {book.title}" />
	<div class="info">
		<h2>{book.title}</h2>
		<p>Автор: {book.author}</p>
		<p>Год: {book.year}</p>
		{#if book.source}
			<p>Источник: {@html book.source}</p>
		{/if}
		<a href="/books/{filename}.pdf">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
				<path
					d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"
				/>
				<path
					d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"
				/>
			</svg>
			<span>Скачать ({book.size})</span>
		</a>
	</div>
</article>

<style lang="scss">
	article {
		display: flex;
		flex-direction: row;
		gap: 1.5rem;
		margin-bottom: 2.5rem;
	}

	img {
		max-width: 120px;
	}

	h2 {
		margin: 0;
		font-size: 1.2rem;
	}

	p {
		margin: 0.5rem 0;
	}

	a {
		border-radius: 4px;
		border: 1px #a52a2a solid;
		padding: 0.4rem 0.7rem;
		cursor: pointer;
		background: #faebd7;
		transition: all 0.2s linear;
		text-decoration: none;
		color: black;
		display: inline-block;

		&:hover {
			border-color: #deb887;
		}

		svg {
			height: 1rem;
			vertical-align: bottom;
		}
	}
</style>
