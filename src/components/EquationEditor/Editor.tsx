import React from 'react';
import { Editor } from '@tinymce/tinymce-react';


const EquationEditor = () => {
  const handleEditorChange = (content: string) => {
    console.log('Content was updated:', content);
  };

  return (
    <Editor
      initialValue="<p>This is the initial content of the editor</p>"
      tinymceScriptSrc={'/tinymce/tinymce.min.js'}
      init={{
        plugins: ['equation-editor'],
        extended_valid_elements: 'span[class|style|data-atom-id]',
        toolbar: 'equation-editor',
        equation_editor_config: {
            url: 'editor/equation_editor.html', // URL of equation editor Page
            origin: document.location.origin,
            title: 'Equation Editor',
            space_after_content: '&nbsp;',
            btn_cancel_text: 'Cancel',
            btn_ok_text: 'Insert',
            mathlive_config: {
                smartMode: true,
            },
        },
        equation_editor_group: 'basic',
        equation_editor_button_groups: {
            basic: [
                {
                    name: 'Numbers',
                    buttons: '1 2 3 4 \\pm \\dot',
                },
            ],
        },
        equation_editor_button_bar: '1 2 3 4 \\pm \\dot',
    }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default EquationEditor;