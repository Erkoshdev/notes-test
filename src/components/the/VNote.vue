<template>
  <div class="note">
    <h6 class="note-name">{{ note.title }}</h6>
    <p class="note-desc">{{ note.desc }}</p>
    <div class="note-tools">
      <v-button type="btn-danger" size="md" @click="$emit('delete', noteIdx)">Удалить заметку</v-button>
      <v-button type="btn-info" size="md" @click="$emit('goTo', noteIdx)">Открыть заметку</v-button>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/ui/VButton.vue";
import router from "@/router";

export default {
  name: 'VNote',
  methods: {
    router() {
      return router
    }
  },

  components: {
    VButton
  },

  props: {
    note: Object,
    noteIdx: Number
  },

  data() {
    return {

    }
  },
}

</script>

<style scoped>
.note {
  padding: 15px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.note-name {
  font-size: 24px;
  line-height: 28px;
}
.note-tools {
  display: flex;
  gap: 15px;
}
</style>