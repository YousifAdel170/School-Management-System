import {
  URL_GET_TEACHER_IDS,
  URL_UPDATE_STUDENT,
  URL_UPDATE_SUBJECT,
  URL_UPDATE_TEACHER,
  VIEW_STUDENT_TYPE,
  VIEW_SUBJECT_TYPE,
  VIEW_TEACHER_TYPE,
} from "./config";

export const studentUpdateConfig = {
  heading: { ar: "تحديث  الطالب", "en-US": "Update Student" },

  FormLabel: { ar: "تحديث  بيانات الطالب ", "en-US": "Update the student" },

  inputs: [
    {
      name: "name",
      type: "text",
      placeholder: { "en-US": "Full Name", ar: "الاسم الكامل " },
    },
    {
      name: "username",
      type: "text",
      placeholder: { "en-US": "Username", ar: "اسم المستخدم" },
    },
    {
      name: "email",
      type: "email",
      placeholder: { "en-US": "Email Address", ar: "البريد الإلكتروني" },
    },
    {
      name: "password",
      type: "password",
      placeholder: { "en-US": "Password", ar: "كلمة المرور" },
    },
    {
      name: "confirmPass",
      type: "password",
      placeholder: {
        "en-US": "Password Confirmation",
        ar: "تأكيد كلمة المرور",
      },
    },
    {
      name: "BOD",
      type: "date",
      placeholder: { "en-US": "Birthdate", ar: "تاريخ الميلاد" },
    },
  ],

  selects: [
    {
      name: "gender",
      heading: { "en-US": "Select Gender", ar: "اختر الجنس" },
      options: [
        { value: 1, name: { ar: "ذكر", "en-US": "Male" } },
        { value: 2, name: { ar: "أنثى", "en-US": "Female" } },
      ],
    },
  ],

  button: { ar: "تحديث  الطالب", "en-US": "Update Student" },

  url_add: URL_UPDATE_STUDENT,
  view_type: VIEW_STUDENT_TYPE,
};

export const teacherUpdateConfig = {
  heading: { ar: "تحديث  المعلم", "en-US": "Update Teacher" },
  FormLabel: { ar: "تحديث المعلم", "en-US": "Update The Teacher" },

  inputs: [
    {
      name: "name",
      type: "text",
      placeholder: { "en-US": "Full Name", ar: "الاسم كامل" },
    },
    {
      name: "username",
      type: "text",
      placeholder: { "en-US": "Username", ar: "اسم المستخدم" },
    },
    {
      name: "email",
      type: "email",
      placeholder: { "en-US": "Email Address", ar: "البريد الإلكتروني" },
    },
    {
      name: "password",
      type: "password",
      placeholder: { "en-US": "Password", ar: "كلمة المرور" },
    },
    {
      name: "confirmPass",
      type: "password",
      placeholder: {
        "en-US": "Password Confirmation",
        ar: "تأكيد كلمة المرور",
      },
    },
    {
      name: "address",
      type: "text",
      placeholder: { "en-US": "Address", ar: "العنوان" },
    },
    {
      name: "salary",
      type: "number",
      placeholder: { "en-US": "Salary", ar: "الراتب" },
    },
    {
      name: "BOD",
      type: "date",
      placeholder: { "en-US": "Birthdate", ar: "تاريخ الميلاد" },
    },
  ],

  selects: [
    {
      name: "gender",
      heading: { "en-US": "Select Gender", ar: "اختر الجنس" },
      options: [
        { value: 1, name: { ar: "ذكر", "en-US": "Male" } },
        { value: 2, name: { ar: "أنثى", "en-US": "Female" } },
      ],
    },
    {
      name: "specialization",
      heading: { "en-US": "Select Specialization", ar: "اختر التخصص" },
      options: [
        { value: 1, name: { ar: "برمجيات", "en-US": "Software" } },
        { value: 2, name: { ar: "تاريخ", "en-US": "History" } },
        { value: 3, name: { ar: "رياضيات", "en-US": "Mathematics" } },
        { value: 4, name: { ar: "فيزياء", "en-US": "Physics" } },
        { value: 5, name: { ar: "أحياء", "en-US": "Biology" } },
        {
          value: 6,
          name: { ar: "علوم الكمبيوتر", "en-US": "Computer Science" },
        },
        { value: 7, name: { ar: "أدب", "en-US": "Literature" } },
      ],
    },
  ],

  button: { ar: "إضافة معلم", "en-US": "Update Teacher" },

  url_add: URL_UPDATE_TEACHER,
  view_type: VIEW_TEACHER_TYPE,
};

export const subjectsUpdateonfig = {
  heading: { ar: "تحديث  المادة", "en-US": "Update  Subject" },
  FormLabel: { ar: "تحديث  المادة", "en-US": "Update The Subject" },

  inputs: [
    {
      name: "subjectName",
      type: "text",
      placeholder: { "en-US": "Subject Name", ar: "اسم المادة" },
    },
    {
      name: "subjectCode",
      type: "text",
      placeholder: { "en-US": "Subject Code", ar: "رمز المادة" },
    },
  ],

  selects: [
    {
      name: "teachingstaffID",
      heading: {
        "en-US": "Select Teaching Staff Name",
        ar: "اختيار اسم المعلم",
      },
    },
  ],

  button: { ar: "إضافة المادة", "en-US": "Add Course" },

  url_get: URL_GET_TEACHER_IDS,
  url_add: URL_UPDATE_SUBJECT,
  view_type: VIEW_SUBJECT_TYPE,
};
