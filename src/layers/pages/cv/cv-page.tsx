'use client'
import { CandidateShell } from "@/widgets/candidate/shell";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

import { IoIosArrowDropdown } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";

type Input  = {
    ClassName : string,
    PlaceHolder : string,
}
type SkillsList = {
    id : number,
    input1 : Input,
    input2 : Input,
    trashIcon : any,
    div : string
}
export function ClickableDropdown (){
   const [skill , setskill] = useState<boolean>(false);
    const showSkills = () => {
        const showSkills = document.querySelector(".addSkills");
        if(skill === true){
   
            showSkills!.classList.add("duration-500");
            showSkills!.classList.add("transition-transform");
            showSkills!.classList.add("-translate-y-96");
         
  
            
            setskill(false);
        }
        else {
  
            showSkills!.classList.remove("-translate-y-96");
            showSkills!.classList.add("duration-500");
            showSkills!.classList.add("transition-transform");
   
             setskill(true);
        }
        
    }
    return(
        <IoIosArrowDropdown className="w-6 h-6 mr-3 mt-3" onClick={showSkills} />
        
    )
}

export function AddSkills(){
    const[SkillList,SetSkillList] = useState<SkillsList[]>([]);
    const[id,SetId] = useState<number>(0);
    const AddSkills = () => {
        let input1 : Input = {
            ClassName: "w-60 h-8 rounded-md bg-slate-200",
            PlaceHolder: "Yetenek Adı Giriniz",
        }
        let input2 : Input = {
            ClassName: "w-60 h-8 rounded-md bg-slate-200",
            PlaceHolder: "Tecrübe Yılınızı Giriniz",
        }
        const skill : SkillsList = {
            id: id,
            input1: input1,
            input2: input2,
            trashIcon: <FaTrash  className="mt-1 text-red-400"/>,
            div: "flex flex-row p-4 justify-around"
        }
        
        SetSkillList(prev => [...prev,skill]);
    }
    return (
        <div className="w-full h-96 bg-white rounded-sm addSkills z-0 relative -translate-y-96 overflow-y-scroll ">
            <p className="text-blue-400 flex flex-row text-md justify-end mr-3  " onClick={AddSkills}> <IoAddOutline className="w-5 h-5 object-fit" /> Yetenek Ekle</p>
            <div className="w-full formArea  flex flex-col ">
                {
                    SkillList.map((value,index) => (
                        <div className={value.div} key={index}>
                            <input type="text" className={value.input1.ClassName}  placeholder={value.input1.PlaceHolder}/>
                            <input type="text" className={value.input2.ClassName}  placeholder={value.input2.PlaceHolder}/>
                            {value.trashIcon}

                        </div>
     ) )


                }

            </div>
        </div>
    )
}

export function CreateCvPage(){

    return (

        <CandidateShell>
            <section className="w-full h-lvh flex flex-row">
                <div className="xl:w-3/6 h-full flex flex-col p-8 overflow-hidden  ">
                <div className="h-96 overflow-hidden w-full">
                    <div className="bg-slate-200 w-xl h-12 rounded-xs flex flex-row justify-between z-40 relative">
                        <p className="p-3 text-xl">Yetenekler</p>
                        <ClickableDropdown   />
                    </div>
                    <AddSkills  />
                </div>
                </div>
                
            </section>
        </CandidateShell>
    )
}
