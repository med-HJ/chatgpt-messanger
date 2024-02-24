import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
  return (
    <header className='flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md'>
      <div className='flex space-x-2'>
        <Image
        src ="https://links.papareact.com/4t3"
        height={40}
        width={40}
        alt='logo ChatGPT'
        />
        <div>
            <h1 className='font-bold'> The MedHj <span className="text-violet-500">AI</span> Image Generator</h1>
            <h2 className='text-xs'>
                Powered by DALL.E, Chat GPT & Microsoft Azure!
            </h2>
        </div>
      </div>
      <div className='flex text-xs  md:text-base divide-x items-center'>
        <Link href="" className='px-2 font-light text-right'>
            Join US
        </Link>
        <Link href="" className='px-2 font-light'>
            Github Repo
        </Link>
      </div>
    </header>
  )
}
