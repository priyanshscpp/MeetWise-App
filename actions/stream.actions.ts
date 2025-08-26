'use server';

import { currentUser } from '@clerk/nextjs/server';
import { StreamClient } from '@stream-io/node-sdk';
import axios from 'axios';
import type { Call } from '@stream-io/node-sdk';

const STREAM_API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const STREAM_API_SECRET = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error('User is not authenticated');
  if (!STREAM_API_KEY) throw new Error('Stream API key secret is missing');
  if (!STREAM_API_SECRET) throw new Error('Stream API secret is missing');

  const streamClient = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);

  const expirationTime = Math.floor(Date.now() / 1000) + 3600;
  const issuedAt = Math.floor(Date.now() / 1000) - 60;

  const token = streamClient.createToken(user.id, expirationTime, issuedAt);

  return token;
};

// Create a call with transcription enabled
export const createTranscribedCall = async (callId: string, members: string[] = []): Promise<Call> => {
  if (!STREAM_API_KEY) throw new Error('Stream API key secret is missing');
  if (!STREAM_API_SECRET) throw new Error('Stream API secret is missing');

  const streamClient = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);

  // @ts-ignore: call() is available in the SDK
  const call = streamClient.call('default', callId);
  await call.getOrCreate({
    data: {
      transcribing: {
        enabled: true,
        // Optionally, set language or provider here
        // language_code: 'en-US',
      },
      members
    },
  });
  return call;
};

// Fetch the transcript for a given callId from Stream
export const fetchCallTranscript = async (callId: string): Promise<string | null> => {
  if (!STREAM_API_KEY) throw new Error('Stream API key secret is missing');
  if (!STREAM_API_SECRET) throw new Error('Stream API secret is missing');

  const streamClient = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);
  // @ts-ignore: call() is available in the SDK
  const call = streamClient.call('default', callId);
  const { data } = await call.get();
  // Stream stores transcripts under data.transcript or similar (check actual API response)
  return data.transcript || null;
};

// Summarize transcript using DeepSeek or Gemini API
export const summarizeTranscript = async (
  transcript: string,
  provider: 'deepseek' | 'gemini' = 'deepseek'
): Promise<string> => {
  if (!transcript) throw new Error('Transcript is empty');

  if (provider === 'deepseek') {
    const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
    const response = await axios.post(
      'https://api.deepseek.com/v1/summarize',
      { text: transcript },
      { headers: { 'Authorization': `Bearer ${DEEPSEEK_API_KEY}` } }
    );
    return response.data.summary;
  } else if (provider === 'gemini') {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
      {
        contents: [{ parts: [{ text: `Summarize this meeting transcript:\n${transcript}` }] }],
      },
      { params: { key: GEMINI_API_KEY } }
    );
    return response.data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  } else {
    throw new Error('Unknown provider');
  }
};