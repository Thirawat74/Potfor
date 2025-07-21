export default function HomePage() { return ( <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6"> {/* โลโก้ด้านบนซ้าย */} <div className="absolute top-4 left-4 text-white text-xs sm:text-sm font-mono tracking-widest"> “THIRAWAT” </div>

{/* เมนูด้านขวาบน */}
  <div className="absolute top-4 right-6 flex space-x-4 text-sm">
    <a href="#" className="hover:underline">หน้าแรก</a>
    <a href="#" className="hover:underline">ประวัติส่วนตัว</a>
    <a href="#" className="hover:underline">ผลงาน</a>
  </div>

  {/* เนื้อหากลางหน้า */}
  <div className="mt-12">
    {/* โลโก้กลางแบบกราฟิก */}
    <h1 className="text-5xl sm:text-6xl font-bold text-gray-300 mb-6">
      ฐิรวัตน์
    </h1>
    <p className="text-gray-400 text-lg sm:text-xl mb-8">
      สวัสดีบร ถิรวัตน์ เตียเนตร นี้คือเว็บ Portfolio ของผมเองหรือ เอาไว้โชว์ผลงานของผมนะครับ
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="#contact"
        className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-300"
      >
        ติดต่อเรา
      </a>
      <a
        href="#projects"
        className="border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black"
      >
        ดูผลงานของผม
      </a>
    </div>
  </div>
</main>

); }

