import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, CheckCircle, ArrowLeft, Calendar, MapPin, Star, Zap, Mountain } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function CampPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              {/* <BookOpen className="h-6 w-6 text-white" /> */}
              <Image src="/images/konstanta.png" alt="Konstanta Education Logo" width={120} height={32} className="h-8 w-auto" />
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
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
                Program Intensif
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Camp Program
                <span className="text-purple-600"> Intensif</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Program camp intensif untuk persiapan UTBK dengan metode pembelajaran yang fokus dan terstruktur. 
                Holycamp dan Koncamp dirancang untuk hasil maksimal dalam waktu singkat.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
                Daftar Camp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-3 bg-transparent"
              >
                Info Lengkap
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Camp Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pilihan Program Camp</h2>
            <p className="text-xl text-gray-600">Dua program camp unggulan dengan fokus berbeda</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Holycamp */}
            <Card className="border-2 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-3xl text-purple-600">Holycamp</CardTitle>
                <CardDescription className="text-lg">Camp Persiapan UTBK Intensif</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">7 Hari</div>
                  <div className="text-sm text-purple-700">Program Intensif</div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Yang Akan Anda Dapatkan:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Pembelajaran 12 jam per hari</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Try out harian dengan pembahasan</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Modul eksklusif dan bank soal</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Konseling dan motivasi</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Akomodasi dan konsumsi</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Rp 3.500.000</div>
                  <div className="text-sm text-gray-600 mb-4">All inclusive</div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Daftar Holycamp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Koncamp */}
            <Card className="border-2 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-3xl text-emerald-600">Koncamp</CardTitle>
                <CardDescription className="text-lg">Camp Konsentrasi & Fokus</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">14 Hari</div>
                  <div className="text-sm text-emerald-700">Program Mendalam</div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Yang Akan Anda Dapatkan:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Pembelajaran 8 jam per hari</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Fokus pendalaman materi</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Simulasi UTBK berkala</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Bimbingan personal</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Fasilitas lengkap</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">Rp 5.500.000</div>
                  <div className="text-sm text-gray-600 mb-4">All inclusive</div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Daftar Koncamp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fasilitas Camp</h2>
            <p className="text-xl text-gray-600">Fasilitas lengkap untuk kenyamanan belajar optimal</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ruang Belajar AC</h3>
              <p className="text-gray-600">Ruang belajar ber-AC dengan kapasitas terbatas untuk fokus maksimal</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Asrama Nyaman</h3>
              <p className="text-gray-600">Akomodasi asrama dengan fasilitas lengkap dan lingkungan kondusif</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Konsumsi 3x</h3>
              <p className="text-gray-600">Makan 3x sehari dengan menu bergizi dan sehat</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lokasi Strategis</h3>
              <p className="text-gray-600">Lokasi tenang dan strategis, jauh dari distraksi kota</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Jadwal Camp Terdekat</h2>
            <p className="text-xl text-gray-600">Pilih jadwal yang sesuai dengan kebutuhan Anda</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border-2 border-purple-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-2">Holycamp Batch 1</h3>
                <div className="text-lg text-gray-600">15 - 21 Februari 2024</div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Kuota:</span>
                  <span className="font-semibold">30 siswa</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tersisa:</span>
                  <span className="font-semibold text-orange-600">8 slot</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lokasi:</span>
                  <span className="font-semibold">Puncak, Bogor</span>
                </div>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Daftar Sekarang
              </Button>
            </Card>

            <Card className="p-6 border-2 border-emerald-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-emerald-600 mb-2">Koncamp Batch 1</h3>
                <div className="text-lg text-gray-600">1 - 14 Maret 2024</div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Kuota:</span>
                  <span className="font-semibold">25 siswa</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tersisa:</span>
                  <span className="font-semibold text-orange-600">12 slot</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lokasi:</span>
                  <span className="font-semibold">Cisarua, Bogor</span>
                </div>
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Daftar Sekarang
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimoni Alumni Camp</h2>
            <p className="text-xl text-gray-600">Pengalaman mereka yang telah mengikuti program camp</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                Holycamp benar-benar mengubah cara belajar saya. 7 hari yang sangat intensif tapi hasilnya luar biasa. 
                Skor UTBK saya naik drastis setelah ikut camp ini.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-semibold">D</span>
                </div>
                <div>
                  <div className="font-semibold">Dinda Sari</div>
                  <div className="text-sm text-gray-600">UI 2023</div>
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
                Koncamp memberikan waktu yang cukup untuk benar-benar memahami materi. 
                Suasana belajar yang fokus dan tentor yang sabar membuat saya semakin percaya diri.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-600 font-semibold">F</span>
                </div>
                <div>
                  <div className="font-semibold">Fajar Ramadhan</div>
                  <div className="text-sm text-gray-600">ITB 2023</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Siap untuk Transformasi Belajar?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan program camp intensif dan rasakan perbedaan signifikan dalam persiapan UTBK Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
              Daftar Camp Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-3 bg-transparent"
            >
              Konsultasi Program
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
