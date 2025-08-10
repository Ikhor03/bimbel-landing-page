import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Users, Award, MapPin, Phone, Mail, Star, CheckCircle, Target, TrendingUp, Globe } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Konstanta Education</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Program
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => document.getElementById('partnerships')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Kemitraan
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Kontak
            </button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Daftar Sekarang</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                  Bimbingan Belajar Terpercaya
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Wujudkan Impian Masuk
                  <span className="text-emerald-600"> Universitas Favorit</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Konstanta Education hadir sebagai solusi terbaik untuk persiapan UTBK, Kedokteran, dan berbagai
                  program unggulan lainnya. Dengan metode pembelajaran eksklusif dan tentor berpengalaman.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                  Konsultasi Gratis
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-3 bg-transparent"
                  onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Lihat Program
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">1000+</div>
                  <div className="text-gray-600">Siswa Lulus PTN</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">50+</div>
                  <div className="text-gray-600">Sekolah Mitra</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">95%</div>
                  <div className="text-gray-600">Tingkat Kelulusan</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Students studying"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Akreditasi A</div>
                    <div className="text-sm text-gray-600">Lembaga Terpercaya</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Program Unggulan</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Pembelajaran Eksklusif</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih program yang sesuai dengan kebutuhan dan target universitas impianmu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {/* Program 1 */}
            <Card className="border-2 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl">Exclusive Learning Class</CardTitle>
                <CardDescription className="text-lg">Kelas 10 & 11</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Program persiapan dini untuk siswa kelas 10 dan 11 dengan fokus penguatan dasar akademik.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Pembelajaran Offline & Online</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Kelas Kecil (Max 15 siswa)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm">Modul Eksklusif</span>
                  </div>
                </div>
                <Link href="/programs/kelas-10-11">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Pelajari Lebih Lanjut</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Program 2 */}
            <Card className="border-2 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Exclusive Learning Class</CardTitle>
                <CardDescription className="text-lg">Kelas 12 (Kedokteran, MIPA, Soshum)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Program intensif untuk siswa kelas 12 dengan spesialisasi jurusan sesuai minat.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Spesialisasi Kedokteran</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Program MIPA & Soshum</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Simulasi UTBK Berkala</span>
                  </div>
                </div>
                <Link href="/programs/kelas-12">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Pelajari Lebih Lanjut</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Additional Programs */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Camp Program</h3>
              <p className="text-gray-600 mb-4">Holycamp & Koncamp untuk persiapan intensif</p>
              <Link href="/programs/camp">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent">
                  Info Selengkapnya
                </Button>
              </Link>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Program Khusus</h3>
              <p className="text-gray-600 mb-4">TPS, Pendalaman Materi, Tryout UTBK</p>
              <Link href="/programs/program-khusus">
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent">
                  Info Selengkapnya
                </Button>
              </Link>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Private & TOEFL</h3>
              <p className="text-gray-600 mb-4">Kelas Private dan Persiapan TOEFL</p>
              <Link href="/programs/private-toefl">
                <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent">
                  Info Selengkapnya
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">
              Mengapa Konstanta Education?
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Keunggulan yang Membedakan Kami</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tentor Berpengalaman</h3>
              <p className="text-gray-600">Tentor lulusan PTN terbaik dengan pengalaman mengajar bertahun-tahun</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Metode Pembelajaran</h3>
              <p className="text-gray-600">Metode pembelajaran inovatif yang terbukti efektif meningkatkan prestasi</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kelas Kecil</h3>
              <p className="text-gray-600">Pembelajaran dalam kelas kecil untuk perhatian maksimal pada setiap siswa</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Record</h3>
              <p className="text-gray-600">Tingkat kelulusan 95% dengan ribuan alumni di PTN favorit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section id="partnerships" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Kemitraan</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dipercaya Sekolah-Sekolah Terbaik</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Konstanta Education telah bermitra dengan berbagai sekolah ternama di Jakarta, Riau, Bekasi, dan kota-kota
              lainnya
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <MapPin className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Jakarta</h3>
              <p className="text-gray-600">15+ Sekolah Mitra</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Riau</h3>
              <p className="text-gray-600">20+ Sekolah Mitra</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bekasi & Sekitarnya</h3>
              <p className="text-gray-600">18+ Sekolah Mitra</p>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ingin Sekolah Anda Bermitra dengan Kami?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Bergabunglah dengan jaringan sekolah-sekolah terbaik yang telah mempercayai Konstanta Education sebagai
              partner dalam meningkatkan prestasi siswa.
            </p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Hubungi Tim Partnership
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">Testimoni</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Apa Kata Mereka?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Alhamdulillah berkat Konstanta Education saya bisa lolos FK UI. Metode pembelajarannya sangat efektif
                dan tentor-tentornya sangat membantu."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-600 font-semibold">A</span>
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
                "Program Soshum di Konstanta Education benar-benar membantu saya memahami materi dengan lebih baik.
                Sekarang saya kuliah di FH UGM!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-orange-600 font-semibold">S</span>
                </div>
                <div>
                  <div className="font-semibold">Sari Dewi</div>
                  <div className="text-sm text-gray-600">FH UGM 2023</div>
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
                "Tryout UTBK di Konstanta Education sangat membantu saya mengukur kemampuan. Akhirnya bisa lolos ITB
                jurusan Teknik Informatika!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-semibold">R</span>
                </div>
                <div>
                  <div className="font-semibold">Rizki Maulana</div>
                  <div className="text-sm text-gray-600">ITB 2023</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">Hubungi Kami</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Siap Memulai Perjalanan Menuju PTN Impian?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Konsultasikan kebutuhan belajar Anda dengan tim ahli kami. Dapatkan rekomendasi program yang tepat untuk
                mencapai target universitas impian.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Telepon</div>
                    <div className="text-gray-600">+62 21 1234 5678</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">info@konstantaeducation.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Alamat</div>
                    <div className="text-gray-600">Jl. Pendidikan No. 123, Jakarta Selatan</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Konsultasi Gratis</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <Input placeholder="Masukkan nama lengkap" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor WhatsApp</label>
                    <Input placeholder="Masukkan nomor WhatsApp" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="Masukkan email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kelas</label>
                  <Input placeholder="Kelas berapa sekarang?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Program yang Diminati</label>
                  <Input placeholder="Program apa yang ingin diikuti?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <Textarea placeholder="Ceritakan target universitas dan jurusan impian Anda" rows={4} />
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3">Kirim Pesan</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
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
            <p>&copy; 2024 Konstanta Education. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
