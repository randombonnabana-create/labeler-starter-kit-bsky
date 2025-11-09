import 'dotenv/config';
import path from 'node:path';

// Use persistent data directory on Render, fallback to current directory locally
export const DATA_DIR = process.env.DATA_DIR ?? '.';

export const DID = process.env.DID ?? '';
export const SIGNING_KEY = process.env.SIGNING_KEY ?? '';
export const HOST = process.env.HOST ?? '127.0.0.1';
export const PORT = process.env.PORT ? Number(process.env.PORT) : 4100;
export const METRICS_PORT = process.env.METRICS_PORT ? Number(process.env.METRICS_PORT) : 4101;
export const FIREHOSE_URL = process.env.FIREHOSE_URL ?? 'wss://jetstream.atproto.tools/subscribe';
export const WANTED_COLLECTION = 'app.bsky.feed.like';
export const BSKY_IDENTIFIER = process.env.BSKY_IDENTIFIER ?? '';
export const BSKY_PASSWORD = process.env.BSKY_PASSWORD ?? '';
export const CURSOR_UPDATE_INTERVAL =
  process.env.CURSOR_UPDATE_INTERVAL ? Number(process.env.CURSOR_UPDATE_INTERVAL) : 60000;

// Paths for persistent storage
export const CURSOR_FILE = path.join(DATA_DIR, 'cursor.txt');
export const DATABASE_FILE = path.join(DATA_DIR, 'labels.db');
