export const dataEducation = () => {
  const dataEducationLevel = [
    {
      idEducationLevel: 0,
      labelEducationLevel: "Pilih Jenjang",
    },
    {
      idEducationLevel: 1,
      labelEducationLevel: "Pendidikan Pra Sekolah",
    },
    {
      idEducationLevel: 2,
      labelEducationLevel: "Pendidikan Dasar",
    },
    {
      idEducationLevel: 3,
      labelEducationLevel: "Pendidikan Menengah",
    },
    {
      idEducationLevel: 4,
      labelEducationLevel: "Pendidikan Tinggi",
    },
  ];

  const dataSubEducationLevel = [
    // PRA SEKOLAH
    {
      idEducationLevel: 0,
      idSubEducationLevel: 0,
      subLevelLabel: "Pilih Tingkatan",
    },
    {
      idEducationLevel: 1,
      idSubEducationLevel: 1,
      subLevelLabel: "PAUD (Pendidikan Anak Usia Dini)",
    },
    {
      idEducationLevel: 1,
      idSubEducationLevel: 2,
      subLevelLabel: "TK (Taman Kanak-Kanak)",
    },
    {
      idEducationLevel: 1,
      idSubEducationLevel: 3,
      subLevelLabel: "RA (Raudhatul Athfal)",
    },
    // PENDIDIKAN DASAR
    {
      idEducationLevel: 2,
      idSubEducationLevel: 4,
      subLevelLabel: "SD (Sekolah Dasar)",
    },
    {
      idEducationLevel: 2,
      idSubEducationLevel: 5,
      subLevelLabel: "MI (Madrasah Ibtidaiyah)",
    },
    {
      idEducationLevel: 2,
      idSubEducationLevel: 6,
      subLevelLabel: "SMP (Sekolah Menengah Pertama)",
    },
    {
      idEducationLevel: 2,
      idSubEducationLevel: 7,
      subLevelLabel: "MTs (Madrasah Tsanawiyah)",
    },
    // PENDIDIKAN MENENGAH
    {
      idEducationLevel: 3,
      idSubEducationLevel: 8,
      subLevelLabel: "SMA (Sekolah Menengah Atas)",
    },
    {
      idEducationLevel: 3,
      idSubEducationLevel: 9,
      subLevelLabel: "MA (Madrasah Aliyah)",
    },
    {
      idEducationLevel: 3,
      idSubEducationLevel: 10,
      subLevelLabel: "SMK (Sekolah Menengah Kejuruan)",
    },
    // PENDIDIKAN TINGGI
    {
      idEducationLevel: 4,
      idSubEducationLevel: 11,
      subLevelLabel: "D3 Diploma",
    },
    {
      idEducationLevel: 4,
      idSubEducationLevel: 12,
      subLevelLabel: "S1/D4 Sarjana",
    },
    {
      idEducationLevel: 4,
      idSubEducationLevel: 13,
      subLevelLabel: "S2 Magister",
    },
    {
      idEducationLevel: 4,
      idSubEducationLevel: 14,
      subLevelLabel: "S3 Doktoral",
    },
  ];

  return {
    dataEducationLevel,
    dataSubEducationLevel,
  };
};
