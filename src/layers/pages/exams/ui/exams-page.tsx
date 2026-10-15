"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { MdClose, MdOutlineAdd, MdOutlineAssignment, MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { exampleExams, type Exam } from "@/entities/exam";

type ExamAction = { type: "create" | "edit" | "delete"; exam: Exam };

function ExamActionDialog({
  action,
  onClose,
  onSave,
  onDelete,
}: {
  action: ExamAction;
  onClose: () => void;
  onSave: (exam: Exam) => void;
  onDelete: (exam: Exam) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const [name, setName] = useState(action.exam.name);
  const [questionCount, setQuestionCount] = useState(String(action.exam.questionCount));
  const editing = action.type !== "delete";
  const creating = action.type === "create";

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (editing) {
      if (!name.trim()) return;
      onSave({ ...action.exam, name: name.trim(), questionCount: Number(questionCount) });
    } else {
      onDelete(action.exam);
    }
    dialogRef.current?.close();
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={editing ? undefined : descriptionId}
      onClose={onClose}
      className="fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-md rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-6 text-[#0b1c30] shadow-xl backdrop:bg-[#091426]/40"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 id={titleId} className="text-xl font-semibold">{creating ? "Sınav ekle" : editing ? "Sınavı düzenle" : "Sınavı sil"}</h2>
        <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Pencereyi kapat" className="rounded p-2 hover:bg-[#eff4ff] focus-visible:outline-2 focus-visible:outline-offset-2">
          <MdClose aria-hidden="true" className="text-xl" />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {editing ? (
          <div className="space-y-5">
            <label className="block text-sm font-medium">
              Sınav adı
              <input
                required
                maxLength={150}
                pattern=".*\S.*"
                title="Sınav adı boş bırakılamaz."
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 block w-full rounded border border-[#c5c6cd] bg-white px-3 py-2.5 font-normal outline-none focus:border-[#091426] focus:ring-1 focus:ring-[#091426]"
              />
            </label>
            <label className="block text-sm font-medium">
              Soru sayısı
              <input
                required
                type="number"
                min={1}
                step={1}
                value={questionCount}
                onChange={(event) => setQuestionCount(event.target.value)}
                className="mt-2 block w-full rounded border border-[#c5c6cd] bg-white px-3 py-2.5 font-normal outline-none focus:border-[#091426] focus:ring-1 focus:ring-[#091426]"
              />
            </label>
          </div>
        ) : (
          <p id={descriptionId} className="break-words text-sm leading-6 text-[#45474c]">
            <strong className="font-semibold text-[#0b1c30]">{action.exam.name}</strong> sınavını silmek istediğinize emin misiniz?
          </p>
        )}
        <div className="mt-7 flex justify-end gap-3">
          <button type="button" onClick={() => dialogRef.current?.close()} className="rounded border border-[#c5c6cd] px-4 py-2.5 text-sm font-semibold hover:bg-[#eff4ff] focus-visible:outline-2 focus-visible:outline-offset-2">
            Vazgeç
          </button>
          <button type="submit" className={`rounded px-4 py-2.5 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 ${editing ? "bg-[#091426] hover:bg-[#20334d]" : "bg-red-700 hover:bg-red-800"}`}>
            {creating ? "Sınavı ekle" : editing ? "Kaydet" : "Sınavı sil"}
          </button>
        </div>
      </form>
    </dialog>
  );
}

export function ExamsPage() {
  const [exams, setExams] = useState<readonly Exam[]>(exampleExams);
  const [action, setAction] = useState<ExamAction | null>(null);
  const [message, setMessage] = useState("");

  function saveExam(updated: Exam) {
    setExams((current) => action?.type === "create"
      ? [updated, ...current]
      : current.map((exam) => exam.id === updated.id ? updated : exam));
    setMessage(`${updated.name} ${action?.type === "create" ? "eklendi" : "güncellendi"}.`);
  }

  function startCreateExam() {
    setAction({
      type: "create",
      exam: {
        id: crypto.randomUUID(),
        name: "",
        createdAt: new Intl.DateTimeFormat("en-CA", {
          year: "numeric", month: "2-digit", day: "2-digit", timeZone: "Europe/Istanbul",
        }).format(new Date()),
        questionCount: 1,
      },
    });
  }

  function deleteExam(deleted: Exam) {
    setExams((current) => current.filter((exam) => exam.id !== deleted.id));
    setMessage(`${deleted.name} silindi.`);
  }

  return (
    <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
      <section aria-labelledby="exams-title" className="overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#c5c6cd] px-5 py-5 md:px-6">
          <div className="flex items-center gap-3">
            <h1 id="exams-title" className="text-lg font-semibold text-[#0b1c30]">Sınavlarımız</h1>
            <span className="rounded-full border border-[#c5c6cd] bg-[#eff4ff] px-3 py-1 text-xs font-medium text-[#45474c]">{exams.length} sınav</span>
          </div>
          <button type="button" onClick={startCreateExam} className="ml-auto inline-flex items-center justify-center gap-2 rounded bg-[#091426] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#20334d] focus-visible:outline-2 focus-visible:outline-offset-2">
            <MdOutlineAdd aria-hidden="true" className="text-xl" />
            Sınav Ekle
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[660px] text-left text-sm">
            <caption className="sr-only">Sınav adı, oluşturulma tarihi, soru sayısı ve sınav işlemleri</caption>
            <thead className="border-b border-[#c5c6cd] bg-[#eff4ff] text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c]">
              <tr>
                <th scope="col" className="w-[43%] px-6 py-4">Sınav adı</th>
                <th scope="col" className="px-6 py-4">Oluşturulma tarihi</th>
                <th scope="col" className="px-6 py-4 text-center">Soru sayısı</th>
                <th scope="col" className="px-6 py-4 text-center">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#c5c6cd]">
              {exams.map((exam) => (
                <tr key={exam.id} className="transition-colors hover:bg-[#eff4ff]">
                  <th scope="row" className="px-6 py-5 font-semibold text-[#0b1c30]">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-[#c5c6cd] bg-[#eff4ff] text-[#45474c]">
                        <MdOutlineAssignment aria-hidden="true" className="text-xl" />
                      </span>
                      <span className="break-words [overflow-wrap:anywhere]">{exam.name}</span>
                    </div>
                  </th>
                  <td className="whitespace-nowrap px-6 py-5 text-[#45474c]">
                    <time dateTime={exam.createdAt}>{new Intl.DateTimeFormat("tr-TR", { day: "2-digit", month: "long", year: "numeric", timeZone: "Europe/Istanbul" }).format(new Date(`${exam.createdAt}T12:00:00Z`))}</time>
                  </td>
                  <td className="px-6 py-5 text-center text-[#45474c]">{exam.questionCount} soru</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-center gap-2">
                      <button type="button" aria-label={`${exam.name} sınavını düzenle`} title="Düzenle" onClick={() => setAction({ type: "edit", exam })} className="rounded p-2.5 text-[#45474c] transition-colors hover:bg-[#dce9ff] hover:text-[#091426] focus-visible:outline-2 focus-visible:outline-offset-2">
                        <MdOutlineEdit aria-hidden="true" className="text-xl" />
                      </button>
                      <button type="button" aria-label={`${exam.name} sınavını sil`} title="Sil" onClick={() => setAction({ type: "delete", exam })} className="rounded p-2.5 text-[#45474c] transition-colors hover:bg-red-50 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2">
                        <MdOutlineDelete aria-hidden="true" className="text-xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {exams.length === 0 && (
                <tr><td colSpan={4} className="px-6 py-16 text-center text-[#45474c]">Henüz sınav bulunmuyor.</td></tr>
              )}
            </tbody>
          </table>
        </div>
        <p className="border-t border-[#c5c6cd] px-6 py-3 text-xs text-[#75777d]">Örnek sınav listesi</p>
      </section>
      <p role="status" className="mt-4 text-sm text-[#006c49]">{message}</p>
      {action && <ExamActionDialog action={action} onClose={() => setAction(null)} onSave={saveExam} onDelete={deleteExam} />}
    </main>
  );
}
