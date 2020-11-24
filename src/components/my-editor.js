import React from 'react'
import dynamic from 'next/dynamic'
import { EditorState, convertToRaw, Modifier } from 'draft-js';
//import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import draftToHtml from 'draftjs-to-html';
//import htmlToDraft from 'html-to-draftjs';
import { Box } from '@chakra-ui/core'

const Editor = dynamic(
  () => {
    return import('react-draft-wysiwyg').then((mod) => mod.Editor)
  },
  { loading: () => null, ssr: false },
)


class CustomOption extends React.Component {
  addStar = () => {
    const { editorState, onChange } = this.props;
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      '⭐',
      editorState.getCurrentInlineStyle(),
    );
    onChange(EditorState.push(editorState, contentState, 'insert-characters'));
  };

  render() {
    return (
      <div onClick={this.addStar}>⭐</div>
    );
  }
}



function MyEditor() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  return (
    <Box border="1px solid #F1F1F1" mt="1rem">
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={setEditorState}
          toolbarCustomButtons={[<CustomOption />]}
          localization={{
            locale: 'zh',
          }}
        />
    </Box>
  )
}

export default MyEditor

