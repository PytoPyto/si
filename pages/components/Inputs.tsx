import React, { Dispatch, SetStateAction, useState } from "react";

interface Props {
	res: string,
	setRes: React.Dispatch<SetStateAction<string>>
}
const Inputs: React.FC<Props> = (props) => {
 let {res, setRes} = props
 const [value, setValue] = useState('')
 const [select, setSelect] = useState('')

 const convertToSi = (value:string, si:number) => {
	if(value && si){
	const newValue = Number(value).toString(si)
	setRes(newValue)
	} else {
		alert('Нужно написть число и выбрать СИ')
	}
	}
	let si = Number(select)
	console.log(select)
	console.log(value)
		return (
	<div className={`flex justify-around items-center flex-col`}>
			<input type={'number'} value={value} onChange={(e)=> setValue(e.target.value)} className={`w-full h-[30px] rounded-md bg-zinc-800 text-zinc-300 font-semibold p-[16px]`}/>
			<select id="selectTag" size={5} value={select} onChange={(event) => setSelect(event.target.value)} className={`w-full h-[35px] rounded-md mt-[16px] bg-zinc-800 text-zinc-400`}>
				<option value={''}>Выберите СИ</option>
				<option value={2}>2</option>
				<option value={8}>8</option>
				<option value={10}>10</option>
				<option value={16}>16</option>
			</select>
			<button onClick={() => convertToSi(value, si)} className="w-[100px] mt-[10px] h-[30px] rounded-md bg-zinc-800 text-zinc-400 font-bold">Посчитать</button>
	</div>
 )
}

export default Inputs