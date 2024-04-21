import Prompt from "../../../../../models/prompt"
import { connectToDB } from "../../../../../utils/database"

export const GET = async (request, { params }) => { // access to param.id for specific user
    try {
        await connectToDB()

        const prompts = await Prompt.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 