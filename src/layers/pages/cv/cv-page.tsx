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
    input1 : Input,
    input2 : Input,
    trashIcon : string,
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
            showSkills!.classList.remove("h-96");
            showSkills!.classList.add("h-0");
            
     


            setskill(false);
        }
        else {
            showSkills!.classList.remove("-translate-y-96");
            showSkills!.classList.add("duration-500");
            showSkills!.classList.add("transition-transform");
            showSkills!.classList.add("h-96");
            setskill(true);
        }
    }
    return(
        <IoIosArrowDropdown className="w-6 h-6 mr-3 mt-3" onClick={showSkills} />
    )
}
export function EducationalDropdown(){
    const showEducation = () => {

    }
    return (
        <IoIosArrowDropdown className="w-6 h-6 mr-3 mt-3" onClick={showEducation} />
    )
}

export function AddSkills(){
    const[SkillList,SetSkillList] = useState<SkillsList[]>([]);
    const OnDeleteInput = (ind : number) => {
        const yeniDizi = SkillList.filter((_,index) => index !== ind );
        SetSkillList(yeniDizi);
    }
    const AddSkills = () => {
        const input1 : Input = {
            ClassName: "w-24 md:w-40  h-8 rounded-md bg-slate-200 xl:w-60 h-8 rounded-md bg-slate-200",
            PlaceHolder: "Yetenek Adı ",
        }
        const input2 : Input = {
            ClassName: "w-24 md:w-40  h-8 rounded-md bg-slate-200 xl:w-60 h-8 rounded-md bg-slate-200",
            PlaceHolder: "Tecrübe Yılı ",
        }
        const skill : SkillsList = {
            input1: input1,
            input2: input2,
            trashIcon: "mt-1 text-red-400 ",
            div: "flex flex-row p-4 justify-around gap-x-2 border-2 border-slate-200 rounded-md   "
        }
        SetSkillList(prev => [...prev,skill]);
    }
    return (
        <div className=" h-0 bg-white rounded-sm addSkills z-0 relative -translate-y-96 overflow-y-scroll scrollbar-none xl:w-full  ">
            <p className="text-blue-400 flex flex-row text-md justify-end mr-3  " onClick={AddSkills}> <IoAddOutline className="w-5 h-5 object-fit" /> Yetenek Ekle</p>
            <div className="w-76 md:w-md  xl:w-full formArea  flex flex-col  ">
                {
                    SkillList.map((value,index) => (
                        <div className={value.div} key={index}>
                            <input type="text" className={value.input1.ClassName}  placeholder={value.input1.PlaceHolder}/>
                            <input type="text" className={value.input2.ClassName}  placeholder={value.input2.PlaceHolder}/>
                            <FaTrash className={value.trashIcon} onClick={e => OnDeleteInput(index)}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export function CreateCvPage(){
    return (
        <CandidateShell>
            <section className="w-full h-lvh flex flex-row ">
                <div className="gap-y-2 xl:w-3/6 w-dvw  h-full flex flex-col pt-2 xl:p-8  overflow-hidden sm:items-center flex flex-col    ">
                <div className=" justify-center items-center overflow-hidden  md:w-md  flex  flex-col  xl:w-full   ">
                    <div className="bg-slate-200 w-76 md:w-md     xl:w-xl h-12 rounded-xs flex flex-row justify-between z-40 relative rounded-md  ">
                        <p className="p-3 text-xl">Yetenekler</p>
                        <ClickableDropdown   />
                    </div>
                    <AddSkills  />
  
                </div>
                <div>
                    <div className="bg-slate-200 flex flex-row xl:w-xl rounded-md justify-between">
                        <p className="p-3 text-xl">Eğitim</p>
                        <EducationalDropdown/>
                    </div>
                </div>

                </div>

            </section>
        </CandidateShell>
    )
}
