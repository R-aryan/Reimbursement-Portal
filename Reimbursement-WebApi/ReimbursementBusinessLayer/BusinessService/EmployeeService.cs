using ReimbursementDataAccessLayer.DAL;
using ReimbursementShared.SharedDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReimbursementBusinessLayer.BusinessService
{
    public class EmployeeService
    {
        public void SaveEmployeeData(EmployeeDataDTO em)
        {
            var dal = new EmployeeDALFunctions();
            dal.SaveEmployeeData(em);
        }
    }
}
