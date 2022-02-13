<script>
	/**
	 * @slot {{
	 * actions: {
	 *  recover: (email: string, url: string) => Promise<void>;
	 *  complete: (user: string, secret: string, password: string, passwordAgain: string) => Promise<void>;
	 * }
	 * }}
	 */
	import { createEventDispatcher } from 'svelte';
	import { active } from '../stores';
	import { SDK as Appwrite } from '../appwrite';

  const href = window.location.href;
	const url = new URL(href);
	const search = url.searchParams;
	const userId = search.get('userId');
	const secret = search.get('secret');

	const dispatch = createEventDispatcher();
	const actions = {
		recover: async (/** @type {string} */ email, /** @type {string} */ url) => {
			try {
				const response = await Appwrite.sdk.account.createRecovery(email, url);
				dispatch('successRecover', response);
			} catch (error) {
				dispatch('failureRecover', error);
				throw error;
			}
		},
		complete: async (
			/** @type {string} */ password,
			/** @type {string} */ passwordAgain
		) => {
			try {
				const response = await Appwrite.sdk.account.updateRecovery(
					userId,
					secret,
					password,
					passwordAgain
				);
				dispatch('successComplete', response);
			} catch (error) {
				dispatch('failureComplete', error);
				throw error;
			}
		}
	};
</script>

{#if $active}
	<slot {actions} />
{/if}
