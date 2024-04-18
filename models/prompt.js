import mongoose, {Schema, model, models} from "mongoose";
const PromptSchema = new Schema({
    creator: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
    prompt:{
        type: String,
        required: [true, 'Prompt is quired']
    },
    tag:{
        type: String,
        required: [true, 'tag is quired']
    },
})

const Prompt = models.Prompt || model('Prompt', PromptSchema)
export default Prompt;