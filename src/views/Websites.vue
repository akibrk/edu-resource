<template>
  <div class="websites view">
    <h1>Website Recommendations</h1>
    <div class="category" v-for="(category, index) in categories" :key="index">
      <h2>{{ category.title }}</h2>
      <WebCard v-for="(website, index) in category.websites" :key="index" :item="website"></WebCard>
    </div>
  </div>
</template>

<script>
import WebCard from "@/components/WebCard";

export default {
  name: "WebsitesView",
  components: {
    WebCard,
  },
  data() {
    return {
      categories: [
        {
          title: "Programming",
          websites: [
            {
              name: "FreeCodeCamp",
              url: "https://freecodecamp.org",
              description:
                "All sorts of programming and computer science contents for free",
              tags: ["programming", "free", "web", "cs"],
            },
            {
              name: "Code Academy",
              url: "https://www.codeacademy.com",
              description: "Programming fundamentals for free",
              tags: ["programming", "free", "paid", "web", "cs"],
            },
            {
              name: "Sololearn",
              url: "https://sololearn.com",
              description:
                "Web developement and programming basics, beginner friendly comunity. Use the app!",
              tags: ["programming", "beginner", "free", "web", "cs"],
            },
            {
              name: "Edx",
              url: "https://edx.org",
              description:
                "All sorts of tutorials on different topics. Computer science, data science and programming basics. Join for free courses and you can get certificate for some amount of money.",
              tags: ["programming", "ai", "paid", "free", "web", "cs"],
            },
          ],
        },
        {
          title: "Programming Skill Development",
          websites: [
            {
              name: "Codeforces",
              url: "https://codeforces.com",
              description:
                "Active community, loads of problems and regular contests",
              tags: ["programming", "free", "contest", "online"],
            },
            {
              name: "URI Online Judge",
              url: "https://www.urionlinejudge.com.br/judge/en/login",
              description: "Categorized problems and easy interface",
              tags: ["programming", "problems", "contests", "web", "cs"],
            },
            {
              name: "Daily Coding Problems",
              url: "https://www.dailycodingproblem.com/",
              description: "Sends you a problem every day. Problems are rated.",
              tags: ["programming", "problems", "interview", "free", "paid"],
            },
          ],
        },
        {
          title: "Web Development",
          websites: [
            {
              name: "W3Schools",
              url: "https://www.w3schools.com",
              description: "Web developement tutorials and reference website",
              tags: ["web", "tutorials", "interactive", "free"],
            },
            {
              name: "Devhints",
              url: "https://devhints.io",
              description: "Web developement cheatsheets",
              tags: ["web", "tutorials", "cheatsheet", "free"],
            },
            {
              name: "Scotch",
              url: "https://scotch.io",
              description: "Web developement tutorials",
              tags: ["web", "tutorials", "free", "paid"],
            },
            {
              name: "Scrimba",
              url: "https://scrimba.com",
              description: "Interactive web tutorials for free",
              tags: ["web", "tutorials", "interactive", "free", "paid"],
            },
            {
              name: "Flavio Copes",
              url: "flaviocopes.com",
              description:
                "Easy and good explanation, has good tutorials and ebooks",
              tags: ["web", "tutorials", "ebooks", "free"],
            },
          ],
        },
        {
          title: "Others",
          websites: [
            {
              name: "Hacker Noon",
              url: "https://hackernoon.com/",
              description: "Web developement tutorials and articles",
              tags: ["programming", "articles", "news", "free"],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.category {
  margin: 1rem;
  h2 {
    color: #005670;
  }
}
</style>