// src/lib/getImageUrl.js
import { supabase } from './supabaseClient';

export function getImageUrl(filePath) {
  const { data } = supabase.storage.from('listing-images').getPublicUrl(filePath);
  return data.publicUrl;
}