<script>
	/**
	 * @slot {{
	 * actions: {
	 *  create: (userId?: string, email: string, password: string, name?: string) => Promise<object>;
	 * }
	 * }}
	 */
	import { createEventDispatcher } from 'svelte';
	import { active } from '../stores';
	import { SDK as Appwrite } from '../appwrite';

	const dispatch = createEventDispatcher();
	const actions = {
		create: async (/** @type {string} */ userId, /** @type {string} */ email, /** @type {string} */ password, name = '') => {
			try {
				const response = await Appwrite.sdk.account.create(userId, email, password, name);
				dispatch('success', response);
				return response;
			} catch (error) {
				dispatch('failure', error);
			}
		}
	};
</script>

<!--
@component
Creates a new user account.
-->

{#if $active}
	<slot {actions} />
{/if}
