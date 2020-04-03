using StudentManagementWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
//using StudentManagementWebApp.Models;

namespace StudentManagementWebApp.Controllers
{
    public class StudentController : ApiController
    {
        private StudentManagementDbEntities _db;
        public StudentController()
        {
            _db = new StudentManagementDbEntities();
        }
        public IEnumerable<Student> GetStudent()
        {
            return _db.Students.ToList();
        }
        
        [HttpPost]
        public IHttpActionResult PostStudentDetail(Student data)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                using (var database = new StudentManagementDbEntities())
                {
                    var insert = database.spInsertStudentInfo
                        (data.StudentName, data.StudentMobileNo, data.StudentEmailId, data.StudentCource, data.StudentFees);
                    database.SaveChanges();
                }

            }
            catch (Exception)
            {
                throw;
            }
            return Ok(data);
        }

        [HttpPut]
        public IHttpActionResult UpdateStudentDetail(Student student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                Student stud = new Student();
                
                using (var database = new StudentManagementDbEntities())
                {
                        var update = database.spUpdatStudentInfo(student.StudentId,student.StudentName, student.StudentMobileNo, student.StudentEmailId, student.StudentCource, student.StudentFees);
                        database.SaveChanges();
                                       
                }
              }
            catch (Exception)
            {
                throw;
            }
            return Ok(student);
        }
        [HttpDelete]
        public IHttpActionResult DeleteStudent(int id)
        {
            Student student = _db.Students.Find(id);
            if (student == null)
            {
                return NotFound();
            }

            _db.Students.Remove(student);
            _db.SaveChanges();

            return Ok(student);
        }



    }
}
