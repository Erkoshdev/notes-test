<template>
  <div class="note">
    <h1>{{ note.title }}</h1>
    <p>{{ note.desc }}</p>
    <v-button type="btn-danger" size="md" @click="handleDelete">Удалить заметку</v-button>
    <router-link to="/">Перейти ко всем заметкам</router-link>
  </div>
</template>

<script>
import list from '@/jsons/noteList'
import VButton from "@/components/ui/VButton.vue";

export default {
  name: 'VNoteDetail',

  components: {
    VButton
  },

  data() {
    return {
      id: Number(this.$route.params.id),
      noteList: list,
      note: {},
    }
  },

  mounted() {
    this.getNote()
  },

  methods: {
    getNote() {
      JSON.parse(JSON.stringify(this.noteList)).forEach((item, itemIdx) => {
        if(itemIdx === this.id) {
          this.note = item
        }
      })
    },
    handleDelete() {
      this.noteList.splice(this.id, 1);
      this.$router.push({name: 'VNotes'})
    }
  }
}
</script>

<style scoped>
.note {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>