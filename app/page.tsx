export default function Home() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-20">Home chatgpt</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>

            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
          <p className="infoText">"Explain something to me" </p>
          <p className="infoText">
            "What is the difference between a dog and a cat?"
          </p>
          <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
          </svg>



            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
         
<p className="infoText">"Powered by OpenAI's advanced language model,"</p>


<p className="infoText">"ChatGPT excels in adapting to various conversational contexts"</p>


<p className="infoText">"With its broad knowledge base, ChatGPT finds application in diverse scenarios."</p>

          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>


            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
         
<p className="infoText">"While ChatGPT can provide valuable information"</p>


<p className="infoText">"ChatGPT is sensitive to the phrasing of input. "</p>

<p className="infoText">"ChatGPT can generate responses that sound plausible but may be incorrect or speculative"</p>

          </div>
        </div>
      </div>
    </div>
  )
}
