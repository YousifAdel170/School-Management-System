import {
  URL_ADD_STUDENT,
  URL_ADD_SUBJECT,
  URL_ADD_TEACHER,
  URL_GET_TEACHER_IDS,
  VIEW_STUDENT_TYPE,
  VIEW_SUBJECT_TYPE,
  VIEW_TEACHER_TYPE,
} from "./config";

export const studentFormConfig = {
  heading: { ar: "إضافة طالب", "en-US": "Add Student" },

  FormLabel: { ar: "إضافة طالب جديد", "en-US": "Add A New Student" },

  inputs: [
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

  button: { ar: "إضافة طالب", "en-US": "Add Student" },

  url_add: URL_ADD_STUDENT,
  view_type: VIEW_STUDENT_TYPE,
};

export const teacherFormConfig = {
  heading: { ar: "إضافة معلم", "en-US": "Add Teacher" },
  FormLabel: { ar: "إضافة معلم جديد", "en-US": "Add A New Teacher" },

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

  button: { ar: "إضافة معلم", "en-US": "Add Teacher" },

  url_add: URL_ADD_TEACHER,
  view_type: VIEW_TEACHER_TYPE,
};

export const subjectsFormConfig = {
  heading: { ar: "إضافة مادة", "en-US": "Add Subject" },
  FormLabel: { ar: "إضافة مادة جديدة", "en-US": "Add A New Subject" },

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
  url_add: URL_ADD_SUBJECT,
  view_type: VIEW_SUBJECT_TYPE,
};
