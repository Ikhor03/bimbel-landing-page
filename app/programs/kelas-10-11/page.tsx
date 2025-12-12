import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Clock, CheckCircle, ArrowLeft, Calendar, MapPin, Star } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function Kelas1011Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              {/* <BookOpen className="h-6 w-6 text-white" /> */}
              <Image src="/images/konstanta.PNG" alt="Konstanta Education Logo" width={120} height={32} className="h-8 w-auto" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Konstanta Education</span>
          </Link>
          <Link href="/">
            <Button variant="outline" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Kembali</span>
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                  Program Unggulan
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Exclusive Learning Class
                  <span className="text-emerald-600"> Kelas 10 & 11</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Program persiapan dini untuk siswa kelas 10 dan 11 dengan fokus penguatan dasar akademik dan persiapan menuju kelas 12.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                  Daftar Sekarang
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-3 bg-transparent"
                >
                  Konsultasi Gratis
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Students in classroom"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang Program</h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Program Exclusive Learning Class untuk kelas 10 & 11 dirancang khusus untuk memberikan fondasi akademik yang kuat sejak dini. Program ini membantu siswa mempersiapkan diri menghadapi tantangan akademik yang lebih berat di kelas 12 dan UTBK.
                  </p>
                  <p>
                    Dengan metode pembelajaran yang interaktif dan tentor berpengalaman, siswa akan mendapatkan pemahaman mendalam tentang konsep-konsep dasar yang akan menjadi bekal penting untuk sukses di jenjang selanjutnya.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Keunggulan Program</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Pembelajaran Hybrid</h4>
                      <p className="text-gray-600">Kombinasi pembelajaran offline dan online untuk fleksibilitas maksimal</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Kelas Kecil</h4>
                      <p className="text-gray-600">Maksimal 15 siswa per kelas untuk perhatian personal</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Modul Eksklusif</h4>
                      <p className="text-gray-600">Materi pembelajaran yang disusun khusus oleh tim ahli</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Progress Tracking</h4>
                      <p className="text-gray-600">Monitoring perkembangan belajar secara berkala</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Mata Pelajaran</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {['Matematika', 'Fisika', 'Kimia', 'Biologi', 'Bahasa Indonesia', 'Bahasa Inggris', 'Sejarah', 'Geografi'].map((subject) => (
                    <div key={subject} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <BookOpen className="h-5 w-5 text-emerald-600" />
                      <span className="font-medium text-gray-900">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informasi Program</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-emerald-600" />
                    <div>
                      <div className="font-medium">Kapasitas Kelas</div>
                      <div className="text-sm text-gray-600">Maksimal 15 siswa</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-emerald-600" />
                    <div>
                      <div className="font-medium">Durasi</div>
                      <div className="text-sm text-gray-600">1 tahun akademik</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-emerald-600" />
                    <div>
                      <div className="font-medium">Jadwal</div>
                      <div className="text-sm text-gray-600">3x seminggu</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                    <div>
                      <div className="font-medium">Lokasi</div>
                      <div className="text-sm text-gray-600">Offline & Online</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Investasi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">Rp 2.500.000</div>
                  <div className="text-sm text-gray-600 mb-4">per semester</div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Daftar Sekarang
                  </Button>
                  <div className="text-xs text-gray-500 mt-2 text-center">
                    *Termasuk modul dan akses online
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Testimoni</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Program kelas 10-11 di Konstanta sangat membantu saya memahami konsep dasar dengan baik.
                  </p>
                  <div className="text-sm font-medium">- Maya Sari, Kelas 11</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Siap Memulai Perjalanan Belajar?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan siswa yang telah merasakan manfaat program Exclusive Learning Class kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
              Daftar Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-3 bg-transparent"
            >
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
