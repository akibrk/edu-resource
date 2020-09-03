<template>
  <div class="videos view">
    <div class="channels">
      <h1>YouTube Channels</h1>
      <div class="category" v-for="(category, index) in categories" :key="index">
        <h2>{{ category.title }}</h2>
        <WebCard v-for="(channel, index) in category.websites" :key="index" :item="channel"></WebCard>
      </div>
    </div>
  </div>
</template>

<script>
import WebCard from "@/components/WebCard";

export default {
  name: "VideosView",
  components: {
    WebCard,
  },
  data() {
    return {
      categories: [
        {
          title: "Math",
          websites: [
            {
              name: "Kimberly Brehm",
              url: "https://www.youtube.com/channel/UCcbu9qaBn3MNFYr96mbg72w",
              description: "Math videos related to computer science.",
              tags: ["math", "free", "videos", "cs"],
            },
            {
              name: "3Blue1Brown",
              url: "https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw",
              description: "All kinds of math, visualized",
              tags: ["math", "visual"],
            },
            {
              name: "Math is power for you",
              url: "https://www.youtube.com/channel/UCNVMxRMEwvo9AS-Jfh6fQFg",
              description: "Math videos of all sorts, basics to advanced.",
              tags: ["math", "free", "videos"],
            },
            {
              name: "The Trev Tutor",
              url: "https://www.youtube.com/channel/UCGYSfZbPp3BiAFs531PBY7g",
              description: "All kinds of math, good explanation",
              tags: ["math", "free"],
            },
          ],
        },
        {
          title: "Programming",
          websites: [
            {
              name: "TheNewBoston",
              url: "https://www.youtube.com/channel/thenewboston",
              description:
                "All sorts of programming and computer science videos. Old but gold.",
              tags: ["programming", "web", "old", "free", "videos", "cs"],
            },
            {
              name: "TheCherno",
              url: "https://www.youtube.com/user/TheChernoProject/playlists",
              description: "C++ and game engine developement related",
              tags: ["c++", "advanced", "application", "game-engine"],
            },
            {
              name: "Jenny's Lectures",
              url: "https://www.youtube.com/channel/UCM-yUTYGmrNvKOCcAl21g3w",
              description:
                "Computer sciene, data structures, algorithms and interview videos.",
              tags: [
                "cs",
                "data-structures",
                "algorithms",
                "interview",
                "free",
                "videos",
              ],
            },
            {
              name: "The Trev Tutor",
              url: "https://www.youtube.com/channel/UCGYSfZbPp3BiAFs531PBY7g",
              description: "All kinds of math, good explanation",
              tags: ["math", "free"],
            },
          ],
        },
        {
          title: "Web Development",
          websites: [
            {
              name: "Traversy Media",
              url: "https://www.youtube.com/user/TechGuyWeb",
              description:
                "Very good and easy explanation, specialy from Brad, now other creators posts projects and videos.",
              tags: ["web", "beginner", "video"],
            },
            {
              name: "Academind",
              url: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w",
              description:
                "Whether you want to have look at Angular Tutorials or Guides, Vue.js, other Frontend Development Content or Data Science Topics or anything else - you're probably right! - From the channel itself",
              tags: ["web", "beginner", "video"],
            },
            {
              name: "The Net Ninja",
              url: "https://www.youtube.com/c/TheNetNinja/playlists",
              description: "Very good and easy explanation.",
              tags: ["web", "beginner", "intermidiate", "video"],
            },
            {
              name: "Les Jackson",
              url: "https://www.youtube.com/channel/UCIMRGVXufHT69s1uaHHYJIA",
              description:
                "Very good and easy explanation. C# and .Net and web techonlogy videos.",
              tags: ["web", ".net", "c#", "advanced", "video"],
            },
          ],
        },
        {
          title: "Other",
          websites: [
            {
              name: "Engineer4Free",
              url: "https://www.youtube.com/c/Engineer4Free/playlists",
              description: "Engineering, math. Good explanation",
              tags: ["math", "engineering", "free"],
            },
            {
              name: "MIT Open CourseWare",
              url: "https://www.youtube.com/channel/UCEBb1b_L6zDS3xTUrIALZOw",
              description:
                "Engineering, math, computer science videos from MIT",
              tags: ["math", "engineering", "free", "cs"],
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