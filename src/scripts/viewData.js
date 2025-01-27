export const admissionObject = {
  heading: {
    ar: "جدول القبول",
    en: "Admission Table",
  },
  rows: [
    "ID",
    "username",
    "email",
    "password",
    "status",
    "created_at",
    "updated_at",
    "roleID",
  ],
};

export const statisticsObject = {
  heading: {
    ar: "جدول الإحصائيات",
    en: "Statistics Table",
  },
  rows: ["std_counter", "subject_counter", "average"],
};

export const subjectsObject = {
  heading: {
    ar: "جدول المواد",
    en: "Subjects Table",
  },
  rows: ["ID", "subject_name", "subject_code", "teachingstaff_ID"],
};

export const studentsObject = {
  heading: {
    ar: "جدول الطلاب",
    en: "Students Table",
  },
  rows: [
    "id",
    "name",
    "BOD",
    "admission_date",
    "gender",
    "student_status",
    "feeID",
    "classID",
    "user_id",
  ],
};

export const nonAuthStudentsObject = {
  heading: {
    ar: "جدول الطلاب",
    en: "Students Table",
  },
  rows: ["id", "name", "gender", "classID"],
};

export const teachersObject = {
  heading: {
    ar: "جدول المعلمين",
    en: "Teachers Table",
  },
  rows: [
    "ID",
    "name",
    "specialization",
    "address",
    "BOD",
    "hire_date",
    "gender",
    "salary",
    "supervisorID",
    "user_id",
  ],
};

export const nontAuthTeachersObject = {
  heading: {
    ar: "جدول المعلمين",
    en: "Teachers Table",
  },
  rows: ["ID", "name", "specialization", "gender"],
};
