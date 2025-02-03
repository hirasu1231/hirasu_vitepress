---
page: true
title: page_23
aside: false
---
<script setup>
import Page from "./.vitepress/theme/components/Page.vue";
import { useData } from "vitepress";
const { theme } = useData();
const posts = theme.value.posts.slice(220,230)
</script>
<Page :posts="posts" :pageCurrent="23" :pagesNum="23" />