"use client";
import TopPageMenu from "@/components/ui/top-page-menu";
import Dialog from "@/components/ui/dialog";
import useAlumniesController from "@/controllers/admin/alumnies/alumnies.controller";
import CreateEditAlumniForm from "../../../components/admin/create-edit-alumni-form";

const AlumniesPage = () => {
  const { setCreateEditAlumniesForm, showCreateEditAlumniesForm } =
    useAlumniesController();

  return (
    <div className="flex flex-col w-full h-full bg-white rounded-md shadow-md border border-[var(--color-border)] p-2">
      <TopPageMenu
        setShowCreateDialog={() => setCreateEditAlumniesForm(true)}
        createDialogTitle={"เพิ่มรายชื่อศิษย์เก่า"}
        sortMenusItems={[]}
      />

      {/* ฟอร์มเพิ่มข้อมูลศิษย์เก่า */}
      <Dialog title="เพิ่มข้อมูลศิษย์เก่า" isOpen={showCreateEditAlumniesForm} onClose={() => setCreateEditAlumniesForm(false)}>
        <form className="w-[330px] lg:w-[450px] px-1 text-sm lg:text-[1rem] flex flex-col items-start">
          <CreateEditAlumniForm alumni={null}/>
        </form>
      </Dialog>
    </div>
  );
};
export default AlumniesPage;
