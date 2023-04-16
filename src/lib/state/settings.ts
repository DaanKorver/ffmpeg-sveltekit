import { writable, type Writable } from 'svelte/store';
import type { Options } from '../../utils/convert';

export const settings: Writable<Options> = writable({});
