<script lang="ts">
	import '../app.scss';

	import {
		PUBLIC_ADDITIONAL_CODE
	} from '$env/static/public';

	/* eslint-disable svelte/no-at-html-tags */
</script>

<svelte:head>
	<title>Книги про Узбекистан</title>
</svelte:head>
<slot />
{@html PUBLIC_ADDITIONAL_CODE}
