// // pages/api/subscribe.ts

// import fs from 'fs';
// import path from 'path';
// import { NextApiRequest, NextApiResponse } from 'next';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { email } = req.body;

//     // Path to the file where you want to store the emails
//     const filePath = path.join(process.cwd(), 'email.txt');
//     // const filePath = path.join(process.cwd(), 'https://github.com/KaranGulve4342/FocusFuse/blob/main/email.txt');

//     // Write the email to the file
//     fs.appendFile(filePath, `${email}\n`, (err) => {
//       if (err) {
//         console.error('Error writing email to file:', err);
//         res.status(500).json({ success: false });
//         return;
//       }
//       console.log('Email written to file successfully');
//       res.status(200).json({ success: true });
//     });
//   } else {
//     // Method not allowed
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// models/Subscription.ts
// pages/api/subscribe.ts
import { NextApiRequest, NextApiResponse } from 'next';
import {connectToDatabase} from '../../utils/db';
import Subscription, { ISubscription } from '../../database/models/Subscription';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();
      const { email } = req.body;
      const existingSubscription: ISubscription | null = await Subscription.findOne({ email });
      if (existingSubscription) {
        return res.status(400).json({ error: 'Email already subscribed' });
      }
      const subscription: ISubscription = new Subscription({ email });
      await subscription.save();
      return res.status(201).json({ message: 'Subscription successful' });
    } catch (error) {
      console.error('Error subscribing:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
