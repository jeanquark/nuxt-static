<template>
    <div>
        <div class="flex mb-4">
            <div class="w-full bg-gray-500 h-12"></div>
        </div>
        <div class="flex content-start flex-wrap bg-gray-200">
            <div class="w-1/3 p-2" v-for="post in posts" :key="post.slug">
                <!-- <div class="text-gray-700 text-center bg-gray-400 p-2">1</div> -->
				<div class="text-center rounded overflow-hidden shadow-lg">
					<img class="w-full" :src="`/images/${post.image}`" :alt="`${post.image}`">
					<div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{{ post.title }}</div>
                        <p class="text-gray-700 text-base">
                            {{ post.content }}
                        </p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" v-for="(tag, index) in post.tags" :key="index">#{{ tag }}</span>
                    </div>

				</div>
            </div>

        </div>
		<div class="flex flex-row mb-4">
			<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click.stop="login()">Login</button>
            <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full" @click.stop="logout()">Logout</button>
			</div>
		<div class="flex flex-row mb-4">
            <h2>Auth</h2><br />
            <!-- isAuthenticated: {{ isAuthenticated }}<br /> -->
            <p v-if="!isAuthenticated">
                You're not authenticated yet. Maybe you want to <nuxt-link to="/auth/sign-in" class="link">sign in</nuxt-link> and see what happens?
            </p>
            <p v-else>
                Now that you're authenticated, maybe you should try going to our <nuxt-link to="/secret" class="link">super secret page</nuxt-link>!<br />
                loggedUser: {{ loggedUser }}
            </p>
		</div>

        <!-- <div class="flex mb-4 content-center">
            <div class="flex mx-2" v-for="post in posts" :key="post.slug">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" :src="`/images/${post.image}`" :alt="`${post.image}`">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{{ post.title }}</div>
                        <p class="text-gray-700 text-base">
                            {{ post.content }}
                        </p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" v-for="(tag, index) in post.tags" :key="index">#{{ tag }}</span>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
	// import { mapGetters } from 'vuex'
	import blogPosts from '~/static/posts.json'
	export default {
		layout: 'layoutFront',
		mounted() {
			// const competitions = await readFile('./helpers/activeCompetitions4.json', 'utf8')
		},
		data() {
			return {
				profile: this.$auth.profile
			}
		},
		// computed: mapGetters(['isAuthenticated', 'loggedUser']),
		computed: {
			isAuthenticated() {
				return this.$store.getters['auth/isAuthenticated']
			},
			loggedUser() {
				return this.$store.getters['auth/loggedUser']
			},
			posts() {
				return blogPosts
			}
		},
		methods: {
			login() {
				this.$auth.loginWith('auth0')
			},
			logout() {
				this.$auth.logout()
			}
		}
	}
</script>

<style scoped>
</style>
