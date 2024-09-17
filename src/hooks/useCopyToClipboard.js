import copy from 'copy-to-clipboard';
import { useState } from 'react';

export default function useCopyToClipboard() {
  const [value, setValue] = useState('');
  const [success, setSuccess] = useState(false);

  const copyToClipboard = (text, options = {}) => {
    const result = copy(text, options);
    if (result) setValue(text);
    setSuccess(result);

    // Reset success state after 1.5 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 1500);
  };

  return [copyToClipboard, { value, success }];
}
