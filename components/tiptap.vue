<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Highlight from '@tiptap/extension-highlight'

import Typography from '@tiptap/extension-typography'
import { Extension, textInputRule } from '@tiptap/core'

const SmilieReplacer = Extension.create({
  name: 'smilieReplacer',

  addInputRules() {
    return [
      textInputRule({ find: /-___- $/, replace: '😑 ' }),
      textInputRule({ find: /:'-\) $/, replace: '😂 ' }),
      textInputRule({ find: /':-\) $/, replace: '😅 ' }),
      textInputRule({ find: /':-D $/, replace: '😅 ' }),
      textInputRule({ find: />:-\) $/, replace: '😆 ' }),
      textInputRule({ find: /-__- $/, replace: '😑 ' }),
      textInputRule({ find: /':-\( $/, replace: '😓 ' }),
      textInputRule({ find: /:'-\( $/, replace: '😢 ' }),
      textInputRule({ find: />:-\( $/, replace: '😠 ' }),
      textInputRule({ find: /O:-\) $/, replace: '😇 ' }),
      textInputRule({ find: /0:-3 $/, replace: '😇 ' }),
      textInputRule({ find: /0:-\) $/, replace: '😇 ' }),
      textInputRule({ find: /0;\^\) $/, replace: '😇 ' }),
      textInputRule({ find: /O;-\) $/, replace: '😇 ' }),
      textInputRule({ find: /0;-\) $/, replace: '😇 ' }),
      textInputRule({ find: /O:-3 $/, replace: '😇 ' }),
      textInputRule({ find: /:'\) $/, replace: '😂 ' }),
      textInputRule({ find: /:-D $/, replace: '😃 ' }),
      textInputRule({ find: /':\) $/, replace: '😅 ' }),
      textInputRule({ find: /'=\) $/, replace: '😅 ' }),
      textInputRule({ find: /':D $/, replace: '😅 ' }),
      textInputRule({ find: /'=D $/, replace: '😅 ' }),
      textInputRule({ find: />:\) $/, replace: '😆 ' }),
      textInputRule({ find: />;\) $/, replace: '😆 ' }),
      textInputRule({ find: />=\) $/, replace: '😆 ' }),
      textInputRule({ find: /;-\) $/, replace: '😉 ' }),
      textInputRule({ find: /\*-\) $/, replace: '😉 ' }),
      textInputRule({ find: /;-\] $/, replace: '😉 ' }),
      textInputRule({ find: /;\^\) $/, replace: '😉 ' }),
      textInputRule({ find: /B-\) $/, replace: '😎 ' }),
      textInputRule({ find: /8-\) $/, replace: '😎 ' }),
      textInputRule({ find: /B-D $/, replace: '😎 ' }),
      textInputRule({ find: /8-D $/, replace: '😎 ' }),
      textInputRule({ find: /:-\* $/, replace: '😘 ' }),
      textInputRule({ find: /:\^\* $/, replace: '😘 ' }),
      textInputRule({ find: /:-\) $/, replace: '🙂 ' }),
      textInputRule({ find: /-_- $/, replace: '😑 ' }),
      textInputRule({ find: /:-X $/, replace: '😶 ' }),
      textInputRule({ find: /:-# $/, replace: '😶 ' }),
      textInputRule({ find: /:-x $/, replace: '😶 ' }),
      textInputRule({ find: />.< $/, replace: '😣 ' }),
      textInputRule({ find: /:-O $/, replace: '😮 ' }),
      textInputRule({ find: /:-o $/, replace: '😮 ' }),
      textInputRule({ find: /O_O $/, replace: '😮 ' }),
      textInputRule({ find: />:O $/, replace: '😮 ' }),
      textInputRule({ find: /:-P $/, replace: '😛 ' }),
      textInputRule({ find: /:-p $/, replace: '😛 ' }),
      textInputRule({ find: /:-Þ $/, replace: '😛 ' }),
      textInputRule({ find: /:-þ $/, replace: '😛 ' }),
      textInputRule({ find: /:-b $/, replace: '😛 ' }),
      textInputRule({ find: />:P $/, replace: '😜 ' }),
      textInputRule({ find: /X-P $/, replace: '😜 ' }),
      textInputRule({ find: /x-p $/, replace: '😜 ' }),
      textInputRule({ find: /':\( $/, replace: '😓 ' }),
      textInputRule({ find: /'=\( $/, replace: '😓 ' }),
      textInputRule({ find: />:\\ $/, replace: '😕 ' }),
      textInputRule({ find: />:\/ $/, replace: '😕 ' }),
      textInputRule({ find: /:-\/ $/, replace: '😕 ' }),
      textInputRule({ find: /:-. $/, replace: '😕 ' }),
      textInputRule({ find: />:\[ $/, replace: '😞 ' }),
      textInputRule({ find: /:-\( $/, replace: '😞 ' }),
      textInputRule({ find: /:-\[ $/, replace: '😞 ' }),
      textInputRule({ find: /:'\( $/, replace: '😢 ' }),
      textInputRule({ find: /;-\( $/, replace: '😢 ' }),
      textInputRule({ find: /#-\) $/, replace: '😵 ' }),
      textInputRule({ find: /%-\) $/, replace: '😵 ' }),
      textInputRule({ find: /X-\) $/, replace: '😵 ' }),
      textInputRule({ find: />:\( $/, replace: '😠 ' }),
      textInputRule({ find: /0:3 $/, replace: '😇 ' }),
      textInputRule({ find: /0:\) $/, replace: '😇 ' }),
      textInputRule({ find: /O:\) $/, replace: '😇 ' }),
      textInputRule({ find: /O=\) $/, replace: '😇 ' }),
      textInputRule({ find: /O:3 $/, replace: '😇 ' }),
      textInputRule({ find: /<\/3 $/, replace: '💔 ' }),
      textInputRule({ find: /:D $/, replace: '😃 ' }),
      textInputRule({ find: /=D $/, replace: '😃 ' }),
      textInputRule({ find: /;\) $/, replace: '😉 ' }),
      textInputRule({ find: /\*\) $/, replace: '😉 ' }),
      textInputRule({ find: /;\] $/, replace: '😉 ' }),
      textInputRule({ find: /;D $/, replace: '😉 ' }),
      textInputRule({ find: /B\) $/, replace: '😎 ' }),
      textInputRule({ find: /8\) $/, replace: '😎 ' }),
      textInputRule({ find: /:\* $/, replace: '😘 ' }),
      textInputRule({ find: /=\* $/, replace: '😘 ' }),
      textInputRule({ find: /:\) $/, replace: '🙂 ' }),
      textInputRule({ find: /=\] $/, replace: '🙂 ' }),
      textInputRule({ find: /=\) $/, replace: '🙂 ' }),
      textInputRule({ find: /:\] $/, replace: '🙂 ' }),
      textInputRule({ find: /:X $/, replace: '😶 ' }),
      textInputRule({ find: /:# $/, replace: '😶 ' }),
      textInputRule({ find: /=X $/, replace: '😶 ' }),
      textInputRule({ find: /=x $/, replace: '😶 ' }),
      textInputRule({ find: /:x $/, replace: '😶 ' }),
      textInputRule({ find: /=# $/, replace: '😶 ' }),
      textInputRule({ find: /:O $/, replace: '😮 ' }),
      textInputRule({ find: /:o $/, replace: '😮 ' }),
      textInputRule({ find: /:P $/, replace: '😛 ' }),
      textInputRule({ find: /=P $/, replace: '😛 ' }),
      textInputRule({ find: /:p $/, replace: '😛  ' }),
      textInputRule({ find: /=p $/, replace: '😛 ' }),
      textInputRule({ find: /:Þ $/, replace: '😛 ' }),
      textInputRule({ find: /:þ $/, replace: '😛 ' }),
      textInputRule({ find: /:b $/, replace: '😛 ' }),
      textInputRule({ find: /d: $/, replace: '😛 ' }),
      textInputRule({ find: /:\/ $/, replace: '😕 ' }),
      textInputRule({ find: /:\\ $/, replace: '😕 ' }),
      textInputRule({ find: /=\/ $/, replace: '😕 ' }),
      textInputRule({ find: /=\\ $/, replace: '😕 ' }),
      textInputRule({ find: /:L $/, replace: '😕 ' }),
      textInputRule({ find: /=L $/, replace: '😕 ' }),
      textInputRule({ find: /:\( $/, replace: '😞 ' }),
      textInputRule({ find: /:\[ $/, replace: '😞 ' }),
      textInputRule({ find: /=\( $/, replace: '😞 ' }),
      textInputRule({ find: /;\( $/, replace: '😢 ' }),
      textInputRule({ find: /D: $/, replace: '😨 ' }),
      textInputRule({ find: /:\$ $/, replace: '😳 ' }),
      textInputRule({ find: /=\$ $/, replace: '😳 ' }),
      textInputRule({ find: /#\) $/, replace: '😵 ' }),
      textInputRule({ find: /%\) $/, replace: '😵 ' }),
      textInputRule({ find: /X\) $/, replace: '😵 ' }),
      textInputRule({ find: /:@ $/, replace: '😠 ' }),
      textInputRule({ find: /<3 $/, replace: '❤️ ' }),
      textInputRule({ find: /\/shrug $/, replace: '¯\\_(ツ)_/¯' }),
    ]
  },
})


const { modelValue }  = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
    extensions: [
        StarterKit,
        Image,
        Highlight,
        SmilieReplacer,
        Typography
    ],
    content: modelValue,
    onUpdate: () => {
      emit('update:modelValue', editor.value.getHTML())
    },
})

const addImage = () => {
  const url = window.prompt('URL')

  if (url) {
    editor.value.chain().focus().setImage({ src: url }).run()
  }
}



</script>


<template>
  <div class="tiptap-editor">
    <div v-if="editor" class="controls">
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().toggleHighlight().run()" :class="{ 'is-active': editor.isActive('highlight') }">
        toggleHighlight
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
        bold
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
        italic
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
        strike
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().toggleCode().run()" :disabled="!editor.can().chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
        code
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().unsetAllMarks().run()">
        clear marks
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().clearNodes().run()">
        clear nodes
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
        paragraph
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
        h1
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
        h2
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
        h3
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
        h4
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
        h5
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
        h6
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
        bullet list
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
        ordered list
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
        code block
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
        blockquote
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().setHorizontalRule().run()">
        horizontal rule
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().setHardBreak().run()">
        hard break
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
        undo
      </button>
      <button class="button control-button button-sm button-gray" @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
        redo
      </button>
      <button class="button control-button button-sm button-gray" @click="addImage" >
        image
      </button>
    </div>

    <editor-content :editor="editor" class="article-body" />
  </div>

</template>
