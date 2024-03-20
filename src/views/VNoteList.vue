<template>
  <div class="note-list">
    <v-note
        v-for="(item, itemIdx) in noteList"
        :key="itemIdx"
        :note="item"
        :note-idx="itemIdx"
        @delete="handleDelete"
        @goTo="handleGo"
    />
    <b class="notes-empty" v-if="!noteList.length">У вас нет заметок. Создайте новую по форме ниже.</b>
    <div class="note-create">
      <b>Создание новой заметки</b>
      <v-input placeholder="Введите название" v-model="title" />
      <v-input placeholder="Введите описание" v-model="desc" />
      <v-button type="btn-success" size="md" @action="handleCreate">Создать</v-button>
    </div>
  </div>
</template>

<script>
import VNote from '@/components/the/VNote.vue'
import list from '@/jsons/noteList'
import VButton from "@/components/ui/VButton.vue"
import VInput from "@/components/ui/VInput.vue";

export default {
  name: 'VNotes',

  components: {
    VNote,
    VButton,
    VInput
  },

  data() {
    return {
      noteList: list,
      title: '',
      desc: '',
    }
  },

  methods: {
    handleCreate() {
      const note = {};
      note.title = this.title;
      note.desc = this.desc;
      this.noteList.push(note);
      this.title = '',
      this.desc = ''
    },
    handleDelete(idx) {
      this.noteList.splice(idx, 1);
    },
    handleGo(idx) {
      this.$router.push({name: 'VNoteDetail', params: {id: idx}})
    }
  }
}
</script>

<style scoped>
.note-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.note-create {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 500px;
}
</style>