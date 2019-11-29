using ReimbursementDataAccessLayer.DAL;
using ReimbursementShared.SharedDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReimbursementBusinessLayer.BusinessService
{
    public class AdminService
    {
        public  AdminServiceDAL resdal;
        public AdminService()
        {
            resdal = new AdminServiceDAL();
        }

        public List<ReimbursementDataDTO> GetPendingReimbursementDataService()
        {
            return resdal.GetPendingReimbursementData();
        }

        public ReimbursementDataDTO SaveDeclinedClaims(int id, ReimbursementDataDTO value)
        {
            return resdal.SaveAllDeclinedClaims(id, value);
        }

        public List<ReimbursementDataDTO> GetAllDeclinedClaims(string param)
        {
            return resdal.GetAllDeclinedClaims(param);
        }

        public ReimbursementDataDTO SaveApprovedClaims(int id, ReimbursementDataDTO value)
        {
            return resdal.SaveAllApprovedClaims(id, value);
        }
    }
}
