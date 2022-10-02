import type { NextPage } from 'next'
import { useState } from 'react'
import Body from './components/Body'
import Input10toSi from './components/Input10toSi'
import InputSiTo10 from './components/InputSiTo10'
const Home: NextPage = () => {
  const [is10, setIs10] = useState(true)
  const [isSi, setIsSi] = useState(false)
  const [res, setRes] = useState('')
  return (
      <Body>
        <h1 className={`text-xl p-2 border-b-[2px] font-semibold`}>Калькулятор из одной СИ в другую</h1>
        <button onClick={() => {
          setIs10(!is10)
          setIsSi(!isSi)
          setRes('')
        }} className='w-fit text-center h-[30px] bg-zinc-800 rounded-md flex justify-center items-center p-2'><h1>Смена калькулятора</h1></button>

        <Input10toSi display={is10} res={res} setRes={setRes}/>
        <InputSiTo10 display={isSi} res={res} setRes={setRes}/>
         {res === '0' ? (

        <h1 className='text-xl p-[2px] font-bold'></h1>
        ) : (

        <h1 className='text-xl border-b-[2px] p-[2px] font-bold'>{res}</h1>
        )}
      </Body>
    )
}

export default Home
