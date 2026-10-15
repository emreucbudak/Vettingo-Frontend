'use client'
import { CandidateShell } from "@/widgets/candidate/shell";
import { useId, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useFieldArray, useForm, useFormContext, useWatch, type FieldPath } from "react-hook-form";
import { z } from "zod";
import { FaTrash } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";

const sectionHeaderClassName = "bg-slate-200 flex flex-row w-92 max-sm:w-full md:w-lg md:max-xl:ml-2 lg:w-3xl xl:w-xl rounded-md justify-between";

type Education = {
    schoolName: string | null,
    departmentName: string | null,
    startedDate: Date | null,
    finishedDate: Date | null
}
type Skills = {
    skillName: string | null,
    skillExperienceYear: number | null
}
type Projects = {
    projectName: string | null,
    purpose: string | null
}

type Salary = {
    minSalary: number | null,
    maxSalary: number | null
}

type Cv = {
    targetRole: string | null,
    skills: Skills[] | null,
    educations: Education[] | null,
    experience: Experience[] | null,
    projects: Projects[] | null,
    salary: Salary | null
}

const cv: Cv = {
    targetRole: null,
    skills: null,
    educations: null,
    experience: null,
    projects: null,
    salary: null
}

type Experience = {
    companyName: string | null,
    role: string | null,
    startedDate: Date | null,
    finishedDate: Date | null
}

const requiredText = z.string().trim().min(1, "En az 1 karakter girin.");
const requiredNumber = z.number({ error: "Geçerli bir sayı girin." })
    .min(0, "Sayı 0 veya daha büyük olmalıdır.")
    .nullable()
    .refine(value => value !== null, "Bu alan zorunludur.");
const requiredDate = z.iso.date({ error: "Geçerli bir tarih seçin." })
    .transform(value => new Date(`${value}T00:00:00`));
const educationLevels = ["Lise", "Lisans", "Ön Lisans", "Yüksek Lisans"] as const;

const cvFormSchema = z.object({
    targetRole: requiredText.nullable(),
    skills: z.array(z.object({
        skillName: requiredText,
        skillExperienceYear: requiredNumber,
    })),
    educations: z.array(z.object({
        schoolName: requiredText,
        departmentName: requiredText,
        educationLevel: z.enum(educationLevels, { error: "Eğitim seviyesi seçin." }),
        startedDate: requiredDate,
        finishedDate: requiredDate,
    })),
    experience: z.array(z.object({
        companyName: requiredText,
        role: requiredText,
        startedDate: requiredDate,
        finishedDate: requiredDate,
    })),
    projects: z.array(z.object({
        projectName: requiredText,
        purpose: requiredText,
    })),
    salary: z.object({
        minSalary: requiredNumber,
        maxSalary: requiredNumber,
    }).nullable(),
});

type CvFormInput = z.input<typeof cvFormSchema>;
type CvFormOutput = z.output<typeof cvFormSchema>;

