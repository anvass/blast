import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import type { IFormInput } from './types';
import { Divider } from '@mui/material';
import AlignmentVisualization from './components/AlignmentVisualization';

function App() {
  const [submittedData, setSubmittedData] = useState<IFormInput | null>(null);

  return (
    <>
      <Header />
      <Form setSubmittedData={setSubmittedData} />
      <Divider sx={{ my: '5vh' }} />
      <AlignmentVisualization submittedData={submittedData} />
    </>
  );
}

export default App;
