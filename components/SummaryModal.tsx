import React from 'react';
import { Button } from './ui/button';

interface SummaryModalProps {
  summary: string | null;
  onClose: () => void;
}

const SummaryModal: React.FC<SummaryModalProps> = ({ summary, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Meeting Summary</h2>
        <div className="mb-6 text-gray-800 whitespace-pre-line" style={{ maxHeight: 400, overflowY: 'auto' }}>
          {summary || 'No summary available.'}
        </div>
        <Button onClick={onClose} className="bg-blue-1 w-full">Close</Button>
      </div>
    </div>
  );
};

export default SummaryModal;
