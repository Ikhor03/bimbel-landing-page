import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, CheckCircle, ArrowLeft, Star, Target } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function Kelas12Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-white" />
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
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                  Program Intensif
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Exclusive Learning Class
                  <span className="text-orange-600"> Kelas 12</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Program intensif untuk siswa kelas 12 dengan spesialisasi Kedokteran, MIPA, dan Soshum. Persiapan terbaik untuk UTBK dan masuk PTN favorit.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
                  Daftar Sekarang
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-3 bg-transparent"
                >
                  Konsultasi Gratis
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Students preparing for UTBK"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Specializations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pilih Spesialisasi Anda</h2>
            <p className="text-xl text-gray-600">Program yang disesuaikan dengan jurusan dan universitas target</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-red-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Program Kedokteran</CardTitle>
                <CardDescription>Fokus persiapan masuk Fakultas Kedokteran</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Biologi Intensif</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Kimia Organik</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Fisika Medis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm">TPS Khusus Kedokteran</span>
                  </div>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">Pilih Program</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Program MIPA</CardTitle>
                <CardDescription>Matematika dan Ilmu Pengetahuan Alam</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Matematika Lanjut</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Fisika Teknik</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Kimia Analitik</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Biologi Molekuler</span>
                  </div>
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Pilih Program</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Program Soshum</CardTitle>
                <CardDescription>Sosial dan Humaniora</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Sejarah Indonesia</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Geografi Sosial</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Sosiologi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Ekonomi</span>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Pilih Program</Button>
              </CardContent>
            </Card>
          </div>

          {/* Program Features */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Keunggulan Program Kelas 12</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Simulasi UTBK Berkala</h4>
                    <p className="text-gray-600">Try out UTBK setiap minggu dengan sistem CBT yang sama dengan ujian asli</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Pembahasan Soal Terkini</h4>
                    <p className="text-gray-600">Analisis soal-soal UTBK tahun sebelumnya dan prediksi soal terbaru</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Konseling Jurusan</h4>
                    <p className="text-gray-600">Bimbingan pemilihan jurusan dan universitas sesuai minat dan kemampuan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Kelas Intensif</h4>
                    <p className="text-gray-600">Pembelajaran 5x seminggu dengan durasi yang disesuaikan kebutuhan</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Jadwal Pembelajaran</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">Senin - Jumat</div>
                      <div className="text-sm text-gray-600">16:00 - 19:00</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-gray-900">Sabtu</div>
                      <div className="text-sm text-gray-600">08:00 - 12:00</div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="font-semibold text-orange-800">Try Out UTBK</div>
                    <div className="text-sm text-orange-600">Setiap Minggu Pagi</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Investasi Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600 mb-2">Rp 4.500.000</div>
                  <div className="text-sm text-gray-600 mb-4">per semester</div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 mb-3">
                    Daftar Sekarang
                  </Button>
                  <div className="text-xs text-gray-500 text-center">
                    *Termasuk modul, try out, dan konseling
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kisah Sukses Alumni</h2>
            <p className="text-xl text-gray-600">Mereka yang berhasil masuk PTN favorit</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                Program Kedokteran di Konstanta benar-benar membantu saya lolos FK UI. Simulasi UTBK-nya sangat mirip dengan ujian asli.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 font-semibold">A</span>
                </div>
                <div>
                  <div className="font-semibold">Andi Pratama</div>
                  <div className="text-sm text-gray-600">FK UI 2023</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                Program MIPA sangat lengkap. Saya berhasil masuk Teknik Informatika ITB dengan skor UTBK yang memuaskan.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-600 font-semibold">R</span>
                </div>
                <div>
                  <div className="font-semibold">Rizki Maulana</div>
                  <div className="text-sm text-gray-600">ITB 2023</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                Program Soshum memberikan pemahaman mendalam tentang materi. Alhamdulillah bisa lolos FH UGM.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-semibold">S</span>
                </div>
                <div>
                  <div className="font-semibold">Sari Dewi</div>
                  <div className="text-sm text-gray-600">FH UGM 2023</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Waktunya Wujudkan Impian PTN Favorit!</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Jangan sia-siakan kesempatan emas ini. Bergabunglah dengan program intensif kelas 12 dan raih PTN impianmu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
              Daftar Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-3 bg-transparent"
            >
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
