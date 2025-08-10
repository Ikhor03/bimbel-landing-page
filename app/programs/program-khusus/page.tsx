import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CheckCircle, ArrowLeft, Target, FileText } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function ProgramKhususPage() {
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
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                Program Spesialis
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Program
                <span className="text-emerald-600"> Khusus</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Program pembelajaran spesialis untuk kebutuhan khusus: Kelas TPS, Pendalaman Materi, 
                Tryout UTBK, dan program pendukung lainnya.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                Pilih Program
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
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pilihan Program Khusus</h2>
            <p className="text-xl text-gray-600">Program yang disesuaikan dengan kebutuhan spesifik Anda</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kelas TPS */}
            <Card className="border-2 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Kelas TPS</CardTitle>
                <CardDescription>Tes Potensi Skolastik Intensif</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Program khusus untuk menguasai TPS dengan strategi dan teknik penyelesaian soal yang efektif.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Penalaran Umum</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Pengetahuan Kuantitatif</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Pengetahuan Umum</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Pemahaman Bacaan</span>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="text-2xl font-bold text-emerald-600">Rp 1.800.000</div>
                  <div className="text-sm text-gray-600 mb-3">per bulan</div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Daftar TPS
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pendalaman Materi */}
            <Card className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Pendalaman Materi</CardTitle>
                <CardDescription>Pemahaman Konsep Mendalam</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Program untuk memperdalam pemahaman materi pelajaran dengan pendekatan konseptual yang kuat.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Matematika Lanjut</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Fisika Konseptual</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Kimia Organik</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Biologi Molekuler</span>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="text-2xl font-bold text-blue-600">Rp 2.200.000</div>
                  <div className="text-sm text-gray-600 mb-3">per bulan</div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Daftar Pendalaman
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tryout UTBK */}
            <Card className="border-2 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Tryout UTBK</CardTitle>
                <CardDescription>Simulasi Ujian Berkala</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Program tryout rutin dengan sistem CBT yang sama dengan UTBK asli untuk mengukur kemampuan.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Tryout Mingguan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Sistem CBT</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Analisis Hasil</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Ranking Nasional</span>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="text-2xl font-bold text-orange-600">Rp 500.000</div>
                  <div className="text-sm text-gray-600 mb-3">per bulan</div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Daftar Tryout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Detail Program</h2>
            <p className="text-xl text-gray-600">Informasi lengkap tentang setiap program khusus</p>
          </div>

          <div className="space-y-12">
            {/* TPS Detail */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Kelas TPS</h3>
                <p className="text-gray-600 mb-6">
                  Program khusus yang dirancang untuk menguasai Tes Potensi Skolastik (TPS) dengan strategi dan teknik 
                  penyelesaian soal yang efektif. Materi disusun berdasarkan analisis soal-soal UTBK terbaru.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Penalaran Umum</h4>
                      <p className="text-gray-600">Logika, analisis, dan penalaran deduktif-induktif</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Pengetahuan Kuantitatif</h4>
                      <p className="text-gray-600">Matematika dasar dan penerapannya</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Pemahaman Bacaan</h4>
                      <p className="text-gray-600">Analisis teks dan interpretasi informasi</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="TPS Class"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Pendalaman Materi Detail */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Advanced Learning"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Pendalaman Materi</h3>
                <p className="text-gray-600 mb-6">
                  Program untuk memperdalam pemahaman konsep-konsep fundamental dalam setiap mata pelajaran. 
                  Cocok untuk siswa yang ingin menguasai materi secara mendalam dan komprehensif.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Pendekatan Konseptual</h4>
                      <p className="text-gray-600">Memahami konsep dasar sebelum aplikasi</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Problem Solving</h4>
                      <p className="text-gray-600">Latihan soal dengan tingkat kesulitan bertahap</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Diskusi Interaktif</h4>
                      <p className="text-gray-600">Sesi tanya jawab dan diskusi kelompok</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tryout Detail */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Tryout UTBK</h3>
                <p className="text-gray-600 mb-6">
                  Program tryout rutin dengan sistem Computer Based Test (CBT) yang identik dengan UTBK asli. 
                  Dilengkapi dengan analisis hasil dan ranking untuk mengukur progress belajar.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Sistem CBT Asli</h4>
                      <p className="text-gray-600">Interface dan sistem yang sama dengan UTBK</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Analisis Mendalam</h4>
                      <p className="text-gray-600">Laporan detail kemampuan per subtes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-orange-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Ranking Nasional</h4>
                      <p className="text-gray-600">Posisi ranking dibanding peserta lain</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="CBT Tryout"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Paket Kombinasi</h2>
            <p className="text-xl text-gray-600">Hemat lebih banyak dengan paket kombinasi program</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-emerald-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-emerald-600 text-white">Populer</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Paket Lengkap</CardTitle>
                <CardDescription>TPS + Pendalaman + Tryout</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">Rp 3.800.000</div>
                  <div className="text-sm text-gray-600 line-through">Rp 4.500.000</div>
                  <div className="text-sm text-emerald-600 font-semibold">Hemat Rp 700.000</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Kelas TPS Lengkap</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Pendalaman Semua Mapel</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Tryout Unlimited</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Konsultasi Personal</span>
                  </div>
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Pilih Paket Lengkap
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-all">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Paket Fokus</CardTitle>
                <CardDescription>TPS + Tryout</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">Rp 2.100.000</div>
                  <div className="text-sm text-gray-600 line-through">Rp 2.300.000</div>
                  <div className="text-sm text-blue-600 font-semibold">Hemat Rp 200.000</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Kelas TPS Intensif</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Tryout Mingguan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Analisis Hasil</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Modul Digital</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Pilih Paket Fokus
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-all">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Paket Dasar</CardTitle>
                <CardDescription>Pendalaman + Tryout</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">Rp 2.500.000</div>
                  <div className="text-sm text-gray-600 line-through">Rp 2.700.000</div>
                  <div className="text-sm text-orange-600 font-semibold">Hemat Rp 200.000</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Pendalaman Materi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Tryout Berkala</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Pembahasan Detail</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Progress Report</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Pilih Paket Dasar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Siap Meningkatkan Kemampuan Anda?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Pilih program khusus yang sesuai dengan kebutuhan Anda dan rasakan peningkatan signifikan dalam persiapan UTBK.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
              Konsultasi Program
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-3 bg-transparent"
            >
              Lihat Jadwal
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
