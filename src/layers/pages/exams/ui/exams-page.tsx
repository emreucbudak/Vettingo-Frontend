"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { MdClose, MdOutlineAdd, MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import type { Exam } from "@/entities/exam";
import { deleteExam } from "../api/delete-exam";
import { getCompanyExams } from "../api/get-company-exams";

const editExamClassName = "rounded p-2.5 text-[#45474c] transition-colors hover:bg-[#dce9ff] hover:text-[#091426] focus-visible:outline-2 focus-visible:outline-offset-2";
const examListMessages = {
  loading: "Sınavlar yükleniyor…",
  loaded: "Henüz sınav bulunmuyor.",
  error: "Sınav listesi yüklenemedi.",
};

function DeleteExamDialog({
  exam,
  onClose,
  onDelete,
}: {
  exam: Exam;
  onClose: () => void;
  onDelete: (examId: string) => Promise<void>;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  async function handleDeleteClick(examId: string) {
    if (isDeleting) return;

    setIsDeleting(true);
    setError("");
    try {
      await onDelete(examId);
      dialogRef.current?.close();
    } catch {
      setError("Sınav silinemedi. Lütfen tekrar deneyin.");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onCancel={(event) => {
        if (isDeleting) event.preventDefault();
      }}
      onClose={onClose}
      className="fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-md rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-6 text-[#0b1c30] shadow-xl backdrop:bg-[#091426]/40"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 id={titleId} className="text-xl font-semibold">Sınavı sil</h2>
        <button type="button" disabled={isDeleting} onClick={() => dialogRef.current?.close()} aria-label="Pencereyi kapat" className="rounded p-2 hover:bg-[#eff4ff] focus-visible:outline-2 focus-visible:outline-offset-2">
          <MdClose aria-hidden="true" className="text-xl" />
        </button>
      </div>
      <p id={descriptionId} className="break-words text-sm leading-6 text-[#45474c]">
        <strong className="font-semibold text-[#0b1c30]">{exam.name}</strong> sınavını silmek istediğinize emin misiniz?
      </p>
      {error && <p role="alert" className="mt-3 text-sm text-red-700">{error}</p>}
      <div className="mt-7 flex justify-end gap-3">
        <button type="button" disabled={isDeleting} onClick={() => dialogRef.current?.close()} className="rounded border border-[#c5c6cd] px-4 py-2.5 text-sm font-semibold hover:bg-[#eff4ff] focus-visible:outline-2 focus-visible:outline-offset-2">
          Vazgeç
        </button>
        <button type="button" disabled={isDeleting} onClick={() => handleDeleteClick(exam.id)} className="rounded bg-red-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50">
          {isDeleting ? "Siliniyor…" : "Sınavı sil"}
        </button>
      </div>
    </dialog>
  );
}

export function ExamsPage({
  examsHref,
  newExamHref,
  onEditExam,
}: {
  examsHref: string;
  newExamHref: string;
  onEditExam?: (exam: Exam) => void;
}) {
  const [exams, setExams] = useState<readonly Exam[]>([]);
  const [listStatus, setListStatus] = useState<keyof typeof examListMessages>("loading");
  const [examToDelete, setExamToDelete] = useState<Exam | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadExams() {
      try {
        const companyExams = await getCompanyExams(controller.signal);
        if (controller.signal.aborted) return;
        setExams(companyExams);
        setListStatus("loaded");
      } catch {
        if (!controller.signal.aborted) setListStatus("error");
      }
    }

    void loadExams();
    return () => controller.abort();
  }, []);

  async function handleDeleteExam(examId: string) {
    const exam = exams.find((item) => item.id === examId);
    await deleteExam(examId);
    setExams((current) => current.filter((item) => item.id !== examId));
    setMessage(`${exam?.name ?? "Sınav"} silindi.`);
  }

  return (
    <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
      <section aria-labelledby="exams-title" className="overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#c5c6cd] px-5 py-5 md:px-6">
          <h1 id="exams-title" className="text-lg font-semibold text-[#0b1c30]">Sınavlar</h1>
          <Link href={newExamHref} className="ml-auto inline-flex items-center justify-center gap-2 rounded bg-[#091426] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#20334d] focus-visible:outline-2 focus-visible:outline-offset-2">
            <MdOutlineAdd aria-hidden="true" className="text-xl" />
            Sınav Ekle
          </Link>
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
                  <th scope="row" className="px-6 py-5 font-semibold [overflow-wrap:anywhere] text-[#0b1c30]">
                    {exam.name}
                  </th>
                  <td className="whitespace-nowrap px-6 py-5 text-[#45474c]">
                    <time dateTime={exam.createdAt}>{new Intl.DateTimeFormat("tr-TR", { day: "2-digit", month: "long", year: "numeric", timeZone: "Europe/Istanbul" }).format(new Date(`${exam.createdAt}T12:00:00Z`))}</time>
                  </td>
                  <td className="px-6 py-5 text-center text-[#45474c]">{exam.questionCount} soru</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-center gap-2">
                      {onEditExam ? (
                        <button type="button" onClick={() => onEditExam(exam)} aria-label={`${exam.name} sınavını düzenle`} title="Düzenle" className={editExamClassName}>
                          <MdOutlineEdit aria-hidden="true" className="text-xl" />
                        </button>
                      ) : (
                        <Link href={`${examsHref}/${encodeURIComponent(exam.id)}/update`} aria-label={`${exam.name} sınavını düzenle`} title="Düzenle" className={editExamClassName}>
                          <MdOutlineEdit aria-hidden="true" className="text-xl" />
                        </Link>
                      )}
                      <button type="button" aria-label={`${exam.name} sınavını sil`} title="Sil" onClick={() => setExamToDelete(exam)} className="rounded p-2.5 text-[#45474c] transition-colors hover:bg-red-50 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2">
                        <MdOutlineDelete aria-hidden="true" className="text-xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {exams.length === 0 && (
                <tr><td colSpan={4} className="px-6 py-16 text-center text-[#45474c]">{examListMessages[listStatus]}</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
      <p role="status" className="mt-4 text-sm text-[#006c49]">{message}</p>
      {examToDelete && <DeleteExamDialog exam={examToDelete} onClose={() => setExamToDelete(null)} onDelete={handleDeleteExam} />}
    </main>
  );
}
