using ReimbursementDataAccessLayer.Models;
using ReimbursementShared.SharedDTO;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReimbursementDataAccessLayer.DAL
{
    public class EmployeeDALFunctions
    {
        private ApplicationDbContext _context;

        public EmployeeDALFunctions()
        {
            _context = new ApplicationDbContext();
        }

        public void SaveEmployeeData(EmployeeDataDTO em)
        {
            List<EmployeeData> emp = new List<EmployeeData>()
            {
                new EmployeeData{FullName=em.FullName,
                PanNumber=em.PanNumber,
                BankName=em.BankName,
                AccountNymber=em.AccountNymber,
                Password=em.Password,
                Email=em.Email }
            };

            emp.ForEach(s => _context.EmployeeDatas.AddOrUpdate(p => p.ID, s));
            _context.SaveChanges();
            

            
        }
    }
}
