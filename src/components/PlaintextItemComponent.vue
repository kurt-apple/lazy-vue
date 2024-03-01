<script setup lang="ts">
import { QBadge } from 'quasar'
import { PropStructure } from 'src/utils'
import { computed, onBeforeUpdate, ref } from 'vue'

// todo: don't do a badge once the item length gets really long
// todo: handle numbers differently, possibly break off into own component
// todo: toggle editable
const data = defineModel<string | number>('data')
withDefaults(defineProps<PropStructure>(), {
  edit: false
})
const val = ref(data.value)
const ntext = (x: string | number | undefined): x is string => typeof x === 'string'
const isText = computed(() => ntext(data.value))
const bump = () => {
  if (data.value === val.value) return
  data.value = val.value
  console.log(`bump ${data.value}`)
}
onBeforeUpdate(bump)
</script>
<template>
  <q-item>
    <q-item-section>
      <q-item-label lines="2">{{ name }}</q-item-label>
    </q-item-section>
    <q-input v-if="edit && isText" v-model="val" class="q-ml-sm" @keyup.enter="bump" dense autogrow />
    <q-input v-else-if="edit && !isText" v-model.number="val" class="q-ml-sm" @keyup.enter="bump" type="number" @update:model-value="bump" dense />
    <QBadge v-else-if="!edit && isText && data!.toString().length < 40 && !data!.toString().includes('\n')" :label="data" class="q-ml-sm"/>
    <q-card v-else>
      <q-card-section class="text-block">
        {{ data }}
      </q-card-section>
    </q-card>
  </q-item>
</template>
<style scoped>
.text-block {
  max-width: 200px;
  word-break: break-space;
  white-space: break-spaces;
}
</style>
