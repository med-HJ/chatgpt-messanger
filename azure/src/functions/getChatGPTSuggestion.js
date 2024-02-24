const { app } = require('@azure/functions');
const openai = require("../../lib/openai.js");


app.http('getChatGPTSuggestion', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const response = await openai.completions.create({
            model: 'gpt-3.5-turbo',
            prompt: 'Once upon a time, in a land far, far away',
            max_tokens: 100,
            temperature: 0.8,
        })

        context.log(`Http function processed request for url "${request.url}"`);

        const responstText = response.date.choices[0].text;

        return { body: responstText };
    }
});
