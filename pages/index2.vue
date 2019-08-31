<template>
    <div>
        <div class="flex mb-4">
            <div class="w-full bg-gray-500 h-12"></div>
        </div>
        <div class="flex mb-4">
            <div class="w-1/3 bg-gray-400 h-12" v-for="post in posts" :key="post.slug">
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
        </div>
		<div class="flex mb-4">
        <ul>
            <li>
                <nuxt-link to="/blog/blog-post-1">Blog Post 1</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/blog/blog-post-2">Blog Post 2</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/blog/blog-post-3">Blog Post 3</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/blog/blog-post-4">Blog Post 4</nuxt-link>
            </li>
        </ul>
		</div>
		<div class="flex mb-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
        </button>
        <section>
            <h2>Auth</h2>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click.stop="login()">Login</button>
            <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full" @click.stop="logout()">Logout</button>
            <!-- isAuthenticated: {{ isAuthenticated }}<br /> -->
            <p v-if="!isAuthenticated">
                You're not authenticated yet. Maybe you want to <nuxt-link to="/auth/sign-in" class="link">sign in</nuxt-link> and see what happens?
            </p>
            <p v-else>
                Now that you're authenticated, maybe you should try going to our <nuxt-link to="/secret" class="link">super secret page</nuxt-link>!<br />
                loggedUser: {{ loggedUser }}
            </p>
        </section>
		</div>
		<div class="flex mb-4">
        <section>
            <h2>Translation</h2>
            <nuxt-link :to="localePath('index')">{{ $t('home') }}</nuxt-link>&nbsp;|&nbsp;
            <nuxt-link :to="localePath('about')">{{ $t('about') }}</nuxt-link>&nbsp;|&nbsp;
            <nuxt-link :to="localePath('team')">{{ $t('team') }}</nuxt-link>&nbsp;|&nbsp;
            <nuxt-link :to="localePath('contact')">{{ $t('contact') }}</nuxt-link>&nbsp;|&nbsp;
            <nuxt-link :to="localePath('login')">{{ $t('login') }}</nuxt-link><br />
            <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
            <nuxt-link :to="switchLocalePath('fr')">Français</nuxt-link>
            <nuxt-link :to="switchLocalePath('de')">Deutsch</nuxt-link>
        </section>
		</div>
        <!-- <section>
            <h2>Read local file</h2>
            <div v-for="post in posts" :key="post.slug">
                <h3>{{ post.title }}</h3>
                <p>{{ post.content }}</p>
            </div>
        </section> -->
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
	.btn {
		@apply font-bold py-2 px-4 rounded;
	}
	.btn-blue {
		@apply bg-blue-500 text-white;
	}
	.btn-blue:hover {
		@apply bg-blue-700;
	}
</style>
