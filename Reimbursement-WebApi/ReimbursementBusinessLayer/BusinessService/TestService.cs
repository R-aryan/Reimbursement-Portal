using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ReimbursementShared.SharedDTO;
using ReimbursementDataAccessLayer.DAL;

namespace ReimbursementBusinessLayer.BusinessService
{
    public class TestService
    {
        public IEnumerable<TestModelDTO> GetData()
        {
            var dal = new DALFunctions();

            IEnumerable<TestModelDTO> S = dal.GetAllData();

            return S;
        }
    }
}
