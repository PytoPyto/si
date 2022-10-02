import React, { Dispatch, SetStateAction, useState } from "react";

interface Props {
	res: string,
	display: boolean,
	setRes: React.Dispatch<SetStateAction<string>>
}
const Inputs: React.FC<Props> = (props) => {
 let {res, setRes} = props
 const [value, setValue] = useState('')
 const [select, setSelect] = useState('')

 const convertToSi = (value:string, si:number) => {
	if(value && si){
		const newValue = parseInt(value ,si)
		setRes(newValue.toString())
	} else {
		alert('Нужно написть число и выбрать СИ')
	}
	}
	let si = Number(select)
	console.log(select)
	console.log(value)
		return (
	<div className={props.display ? `flex justify-around items-center flex-col` : `hidden`}>
		<h1>Перевод из СИ в 10</h1>
			<input value={value} onChange={(e)=> setValue(e.target.value)} className={`w-full h-[30px] rounded-md bg-zinc-800 text-zinc-300 font-semibold p-[16px]`}/>
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