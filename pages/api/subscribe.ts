// pages/api/subscribe.ts

import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Path to the file where you want to store the emails
    const filePath = path.join(process.cwd(), 'email.txt');

    // Write the email to the file
    fs.appendFile(filePath, `${email}\n`, (err) => {
      if (err) {
        console.error('Error writing email to file:', err);
        res.status(500).json({ success: false });
        return;
      }
      console.log('Email written to file successfully');
      res.status(200).json({ success: true });
    });
  } else {
    // Method not allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
