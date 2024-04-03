import Image from "next/image";

import shipperIllustration from "@/app/assets/shipper-illustration.png";
import transporterIllustration from "@/app/assets/transporter-illustration.png";
import driverIllustration from "@/app/assets/driver-illustration.jpeg";
import compassIcon from "@/app/assets/compass-icon.png";

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center py-20 lg:px-24 px-10 gap-y-16">
      <section className="w-full flex flex-col gap-y-12 text-black">
        <h2 className="font-bold text-[2rem]">Tentang AGROS Indonesia</h2>
        <div className="flex flex-col justify-center items-center w-full gap-y-16">
          <Image src={compassIcon} alt="compass logo" className="w-6/12" />
          <div className="w-full">
            <p className="text-center">
              Terinspirasi dari arah mata angin yang membawa pada satu
              destinasi, Agros akan terus bergerak menciptakan pemerataan
              ekonomi sehingga bisa menjadi penghubung para stakeholders dalam
              aktivitas muatan berat, mulai dari shipper, transporter, driver,
              mitra pemeliharan, seller dan buyer intermoda yang menjangkau
              seluruh penjuru Nusantara.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col gap-y-4 text-black">
        <h2 className="font-bold text-2xl">Layanan AGROS Indonesia</h2>
        <div className="flex gap-x-6 w-full">
          <div className="flex flex-col gap-y-3 w-4/12 bg-white rounded-[10px]">
            <div className="h-[60%]">
              <Image
                src={shipperIllustration}
                alt="shipper illustration"
                className="rounded-[10px] w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-y-2 px-3">
              <h4 className="font-bold text-lg">AGROS Shipper</h4>
              <p>
                Agros adalah sistem terpadu satu pintu—one stop service yang
                berfokus pada pelayanan jasa logistik muatan berat. Agros
                menawarkan mitra terlatih, efisiensi dan{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 w-4/12 bg-white rounded-[10px]">
            <div className="h-[60%]">
              <Image
                src={transporterIllustration}
                alt="transporter illustration"
                className="rounded-[10px] w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-y-2 px-3">
              <h4 className="font-bold text-lg">AGROS Transporter</h4>
              <p>
                Tidak ada yang tidak mungkin. Kini, Perusahaan bisa dengan cepat
                mendapatkan keuntungan tanpa harus melakukan hal berat.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 w-4/12 bg-white rounded-[10px]">
            <div className="h-[60%]">
              <Image
                src={driverIllustration}
                alt="driver illustration"
                className="rounded-[10px] w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-y-2 px-3">
              <h4 className="font-bold text-lg">AGROS Driver</h4>
              <p>
                AGROS menawarkan keleluasaan untuk memilih proyek sehingga
                peningkatan pendapatan bukan lagi jadi impian.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
