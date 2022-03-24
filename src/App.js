import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "./App.css";
import { Editor } from '@tinymce/tinymce-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; 
const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

function App() {
  const toolbar= [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],  
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ]
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h2>Using Quill build in React</h2>
          <ReactQuill className="quill" theme="snow" formats={formats} modules={modules}/>
        </div>
      </header>
    </div>
  );
}

export default App;
