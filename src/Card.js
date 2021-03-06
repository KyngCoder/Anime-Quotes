import { useSpeechSynthesis } from 'react-speech-kit';
import {GiSpeaker} from 'react-icons/gi'
import {MdOutlineContentCopy} from 'react-icons/md'
import {useState} from 'react'

function Card({ name, quote, character }) {
  const { speak } = useSpeechSynthesis();
  const [readMore,setReadMore] = useState(false) 

  const copyToClipboard = () => {
    navigator.clipboard.writeText(quote)
  }

  
  

  return (
    <div className=" `h-64 w-full  mx-auto rounded-lg bg-white shadow-xl px-5 pt-5 pb-2 text-gray-800 hover:scale-105 duration-500 ease-in-out">
      <div className="w-full mb-10 bg-white">
        <div className="w-full">
          <p className="text-md text-green-400 font-bold text-center">{name}</p>
        </div>
        <div className="text-3xl text-green-500 text-left leading-tight h-3">
          “
        </div>
        <p className="text-sm  text-gray-600 text-center px-5">
         
          {readMore ? quote : `${quote.substring(0, 200)}... `}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? (
              <p className="text-green-600">show less</p>
            ) : (
              <p className="text-green-600">read more</p>
            )}
          </button>
        </p>
        <div className="text-3xl text-green-500 text-right leading-tight h-3 -mt-3">
          ”
        </div>
      </div>
      <div className="w-full flex justify-between">
        <button onClick={() => speak({ text: quote })}><GiSpeaker/></button>
        <p className="text-md text-green-400 font-bold text-center">
          {character}
        </p>
        <button className="hover:scale-1.5" onClick={copyToClipboard}><MdOutlineContentCopy/></button>
      </div>
    </div>
  );
}

export default Card;
