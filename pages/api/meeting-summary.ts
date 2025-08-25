import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchCallTranscript, summarizeTranscript } from '../../actions/stream.actions';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { callId } = req.query;
  if (!callId || typeof callId !== 'string') {
    return res.status(400).json({ error: 'Missing callId' });
  }
  try {
    const transcript = await fetchCallTranscript(callId);
    if (!transcript) {
      return res.status(404).json({ error: 'Transcript not found' });
    }
    const summary = await summarizeTranscript(transcript, 'gemini');
    return res.status(200).json({ summary });
  } catch (e) {
    return res.status(500).json({ error: 'Failed to fetch summary' });
  }
}
