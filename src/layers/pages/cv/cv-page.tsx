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

            showSkills!.classList.remove("h-96");
            showSkills!.classList.add("h-0");
            showSkills!.classList.add("hidden");
            setskill(false);
        }
        else {
            showSkills!.classList.add("h-96");
            showSkills!.classList.remove("hidden");
            setskill(true);
        }
    }
    return(
        <IoIosArrowDropdown className="w-6 h-6 mr-3 mt-3" onClick={showSkills} />
    )
}
export function EducationalDropdown(){
    const [showEducation , setShowEducation] = useState<boolean>(false);
    const showEducations = () => {
        const education = document.querySelector(".addEducation")
        if(showEducation){

            education!.classList.remove("h-96");
            education!.classList.add("h-0");
            education!.classList.add("hidden")
            setShowEducation(false);
        }
        else {
            education!.classList.add("h-96");
            education!.classList.remove("h-0");
            education!.classList.remove("hidden")
            setShowEducation(true);
        }

    }
    return (
        <IoIosArrowDropdown className="w-6 h-6 mr-3 mt-3" onClick={showEducations} />
    )
}
function ExperienceDropdown(){
    return(
        <IoIosArrowDropdown className="w-6 h-6 mr-3 mt-3" />
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
            ClassName: "w-40 md:w-40  h-8 rounded-md bg-slate-200 xl:w-60 h-8 rounded-md bg-slate-200",
            PlaceHolder: "Yetenek Adı ",
        }
        const input2 : Input = {
            ClassName: "w-40 md:w-40  h-8 rounded-md bg-slate-200 xl:w-60 h-8 rounded-md bg-slate-200",
            PlaceHolder: "Tecrübe Yılı ",
        }
        const skill : SkillsList = {
            input1: input1,
            input2: input2,
            trashIcon: "mt-1 text-red-400",
            div: "flex flex-row p-4 justify-around gap-x-2 border-2 border-slate-200 rounded-md md:w-lg xl:w-full"
        }
        SetSkillList(prev => [...prev,skill]);
    }
    return (
        <div className=" hidden w-full xl:w-full bg-white rounded-sm addSkills z-0 relative  overflow-y-scroll scrollbar-none   ">
            <p className="text-blue-400 flex flex-row text-md justify-end mr-3  " onClick={AddSkills}> <IoAddOutline className="w-5 h-5 object-fit" /> Yetenek Ekle</p>
            <div className="w-full xl:w-full formArea  flex flex-col  ">
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

function AddEducation(){
    const [educations, setEducations] = useState<SkillsList[]>([]);
    const onDeleteInput = (ind:number) => {
        const newEducations = educations.filter((_,index) => index !== ind);
        setEducations(newEducations);
    }
    const addNewEducation = () => {
        const input1 : Input = {
            ClassName: "w-12 md:w-20  h-8 rounded-md bg-slate-200 xl:w-24 h-8 rounded-md bg-slate-200",
            PlaceHolder: "Okul"
        }
        const input22: Input = {
            ClassName: "w-12 md:w-20  h-8 rounded-md bg-slate-200 xl:w-24 h-8 rounded-md bg-slate-200",
            PlaceHolder: "Bölüm"

        }
        const skillList : SkillsList = {
            div: "flex flex-row gap-x-1 p-4 justify-around  border-2 border-slate-200 rounded-md md:w-lg xl:w-full",
            input1: input1,
            input2: input22,
            trashIcon: "mt-1 text-red-400"
        }
        setEducations(prev => [...prev,skillList]);
    }
    return (
        <div className="hidden xl:w-full  addEducation  bg-white  relative rounded-sm overflow-y-scroll scrollbar-none">
            <p className="text-blue-400 flex flex-row text-md justify-end mr-3" onClick={addNewEducation}><IoAddOutline className="w-5 h-5 object-fit" /> Eğitim Ekle</p>
            <div className="flex flex-col w-full  h-full">
                {
                    educations.map((value , index) => {
                        return <div className={value.div} key={index}>
                            <input type="text" className={value.input1.ClassName} placeholder={value.input1.PlaceHolder} />
                            <input type="text" name="" id="" className={value.input2.ClassName} placeholder={value.input2.PlaceHolder}/>
                            <select name="educationLevel" required id="" className="w-20 bg-slate-200 rounded-md">
                                <option value="Lise">Lise</option>
                                <option value="Lisans">Lisans</option>
                                <option value="Ön Lisans">Ön Lisans</option>
                                <option value="Yüksek Lisans">Yüksek Lisans</option>
                            </select>
                            <input type="date" name="startDate" className="w-16 bg-slate-200 rounded-md"/>
                            <input type="date" name="finishedDate" className="w-16 bg-slate-200 rounded-md"/>
                            <FaTrash className={value.trashIcon} onClick={e => onDeleteInput(index)}/>
                        </div>
                    })
                }
            
            </div>           
        </div>
    )
}
export function CreateCvPage(){
    return (
        <CandidateShell>
            <section className="w-full h-max flex flex-row gap-x-4">
                <div className="gap-y-2 xl:w-3/6 w-dvw  h-full flex flex-col pt-2 xl:p-8  overflow-hidden sm:items-center flex flex-col     ">
                <div className=" justify-center items-center overflow-hidden  md:w-lg lg:w-3xl  flex  flex-col  xl:w-full   ">
                    <div className="bg-slate-200 w-full md:w-lg lg:w-3xl    xl:w-xl h-12 rounded-xs flex flex-row justify-between z-40 relative rounded-md  ">
                        <p className="p-3 text-xl">Yetenekler</p>
                        <ClickableDropdown   />
                    </div>
                    <AddSkills  />
  
                </div>
                <div className="gap-y-0">
                    <div className="bg-slate-200 flex flex-row md:w-lg lg:w-3xl xl:w-xl rounded-md justify-between">
                        <p className="p-3 text-xl">Eğitim</p>
                        <EducationalDropdown/>
                    </div>
                    <AddEducation/>
                </div>
                <div>
                    <div className="bg-slate-200 flex flex-row md:w-lg lg:w-3xl xl:w-xl rounded-md justify-between">
                        <p className="p-3 text-xl">Tecrübe</p>
                        <ExperienceDropdown/>
                    </div>
                </div>

                </div>
                <div className=" b-2  w-3/6 h-screen p-4">
                    <div className="b-2 border-slate-200 h-[650px] bg-white ">
                        asdasdas
                    </div>
                </div>

            </section>
        </CandidateShell>
    )
}
