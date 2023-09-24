import axios from 'axios';
import { baseUrl } from '@/Api/app.config';

export let api = axios.create({
    baseURL: baseUrl,
    timeout: 100000,
    headers: {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
 })
 


