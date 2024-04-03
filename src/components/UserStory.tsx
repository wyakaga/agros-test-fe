import Image from "next/image";

import compassIcon from "@/app/assets/compass-icon.png";

function UserStory() {
  return (
    <section className="w-full flex flex-col gap-y-12 text-black">
      <h2 className="font-bold text-[2rem]">Cerita Kerabat AGROS</h2>
      <div className="flex items-center w-full gap-x-16">
        <Image src={compassIcon} alt="compass logo" className="w-5/12" />
        <div className="w-7/12">
          <p>
            Terinspirasi dari arah mata angin yang membawa pada satu destinasi,
            Agros akan terus bergerak menciptakan pemerataan ekonomi sehingga
            bisa menjadi penghubung para stakeholders dalam aktivitas muatan
            berat, mulai dari shipper, transporter, driver, mitra pemeliharan,
            seller dan buyer intermoda yang menjangkau seluruh penjuru
            Nusantara.
          </p>
        </div>
      </div>
    </section>
  );
}

export default UserStory;
