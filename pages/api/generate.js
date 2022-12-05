import {Configuration,OpenAIApi} from 'openai';

const configuartion =new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuartion);



const generateAction = async (req, res) => {
  const basePromptPrefix =`Write the base idea and introduction of the poem about ${req.body.userInput}.
 Introduction:
  `
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}`,
    temperature: 0.7,
    max_tokens: 150,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  // I build Prompt #2.
  const secondPrompt = 
  `
  Take the introduction and  generate a poem about the following topic:
  basic idea of the poem: ${req.body.userInput}
  
  Introduction: 
  ${basePromptOutput.text}

  Poem:
  `
  
  // I call the OpenAI API a second time with Prompt #2
  const secondPromptCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${secondPrompt}`,
    temperature: 0.7,
    max_tokens: 256,
  });
  
  // Get the output
  const secondPromptOutput = secondPromptCompletion.data.choices.pop();

  // Send over the Prompt #2's output to our UI instead of Prompt #1's.
  res.status(200).json({ output: secondPromptOutput });
};

export default generateAction;