// models/Subscription.ts
import mongoose, { Document, Schema, Model } from 'mongoose';

export interface ISubscription extends Document {
  email: string;
  createdAt: Date;
}

let SubscriptionModel: Model<ISubscription>;

// Check if the model has already been defined
if (mongoose.models.Subscription) {
  SubscriptionModel = mongoose.models.Subscription;
} else {
  const SubscriptionSchema = new Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  SubscriptionModel = mongoose.model<ISubscription>('Subscription', SubscriptionSchema);
}

export default SubscriptionModel;
