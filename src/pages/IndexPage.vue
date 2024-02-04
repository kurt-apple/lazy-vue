<template>
  <q-page class="row items-center justify-evenly">
    <div>
      <LazyVueComponent
        name="Lazy Vue Demo"
        v-model:data="aBigObject"
        v-model:edit="editForObj"
        :show-edit="true" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import LazyVueComponent from 'src/components/LazyVueComponent.vue'

const editForObj = ref(true)

const aSingleBooleanPrimitive = ref(true)
const aSingleStringPrimitive = ref('HERE BE DRAGONS')

const aBoolArray = ref([
  true,
  false,
  true,
  false,
  false,
  true,
  true
])

const aExampleObject = {
  aExampleBool: false,
  aExampleString: 'AAAAHHHHH WOW',
  aExampleNumber: 1234
}

const aBigObject = shallowRef({
  aSingleBooleanPrimitive,
  aSingleStringPrimitive,
  aBoolArray,
  aExampleObject,
  another_obj: {
    lol: 'no',
    arr_obj: [
      {
        color: 'red'
      },
      {
        color: 'blue'
      }
    ]
  }
})
</script>
