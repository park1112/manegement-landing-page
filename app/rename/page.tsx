import FileRenamer from '@/components/FileRenamer'
import Navbar from '@/components/Navbar'

export default function RenamePage() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <FileRenamer />
      </div>
    </>
  )
}