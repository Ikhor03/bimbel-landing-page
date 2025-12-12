import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, CheckCircle, ArrowLeft, Star, Globe, User, Headphones } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function PrivateToeflPage() {
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
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                Program Personal
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Private Class &
                <span className="text-orange-600"> TOEFL</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Program pembelajaran personal dengan pendekatan one-on-one dan persiapan TOEFL untuk kebutuhan 
                akademik dan profesional internasional.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
                Konsultasi Gratis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-3 bg-transparent"
              >
                Lihat Paket
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pilihan Program</h2>
            <p className="text-xl text-gray-600">Pembelajaran personal yang disesuaikan dengan kebutuhan Anda</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Private Class */}
            <Card className="border-2 hover:border-orange-200 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-3xl text-orange-600">Private Class</CardTitle>
                <CardDescription className="text-lg">Pembelajaran One-on-One</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-lg font-semibold text-orange-800 mb-1">Fleksibel</div>
                  <div className="text-sm text-orange-700">Jadwal & Materi Sesuai Kebutuhan</div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Keunggulan Private Class:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-600" />
                      <span className="text-sm">Pembelajaran 1-on-1 dengan tentor</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-600" />
                      <span className="text-sm">Jadwal fleksibel sesuai kebutuhan</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-600" />
                      <span className="text-sm">Materi disesuaikan kemampuan</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-600" />
                      <span className="text-sm">Progress tracking personal</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-600" />
                      <span className="text-sm">Lokasi bisa di rumah/online</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Mata Pelajaran:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm bg-gray-50 p-2 rounded">Matematika</div>
                    <div className="text-sm bg-gray-50 p-2 rounded">Fisika</div>
                    <div className="text-sm bg-gray-50 p-2 rounded">Kimia</div>
                    <div className="text-sm bg-gray-50 p-2 rounded">Biologi</div>
                    <div className="text-sm bg-gray-50 p-2 rounded">B. Indonesia</div>
                    <div className="text-sm bg-gray-50 p-2 rounded">B. Inggris</div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <div className="text-2xl font-bold text-orange-600 mb-1">Mulai dari</div>
                  <div className="text-3xl font-bold text-orange-600">Rp 300.000</div>
                  <div className="text-sm text-gray-600 mb-4">per sesi (2 jam)</div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Konsultasi Private
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* TOEFL Program */}
            <Card className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-3xl text-blue-600">TOEFL Preparation</CardTitle>
                <CardDescription className="text-lg">Persiapan TOEFL iBT & ITP</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-lg font-semibold text-blue-800 mb-1">Target Score</div>
                  <div className="text-sm text-blue-700">500+ (ITP) | 80+ (iBT)</div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Program TOEFL Meliputi:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Listening Comprehension</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Structure & Written Expression</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Reading Comprehension</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Speaking (untuk iBT)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Writing (untuk iBT)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Fasilitas:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Headphones className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Audio materials native speaker</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Modul TOEFL terlengkap</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Simulasi test berkala</span>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">Paket Lengkap</div>
                  <div className="text-3xl font-bold text-blue-600">Rp 2.500.000</div>
                  <div className="text-sm text-gray-600 mb-4">20 sesi + mock test</div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Daftar TOEFL
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Private Class Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Paket Private Class</h2>
            <p className="text-xl text-gray-600">Pilih paket yang sesuai dengan kebutuhan belajar Anda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-orange-200 transition-all">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Paket Reguler</CardTitle>
                <CardDescription>8 Sesi Pembelajaran</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">Rp 2.200.000</div>
                  <div className="text-sm text-gray-600">8 sesi x 2 jam</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">1-on-1 dengan tentor</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Materi sesuai kebutuhan</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Jadwal fleksibel</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Progress report</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Pilih Paket
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-600 text-white">Terpopuler</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Paket Intensif</CardTitle>
                <CardDescription>16 Sesi Pembelajaran</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">Rp 4.000.000</div>
                  <div className="text-sm text-gray-600 line-through">Rp 4.400.000</div>
                  <div className="text-sm text-orange-600 font-semibold">Hemat Rp 400.000</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Semua fitur Reguler</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Modul eksklusif</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Try out personal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Konsultasi unlimited</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Pilih Paket
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-all">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Paket Premium</CardTitle>
                <CardDescription>24 Sesi + Bonus</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">Rp 5.500.000</div>
                  <div className="text-sm text-gray-600 line-through">Rp 6.600.000</div>
                  <div className="text-sm text-orange-600 font-semibold">Hemat Rp 1.100.000</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Semua fitur Intensif</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Bonus 4 sesi gratis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Akses online platform</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Garansi nilai</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Pilih Paket
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TOEFL Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Program TOEFL Preparation</h2>
              <p className="text-gray-600 mb-8">
                Program persiapan TOEFL yang komprehensif untuk membantu Anda mencapai skor target. 
                Tersedia untuk TOEFL ITP dan iBT dengan metode pembelajaran yang terbukti efektif.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">TOEFL ITP (Institutional Testing Program)</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Listening Comprehension (50 soal)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Structure & Written Expression (40 soal)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Reading Comprehension (50 soal)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">TOEFL iBT (Internet-Based Test)</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Reading (3-4 passages)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Listening (conversations & lectures)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Speaking (6 tasks)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>Writing (2 essays)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="TOEFL Preparation"
                width={600}
                height={500}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Pencapaian siswa Private Class dan TOEFL</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                Private class matematika sangat membantu saya memahami konsep yang sulit. 
                Tentor sabar dan metodenya mudah dipahami.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-orange-600 font-semibold">M</span>
                </div>
                <div>
                  <div className="font-semibold">Maya Putri</div>
                  <div className="text-sm text-gray-600">Kelas 12 IPA</div>
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
                Alhamdulillah berhasil dapat skor TOEFL 550! Program TOEFL di Konstanta benar-benar lengkap dan terstruktur.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">A</span>
                </div>
                <div>
                  <div className="font-semibold">Ahmad Fauzi</div>
                  <div className="text-sm text-gray-600">TOEFL Score: 550</div>
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
                Private class kimia membantu saya naik peringkat drastis di sekolah. 
                Sekarang kimia jadi mata pelajaran favorit saya!
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-orange-600 font-semibold">L</span>
                </div>
                <div>
                  <div className="font-semibold">Lisa Anggraini</div>
                  <div className="text-sm text-gray-600">Kelas 11 IPA</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mulai Pembelajaran Personal Anda</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Dapatkan pembelajaran yang disesuaikan dengan kebutuhan dan gaya belajar Anda. 
            Konsultasi gratis untuk menentukan program yang tepat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
              Konsultasi Gratis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-3 bg-transparent"
            >
              WhatsApp Kami
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
