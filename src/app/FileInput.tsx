// FileInput.tsx
'use client';

import React, { ChangeEvent, FC } from 'react';

const FileInput: FC = () => {
  const pickup = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      console.log("No files selected");
      return;
    }

    const file = files[0];
    var reader = new FileReader();
    
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
    };
    reader.onerror = error => {
      console.log("error", error);
    };
  };

  return (
    <input
      accept="image/*"
      type="file"
      onChange={pickup}
    />
  );
};

export default FileInput;
