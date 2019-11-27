using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ReimbursementDataAccessLayer.Models;
using ReimbursementShared.SharedDTO;

namespace ReimbursementDataAccessLayer.DAL
{
    public class DALFunctions
    {
        private ApplicationDbContext _context;

        public DALFunctions()
        {
            _context = new ApplicationDbContext();
        }

        public IEnumerable<TestModelDTO> GetAllData()
        {
            List<TestModel> res = _context.TestModels.ToList();
            List<TestModelDTO> tests=new List<TestModelDTO>();
            
            foreach(var a in res)
            {
                tests.Add(new TestModelDTO
                {
                    ID=a.Id,
                    Name=a.Name
                });
            }

            return tests;
        }
        
    }
}
