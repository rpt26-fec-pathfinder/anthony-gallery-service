import http from 'k6/http';
import { sleep } from 'k6';

const url = 'http://host.docker.internal:4012/images';

export let options = {
  vus: 1000,
  duration: '3m',
};

export default function () {
  let data = {
    "headerImage": "https://steam-fec.s3.amazonaws.com/steam4/header-4.jpg",
    "mainImages": [
      {
        "main": "https://steam-fec.s3.amazonaws.com/steam4/main-4-1.jpg",
        "thumb": "https://steam-fec.s3.amazonaws.com/steam4/thumb-4-1.jpg"
      },
      {
        "main": "https://steam-fec.s3.amazonaws.com/steam4/main-4-2.jpg",
        "thumb": "https://steam-fec.s3.amazonaws.com/steam4/thumb-4-2.jpg"
      },
      {
        "main": "https://steam-fec.s3.amazonaws.com/steam4/main-4-3.jpg",
        "thumb": "https://steam-fec.s3.amazonaws.com/steam4/thumb-4-3.jpg"
      },
      {
        "main": "https://steam-fec.s3.amazonaws.com/steam4/main-4-4.jpg",
        "thumb": "https://steam-fec.s3.amazonaws.com/steam4/thumb-4-4.jpg"
      },
      {
        "main": "https://steam-fec.s3.amazonaws.com/steam4/main-4-5.jpg",
        "thumb": "https://steam-fec.s3.amazonaws.com/steam4/thumb-4-5.jpg"
      },
      {
        "main": "https://steam-fec.s3.amazonaws.com/steam4/main-4-6.jpg",
        "thumb": "https://steam-fec.s3.amazonaws.com/steam4/thumb-4-6.jpg"
      },
      {
        "main": "https://steam-fec.s3.amazonaws.com/steam4/main-4-7.jpg",
        "thumb": "https://steam-fec.s3.amazonaws.com/steam4/thumb-4-7.jpg"
      },
      {
        "main": "https://steam-fec.s3.amazonaws.com/steam4/main-4-8.jpg",
        "thumb": "https://steam-fec.s3.amazonaws.com/steam4/thumb-4-8.jpg"
      }
    ]
  };

  // Using a JSON string as body
  let res = http.post(
    url,
    JSON.stringify(data),
    { headers: { 'Content-Type': 'application/json' } }
  );

  sleep(1);
}
