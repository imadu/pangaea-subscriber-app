import mongoose, {Document} from 'mongoose'
import { SubscriptionSchema } from './subscriptions.schema'


interface Subscriptions extends Document {
 topic: string;
 subscribers: string[];
}

export const Subscription =  mongoose.model<Subscriptions>("Subscription", SubscriptionSchema)