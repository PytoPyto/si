import type { NextPage } from 'next'
import { useState } from 'react'
import Body from './components/Body'
import Inputs from './components/Inputs'
const Home: NextPage = () => {
  const [res, setRes] = useState('')
  return (
      <Body>
        <h1 className={`text-xl p-2 border-b-[2px] font-semibold`}>Калькулятор из одной СИ в другую</h1>
        <Inputs res={res} setRes={setRes}/> {res === '0' ? (

        <h1 className='text-xl p-[2px] font-bold'></h1>
        ) : (

        <h1 className='text-xl border-b-[2px] p-[2px] font-bold'>{res}</h1>
        )}
      </Body>
    )
}

export default Home
