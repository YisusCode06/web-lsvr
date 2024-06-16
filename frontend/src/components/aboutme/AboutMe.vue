<template>
    <div class="body">
        <section class="about">
            <div class="about-info">
                <div class="about-img">
                    <img src="../../assets/images/logo1.png"
                        alt="Geeksforgeeks">
                </div>
            </div>
            <div>
                <h1>Sobre Nosotros</h1>
                <p><strong>GeeksforGeeks</strong> is a leading platform that provides computer science resources and
                    coding challenges for programmers and technology enthusiasts, along with interview and exam
                    preparations for upcoming aspirants. With a strong emphasis on enhancing coding skills and
                    knowledge, it has become a trusted destination for over 12 million registered users worldwide.</p>
                <button @click="toggleReadMore">Leer Mas</button>
                <p v-if="showMore">
                    GeeksforGeeks also offers courses, articles, and forums to support continuous learning and community
                    interaction.
                </p>
            </div>
        </section>

        <section class="team">
            <h1>Nuestro Equipo</h1>
            <div class="team-cards">
                <div class="card" v-for="(member, index) in teamMembers" :key="index">
                    <div class="card-img">
                        <img :src="member.image" :alt="member.name">
                    </div>
                    <div class="card-info">
                        <h2 class="card-name">{{ member.name }}</h2>
                        <p class="card-role">{{ member.role }}</p>
                        <p class="card-email">{{ member.email }}</p>
                        <button class="button" @click="contactMember(member.email)">Contactar</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showMore = ref(false);

function toggleReadMore() {
    showMore.value = !showMore.value;
}

const teamMembers = [
    {
        name: 'Liz',
        role: 'CEO and Founder',
        email: 'jane@example.com',
        image: 'https://static.wikia.nocookie.net/characters/images/5/5d/Vanellope_profile.png/revision/latest?cb=20150131031402'
    },
    {
        name: 'Nombre',
        role: 'Co-Founder',
        email: 'Miller@example.com',
        image: 'https://static.wikia.nocookie.net/characters/images/5/5d/Vanellope_profile.png/revision/latest?cb=20150131031402'
    },
    {
        name: 'Nombre',
        role: 'Co-Founder',
        email: 'Joe@example.com',
        image: 'https://static.wikia.nocookie.net/characters/images/5/5d/Vanellope_profile.png/revision/latest?cb=20150131031402'
    }
];

function contactMember(email) {
    window.open(`mailto:${email}`, '_blank');
}
</script>

<style scoped>
@import url('./AboutMe.css');
</style>
