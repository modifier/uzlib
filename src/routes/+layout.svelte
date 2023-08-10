<script lang="ts">
	import '../app.scss';

	import {
		PUBLIC_ADDITIONAL_CODE
	} from '$env/static/public';
</script>

<svelte:head>
	<title>Книги про Узбекистан</title>
</svelte:head>
<slot />
{PUBLIC_ADDITIONAL_CODE}
