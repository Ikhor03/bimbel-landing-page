import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Image
                  src="/images/konstanta.PNG"
                  alt="Konstanta Education Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
              <span className="text-xl font-bold">Konstanta Education</span>
            </div>
            <p className="text-gray-400 mb-4">
              Wujudkan impian masuk universitas favorit bersama Konstanta Education.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Program</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Kelas 10 & 11</li>
              <li>Kelas 12 Kedokteran</li>
              <li>Kelas 12 MIPA</li>
              <li>Kelas 12 Soshum</li>
              <li>Camp Program</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Kelas TPS</li>
              <li>Pendalaman Materi</li>
              <li>Tryout UTBK</li>
              <li>Private Class</li>
              <li>TOEFL Preparation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+62 21 1234 5678</li>
              <li>info@konstantaeducation.com</li>
              <li>Jl. Pendidikan No. 123</li>
              <li>Jakarta Selatan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="text-gray-400">&copy; 2025 Konstanta Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
