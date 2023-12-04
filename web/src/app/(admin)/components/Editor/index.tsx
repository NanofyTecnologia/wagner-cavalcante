'use client'

import { useRef } from 'react'
import { Editor as TinyEditor } from '@tinymce/tinymce-react'

export default function Editor({
  content,
  setContent,
}: {
  content?: string
  setContent: any
}) {
  const editorRef: any = useRef(null)

  const handleChange = () => {
    if (editorRef.current) {
      setContent('content', editorRef.current?.getContent())
    }
  }

  return (
    <>
      <TinyEditor
        id="content"
        onChange={handleChange}
        tinymceScriptSrc={
          process.env.NEXT_PUBLIC_WEB_URL + '/tinymce/tinymce.min.js'
        }
        onInit={(evt, editor) => (editorRef.current = editor as any)}
        initialValue={content}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'preview',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
    </>
  )
}