function toDateInputValue(value: Date | null) {
    if (!value) return "";
    return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, "0")}-${String(value.getDate()).padStart(2, "0")}`;
}

function CvInput({ name, label, widthClassName, type = "text", options }: {
    name: FieldPath<CvFormInput>,
    label: string,
    widthClassName: string,
    type?: "text" | "number" | "date",
    options?: readonly string[],
}) {
    const id = useId();
    const { register, getFieldState, formState } = useFormContext<CvFormInput, unknown, CvFormOutput>();
    const { error } = getFieldState(name, formState);
    const className = `w-full min-w-0 h-8 rounded-md bg-slate-200 ${error ? "outline outline-1 outline-red-500" : ""}`;
    const registration = register(name, type === "number" ? {
        setValueAs: (value: string | number | null) => value === "" || value === null ? null : Number(value),
    } : {});

    return (
        <div className={`min-w-0 ${widthClassName}`}>
            {options ? (
                <select {...registration} id={id} aria-label={label} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} className={className}>
                    {options.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
            ) : (
                <input {...registration} id={id} type={type} placeholder={label} aria-label={label} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} className={className} min={type === "number" ? 0 : undefined} step={type === "number" ? "any" : undefined} />
            )}
            {error && <p id={`${id}-error`} className="mt-1 text-xs text-red-600 break-words" role="alert">{error.message}</p>}
        </div>
    );
}

function DeleteRowButton({ label, onClick }: { label: string, onClick: () => void }) {
    return <button type="button" aria-label={label} className="mt-1 self-start shrink-0 text-red-400" onClick={onClick}><FaTrash /></button>;
}
export function ClickableDropdown (){
   const [skill , setskill] = useState<boolean>(false);
    const showSkills = () => {
        const showSkills = document.querySelector(".addSkills");
        if(skill === true){
            showSkills!.classList.add("hidden");
            setskill(false);
        }
        else {
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
            education!.classList.add("hidden")
            setShowEducation(false);
        }
        else {
            education!.classList.remove("hidden")
            setShowEducation(true);
        }

    }
    return (
        <IoIosArrowDropdown className="w-6 h-6 mr-3 mt-3" onClick={showEducations} />
    )
}
function ExperienceDropdown(){
    const [showExperience , setShowExperience] = useState<boolean>(false);
    const openExperience = () => {
        const exp = document.querySelector(".addExperience");
        if(showExperience) {
            exp!.classList.add("hidden");
            setShowExperience(false);
        }
        else {
            exp!.classList.remove("hidden")
            setShowExperience(true);
        }
    }
    return(
        <IoIosArrowDropdown className="w-6 h-6 mr-3 mt-3" onClick={openExperience}/>
    )
}

export function AddSkills(){
    const { control } = useFormContext<CvFormInput, unknown, CvFormOutput>();
    const { fields, append, remove } = useFieldArray({ control, name: "skills" });
    return (
        <div className=" hidden h-[350px] w-full xl:w-full bg-white rounded-sm addSkills z-0 relative  overflow-y-scroll scrollbar-none   ">
            <div className="text-blue-400 flex flex-row text-md justify-end mr-3">
                <button type="button" className="flex flex-row" onClick={() => append({ skillName: "", skillExperienceYear: null })}><IoAddOutline className="w-5 h-5 object-fit" /> Yetenek Ekle</button>
            </div>
            <div className="w-full xl:w-full formArea  flex flex-col  ">
                {fields.map((field, index) => (
                    <div className="flex flex-row max-sm:flex-wrap p-4 justify-around gap-x-2 border-2 border-slate-200 rounded-md md:w-lg xl:w-full" key={field.id}>
                        <CvInput name={`skills.${index}.skillName`} label="Yetenek Adı" widthClassName="w-40 md:w-40 xl:w-60" />
                        <CvInput name={`skills.${index}.skillExperienceYear`} label="Tecrübe Yılı" type="number" widthClassName="w-40 md:w-40 xl:w-60" />
                        <DeleteRowButton label="Yeteneği sil" onClick={() => remove(index)} />
                    </div>
                ))}
            </div>
        </div>
    )
}

function AddEducation(){
    const { control } = useFormContext<CvFormInput, unknown, CvFormOutput>();
    const { fields, append, remove } = useFieldArray({ control, name: "educations" });
    return (
        <div className="hidden h-[350px] xl:w-full  addEducation  bg-white  relative rounded-sm overflow-y-scroll scrollbar-none">
            <div className="text-blue-400 flex flex-row text-md justify-end mr-3">
                <button type="button" className="flex flex-row" onClick={() => append({ schoolName: "", departmentName: "", educationLevel: "Lise", startedDate: "", finishedDate: "" })}><IoAddOutline className="w-5 h-5 object-fit" /> Eğitim Ekle</button>
            </div>
            <div className="flex flex-col w-full  h-full">
                {fields.map((field, index) => (
                    <div className="flex flex-row max-sm:flex-wrap gap-x-1 p-4 justify-around border-2 border-slate-200 rounded-md md:w-lg xl:w-full" key={field.id}>
                        <CvInput name={`educations.${index}.schoolName`} label="Okul" widthClassName="w-12 md:w-20 xl:w-24" />
                        <CvInput name={`educations.${index}.departmentName`} label="Bölüm" widthClassName="w-12 md:w-20 xl:w-24" />
                        <CvInput name={`educations.${index}.educationLevel`} label="Eğitim seviyesi" options={educationLevels} widthClassName="w-20" />
                        <CvInput name={`educations.${index}.startedDate`} label="Eğitim başlangıç tarihi" type="date" widthClassName="w-16" />
                        <CvInput name={`educations.${index}.finishedDate`} label="Eğitim bitiş tarihi" type="date" widthClassName="w-16" />
                        <DeleteRowButton label="Eğitimi sil" onClick={() => remove(index)} />
                    </div>
                ))}
            </div>           
        </div>
    )
}
function AddExperience(){
    const { control } = useFormContext<CvFormInput, unknown, CvFormOutput>();
    const { fields, append, remove } = useFieldArray({ control, name: "experience" });
    return (
        <div className="hidden h-[350px] xl:w-full  addExperience  bg-white  relative rounded-sm overflow-y-scroll scrollbar-none">
            <div className="text-blue-400 flex flex-row text-md justify-end mr-3">
                <button type="button" className="flex flex-row" onClick={() => append({ companyName: "", role: "", startedDate: "", finishedDate: "" })}><IoAddOutline className="w-5 h-5 object-fit" /> Tecrübe Ekle</button>
            </div>
            <div className="flex flex-col w-full  h-full">
                {fields.map((field, index) => (
                    <div className="flex flex-row gap-x-1 max-sm:gap-x-0 p-4 justify-around border-2 border-slate-200 rounded-md md:w-lg xl:w-full" key={field.id}>
                        <CvInput name={`experience.${index}.companyName`} label="Şirket" widthClassName="w-40 max-sm:w-16 md:w-40 xl:w-32" />
                        <CvInput name={`experience.${index}.role`} label="Rol" widthClassName="w-40 max-sm:w-16 md:w-40 xl:w-32" />
                        <CvInput name={`experience.${index}.startedDate`} label="Tecrübe başlangıç tarihi" type="date" widthClassName="w-28 max-sm:w-16" />
                        <CvInput name={`experience.${index}.finishedDate`} label="Tecrübe bitiş tarihi" type="date" widthClassName="w-28 max-sm:w-16" />
                        <DeleteRowButton label="Tecrübeyi sil" onClick={() => remove(index)} />
                    </div>
                ))}
            </div>
        </div>
    )
}
function ProjectsDropdown(){
    const [projects,setShowProjects] = useState<boolean>(false);
    const ShowProjectsDropdown = () => {
        const showProjects = document.querySelector(".addProjects");
        if(projects){
            showProjects!.classList.add("hidden")
            setShowProjects(false)
        }
        else {
            showProjects!.classList.remove("hidden")
            setShowProjects(true)
        }
        
    }
    return(
        <IoIosArrowDropdown className="w-6 h-6 mr-3 mt-3" onClick={ShowProjectsDropdown} />
    )
}
function AddProjects(){
    const { control } = useFormContext<CvFormInput, unknown, CvFormOutput>();
    const { fields, append, remove } = useFieldArray({ control, name: "projects" });
    return(
        <div className="hidden h-[350px] xl:w-full  addProjects  bg-white  relative rounded-sm overflow-y-scroll scrollbar-none">
            <div className="text-blue-400 flex flex-row text-md justify-end mr-3">
                <button type="button" className="flex flex-row" onClick={() => append({ projectName: "", purpose: "" })}><IoAddOutline className="w-5 h-5 object-fit" />Proje Ekle</button>
            </div>
            <div className="flex flex-col w-full  h-full">
                {fields.map((field, index) => (
                    <div className="flex flex-row max-sm:flex-wrap gap-x-1 p-4 justify-around border-2 border-slate-200 rounded-md md:w-lg xl:w-full" key={field.id}>
                        <CvInput name={`projects.${index}.projectName`} label="Proje Adı" widthClassName="w-40 md:w-40 xl:w-64" />
                        <CvInput name={`projects.${index}.purpose`} label="Amacı" widthClassName="w-40 md:w-40 xl:w-64" />
                        <DeleteRowButton label="Projeyi sil" onClick={() => remove(index)} />
                    </div>
                ))}
            </div>
        </div>
    )
}
function TargetRole(){
    const [showTargetRole, setShowTargetRole] = useState<boolean>(false);
    const { control, setValue, clearErrors } = useFormContext<CvFormInput, unknown, CvFormOutput>();
    const hasTargetRole = useWatch({ control, name: "targetRole" }) !== null;
    return(
        <div>
            <div className={sectionHeaderClassName}>
                <p className="p-3 text-base">Hedef Rol</p>
                <button type="button" className="self-start" aria-label="Hedef rol alanını aç/kapat" aria-expanded={showTargetRole} onClick={() => setShowTargetRole(prev => !prev)}>
                    <IoIosArrowDropdown className="w-6 h-6 mr-3 mt-3" />
                </button>
            </div>
            <div className={`${showTargetRole ? "" : "hidden "}h-[350px] xl:w-full  addTargetRole  bg-white  relative rounded-sm overflow-y-scroll scrollbar-none`}>
                <p className="text-blue-400 flex flex-row text-md justify-end mr-3">
                    <button type="button" className="flex flex-row cursor-pointer disabled:cursor-not-allowed disabled:opacity-50" disabled={hasTargetRole} onClick={() => setValue("targetRole", "", { shouldDirty: true })}>
                        <IoAddOutline className="w-5 h-5 object-fit" /> Hedef Rol Ekle
                    </button>
                </p>
                <div className="flex flex-col w-full  h-full">
                    {hasTargetRole && (
                        <div className="flex flex-row max-sm:flex-wrap gap-x-1 p-4 justify-around  border-2 border-slate-200 rounded-md md:w-lg xl:w-full">
                            <CvInput name="targetRole" label="Hedef Rol" widthClassName="w-44 md:w-44 xl:w-68" />
                            <DeleteRowButton label="Hedef rolü sil" onClick={() => {
                                setValue("targetRole", null, { shouldDirty: true, shouldValidate: true });
                                clearErrors("targetRole");
                            }} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
function TargetSalaryDropdown(){
    const [showTargetSalary, setShowTargetSalary] = useState<boolean>(false);
    const openTargetSalary = () => {
        const targetSalary = document.querySelector(".addTargetSalary");
        if(showTargetSalary){
            targetSalary!.classList.add("hidden");
            setShowTargetSalary(false);
        }
        else {
            targetSalary!.classList.remove("hidden");
            setShowTargetSalary(true);
        }
    }
    return(
        <IoIosArrowDropdown className="w-6 h-6 mr-3 mt-3" onClick={openTargetSalary} />
    )
}
function AddTargetSalary(){
    const { control, setValue, clearErrors } = useFormContext<CvFormInput, unknown, CvFormOutput>();
    const hasTargetSalary = useWatch({ control, name: "salary" }) !== null;
    return(
        <div className="hidden h-[350px] xl:w-full  addTargetSalary  bg-white  relative rounded-sm overflow-y-scroll scrollbar-none">
            <p className="text-blue-400 flex flex-row text-md justify-end mr-3">
                <button type="button" className="flex flex-row" disabled={hasTargetSalary} onClick={() => setValue("salary", { minSalary: null, maxSalary: null }, { shouldDirty: true })}>
                    <IoAddOutline className="w-5 h-5 object-fit" /> Hedef Maaş Ekle
                </button>
            </p>
            <div className="flex flex-col w-full  h-full">
                {hasTargetSalary && (
                    <div className="flex flex-row max-sm:flex-wrap gap-x-1 p-4 justify-around  border-2 border-slate-200 rounded-md md:w-lg xl:w-full">
                        <CvInput name="salary.minSalary" label="Min Maaş" type="number" widthClassName="flex-1" />
                        <CvInput name="salary.maxSalary" label="Max Maaş" type="number" widthClassName="flex-1" />
                        <DeleteRowButton label="Hedef maaşı sil" onClick={() => {
                            setValue("salary", null, { shouldDirty: true, shouldValidate: true });
                            clearErrors("salary");
                        }} />
                    </div>
                )}
            </div>
        </div>
    )
}
export function CreateCvPage(){
    const form = useForm<CvFormInput, unknown, CvFormOutput>({
        resolver: zodResolver(cvFormSchema),
        mode: "onTouched",
        reValidateMode: "onChange",
        defaultValues: {
            targetRole: cv.targetRole,
            skills: cv.skills?.map(skill => ({
                skillName: skill.skillName ?? "",
                skillExperienceYear: skill.skillExperienceYear,
            })) ?? [],
            educations: cv.educations?.map(education => ({
                schoolName: education.schoolName ?? "",
                departmentName: education.departmentName ?? "",
                educationLevel: "Lise",
                startedDate: toDateInputValue(education.startedDate),
                finishedDate: toDateInputValue(education.finishedDate),
            })) ?? [],
            experience: cv.experience?.map(experience => ({
                companyName: experience.companyName ?? "",
                role: experience.role ?? "",
                startedDate: toDateInputValue(experience.startedDate),
                finishedDate: toDateInputValue(experience.finishedDate),
            })) ?? [],
            projects: cv.projects?.map(project => ({
                projectName: project.projectName ?? "",
                purpose: project.purpose ?? "",
            })) ?? [],
            salary: cv.salary,
        },
    });
    return (
        <CandidateShell>
            <FormProvider {...form}>
            <section className="h-max max-sm:w-full max-sm:min-w-0 max-sm:[&_input]:min-w-0 max-sm:[&_input]:max-w-full flex flex-col xl:flex-row gap-x-4 ">
                <div className="gap-y-2 max-sm:w-full max-sm:min-w-0 md:w-lg lg:w-3xl lg:ml-2 xl:w-3/6   h-full flex flex-col pt-2 xl:p-8   overflow-hidden sm:items-center md:items-start xl:items-center flex flex-col     ">
                <TargetRole/>
                <div className="  ">
                    <div className={sectionHeaderClassName}>
                        <p className="p-3 text-base">Yetenekler</p>
                        <ClickableDropdown   />
                    </div>
                    <AddSkills  />
  
                </div>
                <div className="gap-y-0">
                    <div className={sectionHeaderClassName}>
                        <p className="p-3 text-base">Eğitim</p>
                        <EducationalDropdown/>
                    </div>
                    <AddEducation/>
                </div>
                <div>
                    <div className={sectionHeaderClassName}>
                        <p className="p-3 text-base">Tecrübe</p>
                        <ExperienceDropdown/>
                    </div>
                    <AddExperience/>
                </div>
                <div>
                    <div className={sectionHeaderClassName}>
                        <p className="p-3 text-base">Projeler</p>
                        <ProjectsDropdown/>
                    </div>
                    <AddProjects/>
                    
                </div>
                <div>
                    <div className={sectionHeaderClassName}>
                        <p className="p-3 text-base">Hedef Maaş</p>
                        <TargetSalaryDropdown/>
                    </div>
                    <AddTargetSalary/>
                </div>

                </div>
                <div className=" b-2  w-screen max-sm:w-full md:w-full xl:w-3/6 h-screen p-4">
                    <div className="b-2 border-slate-200 h-[650px] md:max-xl:h-[750px] xl:h-[650px] bg-white rounded-md flex  flex-col items-center  mt-2 overflow-scroll scrollbar-none">
                        <div className=" flex w-md max-sm:w-full justify-center pt-2 h-16 ">
                            <h2 className="text-4xl font-roboto-slab">Emre Üçbudak</h2>
                        </div>
                        <div className="max-sm:w-full">
                            <label htmlFor="" className="font-bold">Eğitim</label>
                            <div className="border-t border-black w-84 max-sm:w-84 max-sm:ml-2 lg:w-2xl xl:w-xl"></div>
                        </div>
                        <div className="egitim flex flex-row justify-between p-3 lg:px-12 xl:px-2 w-full">
                            <div>
                                <p>Okul Adı</p>
                                <p>Bölüm Adı</p>
                            </div>
                            <div>
                                <p>Başlangıç Tarihi</p>
                                <p>Bitiş Tarihi</p>
                            </div>
                        </div>
                        <div className="max-sm:w-full">
                            <label htmlFor="" className="font-bold">Yetenekler</label>
                            <div className="border-t border-black w-84 max-sm:w-84 max-sm:ml-2 lg:w-2xl xl:w-xl"></div>
                        </div>
                        <div className="w-full justify-between p-3 lg:px-12 xl:px-2 flex flex-row">
                            <div>
                                <p>Yetenek Adı</p>
                            </div>
                            <div>
                                <p>Tecrübe Yılı</p>
                            </div>
                        </div>
                        <div className="max-sm:w-full">
                            <label htmlFor="" className="font-bold">Tecrübe</label>
                            <div className="border-t border-black w-84 max-sm:w-84 max-sm:ml-2 lg:w-2xl xl:w-xl"></div>
                        </div>
                        <div className="flex flex-row p-3 lg:px-12 xl:px-2 justify-between w-full">
                            <div>
                                <h4>Şirket Adı</h4>
                                <p>Rol</p>
                            </div>
                            <div>
                                <p>Başlangıç</p>
                                <p>Bitiş</p>
                            </div>
                        </div>
                        <div className="max-sm:w-full">
                            <label htmlFor="" className="font-bold">Projeler</label>
                            <div className="border-t border-black w-84 max-sm:w-84 max-sm:ml-2 lg:w-2xl xl:w-xl"></div>
                        </div>
                        <div className="flex flex-row p-3 lg:px-12 xl:px-2 justify-between w-full">
                            <div>
                                <p>Proje Adı</p>
                            </div>
                            <div>
                                <p>Amacı</p>
                            </div>
                        </div>
                        <div className="max-sm:w-full">
                            <label htmlFor="" className="font-bold">Hedef Maaş</label>
                            <div className="border-t border-black w-84 max-sm:w-84 max-sm:ml-2 lg:w-2xl xl:w-xl"></div>
                        </div>
                        <div className="flex flex-row p-3 lg:px-12 xl:px-2 justify-between w-full">
                            <div>
                                <p>Hedef Maaş</p>
                            </div>
                            <div>
                                <p>Maaşın tutarı</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </section>
            </FormProvider>
        </CandidateShell>
    )
}
