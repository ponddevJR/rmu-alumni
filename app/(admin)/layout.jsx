import Sidebar from "../../components/ui/sidebar";
import "@/styles/sidebar.css"

const Layout = ({children}) => {
  return (
    <div className="w-screen overflow-x-hidden  h-screen flex justify-end bg-gradient-to-bl from-[var(--color-border)] to-[var(--color-bg)]">
        <Sidebar/>
        <main className="w-full overflow-y-auto mt-6 md:w-4/5 md:mt-0 flex flex-col h-full py-3 px-5">
            {children}
        </main>
    </div>
  )
}
export default Layout