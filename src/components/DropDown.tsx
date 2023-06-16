import { useState, useRef } from "react";
import { IconChevronDown } from "./Icons";

import { Region } from "../../types.d";


function DropDown(props: { setSelectedRegion: React.Dispatch<React.SetStateAction<Region>> }) {

  const { setSelectedRegion } = props

  const [openCloseDropMenu, setOpenCloseDropMenu] = useState(false)
  const optionsRef = useRef(null)

  const handleOpenCloseMenu = () => setOpenCloseDropMenu(!openCloseDropMenu)

  const handleSelectOption = (region: Region) => {
    console.log(region)
    setSelectedRegion(region)
  }

  const options = [
    { value: Region.Africa, text: Region.Africa },
    { value: Region.Americas, text: "America" },
    { value: Region.Antarctic, text: Region.Antarctic },
    { value: Region.Asia, text: Region.Asia },
    { value: Region.Europe, text: Region.Europe },
    { value: Region.Oceania, text: Region.Oceania },
  ]

  return (

    <div onClick={handleOpenCloseMenu} className="
    w-fit relative flex gap-4 items-center 
    bg-c-white dark:bg-c-dark-blue-elements py-4 px-10 text-sm text-c-dark-gray-input dark:text-c-very-light-gray-bg rounded-md shadow-center cursor-pointer
    ">
      <span className="select-none">Filter by Region</span>
      <IconChevronDown className="fill-c-dark-gray-input dark:fill-c-very-light-gray-bg" />

      {/* Options */}
      <div ref={optionsRef} className={` ${openCloseDropMenu ? "opacity-100 translate-y-2 " : "pointer-events-none opacity-0 -translate-y-1"}
      absolute top-12 left-0 right-0 
      bg-white dark:bg-c-dark-blue-elements text-c-dark-gray-input dark:text-c-very-light-gray-bg rounded-md shadow-center py-2 transition-all
      flex flex-col`}>

        {options.map(option =>
          <div key={option.value} onClick={() => handleSelectOption(option.value)} className="pl-5 py-2 hover:bg-slate-100 dark:hover:bg-c-dark-blue-bg cursor-pointer">{option.text}</div>
        )}

      </div>
    </div>
  )
}

export default DropDown