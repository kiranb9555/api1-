module.exports = student => {
  const students = student.model(
    "people",
    student.Schema(
      {
    Date_of_birth: String,
    State_of_domicile: String,
    nationality: String,
    Scholarship_category: String,
    Name_of_student: String,
    Mobile_number: Number,
    Email_id: String,
    Bank_account_details: String,
    Identification_details: String,
      },
      { timestamps: true }
    )
  );

  return students;
};